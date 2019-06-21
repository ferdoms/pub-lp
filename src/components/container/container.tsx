import React, { Component } from "react";

interface Props{
 className?: string;
 bgImage?: string;
 bgColor?: string;
}
interface State {   
}


export class Container extends Component<Props, State> {
    constructor(props:Props){
        super(props)
    }
  render() {
    return (
      <section style={{backgroundColor: this.props.bgColor}}>
        <div className={this.props.className}>
            {this.renderBgImage()}
            <div className="container hero-body">
            <div className="row">{this.props.children}</div>
            </div>
        </div>
      </section>
    );
  }
  renderBgImage(){
      if(this.props.bgImage){
          console.log(this.props.bgImage)
        return <img src={this.props.bgImage}></img>
      }
      
      return <React.Fragment></React.Fragment>;
        
  }
}
