import React from 'react';
import { QuizQuestion } from '../types/pharmacognosy';
import { Award, Clock, CheckCircle, XCircle, RotateCcw, BookOpen, AlertCircle } from 'lucide-react';

interface ResultsViewProps {
  scorePercent: number;
  correctCount: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  questions: QuizQuestion[];
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  onRetake: () => void;
  onGoToFlashcard: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  scorePercent,
  correctCount,
  totalQuestions,
  timeSpentSeconds,
  questions,
  userAnswers,
  onRetake,
  onGoToFlashcard
}) => {
  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSec = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSec.toString().padStart(2, '0')}`;
  };

  const wrongQuestions = questions.filter(q => userAnswers[q.id] !== q.correctAnswer);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Result Hero Header */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            Báo cáo kết quả sát hạch thực hành dược liệu
          </span>

          <div className="font-serif-display text-5xl sm:text-6xl font-bold text-white tabular-nums">
            {scorePercent}%
          </div>

          <p className="text-stone-300 text-sm max-w-md mx-auto">
            {scorePercent >= 80 
              ? 'Xuất sắc! Bạn nắm rất vững kiến thức thực hành dược liệu và định tính hóa học.' 
              : scorePercent >= 60 
              ? 'Khá tốt! Bạn đã đạt yêu cầu chuẩn đầu ra môn học. Hãy xem lại các câu sai để tối ưu điểm số.' 
              : 'Cần ôn luyện thêm! Hãy sử dụng chế độ Flashcard và Sổ tay kiểm nghiệm để củng cố kiến thức.'}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto pt-4 text-xs font-mono-code tabular-nums">
            <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700">
              <div className="text-stone-400">Số câu đúng</div>
              <div className="text-lg font-bold text-emerald-400 mt-0.5">{correctCount}/{totalQuestions}</div>
            </div>
            <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700">
              <div className="text-stone-400">Số câu sai</div>
              <div className="text-lg font-bold text-rose-400 mt-0.5">{totalQuestions - correctCount}</div>
            </div>
            <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700">
              <div className="text-stone-400">Thời gian làm bài</div>
              <div className="text-lg font-bold text-stone-200 mt-0.5">{formatTime(timeSpentSeconds)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onRetake}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold rounded-xl transition-colors shadow-xs"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm lại đề thi này
        </button>

        <button
          onClick={onGoToFlashcard}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 text-xs font-semibold rounded-xl transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
          Chuyển sang ôn tập Flashcard
        </button>
      </div>

      {/* Error Analysis & Explanations */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          <span>Phân tích chi tiết câu trả lời ({wrongQuestions.length} câu cần lưu ý)</span>
        </div>

        {wrongQuestions.length === 0 ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-emerald-900">
            🎉 Bạn đã trả lời đúng tất cả các câu hỏi! Thành tích tuyệt đối.
          </div>
        ) : (
          <div className="space-y-4">
            {wrongQuestions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const userOpt = q.options.find(o => o.key === userAns);
              const correctOpt = q.options.find(o => o.key === q.correctAnswer);

              return (
                <div 
                  key={q.id}
                  className="p-5 bg-white rounded-xl border border-stone-200 shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold text-stone-500 font-mono-code">
                      Câu #{q.id} · {q.topic}
                    </span>
                    <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                      Chưa chính xác
                    </span>
                  </div>

                  <p className="text-sm font-medium text-stone-900 leading-snug">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg text-rose-900">
                      <span className="font-semibold block text-rose-700">Lựa chọn của bạn:</span>
                      <span>{userAns ? `${userAns}. ${userOpt?.text}` : 'Chưa chọn đáp án'}</span>
                    </div>

                    <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-emerald-900">
                      <span className="font-semibold block text-emerald-700">Đáp án chính xác:</span>
                      <span>{q.correctAnswer}. {correctOpt?.text}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-700">
                    <strong className="text-stone-900">Giải thích chuyên môn: </strong>
                    <span>{q.explanation}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
