export interface Timeframe {
  current: number;
  previous: number;
}

export interface Card {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
}
