
export enum Section {
  Home = 'home',
  About = 'about',
  Solutions = 'solutions',
  GameSystem = 'game-system',
  // Technology = 'technology',
  Contact = 'contact'
}

export type Language = 'en' | 'ar';

export interface GamePillar {
  title: string;
  description: string;
  icon: string;
}

export interface ComponentItem {
  name: string;
  description: string;
  image: string;
}

export interface ScenarioResponse {
  scenario: string;
  wisdomSource: string;
  learningOutcome: string;
  challenge: string;
}
