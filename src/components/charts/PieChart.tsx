import { useTheme } from '@mui/system';
import { ResponsivePie } from '@nivo/pie';
import { Box, Typography } from '@mui/material';
import { themeCharts } from '@/config/themeCharts';

type PieChartProps = {
  data: unknown[];
  title: string;
  isMobile?: boolean;
};

const PieChart = ({ data, title, isMobile = false }: PieChartProps) => {
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
        <ResponsivePie
          data={data}
          theme={themeCharts({
            textColor: colors.text.primary,
            primaryColor: colors.primary.main,
            backgroundColor: colors.background.default
          })}
          motionConfig="wobbly"
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          innerRadius={0.4} // add to make donut
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
          arcLabelsTextColor={colors.text.secondary}
          colors={{ scheme: 'nivo' }}
          // legends={[
          //   {
          //     anchor: 'top',
          //     // direction: 'row',
          //     direction: 'column',
          //     justify: false,
          //     // translateX: 0,
          //     // translateY: 56,
          //     translateX: 200,
          //     translateY: 30,
          //     itemsSpacing: 5,
          //     itemWidth: 80,
          //     itemHeight: 18,
          //     itemTextColor: colors.text.primary,
          //     itemDirection: 'left-to-right',
          //     itemOpacity: 1,
          //     symbolSize: 12,
          //     symbolShape: 'circle',
          //     effects: [
          //       {
          //         on: 'hover',
          //         style: {
          //           itemTextColor: colors.text.primary
          //         }
          //       }
          //     ]
          //   }
          // ]}
        />
      </Box>
    </Box>
  );
};

export default PieChart;
