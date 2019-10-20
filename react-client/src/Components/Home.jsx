import React, { Component } from 'react';
import HomeHead from './HeadComponent/HomeHead';
import PropTypes from "prop-types";

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
          <Segment
            id="headSegment"
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "0em 0em"}}
            vertical
          >
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
    </Visibility>
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
