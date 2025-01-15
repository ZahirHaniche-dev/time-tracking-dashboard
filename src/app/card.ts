export interface Timeframe {
  current: number;
  previous: number;
}

export interface Card {
  id: number;
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
}

