import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box
        component='main'
        sx={{
          minHeight: 'calc(100vh - 104px)',
          paddingTop: '104px',
          '@media (max-width: 640px)': {
            minHeight: 'calc(100vh - 90px)',
            paddingTop: '90px',
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
