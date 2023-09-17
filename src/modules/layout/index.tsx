import Header from "../header";
import Footer from "../footer";
import { Box, Grid } from "@mui/material";

interface layoputProps {
  children: JSX.Element;
}

const Layout = (props: layoputProps) => {
  const { children } = props;
  return (
    <Box>
      <Header />
      <Grid container item style={{ minHeight: 'calc(100vh - 220px)' }}>
        {children}
      </Grid>
      <Footer />
    </Box>
  );
};

export default Layout;
