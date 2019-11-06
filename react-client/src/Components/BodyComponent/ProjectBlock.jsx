import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
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

class ProjectBlock extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            alert: null
        };
    }

    showAlert() {
        const newAlert = () => (
            <SweetAlert title={this.props.title} onConfirm={() => this.hideAlert()}>
                {this.props.content}
            </SweetAlert>

        );
        this.setState({alert: newAlert()});
        console.log(this.state.alert);
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }


    render() {
        return (
          <div className="projectCard">
            <Card fluid onClick={() => this.showAlert()}
            style={{minWidth:"200px",margin:"0 auto",backgroundColor:"rgb(228, 221, 225, 0.75)"}}>
              <Card.Content>
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Meta>
                  <span className='date'>{this.props.date}</span>
                </Card.Meta>
                <Card.Description>
                  {this.props.desc}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  {this.props.techs}
                </a>
              </Card.Content>
            </Card>
            {this.state.alert}
          </div>
        )
    }
}

export default ProjectBlock;
