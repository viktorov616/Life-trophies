import * as React from 'react';

function TrophyForm({

}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [quality, setQuality] = React.useState('');
  console.log({ name, description, category, quality });
  return (
    <form>
      <input
        id="trophy-name"
        name="trophy-name"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <textarea
        id="trophy-description"
        name="trophy-description"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <select
        id="trophy-category"
        name="trophy-category"
        value={category}
        onChange={event => setCategory(event.target.value)}
      >
        <option>books</option>
        <option>cooking</option>
      </select>

      <select
        id="trophy-quality"
        name="trophy-quality"
        value={quality}
        onChange={event => setQuality(event.target.value)}
      >
        <option>gold</option>
        <option>bronze</option>
      </select>
    </form>
  );
}

export default TrophyForm;
