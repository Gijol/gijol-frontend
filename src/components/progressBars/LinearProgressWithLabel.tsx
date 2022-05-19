import React from 'react';
import Result from 'utils/api/result';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

interface Props {
  result: Result;
}

const LinearProgressWithLabel = function LinearProgressWithLabel({
  result,
}: Props): JSX.Element {
  const left =
    130 -
    result.getLanguageBasic.getMinCredit -
    result.getScience.getMinCredit -
    result.getHumanities.getMinCredit -
    result.getMajor.getMinCredit -
    result.getEtcMandatory.getMinCredit;
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
          {
            x: 1,
            y:
              result.getLanguageBasic.getTotalCredits <
              result.getLanguageBasic.getMinCredit
                ? Math.round(
                    (result.getLanguageBasic.getTotalCredits * 100) /
                      result.getLanguageBasic.getMinCredit,
                  )
                : 100,
            // result.getLanguageBasic.getTotalCredits
            fill: '#6BCB77',
          },
          {
            x: 2,
            y:
              result.getScience.getTotalCredits < result.getScience.getMinCredit
                ? Math.round(
                    (result.getScience.getTotalCredits * 100) /
                      result.getScience.getMinCredit,
                  )
                : 100,
            // result.getScience.getMinCredit
            fill: '#4D96FF',
          },
          {
            x: 3,
            y:
              result.getHumanities.getTotalCredits <
              result.getHumanities.getMinCredit
                ? Math.round(
                    (result.getHumanities.getTotalCredits * 100) /
                      result.getHumanities.getMinCredit,
                  )
                : 100,
            // result.getHumanities.getMinCredit
            fill: '#F0CA33',
          },
          {
            x: 4,
            y:
              result.getMajor.getTotalCredits < result.getMajor.getMinCredit
                ? Math.round(
                    (result.getMajor.getTotalCredits * 100) /
                      result.getMajor.getMinCredit,
                  )
                : 100,
            fill: '#FF6B6B',
          },
          {
            x: 5,
            y:
              result.getEtcMandatory.getTotalCredits <
              result.getEtcMandatory.getMinCredit
                ? Math.round(
                    (result.getEtcMandatory.getTotalCredits * 100) /
                      result.getEtcMandatory.getMinCredit,
                  )
                : 100,
            // result.getEtcMandatory.getMinCredit
            fill: '#9772FB',
          },
          {
            x: 6,
            y:
              result.getOtherClass.getTotalCredits <
              result.getOtherClass.getMinCredit
                ? Math.round(
                    (result.getOtherClass.getTotalCredits * 100) / left,
                  )
                : 100,
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
          tickLabels: { fontSize: 12 },
          ticks: { color: '#f2f4f6' },
        }}
      />
    </VictoryChart>
  );
};

export default LinearProgressWithLabel;
