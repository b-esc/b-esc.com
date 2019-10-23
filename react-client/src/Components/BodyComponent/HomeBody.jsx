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

class HomeBody extends Component{
  render (){
      return(
        <Fade left>
        <Segment
          id="bodySegment"
          textAlign="center"
          style={{ minHeight: 700, padding: "0em 0em",paddingTop:"1em"}}
          vertical
        >
          <Grid className="border_1px particlesFg">
          <div id="particlesBg">
              <Particles />
          </div>
            <Grid.Column width={6}>
            About
            <br></br>
            <div className="bodyText">
            aboutme et al
            </div>
            </Grid.Column>
            <Grid.Column width={3}>
            Filler
            </Grid.Column>
            <Grid.Column width={5}>
            Contact
            <br></br>
            <ul className="contactText">
              <li>
              resume <Icon name="file text"/>
              </li>
              <li>
              github <Icon name="github alternate" />
              </li>
              <li>
              facebook <Icon name="facebook f"/>
              </li>
              <li>
              twitter <Icon name="twitter"/>
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
