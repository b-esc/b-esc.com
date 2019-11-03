import React, { Component } from 'react';
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';
import particlesjsConfig from './ParticlesConfig'
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
