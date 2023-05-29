import React, { useMemo, useState } from 'react';
import Banner from './Banner';
import MySelect from './UI/MySelect/MySelect';
import MyInput from './UI/inputs/MyInput';
import PostFilter from './PostFilter';

const PostItem = ({ remov, posts, title, state }) => {


   const [filter, setFilter] = useState({ sort: '', query: '' })

   const sortedPosts = useMemo(() => {
      if (filter.sort) {
         return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
      }
      return posts
   }, [filter.sort, posts]);

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
   }, [filter.query, sortedPosts])

   if (!posts.length) {
      return (
         <p className="elmNotFound">Posts not found...</p>
      )
   }


   return (
      <div className='divPostItem'>
         <h1 className='h1'>{title}</h1>
         <PostFilter filter={filter} setFilter={setFilter} />
         {sortedAndSearchedPosts.map((posts, index) =>
            <Banner remov={remov} number={index + 1} post={posts} key={posts.id} />
         )}
      </div>
   );
}

export default PostItem;
