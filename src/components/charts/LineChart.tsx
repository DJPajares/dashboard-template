import { themeCharts } from '@/config/themeCharts';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { ResponsiveLine, Serie } from '@nivo/line';

type LineChartProps = {
  data: Serie[];
  title: string;
  isMobile?: boolean;
};

const LineChart = ({ data, title, isMobile = false }: LineChartProps) => {
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
        <ResponsiveLine
          data={data}
          theme={themeCharts({
            textColor: colors.text.primary,
            primaryColor: colors.primary.main,
            backgroundColor: colors.background.default
          })}
          motionConfig="wobbly"
          enableGridX={false}
          enableGridY={false}
          enableArea={true}
          // enablePoints={false}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            // orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            // orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={5}
          // pointColor={{ theme: 'background' }}
          pointColor={{ from: 'color', modifiers: [] }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </Box>
    </Box>
  );
};

export default LineChart;
