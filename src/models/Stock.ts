
  export interface Pagination {
      limit: number;
      offset: number;
      count: number;
      total: number;
  }

  export interface Datum {
      open: number;
      high: number;
      low: number;
      close: number;
      volume: number;
      adj_high?: any;
      adj_low?: any;
      adj_close: number;
      adj_open?: any;
      adj_volume?: any;
      split_factor: number;
      dividend: number;
      symbol: string;
      exchange: string;
      date: Date;
  }
  
  export default interface IStockList{
      pagination: Pagination;
      data: Datum[];
  }



