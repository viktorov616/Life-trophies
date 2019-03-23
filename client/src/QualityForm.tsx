import * as React from 'react';
import axios from 'axios';

function QualityForm({

}) {
  const [name, setName] = React.useState('');

  function onSubmit(e) {
    e.preventDefault();
    axios.post('/api/quality', { name });
  }

  return (
    <form>
      Quality
      <input
        id="quality-name"
        name="quality-name"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <button onClick={onSubmit}>
        Add
      </button>
    </form>
  );
}

export default QualityForm;
