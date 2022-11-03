import ListItem from '../list-item/ListItem';
import './list.scss';
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { useRef, useState } from 'react';

const List = ({ name }) => {
  // slides = 15
  const listRef = useRef();
  const [slide, setSlide] = useState(0);

  const handleClick = (direction) => {
    const {x} = listRef.current.getBoundingClientRect();

    if (direction === 'left' && slide > 0) {
      setSlide(slide - 1);
      listRef.current.style.transform = `translateX(calc(${x}px + 15.5rem)`;
    } else if (direction === 'right' && slide < 7) {
      setSlide(slide + 1);
      listRef.current.style.transform = `translateX(calc(${x}px - 15.5rem)`;
    }
  }

  return (
    <div className='list'>
      <div className="title">{name}</div>
      <div className="wrapper">
        <ArrowLeft className='arrow left' onClick={() => {handleClick('left')}} />
        <div className="container" ref={listRef}>
          {
            [...Array(15).keys()].map(index => (
              <ListItem number={index}></ListItem>
            ))
          }
          
        </div>
        <ArrowRight className='arrow right' onClick={() => {handleClick('right')}} />
      </div>
    </div>
  )
}

export default List