// cia mes graziai atvaizuosim visa info esancia posto objekte
import axios from 'axios';
import Container from '../../components/UI/container/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Btn from '../../components/UI/btn/Btn';

const url = 'http://localhost:5000/posts';

export default function SinglePostPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [currentPost, setCurrentPost] = useState({});
  const currentPostUrl = `${url}/${postId}`;

  useEffect(() => {
    axios
      .get(currentPostUrl)
      .then(({ data }) => {
        console.log('data ===', data);
        setCurrentPost(data);
      })
      .catch((error) => {
        console.warn('ivyko klaida negavom post:', error);
      });
  }, []);

  console.log('postId ===', postId);

  function handlePostDelete() {
    console.log('handlePostDelete ===');
    // siusti axios.delete( currentPostUrl)
    axios
      .delete(currentPostUrl)
      .then((resp) => {
        console.log('resp ===', resp);
        if (resp.status === 200) {
          //pavyko istrint
          navigate('/posts', { replace: true });
        }
      })
      .catch((error) => {
        console.warn('ivyko klaida trinant:', error);
      });
  }

  return (
    <Container>
      <h1>{currentPost.title}</h1>
      <p>{currentPost.body}</p>
      <p className='author'>
        By: <strong>{currentPost.author}</strong>
      </p>
      <h4>Tags</h4>
      <ul className='unlisted flex gap-2'>
        {currentPost.tags?.map((singleTag) => (
          <li key={singleTag}>{singleTag}</li>
        ))}
      </ul>
      <div>
        <Btn onClick={handlePostDelete}>Delete</Btn>
      </div>
      {/* Comments */}
    </Container>
  );
}
