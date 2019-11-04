import React, { Component } from 'react';
import HomeHead from './HeadComponent/HomeHead';
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';
import HomeBody from './BodyComponent/HomeBody';
import TimelineBody from './BodyComponent/TimelineBody';
import particlesjsConfig from './BodyComponent/ParticlesConfig'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

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
      <Router>
        {/*<Visibility
          once={false}
          onBottomPassed={this.revealFixedNav}
          onBottomPassedReverse={this.veilFixedNav}
        >*/}
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
            inverted={true}
            secondary={!fixed}
            size="large"
          >
              <Menu.Item
                as={Link} to='/'
                name='home'
                active={activeItem==='home'}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
                <Menu.Item
                  as={Link} to='/timeline'
                  name='timeline'
                  active={activeItem==='timeline'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={Link} to='/projects'
                  name='projects'
                  active={activeItem==='projects'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
          </Menu>
          <HomeHead/>

      </Segment>
      </Fade>
    {/*</Visibility>*/}
    <Fade left>
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

    <Switch>
    <Route path="/" exact component={HomeBody}>
    {/*<HomeBody/>*/}
    </Route>
    <Route path="/timeline" exact component={TimelineBody}>
    </Route>
    <Route path="/projects">
    <a>test projects</a>
    </Route>
    {/* concern over route behavior w children*/}
      {children}
    </Switch>

    </div>
    </Segment>
  </Fade>
    </Router>
    </Responsive>
    )
  }
}

Home.propTypes = {
  children : PropTypes.node,
  color: PropTypes.string,
}


export default Home;
