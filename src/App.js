import React, { useState } from 'react'
import './App.css'
import PostItem from './components/PostItem';
import FormItem from './components/FormItem';
import MyInput from './components/UI/inputs/MyInput';



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
         <PostItem remov={removePost} state={setDef} posts={def} title={'Posts list'} />
      </div>
   );
}


export default App

