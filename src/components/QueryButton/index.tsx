import React from 'react';
import { View } from 'react-native';

import { QueryText, BtnContainer } from './styles';

interface Props {
  text: string;
  onPress: () => void;
}

export function QueryButton ({ text, onPress }: Props) {
  return (
    <View>
      <BtnContainer onPress={onPress} activeOpacity={0.6}>
        <QueryText>{text}</QueryText>
      </BtnContainer>
    </View>
  );
}
