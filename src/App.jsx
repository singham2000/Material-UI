import Navbar from "./components/Navbar";
import Grid from '@mui/material/Grid'
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={2} xs={2}>
          <Feed />
        </Grid>
        <Grid item sm={2} sx={{ display: { xs: "none", sm: "block" } }}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
