import { Typography } from '@mui/material';
import { useTheme } from '@mui/system';

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        style={{ textTransform: 'uppercase' }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        color={colors.primary.main}
      >
        {subtitle}
      </Typography>
    </>
  );
};

export default Header;
