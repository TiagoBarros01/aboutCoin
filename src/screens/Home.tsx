/* eslint-disable global-require */
import React, { useContext } from 'react';
import {
  StatusBar,
} from 'react-native';

import { QueryButton } from '../components/QueryButton';
import { QuotationContext } from '../contexts/QuotationContext';
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
  const { getQuotationData } = useContext(QuotationContext);

  return (
    <Wrapper>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <QuotaContainer>
        <CurrentQuotaText>$ 54423.355</CurrentQuotaText>
        <QuotaText>Last quotation </QuotaText>
      </QuotaContainer>
      <HistoricGraphic>
        <FilterContainer>
          <QueryButton onPress={() => getQuotationData(7)} text="7D" />
          <QueryButton onPress={() => getQuotationData(15)} text="15D" />
          <QueryButton onPress={() => getQuotationData(30)} text="1M" />
          <QueryButton onPress={() => getQuotationData(90)} text="3M" />
          <QueryButton onPress={() => getQuotationData(180)} text="6M" />
        </FilterContainer>
      </HistoricGraphic>
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
