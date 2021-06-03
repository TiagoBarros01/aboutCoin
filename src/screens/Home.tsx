import React from 'react';
import { StatusBar } from 'react-native';

import {
  QuotaContainer,
  Wrapper,
  CurrentQuotaText,
  QuotaText,
} from '../styles/screens/Home';

export default function Home() {
  return (
    <Wrapper>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <QuotaContainer>
        <CurrentQuotaText>💲 54423.355</CurrentQuotaText>
        <QuotaText>Last quotation </QuotaText>
      </QuotaContainer>
    </Wrapper>
  );
}
