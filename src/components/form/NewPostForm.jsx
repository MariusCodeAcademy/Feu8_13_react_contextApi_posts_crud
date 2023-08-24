import css from './NewPostForm.module.css';
import Btn from '../UI/btn/Btn';
import { useFormik } from 'formik';
import config from '../../config';
import axios from 'axios';
import { useState } from 'react';

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

const url = config.postUrl;

export default function NewPostForm() {
  const [errorArr, setErrorArr] = useState([]);
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      body: '',
      author: '',
      tags: '',
      date: '',
    },
    onSubmit: (values) => {
      console.log('form submit values ===', values);
      const newPostWhereTagsAreArray = {};
      sendNewPostData(newPostWhereTagsAreArray);
    },
  });

  function sendNewPostData(newPostObj) {
    axios
      .post(url, newPostObj)
      .then((resp) => {
        console.log('resp ===', resp);
        // patikrinti koks atsakymas sekmes atveju
        // naviguoti i posts
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
        // atsispausdini klaidu masyva is back end
        const klaidos = error.response.data.error;
        console.log(
          'error.response.data.error; ===',
          error.response.data.error
        );
        // atvaizduoti klaidas useriui
        // 1. isspausdinti kazkokiam dive ar ul
        // 2. nustatos kaip klaida formike su formik.setErrors({title: 'must be 5 charackters'})
      });
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.title}
            type='text'
            id='title'
            placeholder='Title'
          />
          <p>errors</p>
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.image}
            type='text'
            id='image'
            placeholder='Image url'
          />
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.author}
            type='text'
            id='author'
            placeholder='Author'
          />
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.tags}
            type='text'
            id='tags'
            placeholder='Tags (comma separated)'
          />
        </div>
        <div className='inputBlock'>
          <input
            onChange={formik.handleChange}
            value={formik.values.date}
            type='date'
            id='date'
          />
        </div>
        <div className='inputBlock'>
          <textarea
            onChange={formik.handleChange}
            value={formik.values.body}
            id='body'
            placeholder='Enter text here'
          ></textarea>
        </div>
        <Btn sub>Create</Btn>
      </form>
    </div>
  );
}
