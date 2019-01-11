/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Tooltip } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }



  render() {
    const classes = 'tooltip-inner'
    
    return (

        <Tooltip 
          delay={{show: 0, hide: 0}}
          autohide={false}
          placement={this.props.position}
          isOpen={this.state.tooltipOpen} 
          target={this.props.current} 
          toggle={this.toggle}>
          {this.props.text}
        </Tooltip>
    );
  }
}