import React, { useMemo, useState } from 'react';
import Banner from './Banner';
import PostFilter from './PostFilter';

const PostItem = ({ remov, posts, title }) => {


   const [filter, setFilter] = useState({ sort: '', query: '', key: '' })

   const sortedPosts = useMemo(() => {
      if (filter.sort === 'title') {
         return [...posts].sort((a, b) => {
            if (a.title > b.title) {
               return 1;
            }
            if (a.title < b.title) {
               return -1;
            }
         });
      }
      if (filter.sort === 'body') {
         return [...posts].sort((a, b) => {
            if (a.body > b.body) {
               return 1;
            }
            if (a.body < b.body) {
               return -1;
            }
         })
      }
      if (filter.sort === 'time_as') {
         return [...posts].sort((a, b) => {
            return a.id - b.id
         })
      }
      if (filter.sort === 'time_des') {
         return [...posts].sort((a, b) => {
            return b.id - a.id;
         })
      }
      return posts
   }, [filter.sort, posts]);

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
   }, [filter.query, sortedPosts])


   if (!posts.length) {
      return (
         <div className="elmNotFound">Posts not found...</div>
      )
   }

   return (
      <div className='divPostItem'>
         <div className='divPostTitle'>
            <h1 className='h1'>{title}</h1>
            <PostFilter filter={filter} setFilter={setFilter} />
         </div>
         {sortedAndSearchedPosts.map((posts, index) =>
            <Banner remov={remov} number={index + 1} post={posts} key={posts.id} />
         )}
      </div>
   );
}

export default PostItem;
