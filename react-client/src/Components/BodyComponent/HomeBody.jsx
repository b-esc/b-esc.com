import React, { Component } from 'react';
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const particlesjsConfig = {
  "particles": {
    "number": {
      "value": 104,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#6e576d"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#6e576d"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#625763",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

const AboutText = props => (
    <div className="bodyText">
    <ul>
    <li>
    Hey, I'm Ben.
    </li>
    <li>
    Thanks for visiting my personal site.
    </li>
    <li>
    I'm a senior at Iowa State University studying Computer Science and Bioinformatics.
    </li>
    <li>
    I founded the Linux Club and the Programming Interview Club during my time here.
    </li>
    <li>
    Come June 2020, I'll be working as a Software Engineer at Facebook.
    </li>
    <li>
    I'm interested in Linux, Software Engineering, and Biology,
    often complementing one another on account of similar tooling.
    </li>
    </ul>
    </div>
  );


class HomeBody extends Component{
  render (){
      return(
        <Fade left>
        <Segment
          id="bodySegment"
          textAlign="center"
          style={{ minHeight: 1000, padding: "0em 0em",paddingTop:"1em"}}
          height={window.outerHeight}
          vertical
        >
          <Grid className="particlesFg">
          <div id="particlesBg">
              <Particles params={particlesjsConfig} height={window.outerHeight}/>
          </div>
            <Grid.Column width={7} style={{paddingTop:"1em"}}>
            <div className="bodySegmentTitle">
            About
            </div>
            <br></br>
            <AboutText/>
            </Grid.Column>
            <Grid.Column width={1}>

            </Grid.Column>
            <Grid.Column width={7} style={{paddingTop:"1em"}}>
            <div className="bodySegmentTitle">
            Connect
            </div>
            <br></br>
            <ul className="contactText">
              <li>
              resume <Icon name="file text"/>
              </li>
              <li>
              <a href="https://github.com/b-esc">github</a> <Icon name="github alternate" />
              </li>
              <li>
              <a href="https://www.facebook.com/debianprincess">facebook</a> <Icon name="facebook f"/>
              </li>
              <li>
              <a href="https://twitter.com/debianprincess"> twitter </a> <Icon name="twitter"/>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/besc0/">linkedIn</a> <Icon name="linkedin alternate"/>
              </li>
            </ul>
            </Grid.Column>
          </Grid>
          </Segment>
        </Fade>
    )
  }
}

export default HomeBody;
