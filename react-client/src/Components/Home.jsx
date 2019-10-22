import React, { Component } from 'react';
import HomeHead from './HeadComponent/HomeHead';
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

class Home extends Component{

  state = {fixed: false, activeItem: 'home',}

  handleItemClick = (e, {name}) => this.setState({activeItem:name})
  veilFixedNav = () => this.setState({fixed: false});
  revealFixedNav = () => this.setState({fixed: true});

  render(){
    const { color } = 'teal';
    const { children } = this.props;
    const { fixed, activeItem } = this.state;


    return(
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.revealFixedNav}
          onBottomPassedReverse={this.veilFixedNav}
        >
        <Fade right>
          <Segment
            id="headSegment"
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "0em 0em"}}
            vertical
          >
          <div id="bgHead">
          </div>
          <Menu pointing
            id="navMenuPointing"
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            secondary={!fixed}
            size="large"
          >
              <Menu.Item
                name='home'
                active={activeItem==='home'}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
                <Menu.Item
                  name='timeline'
                  active={activeItem==='timeline'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='projects'
                  active={activeItem==='projects'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
          </Menu>
          <HomeHead/>
      </Segment>
      </Fade>
    </Visibility>
    <Fade left>
    <Segment
      id="bodySegment"
      textAlign="center"
      style={{ minHeight: 700, padding: "0em 0em",paddingTop:"1em"}}
      vertical
    >
      <Grid className="border_1px">
      <div id="particlesBg">
          <Particles />
      </div>
        <Grid.Column width={8}>
        About
        </Grid.Column>
        <Grid.Column width={2}>
        Filler
        </Grid.Column>
        <Grid.Column width={3}>
        Contact
        </Grid.Column>
      </Grid>
      </Segment>
    </Fade>
      {children}
    </Responsive>
    )
  }
}

Home.propTypes = {
  children : PropTypes.node,
  color: PropTypes.string,
}


export default Home;
