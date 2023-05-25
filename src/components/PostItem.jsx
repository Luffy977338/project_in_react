import React from 'react';
import Banner from './Banner';

const PostItem = ({ remov, posts, title }) => {
   return (
      <div>
         <h1 className='h1'>{title}</h1>
         {posts.map((posts, index) =>
            <Banner remov={remov} number={index + 1} post={posts} key={posts.id} />
         )}
      </div>
   );
}

export default PostItem;
