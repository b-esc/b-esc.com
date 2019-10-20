import React, { Component } from 'react';
import PropTypes from "prop-types";
import ReactTextTransition, { presets } from "react-text-transition";

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
        cur_name_text: name_texts[Math.min(this.state.name_text_idx,2)]
      });
    },4000);
  }

  render(){
    return(
      <Container text>
        <Header
          as="h1"
          inverted
          style={{
            fontSize: "6em",
            fontWeight: "normal",
            marginBottom: "2em",
            marginTop: "0.5em"
          }}>
        <section>
        <Image size="small"
        src="https://i.imgur.com/t4sYRdn.gif"
        inline
        style={{
          alignSelf: 'center'
        }}/>
        <br/>
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

        <Header
          as="h2"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em"
          }}
        >
        "Linux User | Software Engineer | Computer Scientist"
        </Header>
      </Container>
    );
  }
}


export default HomeHead
