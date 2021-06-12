import React, { createContext, useMemo, useState } from 'react';

import api from '../services/api';

interface QuotationContextData {
  getQuotationData: (daysQuantity: number) => void;
  quotationList: any;
}

interface Props {
  children: React.ReactNode;
}

const QuotationContext = createContext({} as QuotationContextData);

function QuotationContextProvider({ children }: Props) {
  const [quotationList, setQuotationList] = useState<object[]>([{}]);

  const addZero = (number: number) => (number <= 9 ? `0${number}` : number);

  async function getQuotationData(daysQuantity: number) {
    const date = new Date();

    const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

    date.setDate(date.getDate() - daysQuantity);

    const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;

    const { data } = await api.get(`/close.json?start=${startDate}&end=${endDate}`);
    setQuotationList(Object.keys(data.bpi).map((key) => ({
      key: Math.random(),
      date: key.split('-').reverse().join('/'),
      value: data.bpi[key],
    })).reverse());

    console.log(quotationList);
  }

  const memoizeValue = useMemo(() => {
    const value: QuotationContextData = {
      getQuotationData,
      quotationList,
    };
    return value;
  }, [getQuotationData, quotationList]);

  return (
    <QuotationContext.Provider value={memoizeValue}>
      {children}
    </QuotationContext.Provider>
  );
}

export { QuotationContext, QuotationContextProvider };
