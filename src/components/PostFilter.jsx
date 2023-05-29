import React from 'react';
import MySelect from './UI/MySelect/MySelect';
import MyInput from './UI/inputs/MyInput';

const PostFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <MyInput
            style={{ width: '250px' }}
            type='text'
            placeholder='Search'
            value={filter.query}
            onChange={e => setFilter({ ...filter, query: e.target.value })}
         />

         <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
            options={[
               { value: 'title', name: 'by name' },
               { value: 'body', name: 'by description' },
               { value: 'time_as', name: 'by time (old)', key: Date.now }
            ]}
            defaultValue={'by time (new)'}
         />
      </div>
   );
}

export default PostFilter;
