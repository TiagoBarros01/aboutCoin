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
  color: #eee;
`;

export const QuotaText = styled.Text`
  font-size: 18px;
  color: #eee;
`;

export const HistoricGraphic = styled.View`
  width: 90%;
  height: 220px;

  background: ${(props) => props.theme.colors.scndBackground};

  border-radius: 15px;

  margin-top: 20px;
`;
