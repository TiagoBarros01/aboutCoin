/* eslint-disable global-require */
import React from 'react';
import {
  StatusBar, Text, View,
} from 'react-native';

import { QueryButton } from '../components/QueryButton';
import {
  QuotaContainer,
  Wrapper,
  CurrentQuotaText,
  QuotaText,
  HistoricGraphic,
  FilterContainer,
  QuotationWrapper,
  CardLeft,
  CardRight,
  BitCoinImage,
  CardLeftContent,
  CurrentDayQuotation,
  PriceText,
} from '../styles/screens/Home';

export default function Home() {
  return (
    <Wrapper>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <QuotaContainer>
        <CurrentQuotaText>$ 54423.355</CurrentQuotaText>
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
      <QuotationWrapper>
        <CardLeft>
          <CardLeftContent>
            <BitCoinImage
              source={require('../img/coinLogo.jpg')}
            />
            <CurrentDayQuotation>07/05/2021</CurrentDayQuotation>
          </CardLeftContent>
        </CardLeft>
        <CardRight>
          <PriceText>$ 53331.355</PriceText>
        </CardRight>
      </QuotationWrapper>
      {/* <ScrollView /> */}
    </Wrapper>
  );
}
