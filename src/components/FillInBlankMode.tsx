import React, { useState } from 'react';
import { FillQuestion } from '../types/pharmacognosy';
import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Award } from 'lucide-react';

interface FillInBlankModeProps {
  questions: FillQuestion[];
  onAddScore: (points: number) => void;
}

export const FillInBlankMode: React.FC<FillInBlankModeProps> = ({
  questions,
  onAddScore
}) => {
  const [userInputs, setUserInputs] = useState<Record<number, string>>({});
  const [checkedResults, setCheckedResults] = useState<Record<number, boolean | null>>({});
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  // Normalize string for gentle comparison
  const normalizeStr = (str: string) => {
    return str
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const handleInputChange = (id: number, val: string) => {
    setUserInputs(prev => ({ ...prev, [id]: val }));
    // reset check state for this field if user types again
    if (checkedResults[id] !== undefined) {
      setCheckedResults(prev => ({ ...prev, [id]: null }));
    }
  };

  const toggleHint = (id: number) => {
    setShowHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checkAll = () => {
    let earned = 0;
    const newResults: Record<number, boolean> = {};

    questions.forEach(q => {
      const rawUserVal = userInputs[q.id] || '';
      const normalizedUser = normalizeStr(rawUserVal);
      
      const isCorrect = q.acceptableAnswers.some(ans => {
        return normalizeStr(ans) === normalizedUser;
      });

      newResults[q.id] = isCorrect;
      if (isCorrect) {
        earned += 10;
      }
    });

    setCheckedResults(newResults);
    setSubmitted(true);
    if (earned > 0) {
      onAddScore(earned);
    }
  };

  const resetAll = () => {
    setUserInputs({});
    setCheckedResults({});
    setShowHints({});
    setSubmitted(false);
  };

  const correctCount = Object.values(checkedResults).filter(val => val === true).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <h2 className="font-serif-display text-2xl font-bold text-stone-900">
            ✍️ Bài Tập Điền Khuyết Dược Khoa
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Gõ chính xác tên khoa học, họ thực vật hoặc hoạt chất chính vào chỗ trống dưới đây.
          </p>
        </div>

        {submitted && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-medium">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Kết quả: {correctCount} / {questions.length} câu đúng (+{correctCount * 10} điểm)</span>
          </div>
        )}
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        {questions.map((q, index) => {
          const isChecked = checkedResults[q.id] !== undefined && checkedResults[q.id] !== null;
          const isCorrect = checkedResults[q.id] === true;
          const isWrong = checkedResults[q.id] === false;

          return (
            <div 
              key={q.id}
              className={`p-5 rounded-xl border bg-white shadow-xs transition-all ${
                isChecked
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : 'border-stone-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-xs font-bold text-stone-400 font-mono-code">
                  Câu {index + 1} · {q.plantName}
                </span>

                <button
                  onClick={() => toggleHint(q.id)}
                  className="text-xs text-amber-700 hover:text-amber-800 inline-flex items-center gap-1 font-medium transition-colors"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  {showHints[q.id] ? 'Ẩn gợi ý' : 'Gợi ý'}
                </button>
              </div>

              {/* The fill-in text */}
              <div className="text-sm leading-loose text-stone-800">
                <span>{q.textBefore} </span>
                <span className="inline-block mx-1">
                  <input
                    type="text"
                    value={userInputs[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    placeholder="Nhập đáp án..."
                    disabled={submitted && isCorrect}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md border text-center min-w-[130px] sm:min-w-[160px] focus:outline-hidden focus:ring-2 transition-all ${
                      isChecked
                        ? isCorrect
                          ? 'border-emerald-500 bg-emerald-100 text-emerald-900 focus:ring-emerald-400'
                          : 'border-rose-500 bg-rose-100 text-rose-900 focus:ring-rose-400'
                        : 'border-stone-300 bg-stone-50 focus:border-stone-500 focus:bg-white focus:ring-stone-400'
                    }`}
                  />
                </span>
                <span>{q.textAfter}</span>
              </div>

              {/* Hint Box */}
              {showHints[q.id] && (
                <div className="mt-3 p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{q.hint}</span>
                </div>
              )}

              {/* Explanation on submission */}
              {isChecked && (
                <div className="mt-3 pt-3 border-t border-stone-200/80 flex items-start gap-2 text-xs">
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    {!isCorrect && (
                      <div className="font-semibold text-rose-800 mb-0.5">
                        Đáp án chuẩn: <span className="underline">{q.answer}</span>
                      </div>
                    )}
                    <p className="text-stone-600">{q.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
        <button
          onClick={resetAll}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-600" />
          Làm lại từ đầu
        </button>

        <button
          onClick={checkAll}
          className="px-6 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors"
        >
          Kiểm tra tất cả đáp án
        </button>
      </div>
    </div>
  );
};
