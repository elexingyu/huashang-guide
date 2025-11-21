import React from 'react';
import { InfoGrade } from '../types';

interface IntelligenceBadgeProps {
  grade: InfoGrade;
  text?: string;
}

export const IntelligenceBadge: React.FC<IntelligenceBadgeProps> = ({ grade, text }) => {
  let bgColor = 'bg-gray-100';
  let textColor = 'text-gray-600';
  let label = '普通情报';

  switch (grade) {
    case InfoGrade.A:
      bgColor = 'bg-green-100';
      textColor = 'text-green-700';
      label = 'A级情报：多源验证极高可信';
      break;
    case InfoGrade.B:
      bgColor = 'bg-blue-100';
      textColor = 'text-blue-700';
      label = 'B级情报：来源可靠';
      break;
    case InfoGrade.C:
      bgColor = 'bg-yellow-100';
      textColor = 'text-yellow-700';
      label = 'C级情报：单一来源/需谨慎';
      break;
    case InfoGrade.Risk:
      bgColor = 'bg-red-100';
      textColor = 'text-red-700';
      label = '⚠️ 高风险预警';
      break;
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor} mb-2`}>
      {text || label}
    </span>
  );
};