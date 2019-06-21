import React, { Component } from "react";
import { Container } from "../../components/container/container";

export class Hero extends Component {
  render() {
    return (
      <Container className="hero bg-black bg-image" bgImage="images/hero.jpg">
          {this.props.children}
          <div>
            <h1 className="hero-title">
                Panti Bar
            </h1>
          </div>
          
      </Container>
    );
  }
}
