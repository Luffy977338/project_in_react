import React from 'react';
import MyButton from './UI/buttons/MyButton';

function Banner(props) {

   return (
      <div>
         <div className='divBar'>
            <div>
               <h1>{props.number}. {props.post.title}</h1>
               <p>{props.post.body}</p>
            </div>
            <div>
               <MyButton onClick={() => props.remov(props.post)} >Delete</MyButton>
            </div>
         </div>
      </div>
   );
}

export default Banner;
