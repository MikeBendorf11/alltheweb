import items from './items';
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap';

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, event) {
    //console.log(event);
    //console.log(id);
    event.preventDefault();
    this.props.onSlideClick(id);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    let arr = [];
    const order = this.props.order;
    if(order){
      for(var i=0; i<order.length; i++){
        order[i] == 'a' ? arr.push(items[0]) :
        order[i] == 'n' ? arr.push(items[1]) :
        order[i] == 'c' ? arr.push(items[2]) :
        order[i] == 'd' ? arr.push(items[3]) :
        order[i] == 'j' ? arr.push(items[4]) :
        console.log('not a match');
      }
    } else {
      arr = items;
    }
    //ancdj
    

    const slides = arr.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>
          <img
            onClick={this.handleClick.bind(this, item.name)} src={item.src}
            alt={item.altText}
            id={'img-' + item.name} 
            className={'images'}/>
          <div
            onClick={this.handleClick.bind(this, item.name)}
            id={'cap-' + item.name}>
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.title} />
          </div>
        </CarouselItem>
      );
    });

    return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={this.props.interval}
          pause={"hover"}
          ride={'carousel'}
        >
          
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
    );
  }
}

export default Slides;