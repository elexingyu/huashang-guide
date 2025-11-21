import React from 'react';

export enum InfoGrade {
  A = 'A', // Verified by multiple sources, high confidence
  B = 'B', // Reliable source, good confidence
  C = 'C', // Single source, caution needed
  Risk = 'RISK' // Specific warning
}

export interface GuideSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export interface TransportOption {
  origin: string;
  mode: string;
  duration: string;
  costEstimate: string;
  details: string[];
  recommendationLevel: 'High' | 'Medium' | 'Low';
}