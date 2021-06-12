import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { QuotationContext } from '../../contexts/QuotationContext';
import { QueryButton } from '../QueryButton';
import { Filter, Container } from './styles';

export function HistoricGraphic() {
  const { getQuotationData, dataGraphic } = useContext(QuotationContext);

  return (
    <>
      <Container>
        <LineChart
          data={{
            datasets: [
              {
                data: dataGraphic,
              },
            ],
          }}
          width={Dimensions.get('window').width - 25} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yLabelsOffset={1}
          withVerticalLines={false}
          withVerticalLabels={false}
          chartConfig={{
            backgroundColor: '#111',
            backgroundGradientFrom: '#232323',
            backgroundGradientTo: '#3f3f3f',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: 1,
              strokeWidth: '1',
              stroke: '#f50d41',
            },
          }}
          bezier
          style={{
            borderRadius: 10,
          }}
        />
      </Container>
      <Filter>
        <QueryButton onPress={() => getQuotationData(7)} text="7D" />
        <QueryButton onPress={() => getQuotationData(15)} text="15D" />
        <QueryButton onPress={() => getQuotationData(30)} text="1M" />
        <QueryButton onPress={() => getQuotationData(90)} text="3M" />
        <QueryButton onPress={() => getQuotationData(180)} text="6M" />
      </Filter>
    </>
  );
}
