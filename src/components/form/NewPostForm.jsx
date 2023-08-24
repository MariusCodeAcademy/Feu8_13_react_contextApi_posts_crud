import React from 'react';
import Btn from '../UI/btn/Btn';
// forma sukurti naujam postui
// valom su useFormik,
// pradzioj be klaidu po to klaidos su Yup
// sukurus nauja posta naviguosim i Posts

/*
{
  "id": "8538263590611068",
  "image": "",
  "title": "Test Post",
  "body": "This is a test post.",
  "author": "John Doe",
  "tags": [
    "test",
    "example"
  ],
  "date": "2022-04-03"
}
*/

export default function NewPostForm() {
  return (
    <div>
      <form>
        <div className='inputBlock'>
          <input type='text' id='title' placeholder='Title' />
        </div>
        <div className='inputBlock'>
          <input type='text' id='image' placeholder='Image url' />
        </div>
        <div className='inputBlock'>
          <input type='text' id='author' placeholder='Author' />
        </div>
        <div className='inputBlock'>
          <input type='text' id='tags' placeholder='Tags (comma separated)' />
        </div>
        <div className='inputBlock'>
          <input type='date' id='date' />
        </div>
        <div className='inputBlock'>
          <textarea id='body' placeholder='Enter text here'></textarea>
        </div>
        <Btn sub>Create</Btn>
      </form>
    </div>
  );
}
