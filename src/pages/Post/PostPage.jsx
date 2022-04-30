import { useContext, useEffect, useState } from "react";
import BlogContext from "../../context/BlogContext";
import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "../../styles/PostPage.module.css";
import { useParams } from "react-router-dom";

function PostPage() {
  const params = useParams();
  const { loadPost } = useContext(BlogContext);
  const [singlePost, setSinglePost] = useState();
  const [isSingleLoading, setSingleLoading] = useState(true);

  useEffect(() => {
    loadPost(params.id).then((data) => {
      setSinglePost(data);
      setSingleLoading(false);
    });
  }, [loadPost, params]);
  return (
    <DefaultLayout>
      {isSingleLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.single_post_page}>
          <section className={styles.post}>
            
            <h1 className={styles.post_title}>{singlePost?.title}</h1>
            <img src={singlePost.thumbnailLink} alt="" />
            <div className={styles.post_details}>
              <div className={styles.post_detail}>Last updated on XXX</div>
              <div className={styles.post_detail}>
                Written by {singlePost?.author}
              </div>
            </div>
            <p className={styles.post_content}>{singlePost?.content}</p>
          </section>
          <section className={styles.post_feedback}>
            <p>
              Let me know what you think about the post, send a mail to{" "}
              <a href='mailto:feedback@my-awesome-domain.com'>
                feedback@my-awesome-domain.com
              </a>
              .
            </p>
          </section>
        </div>
      )}
    </DefaultLayout>
  );
}

export default PostPage;
