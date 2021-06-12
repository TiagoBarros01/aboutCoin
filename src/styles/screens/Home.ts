import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;

  background: ${(props) => props.theme.colors.background};
  padding-top: ${Platform.OS === 'android' ? '40px' : 0};
`;

export const QuotaContainer = styled.View`
  width: 100%;
  height: auto;
  align-items: center;

  margin-top: 40px;
`;

export const CurrentQuotaText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: ${(props) => props.theme.colors.title};
`;

export const QuotaText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.red};
`;

export const QuotationWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  
  width: 90%;

  border-radius: 15px;

  flex-direction: row;
  align-items: center;

  padding-top: 15px;
  padding-bottom: 15px;
`;

export const CardLeft = styled.View`
  width: 40%;
  align-items: flex-start;

`;

export const CardLeftContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BitCoinImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CurrentDayQuotation = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};

  padding-left: 5px;
`;

export const CardRight = styled.View`
  width: 60%;
  align-items: flex-end;

`;

export const PriceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.title};

  padding-left: 5px;
`;
