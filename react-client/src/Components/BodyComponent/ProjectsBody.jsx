import React, { Component } from 'react';
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';
import particlesjsConfig from './ParticlesConfig'
import Timeline from 'react-timeline-semantic-ui';
import Popup from 'reactjs-popup';


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

const card_test = (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>)
class ProjectsBody extends Component{
  render(){
    <div style={{paddingTop:"1em"}}>
    <Grid columns={3} divided>
      <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  }
}

export default TimelineBody;
