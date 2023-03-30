import { ResponsiveLine } from '@nivo/line';
import { mockBarData } from '@/data/mockData';
import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from '@mui/system';

const BarChart = () => {
  const theme = useTheme();
  const colors = theme.palette;

  const themeNivo = {
    // background: '#ffffff',
    // textColor: '#333333',
    fontSize: 11,
    axis: {
      domain: {
        line: {
          stroke: colors.text.primary,
          strokeWidth: 1
        }
      },
      legend: {
        text: {
          fontSize: 12,
          fill: colors.primary.main
        }
      },
      ticks: {
        line: {
          stroke: colors.text.primary,
          strokeWidth: 1
        },
        text: {
          fontSize: 11,
          fill: colors.text.primary
        }
      }
    },
    grid: {
      line: {
        stroke: colors.text.primary,
        strokeWidth: 1
      }
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: colors.text.primary
        }
      },
      text: {
        fontSize: 11,
        fill: colors.text.primary
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: colors.text.primary
        }
      }
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: colors.text.primary,
        outlineWidth: 2,
        outlineColor: colors.background.default,
        outlineOpacity: 1
      },
      link: {
        stroke: colors.text.primary,
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: colors.background.default,
        outlineOpacity: 1
      },
      outline: {
        stroke: colors.text.primary,
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: colors.background.default,
        outlineOpacity: 1
      },
      symbol: {
        fill: colors.text.primary,
        outlineWidth: 2,
        outlineColor: colors.background.default,
        outlineOpacity: 1
      }
    },
    tooltip: {
      container: {
        background: colors.background.default,
        color: colors.text.primary,
        fontSize: 12
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {}
    }
  };

  return (
    <ResponsiveBar
      data={mockBarData}
      theme={themeNivo}
      groupMode="grouped"
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      // valueScale={{ type: 'linear' }}
      // indexScale={{ type: 'band', round: true }}
      // defs={[
      //   {
      //     id: 'dots',
      //     type: 'patternDots',
      //     background: 'inherit',
      //     color: '#38bcb2',
      //     size: 4,
      //     padding: 1,
      //     stagger: true
      //   },
      //   {
      //     id: 'lines',
      //     type: 'patternLines',
      //     background: 'inherit',
      //     color: '#eed312',
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10
      //   }
      // ]}
      // fill={[
      //   {
      //     match: {
      //       id: 'fries'
      //     },
      //     id: 'dots'
      //   },
      //   {
      //     match: {
      //       id: 'sandwich'
      //     },
      //     id: 'lines'
      //   }
      // ]}
      // axisTop={null}
      // axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      // labelTextColor={{
      //   from: 'color',
      //   modifiers: [['darker', 1.6]]
      // }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
      }}
    />
  );
};

export default BarChart;
