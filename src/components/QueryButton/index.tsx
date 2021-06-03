import React from 'react';
import { View } from 'react-native';

import { QueryText, BtnContainer } from './styles';

interface Props {
  text: string;
}

export function QueryButton ({ text }: Props) {
  return (
    <View>
      <BtnContainer activeOpacity={0.6}>
        <QueryText>{text}</QueryText>
      </BtnContainer>
    </View>

  );
}
