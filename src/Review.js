import React, { useEffect, useState } from 'react';
import people from './data';
import { ImQuotesLeft } from "react-icons/im";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [photo,setPhoto]=useState(people);
  const [index,setIndex]=useState(0);
  const {id,name,job,image,text}=people[index];
   
  const increase=()=>{
    if(index==people.length-1){
      setIndex(0)
      }
      else setIndex((index)=>{return index+1});
   
  };
  const decrease=()=>{
    if(index==0){
    setIndex(people.length-1)
    }
   else{
    setIndex((index)=>{ return index-1})
   };
    };
  const random=()=>{
    let id=Math.floor(Math.random() * people.length) ;
    // console.log('Number is',id);
    if(id==index){
       id+=1;
       if(id>people.length-1){
         id=0;
         setIndex(id);
       }
    }
    setIndex(id);

  };

  // useEffect(()=>{''
  //   newphoto(0);
  // },[])
  return <>
      <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={decrease}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={increase}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={random}>
        surprise me
      </button>
    </article>
     
  </>;
};

export default Review;
