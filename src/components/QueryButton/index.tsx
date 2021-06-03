import React from 'react';
import { View } from 'react-native';

import { QueryText, BtnContainer } from './styles';

interface Props {
  children: React.ReactNode
}

export function QueryButton({ children }: Props) {
  return (
    <View>
      <BtnContainer>
        <QueryText>{children}</QueryText>
      </BtnContainer>
    </View>
  );
}
