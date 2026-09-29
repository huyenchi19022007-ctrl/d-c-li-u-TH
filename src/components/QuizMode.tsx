import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types/pharmacognosy';
import { ResultsView } from './ResultsView';
import { Timer, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Send } from 'lucide-react';

interface QuizModeProps {
  questions: QuizQuestion[];
  onCompleteQuiz: (score: number, pointsEarned: number) => void;
  onGoToFlashcard: () => void;
}

export const QuizMode: React.FC<QuizModeProps> = ({
  questions,
  onCompleteQuiz,
  onGoToFlashcard
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [instantReview, setInstantReview] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: number, optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionKey
    }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    let correct = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });

    const percent = Math.round((correct / questions.length) * 100);
    const points = correct * 15;
    onCompleteQuiz(percent, points);
  };

  const handleRetake = () => {
    setUserAnswers({});
    setCurrentIdx(0);
    setTimeLeft(15 * 60);
    setTimeSpent(0);
    setIsSubmitted(false);
  };

  const currentQ = questions[currentIdx];
  const answeredCount = Object.keys(userAnswers).length;

  if (isSubmitted) {
    let correct = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    const percent = Math.round((correct / questions.length) * 100);

    return (
      <ResultsView
        scorePercent={percent}
        correctCount={correct}
        totalQuestions={questions.length}
        timeSpentSeconds={timeSpent}
        questions={questions}
        userAnswers={userAnswers}
        onRetake={handleRetake}
        onGoToFlashcard={onGoToFlashcard}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Top bar: Info & Countdown Timer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-xl border border-stone-200 shadow-xs">
        <div>
          <h2 className="font-serif-display text-xl font-bold text-stone-900">
            📝 Đề Thi Trắc Nghiệm Thực Hành Dược Liệu
          </h2>
          <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
            <span>Thời lượng: 15 phút</span>
            <span aria-hidden="true">·</span>
            <span>Tổng cộng: {questions.length} câu hỏi</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-emerald-700">Đã trả lời: {answeredCount}/{questions.length}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="hidden sm:flex items-center gap-2 text-xs text-stone-600 cursor-pointer">
            <input
              type="checkbox"
              checked={instantReview}
              onChange={(e) => setInstantReview(e.target.checked)}
              className="rounded text-emerald-600 focus:ring-emerald-500 border-stone-300"
            />
            <span>Hiện giải thích ngay</span>
          </label>

          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono-code text-sm font-bold tabular-nums ${
            timeLeft < 180 ? 'bg-rose-100 text-rose-800 animate-pulse' : 'bg-stone-100 text-stone-800'
          }`}>
            <Timer className="w-4 h-4 text-stone-600" />
            <span>{formatTimer(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Question Index Palette */}
      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
        <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
          Bảng chọn câu hỏi:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {questions.map((q, idx) => {
            const isAnswered = userAnswers[q.id] !== undefined;
            const isCurrent = idx === currentIdx;

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-mono-code font-semibold transition-all ${
                  isCurrent
                    ? 'bg-stone-900 text-white ring-2 ring-stone-900 ring-offset-1'
                    : isAnswered
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between text-xs text-stone-500">
          <span className="font-semibold text-emerald-800 uppercase tracking-wide">
            Câu {currentIdx + 1} / {questions.length} · {currentQ.topic}
          </span>
          {userAnswers[currentQ.id] && (
            <span className="text-emerald-700 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Đã ghi nhận lựa chọn
            </span>
          )}
        </div>

        <h3 className="font-serif-display text-lg sm:text-xl font-bold text-stone-900 leading-snug">
          {currentQ.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((opt) => {
            const isSelected = userAnswers[currentQ.id] === opt.key;
            const isCorrect = opt.key === currentQ.correctAnswer;
            
            let btnStyle = 'border-stone-200 bg-stone-50/50 hover:bg-stone-100 text-stone-800';
            if (isSelected) {
              btnStyle = 'border-stone-900 bg-stone-900 text-white shadow-xs';
            }
            if (instantReview && isSelected) {
              btnStyle = isCorrect 
                ? 'border-emerald-600 bg-emerald-700 text-white' 
                : 'border-rose-600 bg-rose-700 text-white';
            } else if (instantReview && isCorrect) {
              btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900';
            }

            return (
              <button
                key={opt.key}
                onClick={() => handleSelectOption(currentQ.id, opt.key)}
                className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3.5 ${btnStyle}`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'
                }`}>
                  {opt.key}
                </span>
                <span className="leading-relaxed">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Instant Review Feedback */}
        {instantReview && userAnswers[currentQ.id] && (
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1.5 animate-in fade-in">
            <div className="font-semibold text-stone-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-emerald-600" />
              Giải thích chi tiết:
            </div>
            <p className="text-stone-700 leading-relaxed">{currentQ.explanation}</p>
          </div>
        )}

        {/* Navigator Controls */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="inline-flex items-center gap-1 px-4 py-2 bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 rounded-lg text-xs font-semibold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Câu trước
          </button>

          <div className="flex items-center gap-2">
            {currentIdx < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIdx(prev => Math.min(questions.length - 1, prev + 1))}
                className="inline-flex items-center gap-1 px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Câu tiếp theo
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                className="inline-flex items-center gap-1.5 px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                Nộp bài & Chấm điểm
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button Floating Bar */}
      <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200">
        <div className="text-xs text-stone-600">
          Đã chọn: <strong className="text-stone-900">{answeredCount}</strong> / {questions.length} câu
        </div>
        <button
          onClick={handleSubmitQuiz}
          className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Send className="w-4 h-4" />
          Nộp bài thi ngay
        </button>
      </div>
    </div>
  );
};
