import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';

function Banner(props) {

   const [time, setTime] = useState('')

   function getTime() {
      let time = new Date();
      let hours = time.getHours()
      let minutes = time.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
   }

   React.useEffect(() => {
      getTime()
   }, [])


   return (
      <div>
         <div className='divBar'>
            <div>
               <h1>{props.number}. {props.post.title}</h1>
               <p>{props.post.body}</p>
            </div>
            <div className='divTimeSpace'>
               <div>
                  <MyButton onClick={() => props.remov(props.post)} >Delete</MyButton>
               </div>
               <p className='postTime'>{time}</p>
            </div>
         </div>
      </div>
   );
}

export default Banner;
