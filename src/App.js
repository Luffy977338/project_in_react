import React, { useState } from 'react'
import './App.css'
import PostItem from './components/PostItem';
import FormItem from './components/FormItem';
import PostNotFound from './components/PostNotFound';



function App() {
   const [def, setDef] = useState([])

   const createPost = (newPost) => {
      setDef([...def, newPost])
   }

   const removePost = (post) => {
      setDef(def.filter((p) => p !== post))
   }

   return (
      <div className="App">
         <FormItem create={createPost} />
         {def.length !== 0
            ? <PostItem remov={removePost} posts={def} title={'Post list'} />
            : <PostNotFound title={'Post list'} />
         }
      </div>
   );
}


export default App

