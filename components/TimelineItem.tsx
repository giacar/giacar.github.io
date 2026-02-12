import React from 'react';
import { Briefcase, GraduationCap, MapPin, Award } from 'lucide-react';
import { TimelineItemData } from '../types';

interface Props {
  data: TimelineItemData;
  isLast?: boolean;
}

const TimelineItem: React.FC<Props> = ({ data, isLast }) => {
  let Icon = Briefcase;
  let colorClass = "";

  // Determine Icon and Color style based on type
  switch (data.iconType) {
    case 'work':
      Icon = Briefcase;
      colorClass = 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400';
      break;
    case 'education':
      Icon = GraduationCap;
      colorClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400';
      break;
    case 'certification':
      Icon = Award;
      colorClass = 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400';
      break;
  }

  return (
    <div className="flex gap-4 sm:gap-6 group">
      {/* Icon Column */}
      <div className="flex flex-col items-center">
        <div className={`
          flex items-center justify-center w-10 h-10 rounded-full border-2 
          ${colorClass}
          z-10
          shrink-0
        `}>
          <Icon size={18} />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 my-2 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors" />
        )}
      </div>

      {/* Content Column */}
      <div className="flex-1 pb-10">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                {data.title}
              </h3>
              <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mt-1">
                {data.organization}
              </p>
            </div>
            <span className="mt-2 sm:mt-0 px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 whitespace-nowrap self-start">
              {data.date}
            </span>
          </div>

          {data.location && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <MapPin size={14} className="mr-1" />
              {data.location}
            </div>
          )}

          {data.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {data.description}
            </p>
          )}

          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {data.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;