import React, { Component } from 'react';
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';
import particlesjsConfig from './ParticlesConfig'
import Timeline from 'react-timeline-semantic-ui';
import Popup from 'reactjs-popup';
import ProjectBlock from './ProjectBlock'

import {
  Button,
  Card,
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

var titles = ["Ads Format Optimization","Handwriter","Handwriter Webapp","Cynonymous","NavLogger", "b-esc.com"]
var dates = ["Summer 2019","Fall 2018","Spring 2019","Spring 2018","Summer 2018","Fall 2019"]
var descs = ["Machine Learning, Ranking",
"Statistical Modeling, Algorithms",
"Web implementation of R Handwriter Package",
"4chan Clone",
"Infrastructure improvement Suite, Devops",
"Personal site, Nodejs + Reactjs"]
var contents = ["Python, SQL, Facebook Ads",
"R, Python, Statistical Software",
"R, Nodejs, Expressjs, MongoDB",
"Javascript, SQL, Nodejs",
"Javascript, C#, Nodejs, Bootstrap",
"Javascript, ReactJs, Nodejs"]

var pblocks = []

for(var i = 0; i < titles.length; i++){
  var pblock = (<div><ProjectBlock title={titles[i]} content={contents[i]} date={dates[i]} header={titles[i]} desc={descs[i]}/></div>);
  pblocks.push(pblock);
}


class ProjectsBody extends Component{


  render(){
    return(
      <div className="projectsWrapper">
      <Grid verticalAlign="middle" centered columns={3} divided >
        <Grid.Row centered columns={3}>
        <Grid.Column centered style={{textAlign: "center"}}>
        {pblocks[0]}
        </Grid.Column>
        <Grid.Column>
        {pblocks[1]}
        </Grid.Column>
        <Grid.Column>
        {pblocks[2]}
        </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={3}>
        <Grid.Column>
        {pblocks[3]}
        </Grid.Column>
        <Grid.Column>
        {pblocks[4]}
        </Grid.Column>
        <Grid.Column>
        {pblocks[5]}
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default ProjectsBody;
