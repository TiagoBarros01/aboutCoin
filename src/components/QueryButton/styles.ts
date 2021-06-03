import styled from 'styled-components/native';

export const BtnContainer = styled.TouchableOpacity`
  width: 50px;
  height: 30px;

  background: ${(props) => props.theme.colors.red};

  align-items: center;
  justify-content: center;

  border-radius: 50px;
`;

export const QueryText = styled.Text`
  font-weight: bold;
  font-size: 14px;

  color: ${(props) => props.theme.colors.text}
`;
