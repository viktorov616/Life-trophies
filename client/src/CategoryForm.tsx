import * as React from 'react';
import axios from 'axios';

function CategoryForm({

}) {
  const [name, setName] = React.useState('');

  function onSubmit(e) {
    e.preventDefault();
    axios.post('/api/category', { name });
  }

  return (
    <form>
      Category
      <input
        id="category-name"
        name="category-name"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <button onClick={onSubmit}>
        Add
      </button>
    </form>
  );
}

export default CategoryForm;
