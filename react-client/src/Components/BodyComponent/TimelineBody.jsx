import React, { Component } from 'react';
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';
import particlesjsConfig from './ParticlesConfig'
import Timeline from 'react-timeline-semantic-ui';

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




class TimelineBody extends Component{
  render (){
      return(
        <Fade right>
        <Segment
          id="bodySegment"
          textAlign="center"
          style={{ minHeight: 1000, padding: "0em 0em",paddingTop:"1em"}}
          height={window.outerHeight}
          vertical
        >
          <div className="particlesFg">
          <div id="particlesBg">
          <Particles params={particlesjsConfig} height={window.outerHeight}/>
          </div>
          <Timeline
            direction="left"
            icon="user"
            title="Title"
            time="Time"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={4}
          />
          <Timeline
            direction="right"
            icon="user"
            title="Title"
            time="Time"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={0}
          />
          </div>
          </Segment>
        </Fade>
    )
  }
}

export default TimelineBody;
