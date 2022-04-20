import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/PostPreview.module.css'

function PostPreview({ id, thumbnail, title, previewText,isAdmin }) {

  const postLink = () => {
    return isAdmin ? `/admin/${id}` : `/posts/${id}`
  }

  return (
    <Link to={postLink()} className={styles.post_preview}>
      <article>
        <div
          className={styles.post_thumbnail}
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
        <div className={styles.post_content}>
          <h1>{ title }</h1>
          <p>{ previewText }</p>
        </div>
      </article>
    </Link>
  );
}

PostPreview.defaultProps = {
  isAdmin: false,
};

export default PostPreview;
