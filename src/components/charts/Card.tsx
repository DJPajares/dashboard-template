import { Box, Typography } from '@mui/material';

type CardProps = {
  title: string;
  value: string;
  backgroundColor: string;
  isMobile?: boolean;
};

const Card = ({ title, value, backgroundColor, isMobile }: CardProps) => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        backgroundColor,
        py: 4
      }}
    >
      <Typography variant="subtitle1" textAlign="center">
        {title}
      </Typography>

      <Typography variant={isMobile ? 'h3' : 'h2'} textAlign="center">
        {value}
      </Typography>
    </Box>
  );
};

export default Card;
