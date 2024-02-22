export interface Exchange {
    exchangeId: number;
    originalCoin: string;
    finalCoin: string;
    originalAmount: number;
    finalAmount: number;
    date: string;
  }
  
  
  
  export interface ExchangeCreate {
    userId: number;
    originalCoin: string;
    finalCoin: string;
    originalAmount: number;
    finalAmount: number;
  }