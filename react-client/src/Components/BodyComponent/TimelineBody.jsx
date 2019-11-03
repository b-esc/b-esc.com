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
          style={{padding: "0em 0em",paddingTop:"1em"}}
          height={window.outerHeight}
          vertical
        >
          <div className="particlesFg" style={{fontSize:"2em"}}>
          <div id="particlesBg">
          <Particles params={particlesjsConfig} height={3000}/>
          </div>
          <div style={{paddingTop:"1em"}}>
          <Timeline
            direction="left"
            icon="user"
            title="Title"
            time="Time"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={10}
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
          <Timeline
            direction="left"
            icon="user"
            title="Title"
            time="Time"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={0}
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
          <Timeline
            direction="left"
            icon="user"
            title="Title"
            time="Time"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={0}
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
          <Timeline
            direction="left"
            icon="user"
            title="Title"
            time="Time"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={0}
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
          <Timeline
            direction="left"
            icon="user"
            title="Title"
            time="August 2017"
            description="Began seond year at Iowa State."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={0}
          />
          <Timeline
            direction="right"
            icon="user"
            title="Began my first year at Iowa State"
            time="August 2016"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={0}
          />
          </div>
          </div>
          </Segment>
        </Fade>
    )
  }
}

export default TimelineBody;
