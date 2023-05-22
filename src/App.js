import React, { useState } from 'react'
import './App.css'
import Counter from './components/Counter';



function App() {
   const [value, setValue] = useState('Nothing')


   return (
      <div className='App'>
         <Counter />
         <Counter />
         <Counter />
         <Counter />

      </div>
   );
}


export default App



