import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({ options, defaultValue, value, onChange }) => {

   return (
      <div className='divSelected'>
         Sort
         <select value={value} onChange={event => onChange(event.target.value)} className={classes.selectValue} >

            <option disabled value="by time">{defaultValue}</option>

            {options.map(option =>
               <option key={option.value} value={option.value}>
                  {option.name}
               </option>
            )}

         </select>
      </div>
   );
};

export default MySelect;
