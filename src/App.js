import React, { useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import PostItem from './components/PostItem';



function App() {
   const [postsJS, setPostsJS] = useState([
      { id: 1, tittle: 'JavaScript', other: 'language' },
      { id: 2, tittle: 'JavaScript 2', other: 'language' },
      { id: 3, tittle: 'JavaScript 3', other: 'language' }
   ])

   const [postsPY, setPostsPY] = useState([
      { id: 1, tittle: 'JavaScript', other: 'language' },
      { id: 2, tittle: 'JavaScript 2', other: 'language' },
      { id: 3, tittle: 'JavaScript 3', other: 'language' }
   ])


   return (
      <div className='App'>
         <PostItem posts={postsJS} tittle={'Status JS'} />
         <PostItem posts={postsPY} tittle={'Status PY'} />

      </div>
   );
}


export default App

