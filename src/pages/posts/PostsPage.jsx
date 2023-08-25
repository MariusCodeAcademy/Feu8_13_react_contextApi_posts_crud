import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from '../../components/UI/container/Container';
import SinglePostLink from '../../components/posts/SinglePostLink';
import config from '../../config';

const url = config.postUrl;

export default function PostsPage() {
  const [postsArr, setPostsArr] = useState([]);

  // evn reikme
  // console.log(
  //   'import.meta.env.VITE_BASE_URL ===',
  //   import.meta.env.VITE_BASE_URL
  // );

  useEffect(() => {
    // parsisiusti
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp);
        // irasyti i postsArr
        setPostsArr(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  return (
    <Container>
      <h1>PostsPage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        corporis, reiciendis eius ipsa laborum sed!
      </p>
      <ul>
        {postsArr.map((pObj) => (
          // vietoj li generuoti SinglePostLink
          <SinglePostLink
            key={pObj.id}
            author={pObj.author}
            id={pObj.id}
            title={pObj.title}
          />
          // <li key={pObj.id}>
          //   {/* vietoj "5" paduoti posto id */}
          //   <Link to={`/posts/${pObj.id}`}>{pObj.title}</Link>
          // </li>
        ))}
      </ul>
    </Container>
  );
}
