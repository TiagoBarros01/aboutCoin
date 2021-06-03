import React from 'react';
import {
  ScrollView, StatusBar,
} from 'react-native';

import { QueryButton } from '../components/QueryButton';
import {
  QuotaContainer,
  Wrapper,
  CurrentQuotaText,
  QuotaText,
  HistoricGraphic,
  FilterContainer,
} from '../styles/screens/Home';

export default function Home() {
  return (
    <Wrapper>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <QuotaContainer>
        <CurrentQuotaText>💲 54423.355</CurrentQuotaText>
        <QuotaText>Last quotation </QuotaText>
      </QuotaContainer>
      <HistoricGraphic />
      <FilterContainer>
        <QueryButton text="7D" />
        <QueryButton text="15D" />
        <QueryButton text="1M" />
        <QueryButton text="3M" />
        <QueryButton text="6M" />
      </FilterContainer>
      {/* <ScrollView /> */}
    </Wrapper>
  );
}
