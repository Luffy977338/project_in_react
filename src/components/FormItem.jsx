import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/inputs/MyInput';

const FormItem = ({ create }) => {
   const [posts, setPosts] = useState({ title: '', body: '' })

   const addNewPost = (e) => {
      e.preventDefault()
      const newPost = { ...posts, id: Date.now() }
      if (posts.title === '' || posts.body === '') {
         return
      } else {
         create(newPost)
         setPosts({ title: '', body: '' })
      }
   }

   return (
      <form>
         <div>
            <MyInput
               type="text"
               placeholder='Post name'
               value={posts.title}
               onChange={e => setPosts({ ...posts, title: e.target.value })}
            />

            <MyInput
               type="text"
               placeholder='Post description'
               value={posts.body}
               onChange={e => setPosts({ ...posts, body: e.target.value })}
            />
         </div>

         <MyButton onClick={addNewPost}>Create</MyButton>

      </form>
   );
}

export default FormItem;
