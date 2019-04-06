import * as React from 'react';
import InputField from 'src/forms/InputField';
import TextAreaField from 'src/forms/TextAreaField';

function TrophyForm({

}) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [quality, setQuality] = React.useState('');

  return (
    <form>
      <InputField
        id="trophy-name"
        name="trophy-name"
        value={name}
        label="Name"
        onChange={event => setName(event.target.value)}
      />

      <TextAreaField
        id="trophy-description"
        name="trophy-description"
        value={description}
        label="Description"
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
