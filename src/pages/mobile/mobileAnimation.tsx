import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Result from 'utils/api/result';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

const GraphDesc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > .text-graph-container {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.1em;
    text-align: center;
    font-weight: 400;
  }
`;

const MLinearProgressWithLabel =
  function MLinearProgressWithLabel(): JSX.Element {
    const [value, setValue] = useState<number>(80);
    const [gradVal, setGradVal] = useState<number>(0);
    const valueRef = useRef(0);

    // useEffect(() => {
    //   const loop = setInterval(() => {
    //     valueRef.current += 1;
    //     setGradVal(valueRef.current);
    //     if (valueRef.current === 80) clearInterval(loop);
    //   }, 12.4);
    // }, []);

    return (
      <GraphDesc>
        <VictoryChart
          domainPadding={0}
          domain={{ x: [0.73, 6.27] }}
          animate={{ duration: 1000, onLoad: { duration: 50 } }}
          style={{ parent: { border: '#f2f4f6' } }}
        >
          <VictoryBar
            barRatio={0.8}
            data={[
              {
                x: 1,
                y: value < 80 ? Math.round((value * 100) / 80) : 100,
                // result.getLanguageBasic.getTotalCredits
                fill: '#6BCB77',
              },
              {
                x: 2,
                y: value < 60 ? Math.round((value * 100) / 60) : 100,
                // result.getScience.getMinCredit
                fill: '#4D96FF',
              },
              {
                x: 3,
                y: value < 130 ? Math.round((value * 100) / 130) : 100,
                // result.getHumanities.getMinCredit
                fill: '#F0CA33',
              },
              {
                x: 4,
                y: value < 120 ? Math.round((value * 100) / 120) : 100,
                fill: '#FF6B6B',
              },
              {
                x: 5,
                y: value < 97 ? Math.round((value * 100) / 97) : 100,
                // result.getEtcMandatory.getMinCredit
                fill: '#9772FB',
              },
              {
                x: 6,
                y: value < 86 ? Math.round((value * 100) / 86) : 100,
                // result.getOtherClass.getMinCredit
                fill: '#B0B8C1',
              },
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
              tickLabels: { fontSize: 10 },
              ticks: { color: '#f2f4f6' },
            }}
          />
        </VictoryChart>
        <div className="text-graph-container">
          졸업까지 {100 - gradVal}% 남았습니다!
        </div>
      </GraphDesc>
    );
  };

export default MLinearProgressWithLabel;
