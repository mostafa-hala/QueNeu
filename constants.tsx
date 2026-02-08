import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Users, 
  Cpu, 
  Puzzle, 
  Target, 
  Lightbulb, 
  Eye, 
  Fingerprint, 
  Globe 
} from 'lucide-react';

export const COLORS = {
  navy: '#0C1A3B',
  electricBlue: '#1BC5FF',
  gold: '#D4A048',
  cream: '#F4F3EC',
  sand: '#E5D8C0',
  desertRose: '#C69C98',
  black: '#0A0A0A'
};

export const PILLARS = [
  { title: "Physical Activity", description: "Movement-based tasks that ground the intellectual experience.", icon: <Globe className="w-6 h-6 text-[#D4A048]" /> },
  { title: "Curiosity & Guessing", description: "Engaging the mind's natural desire to uncover the unknown.", icon: <Eye className="w-6 h-6 text-[#D4A048]" /> },
  { title: "Mysterious", description: "Enigmatic scenarios that demand deep focus and intuition.", icon: <Fingerprint className="w-6 h-6 text-[#D4A048]" /> },
  // Fixed: Replaced non-existent PuzzlePiece with correct Puzzle icon from lucide-react
  { title: "Open Probabilities", description: "No single solution; encourage divergent thinking for every challenge.", icon: <Puzzle className="w-6 h-6 text-[#D4A048]" /> },
  { title: "Personalized", description: "Tailored to the player's level, goals, and learning style.", icon: <Target className="w-6 h-6 text-[#D4A048]" /> },
  { title: "Competition & Incentives", description: "Gamified reward structures to maintain momentum.", icon: <Zap className="w-6 h-6 text-[#D4A048]" /> },
  { title: "Learning Guide", description: "AI-driven mentorship that nudges rather than dictates.", icon: <Lightbulb className="w-6 h-6 text-[#D4A048]" /> },
  { title: "Tangible Parts", description: "3D-printed tokens and physical artifacts to bridge the digital gap.", icon: <Cpu className="w-6 h-6 text-[#D4A048]" /> },
  { title: "All Senses Used", description: "A multi-sensory journey from soundscapes to tactile elements.", icon: <Users className="w-6 h-6 text-[#D4A048]" /> },
  { title: "Immersive", description: "Full-environment storytelling that makes the player the protagonist.", icon: <ShieldCheck className="w-6 h-6 text-[#D4A048]" /> },
];

export const COMPONENTS = [
  { name: "Personalization", description: "Where the AI adapts the board to your unique professional profile." },
  { name: "AR Changing ", description: "Dynamic overlays that transform physical tokens into interactive stories." },
  { name: "Challenges ", description: "The core arena where real-world elder scenarios come to life." },
  { name: "3D Printed Tokens", description: "Custom-made physical tools representing specific units of wisdom." },
  { name: "Pointing System", description: "A multi-dimensional scoring metric that tracks wisdom acquisition." }
];