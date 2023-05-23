import React from 'react';

function Banner(props) {

   return (
      <div>
         <div className='divBar'>
            <div>
               <h1>{props.post.id}. {props.post.tittle}</h1>
               <p>{props.post.other}</p>
            </div>
            <div>
               <button>Delete</button>
            </div>
         </div>
      </div>
   );
}

export default Banner;
