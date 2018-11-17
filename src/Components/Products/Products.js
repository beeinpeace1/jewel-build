import React from "react";
import PropTypes from "prop-types";
import { Link, Route, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Logo from "./../../assets/images/landing/logo.png";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product";
import ProductDesc from "./ProductDesc";
import "./Products.css";
import BG from "./../../assets/images/page3_bg.jpg";
import LogoGRD from "./../../assets/images/gold_ring_daimond.png";
import LogoBangle from "./../../assets/images/products/bangle.png";
import LogoBracelet from "./../../assets/images/products/braclet.png";

let ProductData = [
  { img: LogoGRD },
  { img: LogoBangle },
  { img: LogoBracelet }
];

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: "1px 50px",
    height: "100vh"
  },
  tabLabel: {
    color: "#444",
    fontWeight: "bold",
    fontFamily: "Arimo, sans-serif"
  },
  search: {
    position: "relative",
    backgroundColor: "#444",
    marginLeft: 0,
    padding: "5px",
    color: "white",
    width: "80%",
    marginBottom: "5px",
    float: "right"
  },
  ind: {
    backgroundColor: "black",
    height: "3px"
  },
  bar: {
    backgroundColor: "transparent"
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "80%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  container: {
    width: "100%",
    margin: "10px auto",
    background: "transparent"
  },
  hun: {
    width: "100%"
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value }, () => {
      this.props.history.push("/products");
    });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        className={classes.root + " products-holder"}
        style={{
          backgroundImage: `url(${BG})`
        }}
      >
        <Grid container spacing={8}>
          <Grid container xs={12} md={2} alignItems="center" justify="center">
            <Grid item>
              <div class="logo-holder">
                <Link to="/products">
                  <img src={Logo} alt="ss" width={"80px"} />
                </Link>
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} md={10}>
            <Grid item xs={12}>
              <div className={classes.search + " search-bar"}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <AppBar
                position="static"
                color="primary"
                classes={{
                  colorPrimary: classes.bar
                }}
                style={{
                  borderBottom: "4px solid black",
                  marginBottom: "10px",
                  width: "100%"
                }}
              >
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  fullWidth
                  scrollable
                  classes={{
                    indicator: classes.ind
                  }}
                  style={{
                    width: "100%"
                  }}
                >
                  <Tab
                    label={<span className={classes.tabLabel}>Rings</span>}
                  />
                  {/* <Tab
                    label={<span className={classes.tabLabel}>Ear Rings</span>}
                  /> */}
                  <Tab
                    label={<span className={classes.tabLabel}>Bangles</span>}
                  />
                  {/* <Tab
                    label={<span className={classes.tabLabel}>Pendants</span>}
                  /> */}
                  <Tab
                    label={<span className={classes.tabLabel}>Bracelets</span>}
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
        </Grid>
        <Route
          path="/products"
          exact
          render={() => {
            return (
              <Grid container className={classes.container} spacing={16}>
                <Grid item xs={12} className={classes.hun}>
                  <Grid
                    container
                    className={classes.container}
                    justify="left"
                    spacing={Number(8)}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
                      <Grid key={value} item xs={6} md={3}>
                        {this.state.value === 0 && (
                          <Link to={`/products/${value}`}>
                            <Product pdt={ProductData[this.state.value]} />
                          </Link>
                        )}
                        {this.state.value > 0 && (
                          <Product pdt={ProductData[this.state.value]} />
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            );
          }}
        />

        {[0, 1, 2, 3, 4, 5, 6, 7].map(value => {
          return (
            <Route
              path={`/products/${value}`}
              render={() => {
                return <ProductDesc val={value} logo={Logo} />;
              }}
            />
          );
        })}
        <div class="footer">
          <div className="footer-left" />
          <div className="footer-right" />
        </div>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withRouter(FullWidthTabs)
);
