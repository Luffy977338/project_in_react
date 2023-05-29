import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({ options, defaultValue, value, onChange }) => {

   return (
      <div className='divSelected'>
         Sort
         <select value={value} onChange={event => onChange(event.target.value)} className={classes.selectValue} >

            {options.map(option =>
               <option key={option.value} value={option.value}>
                  {option.name}
               </option>
            )}

            <option selected key={Date.now()} value="time_des">{defaultValue} </option>

         </select>
      </div>
   );
};

export default MySelect;
