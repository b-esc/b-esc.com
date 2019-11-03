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
          <Particles params={particlesjsConfig} height={4000}/>
          </div>
          <div style={{paddingTop:"1em"}}>
          <Timeline
            direction="left"
            icon="users"
            title="Another club"
            time="September 2019"
            description="Founded the Programming Interview Club at Iowa State"
            color="purple"
            tags={['school','fun']}
            lineHeight={17}
          />
          <Timeline
            direction="right"
            icon="facebook f"
            title="Got a job"
            time="September 2019"
            description="Accepted a position as a Software Engineer at Facebook"
            color="blue"
            tags={['work','python']}
            lineHeight={0}
          />
          <Timeline
            direction="left"
            icon="pencil alternate"
            title="Senior Year"
            time="August 2019"
            description="Began my fourth year at Iowa State."
            color="red"
            tags={['school']}
            lineHeight={0}
          />
          <Timeline
            direction="right"
            icon="facebook f"
            title="the book"
            time="May 2019"
            description="Began SWE internship at Facebook. Machine Learning / Ads"
            color="blue"
            tags={['work','python','sql']}
            lineHeight={0}
          />
          <Timeline
            direction="left"
            icon="trophy"
            title="COM S Featured Student"
            time="April 2019"
            description="Feature article published to 'Atanasoff Today'"
            color="yellow"
            tags={['school']}
            lineHeight={0}
          />
          <Timeline
            direction="right"
            icon="trophy"
            title="Student Employee of the Year Nomination"
            time="April 2019"
            description="Selected as 1 of 3 students of distinction for research contributions"
            color="yellow"
            tags={['research','handwriting']}
            lineHeight={0}
          />
          <Timeline
            direction="left"
            icon="trophy"
            title="LAS Featured Student"
            time="April 2019"
            description="Selected to have my academic path shared with new students during orientation"
            color="yellow"
            tags={['school']}
            lineHeight={0}
          />
          <Timeline
            direction="right"
            icon="trophy"
            title="Linux Club Award"
            time="February 2019"
            description="'Newcomer of the Year Award' received from the College of Engineering"
            color="yellow"
            tags={['school', 'fun']}
            lineHeight={0}
          />
          <Timeline
            direction="left"
            icon="users"
            title="Linux Club"
            time="September 2018"
            description="Founded the Linux Club at Iowa State"
            color="green"
            tags={['school', 'fun']}
            lineHeight={0}
          />
          <Timeline
            direction="right"
            icon="pencil alternate"
            title="Junior Year"
            time="August 2018"
            description="Began third year at Iowa State"
            color="red"
            tags={['school']}
            lineHeight={0}
          />
          <Timeline
            direction="left"
            icon="user"
            title="Research Position"
            time="August 2018"
            description="Center for Statistics and Applications in Forensic Evidence"
            color="blue"
            tags={['research','handwriting','javascript','R','node']}
            lineHeight={0}
          />
          <Timeline
            direction="right"
            icon="add"
            title="First Internship"
            time="June 2018"
            description="Began SWE internship at OptumRx/UnitedHealth Group"
            color="orange"
            tags={['work','javascript','sql','node']}
            lineHeight={0}
          />
          <Timeline
            direction="left"
            icon="pencil alternate"
            title="Sophomore Year"
            time="August 2017"
            description="Began second year at Iowa State"
            color="red"
            tags={['school']}
            lineHeight={0}
          />
          <Timeline
            direction="right"
            icon="pencil alternate"
            title="Freshman Year"
            time="August 2016"
            description="Began first year at Iowa State."
            color="red"
            tags={['school']}
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
