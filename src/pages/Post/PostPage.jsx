import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "../../styles/PostPage.module.css";

function PostPage() {
  return (
    <DefaultLayout>
      <div className={styles.single_post_page}>
        <section className={styles.post}>
          <h1 className={styles.post_title}>Title of the Post</h1>
          <div className={styles.post_details}>
            <div className={styles.post_detail}>Last updated on XXX</div>
            <div className={styles.post_detail}>Written by NAME</div>
          </div>
          <p className={styles.post_content}>Content of the post</p>
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
    </DefaultLayout>
  );
}

export default PostPage;
