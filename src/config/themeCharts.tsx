type ThemeColors = {
  textColor: string;
  primaryColor: string;
  backgroundColor: string;
};

export const themeCharts = ({
  textColor,
  primaryColor,
  backgroundColor
}: ThemeColors) => {
  return {
    // background: '#ffffff',
    // textColor: '#333333',
    fontSize: 11,
    axis: {
      domain: {
        line: {
          stroke: textColor,
          strokeWidth: 1
        }
      },
      legend: {
        text: {
          fontSize: 12,
          fill: primaryColor
        }
      },
      ticks: {
        line: {
          stroke: textColor,
          strokeWidth: 1
        },
        text: {
          fontSize: 11,
          fill: textColor
        }
      }
    },
    grid: {
      line: {
        stroke: textColor,
        strokeWidth: 1
      }
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: textColor
        }
      },
      text: {
        fontSize: 11,
        fill: textColor
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: textColor
        }
      }
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: textColor,
        outlineWidth: 2,
        outlineColor: backgroundColor,
        outlineOpacity: 1
      },
      link: {
        stroke: textColor,
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: backgroundColor,
        outlineOpacity: 1
      },
      outline: {
        stroke: textColor,
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: backgroundColor,
        outlineOpacity: 1
      },
      symbol: {
        fill: textColor,
        outlineWidth: 2,
        outlineColor: backgroundColor,
        outlineOpacity: 1
      }
    },
    tooltip: {
      container: {
        background: backgroundColor,
        color: textColor,
        fontSize: 12
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {}
    }
  };
};
