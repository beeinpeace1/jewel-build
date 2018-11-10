import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Diamond from "./../../assets/images/diamond.png";
import Emerald from "./../../assets/images/emerald.png";
import Ruby from "./../../assets/images/ruby.png";
import Sapphire from "./../../assets/images/blue_sapphire.png";

import RosegoldRing from "./../../assets/images/rose_gold_ring.png";
import WhitegoldRing from "./../../assets/images/white_gold_ring.png";
import YellowgoldRing from "./../../assets/images/yellow_gold_ring.png";

import RosegoldMetal from "./../../assets/images/rose_gold_metal.png";
import WhitegoldMetal from "./../../assets/images/white_gold_metal.png";
import YellowgoldMetal from "./../../assets/images/yellow_gold_metal.png";

class ProductDesc extends Component {
  constructor() {
    super();
    this.draw = this.draw.bind(this);
    this.handleGemChange = this.handleGemChange.bind(this);
    this.handleRingChange = this.handleRingChange.bind(this);
  }

  state = {
    ring: "",
    gem: ""
  };

  draw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    const image = new Image();
    image.src = this.state.ring;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, c.width, c.height);
      ctx.drawImage(this.state.gem, 48, 48, 70, 70);
    };
  }

  handleRingChange(event, src) {
    document.querySelector(".jewel-holder-border-ring").classList.remove("jewel-holder-border-ring");
    event.target.parentNode.classList.add("jewel-holder-border-ring");
    
    this.setState(
      {
        ring: src
      },
      () => {
        this.draw();
      }
    );
  }

  handleGemChange(event) {
    document.querySelector(".jewel-holder-border-gem").classList.remove("jewel-holder-border-gem");
    event.target.parentNode.classList.add("jewel-holder-border-gem");
    this.setState(
      {
        gem: event.target
      },
      () => {
        this.draw();
      }
    );
  }

  componentDidMount() {
    var c = document.getElementById("myCanvas");
    var gem = document.getElementById("diamond-gem");
    var ctx = c.getContext("2d");

    const image = new Image();
    image.src = YellowgoldRing;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, c.width, c.height);
      ctx.drawImage(gem, 48, 48, 70, 70);

      this.setState({
        gem: gem,
        ring: YellowgoldRing
      });
    };
  }

  render() {
    return (
      <div class="product-desc">
        <Grid container>
          <Grid item xs={12} sm={6} className="right-border">
            <div id="show-img">
              <canvas id="myCanvas" width="220" height="259" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <h4> Metals </h4>
                <hr />
                <Grid container spacing={32}>
                  <Grid item xs={3} md={2}>
                    <div class="jewel-holder jewel-holder-border-ring">
                      <img
                        src={YellowgoldMetal}
                        id="yellow-gold-metal"
                        class="metal-stone"
                        onClick={(event) => {
                          this.handleRingChange(event, YellowgoldRing);
                        }}
                      />
                      <label>Gold</label>
                    </div>
                  </Grid>
                  <Grid item xs={3} md={2}>
                  <div className="jewel-holder">
                    <img
                      src={WhitegoldMetal}
                      class="metal-stone"
                      onClick={(event) => {
                        this.handleRingChange(event, WhitegoldRing);
                      }}
                    />
                    <label>White Gold</label>
                    </div>
                  </Grid>
                  <Grid item xs={3} md={2}>
                  <div className="jewel-holder">
                    <img
                      src={RosegoldMetal}
                      class="metal-stone"
                      onClick={(event) => {
                        this.handleRingChange(event, RosegoldRing);
                      }}
                    />
                    <label>Rose Gold</label>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <h4> Gem Stones</h4>
                <hr />
                <Grid container spacing={32}>
                  <Grid item xs={3} md={2}>
                  <div className="jewel-holder jewel-holder-border-gem">
                    <img
                      src={Diamond}
                      class="metal-stone"
                      id="diamond-gem"
                      onClick={this.handleGemChange}
                    />
                    <label>Diamond</label>
                    </div>
                  </Grid>
                  <Grid item xs={3} md={2}>
                    <div className="jewel-holder">
                    <img
                      src={Ruby}
                      class="metal-stone"
                      onClick={this.handleGemChange}
                    />
                    <label>Ruby</label>
                    </div>
                  </Grid>
                  <Grid item xs={3} md={2}>
                    <div className="jewel-holder">
                    <img
                      src={Sapphire}
                      class="metal-stone"
                      onClick={this.handleGemChange}
                    />
                    <label>Blue Sapphire</label>
                    </div>
                  </Grid>
                  <Grid item xs={3} md={2}>
                    <div className="jewel-holder">
                    <img
                      src={Emerald}
                      class="metal-stone"
                      onClick={this.handleGemChange}
                    />
                    <label>Emerald</label>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default ProductDesc;
