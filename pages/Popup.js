import React, { Component } from 'react';
import {
  Button,
  ModalHeader,
  Modal,
  ModalBody,
} from 'reactstrap';
import items from './items';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    this.props.activatePop(event)
  } 
  render() {
    
    let url;
    let id = this.props.content;
    
    // if(id){
    //   id = id.split('-')[1]    
    //   
    // }
    //console.log('id:' + id);
    items.forEach(i=>{
      i.name == id? url = i.link : null;
    })
    //console.log(url);
    return (
        <Modal
          isOpen={this.props.isActive}
          toggle={this.toggle}
          className={this.props.className}
          size={'lg'}
          id={'dialog-' + id}>
          <ModalHeader toggle={this.toggle}>
            <a href={url} target="_new"> {url}</a>
          </ModalHeader>
          <iframe src={url}></iframe>
        </Modal>
    );
  }
}

export default Popup;