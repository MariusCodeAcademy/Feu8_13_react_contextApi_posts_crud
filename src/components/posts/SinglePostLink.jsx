// situos komponentus mes turim generuoti PostsPage kaip nuorodas
// atvaizduoti title ir autoriu
import React from 'react';
import { Link } from 'react-router-dom';

export default function SinglePostLink(props) {
  return (
    <li>
      {/* vietoj "5" paduoti posto id */}
      <Link to={`/posts/${props.id}`}>
        {props.title} - <strong>by:</strong> {props.author}
      </Link>
    </li>
  );
}
