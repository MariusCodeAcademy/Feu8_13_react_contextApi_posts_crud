// cia mes graziai atvaizuosim visa info esancia posto objekte
import axios from 'axios';
import Container from '../../components/UI/container/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Btn from '../../components/UI/btn/Btn';
import AddComment from '../../components/comments/AddComment';
import CommentsList from '../../components/comments/CommentsList';
import config from '../../config';

import noImageImage from '../../assets/no-image.jpg';

const url = config.postUrl;

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

  let image = currentPost.image ? currentPost.image : noImageImage;
  image = currentPost.image || noImageImage;
  const imgAlt = currentPost.image ? currentPost.title : 'default image';
  return (
    <Container>
      <img src={image} alt={imgAlt} />

      <h1>{currentPost.title}</h1>
      <p>{currentPost.body}</p>
      <p className='author'>
        By: <strong>{currentPost.author}</strong>
      </p>
      <p>{currentPost.date}</p>
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
      <hr />
      <div>
        <AddComment />
        <CommentsList />
      </div>
    </Container>
  );
}
