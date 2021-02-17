import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Grid, Box } from "@material-ui/core";
import 'fontsource-roboto';
import MyCarousel from "./MyCarousel";
import Content from "./Content";

function App() {
  return (
    <>    
<Grid container direction="column" justify="space-between" alignItems="stretch" spacing={3}>
      <Grid item>
        <Box>
          <MyCarousel />
        </Box>
      </Grid>

      <Grid item>
        <Box> 
          <Content/>
        </Box>
    </Grid>
 </Grid>
</>
  );}

export default App;


