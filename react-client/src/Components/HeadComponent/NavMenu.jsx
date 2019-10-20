import React, {Component} from 'react';
import {Input, Menu, Segment} from 'semantic-ui-react';

class NavMenuPoint extends Component{
  state = {activeItem: 'home'}

  handleItemClick = (e, {name}) => this.setState({activeItem:name})

  render(){
    const { activeItem } = this.state

    return(
      <div>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem==='home'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='timeline'
              active={activeItem === "timeline"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        </div>
    )
  }
}

export default NavMenuPoint
