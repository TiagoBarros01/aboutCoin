import React, { useContext } from 'react';

import { QuotationContext } from '../../contexts/QuotationContext';
import { QueryButton } from '../QueryButton';
import { Filter, Container } from './styles';

export function HistoricGraphic() {
  const { getQuotationData } = useContext(QuotationContext);

  return (
    <Container>
      <Filter>
        <QueryButton onPress={() => getQuotationData(7)} text="7D" />
        <QueryButton onPress={() => getQuotationData(15)} text="15D" />
        <QueryButton onPress={() => getQuotationData(30)} text="1M" />
        <QueryButton onPress={() => getQuotationData(90)} text="3M" />
        <QueryButton onPress={() => getQuotationData(180)} text="6M" />
      </Filter>
    </Container>
  );
}
