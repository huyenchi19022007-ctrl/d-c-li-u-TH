import React, { useState } from 'react';
import { Plant } from '../types/pharmacognosy';
import { Check, BookOpen, Leaf } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
  onSelect: (plant: Plant) => void;
  isLearned: boolean;
  onToggleLearned: (plantId: number) => void;
}

export const PlantCard: React.FC<PlantCardProps> = ({
  plant,
  onSelect,
  isLearned,
  onToggleLearned
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group">
      {/* Visual Image container */}
      <div className="relative h-44 bg-stone-100 overflow-hidden">
        {!imgError ? (
          <img
            src={plant.image}
            alt={plant.name}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-emerald-900/10 text-emerald-800 p-4">
            <Leaf className="w-8 h-8 mb-1 text-emerald-700" />
            <span className="text-xs font-serif-display font-medium text-center">{plant.name}</span>
          </div>
        )}

        <div className="absolute top-3 left-3 bg-stone-900/75 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
          {plant.categoryName}
        </div>

        {isLearned && (
          <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-medium px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
            <Check className="w-3 h-3" />
            Đã thuộc
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: clean unboxed text */}
          <div className="text-xs text-stone-500 mb-1 flex items-center gap-1.5 flex-wrap">
            <span>{plant.family}</span>
            <span aria-hidden="true">·</span>
            <span>{plant.vietnameseFamily}</span>
          </div>

          <h3 className="font-serif-display text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
            {plant.name}
          </h3>

          <p className="text-xs italic text-stone-600 mb-2">
            {plant.scientificName}
          </p>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
            {plant.summary}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
          <button
            onClick={() => onSelect(plant)}
            className="inline-flex items-center gap-1 font-medium text-emerald-700 hover:text-emerald-900 transition-colors py-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Xem chi tiết & vi học
          </button>

          <button
            onClick={() => onToggleLearned(plant.id)}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              isLearned
                ? 'text-emerald-700 hover:bg-emerald-50'
                : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
            }`}
          >
            {isLearned ? 'Bỏ thuộc' : '+ Đã thuộc'}
          </button>
        </div>
      </div>
    </div>
  );
};
