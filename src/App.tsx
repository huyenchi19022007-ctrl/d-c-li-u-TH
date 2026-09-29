import React, { useState, useEffect } from 'react';
import { plantsDB, herbCategories } from './data/plantsData';
import { fillQuestionsDB } from './data/fillQuestionsData';
import { quizQuestionsDB } from './data/quizQuestionsData';
import { Plant, PlantCategory } from './types/pharmacognosy';

import { Header } from './components/Header';
import { PlantCard } from './components/PlantCard';
import { PlantModal } from './components/PlantModal';
import { FlashcardMode } from './components/FlashcardMode';
import { FillInBlankMode } from './components/FillInBlankMode';
import { QuizMode } from './components/QuizMode';
import { HerbariumGuide } from './components/HerbariumGuide';

import { Search, Sparkles, BookOpen, Layers, Award, CheckCircle } from 'lucide-react';
import heroImg from './assets/images/hero_herbal_pharmacognosy_1790684316602.jpg';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'flashcard' | 'fill' | 'quiz' | 'guide'>('home');
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalPlant, setActiveModalPlant] = useState<Plant | null>(null);

  // Persistence in localStorage
  const [score, setScore] = useState<number>(() => {
    const saved = localStorage.getItem('dl_score');
    return saved ? parseInt(saved, 10) : 120;
  });

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem('dl_streak');
    return saved ? parseInt(saved, 10) : 3;
  });

  const [learnedPlantIds, setLearnedPlantIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('dl_learned_plants');
    return saved ? JSON.parse(saved) : [1, 2, 4];
  });

  useEffect(() => {
    localStorage.setItem('dl_score', score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem('dl_streak', streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('dl_learned_plants', JSON.stringify(learnedPlantIds));
  }, [learnedPlantIds]);

  // Handlers
  const handleToggleLearned = (plantId: number) => {
    setLearnedPlantIds(prev => {
      if (prev.includes(plantId)) {
        return prev.filter(id => id !== plantId);
      } else {
        setScore(s => s + 20);
        return [...prev, plantId];
      }
    });
  };

  const handleAddScore = (points: number) => {
    setScore(s => s + points);
  };

  const handleCompleteQuiz = (percent: number, pointsEarned: number) => {
    setScore(s => s + pointsEarned);
  };

  const handleResetProgress = () => {
    if (window.confirm('Bạn có chắc muốn đặt lại tiến trình học tập không?')) {
      setLearnedPlantIds([]);
      setScore(0);
      setStreak(1);
      localStorage.removeItem('dl_learned_plants');
      localStorage.removeItem('dl_score');
      localStorage.removeItem('dl_streak');
    }
  };

  // Filter plants
  const filteredPlants = plantsDB.filter(plant => {
    const matchesCategory = selectedCategory === 'all' || plant.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      plant.name.toLowerCase().includes(query) ||
      plant.scientificName.toLowerCase().includes(query) ||
      plant.family.toLowerCase().includes(query) ||
      plant.chemicalConstituents.some(c => c.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header adhering strictly to Top Bar Contract */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => setCurrentTab(tab as any)}
        score={score}
        streak={streak}
        learnedCount={learnedPlantIds.length}
        totalPlants={plantsDB.length}
        onResetProgress={handleResetProgress}
      />

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* TAB 1: HOME / CƠ SỞ DƯỢC LIỆU */}
        {currentTab === 'home' && (
          <div className="space-y-8">
            {/* Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-lg text-white">
              <div className="absolute inset-0">
                <img 
                  src={heroImg} 
                  alt="Thực hành Dược liệu" 
                  className="w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
              </div>

              <div className="relative z-10 p-6 sm:p-10 max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hệ Thống Thực Hành Dược Khoa Chuẩn Hóa
                </div>
                <h1 className="font-serif-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Tra Cứu & Luyện Thi Dược Liệu Thực Hành
                </h1>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Ngân hàng dữ liệu thực vật học, họ thực vật, bộ phận dùng, phản ứng định tính hóa học và trắc nghiệm thực hành dành cho sinh viên Dược.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setCurrentTab('flashcard')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Bắt đầu học Flashcard
                  </button>
                  <button
                    onClick={() => setCurrentTab('quiz')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-stone-100 rounded-lg text-xs font-semibold backdrop-blur-xs transition-colors"
                  >
                    <Award className="w-4 h-4" />
                    Làm bài thi trắc nghiệm
                  </button>
                </div>
              </div>
            </div>

            {/* Search and Category Filter */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm tên cây thuốc, tên khoa học, họ, hoạt chất..."
                    className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="text-xs text-stone-500 flex items-center gap-2">
                  <span>Hiển thị: <strong className="text-stone-900 font-mono-code">{filteredPlants.length}</strong> dược liệu</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 font-medium">Đã thuộc {learnedPlantIds.length}/{plantsDB.length}</span>
                </div>
              </div>

              {/* Category Segmented Controls */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
                {herbCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as PlantCategory)}
                    className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {cat.name} ({cat.id === 'all' ? plantsDB.length : plantsDB.filter(p => p.category === cat.id).length})
                  </button>
                ))}
              </div>
            </div>

            {/* Plants Grid */}
            {filteredPlants.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-xl border border-stone-200 text-stone-500 space-y-2">
                <p className="text-sm font-medium">Không tìm thấy dược liệu phù hợp với từ khóa.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="text-xs text-emerald-700 hover:underline font-semibold"
                >
                  Xóa bộ lọc tìm kiếm
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredPlants.map(plant => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    onSelect={(p) => setActiveModalPlant(p)}
                    isLearned={learnedPlantIds.includes(plant.id)}
                    onToggleLearned={handleToggleLearned}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: FLASHCARD MODE */}
        {currentTab === 'flashcard' && (
          <FlashcardMode
            plants={plantsDB}
            onPlantLearned={handleToggleLearned}
            learnedPlantIds={learnedPlantIds}
          />
        )}

        {/* TAB 3: FILL IN THE BLANK */}
        {currentTab === 'fill' && (
          <FillInBlankMode
            questions={fillQuestionsDB}
            onAddScore={handleAddScore}
          />
        )}

        {/* TAB 4: QUIZ EXAM MODE */}
        {currentTab === 'quiz' && (
          <QuizMode
            questions={quizQuestionsDB}
            onCompleteQuiz={handleCompleteQuiz}
            onGoToFlashcard={() => setCurrentTab('flashcard')}
          />
        )}

        {/* TAB 5: HERBARIUM GUIDE / SỔ TAY */}
        {currentTab === 'guide' && (
          <HerbariumGuide />
        )}
      </main>

      {/* Detail Modal for Selected Plant */}
      <PlantModal
        plant={activeModalPlant}
        isOpen={activeModalPlant !== null}
        onClose={() => setActiveModalPlant(null)}
        isLearned={activeModalPlant ? learnedPlantIds.includes(activeModalPlant.id) : false}
        onToggleLearned={handleToggleLearned}
      />

      {/* Quiet, anti-slop footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-6 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif-display font-semibold text-stone-800">Dược Liệu Study</span>
            <span aria-hidden="true">·</span>
            <span>Hệ thống học tập thông minh & sát hạch thực hành Dược Khoa</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400 text-[11px]">
            <span>Chuẩn Dược điển Việt Nam V</span>
            <span aria-hidden="true">·</span>
            <span>Dược liệu 1 & 2</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
