import { BarDatum, ResponsiveBar } from '@nivo/bar';
import { useTheme } from '@mui/system';
import { themeCharts } from '@/config/themeCharts';
import { Box, Typography } from '@mui/material';

type BarChartProps = {
  data: BarDatum[];
  title: string;
  isMobile?: boolean;
};

const BarChart = ({ data, title, isMobile = false }: BarChartProps) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <Box
      sx={{
        borderRadius: 1,
        backgroundColor: colors.background.paper
      }}
    >
      <Box>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          pt={2}
          display="flex"
          justifyContent="center"
        >
          {title}
        </Typography>
      </Box>

      <Box height={250} mt={-2.5}>
        <ResponsiveBar
          data={data}
          theme={themeCharts({
            textColor: colors.text.primary,
            primaryColor: colors.primary.main,
            backgroundColor: colors.background.default
          })}
          motionConfig="wobbly"
          enableGridX={false}
          enableGridY={false}
          groupMode="grouped"
          keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
          indexBy="city"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'city',
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
          labelTextColor={colors.text.secondary}
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
          ariaLabel="bar-chart"
          barAriaLabel={function (e) {
            return e.id + ': ' + e.formattedValue + ' in city: ' + e.indexValue;
          }}
        />
      </Box>
    </Box>
  );
};

export default BarChart;
