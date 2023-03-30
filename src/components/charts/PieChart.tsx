import { ResponsiveLine } from '@nivo/line';
import { mockPieData } from '@/data/mockData';
import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from '@mui/system';
import { ResponsivePie } from '@nivo/pie';
import { useMediaQuery } from '@mui/material';

const PieChart = () => {
  const theme = useTheme();
  const colors = theme.palette;
  const width = useMediaQuery('width: 600px');

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
    <ResponsivePie
      data={mockPieData}
      theme={themeNivo}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]]
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.text.primary}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]]
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'ruby'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'c'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'go'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'python'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'scala'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'lisp'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'elixir'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'javascript'
          },
          id: 'lines'
        }
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: colors.text.primary,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: colors.text.primary
              }
            }
          ]
        }
      ]}
    />
  );
};

export default PieChart;
