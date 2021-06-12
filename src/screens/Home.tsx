/* eslint-disable global-require */
import React, { useContext, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';

import { HistoricGraphic } from '../components/HistoricGraphic';
import { QuotationContext } from '../contexts/QuotationContext';
import {
  QuotaContainer,
  Wrapper,
  CurrentQuotaText,
  QuotaText,
  QuotationWrapper,
  CardLeft,
  CardRight,
  BitCoinImage,
  CardLeftContent,
  CurrentDayQuotation,
  PriceText,
} from '../styles/screens/Home';

export default function Home() {
  const { getQuotationData, quotationList } = useContext(QuotationContext);

  useEffect(() => {
    getQuotationData(7);
  }, []);

  return (
    <Wrapper>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <QuotaContainer>
        <CurrentQuotaText>$ 54423.355</CurrentQuotaText>
        <QuotaText>Last quotation </QuotaText>
      </QuotaContainer>
      <HistoricGraphic />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={quotationList}
        keyExtractor={quotationList.key}
        renderItem={({ item }) => (
          <QuotationWrapper>
            <CardLeft>
              <CardLeftContent>
                <BitCoinImage source={require('../img/coinLogo.jpg')} />
                <CurrentDayQuotation>{item.date}</CurrentDayQuotation>
              </CardLeftContent>
            </CardLeft>
            <CardRight>
              <PriceText>
                $
                {' '}
                {item.value}
              </PriceText>
            </CardRight>
          </QuotationWrapper>
        )}
      />
    </Wrapper>
  );
}
