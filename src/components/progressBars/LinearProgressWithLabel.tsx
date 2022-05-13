import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

const LinearProgressWithLabel =
  function LinearProgressWithLabel(): JSX.Element {
    return (
      <VictoryChart
        domainPadding={0}
        domain={{ x: [0.73, 6.27] }}
        style={{ parent: { border: '#f2f4f6' } }}
      >
        <VictoryBar
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          barRatio={0.8}
          data={[
            { x: 1, y: 65, fill: '#6BCB77' },
            { x: 2, y: 35, fill: '#4D96FF' },
            { x: 3, y: 45, fill: '#F0CA33' },
            { x: 4, y: 75, fill: '#FF6B6B' },
            { x: 5, y: 50, fill: '#9772FB' },
            { x: 6, y: 40, fill: '#B0B8C1' },
          ]}
          cornerRadius={4}
          style={{
            data: {
              fill: ({ datum }) => datum.fill,
            },
          }}
          labels={({ datum }) => `${Math.round(datum.y)}%`}
        />
        <VictoryAxis
          crossAxis={false}
          tickValues={[
            '언어와 기초',
            '기초과학',
            '인문사회',
            '전공',
            '기타필수',
            '기타',
          ]}
          tickFormat={(t: any) => `${t}`}
          style={{
            tickLabels: { fontSize: 12 },
            ticks: { color: '#f2f4f6' },
          }}
        />
      </VictoryChart>
    );
  };

export default LinearProgressWithLabel;
