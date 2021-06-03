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
        <QueryButton>
          7D
        </QueryButton>
        <QueryButton>
          15D
        </QueryButton>
        <QueryButton>
          1M
        </QueryButton>
        <QueryButton>
          3M
        </QueryButton>
        <QueryButton>
          6M
        </QueryButton>
      </FilterContainer>
      {/* <ScrollView /> */}
    </Wrapper>
  );
}
