import React from 'react';
import { Leaf, Award, Flame, BookOpen, RotateCcw } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  score: number;
  streak: number;
  learnedCount: number;
  totalPlants: number;
  onResetProgress: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  score,
  streak,
  learnedCount,
  totalPlants,
  onResetProgress
}) => {
  return (
    <header className="sticky top-0 z-50 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-sm backdrop-blur-md bg-stone-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#home"
          onClick={(e) => { e.preventDefault(); setCurrentTab('home'); }}
          className="flex items-center gap-2.5 text-stone-100 hover:text-emerald-400 transition-colors shrink-0"
        >
          <Leaf className="w-5 h-5 text-emerald-400" />
          <span className="font-serif-display text-xl font-bold tracking-tight">Dược Liệu Study</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setCurrentTab('home')}
            className={`transition-colors pb-1 border-b-2 ${
              currentTab === 'home'
                ? 'border-emerald-400 text-emerald-400 font-semibold'
                : 'border-transparent text-stone-300 hover:text-stone-100 hover:border-stone-500'
            }`}
          >
            Cơ sở dược liệu
          </button>
          <button
            onClick={() => setCurrentTab('flashcard')}
            className={`transition-colors pb-1 border-b-2 ${
              currentTab === 'flashcard'
                ? 'border-emerald-400 text-emerald-400 font-semibold'
                : 'border-transparent text-stone-300 hover:text-stone-100 hover:border-stone-500'
            }`}
          >
            Flashcard
          </button>
          <button
            onClick={() => setCurrentTab('fill')}
            className={`transition-colors pb-1 border-b-2 ${
              currentTab === 'fill'
                ? 'border-emerald-400 text-emerald-400 font-semibold'
                : 'border-transparent text-stone-300 hover:text-stone-100 hover:border-stone-500'
            }`}
          >
            Điền khuyết
          </button>
          <button
            onClick={() => setCurrentTab('quiz')}
            className={`transition-colors pb-1 border-b-2 ${
              currentTab === 'quiz'
                ? 'border-emerald-400 text-emerald-400 font-semibold'
                : 'border-transparent text-stone-300 hover:text-stone-100 hover:border-stone-500'
            }`}
          >
            Thi trắc nghiệm
          </button>
          <button
            onClick={() => setCurrentTab('guide')}
            className={`transition-colors pb-1 border-b-2 ${
              currentTab === 'guide'
                ? 'border-emerald-400 text-emerald-400 font-semibold'
                : 'border-transparent text-stone-300 hover:text-stone-100 hover:border-stone-500'
            }`}
          >
            Sổ tay kiểm nghiệm
          </button>
        </nav>

        {/* Zone 3: Subtle tabular metrics & functional action */}
        <div className="flex items-center gap-4 text-xs shrink-0">
          <div className="hidden sm:flex items-center gap-3 text-stone-300">
            <span className="flex items-center gap-1 font-mono-code tabular-nums" title="Tổng điểm tích lũy">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{score} điểm</span>
            </span>
            <span className="text-stone-600" aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono-code tabular-nums" title="Chuỗi ngày học liên tục">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>{streak} ngày</span>
            </span>
            <span className="text-stone-600" aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono-code tabular-nums" title="Số lượng cây thuốc đã học thuộc">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>{learnedCount}/{totalPlants}</span>
            </span>
          </div>

          <button
            onClick={onResetProgress}
            title="Đặt lại dữ liệu học tập"
            className="p-1.5 text-stone-400 hover:text-stone-200 transition-colors rounded hover:bg-stone-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile navigation row */}
      <div className="md:hidden flex items-center justify-around py-2 border-t border-stone-800 text-xs px-2 bg-stone-900/90 overflow-x-auto">
        <button
          onClick={() => setCurrentTab('home')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'home' ? 'bg-emerald-950 text-emerald-400' : 'text-stone-300'}`}
        >
          Dược liệu
        </button>
        <button
          onClick={() => setCurrentTab('flashcard')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'flashcard' ? 'bg-emerald-950 text-emerald-400' : 'text-stone-300'}`}
        >
          Flashcard
        </button>
        <button
          onClick={() => setCurrentTab('fill')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'fill' ? 'bg-emerald-950 text-emerald-400' : 'text-stone-300'}`}
        >
          Điền khuyết
        </button>
        <button
          onClick={() => setCurrentTab('quiz')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'quiz' ? 'bg-emerald-950 text-emerald-400' : 'text-stone-300'}`}
        >
          Trắc nghiệm
        </button>
        <button
          onClick={() => setCurrentTab('guide')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'guide' ? 'bg-emerald-950 text-emerald-400' : 'text-stone-300'}`}
        >
          Sổ tay
        </button>
      </div>
    </header>
  );
};
