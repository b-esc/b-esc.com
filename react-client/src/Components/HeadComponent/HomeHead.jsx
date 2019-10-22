import React, { Component } from 'react';
import PropTypes from "prop-types";
import ReactTextTransition, { presets } from "react-text-transition";
import GifSlideshow from "./GifSlideshow"
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



const name_texts = ["b-esc‎‎‎‎‎‎‎","ben_escobar","ben‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎"];

class HomeHead extends Component{
  state = {
    name_text_idx: 0,
    cur_name_text: name_texts[0],
  };

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        name_text_idx: this.state.name_text_idx + 1,
        cur_name_text: name_texts[Math.min(this.state.name_text_idx,2)],
      });
    },4000);
  }

  render(){
    return(
      <div>
      <Container text>
        <Header
          as="h1"
          inverted
          style={{
            fontSize: "7em",
            fontWeight: "bold",
            marginBottom: "1.5em",
          }}>
        <section>
        <GifSlideshow/>
        {`${this.state.cur_name_text}`.split("").map((n,i) =>(
          <ReactTextTransition
            key={i}
            spring={presets.gentle}
            text={n}
            delay={((i*100) % 500)}
            className="big border_2px"
            overflow
            inline
          />
        ))}
        </section>
        </Header>
      </Container>
      <Grid columns='equal' className="border_1px">
        <Grid.Column>
        <div>Linux</div>
        </Grid.Column>
        <Grid.Column>
        <div>Software</div>
        </Grid.Column>
        <Grid.Column>
        <div>Science</div>
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}


export default HomeHead
