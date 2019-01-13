import React, { Component } from 'react';
import {
  Button,
  ModalHeader,
  Modal,
  ModalBody,
} from 'reactstrap';
import items from './items';
import { connect } from 'react-redux';
import {changeModalName} from '../store';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    
  }
  toggle(event) {
    //this.props.activatePop(event)
    //set global name back to ''
    this.props.changeModalName('')
  } 
  // componentDidUpdate(){
  //   console.log(this.props);
  // }
  render() {
    const {modalVisible} = this.props;
    const {name} = this.props;

    let url;
    //let name = this.props.content;
    
    items.forEach(i=>{
      i.name == name? url = i.link : null;
    })

    return ( 
        <Modal
        
          isOpen={modalVisible} //was isActive comming from index
          toggle={this.toggle}
          className={this.props.className}
          size={'lg'}
          id={'dialog-' + name}>
          <ModalHeader toggle={this.toggle}>
            <a href={url} target="_new"> {url}</a>
          </ModalHeader>
          <iframe
            id="ifr"
            src={url}>
          </iframe>
          <style jsx global>
     {   `
        iframe{
          
          background-color: white;
          background-position: 50% 50%;
          background-size: 200px;
          background-repeat: no-repeat;
        }
        `}
      </style>
        </Modal>
    );
  }
}
function mapStateToProps(state){
  const {name, modalVisible} = state
  return {name, modalVisible}
}
export default connect(mapStateToProps,{changeModalName})(Popup);