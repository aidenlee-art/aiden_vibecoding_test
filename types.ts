export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  image: string;
  align?: 'left' | 'right';
  badge?: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}