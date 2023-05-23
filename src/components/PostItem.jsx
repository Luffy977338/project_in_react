import React from 'react';
import Banner from './Banner';

const PostItem = ({ posts, tittle }) => {
   return (
      <div>
         <h1 className='h1'>{tittle}</h1>
         {posts.map(post =>
            <Banner post={post} key={post.id} />
         )}
      </div>
   );
}

export default PostItem;
