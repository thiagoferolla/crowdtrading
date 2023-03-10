import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FundSlice = {
  funds: {
    code: string;
    icon: string;
    name: string;
    value: number;
    changePercentage: number;
    changeValue: number;
    chartData: {
      date: string;
      close: number;
    }[];
    stats: { title: string; value: string }[];
  }[];
};

const mockChartData = [
  {
    date: "2023-01-02",
    close: 107.4,
  },
  {
    date: "2023-01-03",
    close: 105.1,
  },
  {
    date: "2023-01-04",
    close: 106.74,
  },
  {
    date: "2023-01-05",
    close: 108.83,
  },
  {
    date: "2023-01-06",
    close: 110.43,
  },
  {
    date: "2023-01-09",
    close: 110.19,
  },
  {
    date: "2023-01-10",
    close: 112.05,
  },
  {
    date: "2023-01-11",
    close: 114.06,
  },
  {
    date: "2023-01-12",
    close: 113.36,
  },
  {
    date: "2023-01-13",
    close: 112.4,
  },
  {
    date: "2023-01-16",
    close: 110.53,
  },
  {
    date: "2023-01-17",
    close: 113,
  },
  {
    date: "2023-01-18",
    close: 113.47,
  },
  {
    date: "2023-01-19",
    close: 114.08,
  },
  {
    date: "2023-01-20",
    close: 113.48,
  },
  {
    date: "2023-01-23",
    close: 113.17,
  },
  {
    date: "2023-01-24",
    close: 114.59,
  },
  {
    date: "2023-01-25",
    close: 115.86,
  },
  {
    date: "2023-01-26",
    close: 115.73,
  },
  {
    date: "2023-01-27",
    close: 113.5,
  },
  {
    date: "2023-01-30",
    close: 113.83,
  },
  {
    date: "2023-01-31",
    close: 114.65,
  },
  {
    date: "2023-02-01",
    close: 113.32,
  },
  {
    date: "2023-02-02",
    close: 111.3,
  },
  {
    date: "2023-02-03",
    close: 109.64,
  },
];

const mockChartDataNegative = [
  {
    date: "2023-01-12",
    close: 2.72,
  },
  {
    date: "2023-01-13",
    close: 3.15,
  },
  {
    date: "2023-01-16",
    close: 1.94,
  },
  {
    date: "2023-01-17",
    close: 1.9,
  },
  {
    date: "2023-01-18",
    close: 1.74,
  },
  {
    date: "2023-01-19",
    close: 1,
  },
  {
    date: "2023-01-20",
    close: 0.71,
  },
  {
    date: "2023-01-23",
    close: 0.8,
  },
  {
    date: "2023-01-24",
    close: 0.8,
  },
  {
    date: "2023-01-25",
    close: 0.94,
  },
  {
    date: "2023-01-26",
    close: 1.03,
  },
  {
    date: "2023-01-27",
    close: 1.2,
  },
  {
    date: "2023-01-30",
    close: 1.45,
  },
  {
    date: "2023-01-31",
    close: 1.75,
  },
  {
    date: "2023-02-01",
    close: 2.09,
  },
  {
    date: "2023-02-02",
    close: 1.68,
  },
  {
    date: "2023-02-03",
    close: 1.63,
  },
];

const mockStats = [
  {
    title: "AUM",
    value: "$430.88m",
  },
  {
    title: "Issue Date",
    value: "18/04/2022",
  },
  {
    title: "Vintage Range",
    value: "2019-2022",
  },
  {
    title: "TER",
    value: "0.15%",
  },
  {
    title: "Price at Close",
    value: "$17.68",
  },
  {
    title: "Price at Open",
    value: "$17.74",
  },
];

const initialState: FundSlice = {
  funds: [
    {
      name: "Wind Fund",
      code: "WIND",
      icon: "wind",
      value: 1234.23,
      changePercentage: 31.82,
      changeValue: 123.23,
      chartData: mockChartData,
      stats: mockStats,
    },
    {
      name: "Solar Fund",
      code: "SOLL",
      icon: "solar",
      value: 986.61,
      changePercentage: -12.82,
      changeValue: -85.23,
      chartData: mockChartDataNegative,
      stats: mockStats,
    },
    {
      name: "Natural Fund",
      code: "NATU",
      icon: "natural",
      value: 1122.23,
      changePercentage: 21.82,
      changeValue: 123.23,
      chartData: mockChartData,
      stats: mockStats,
    },
  ],
};

export const fundsSlice = createSlice({
  name: "funds",
  initialState,
  reducers: {},
});

export default fundsSlice.reducer;
