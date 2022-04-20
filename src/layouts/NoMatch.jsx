import styles from "../styles/NoMatch.module.css"

function NoMatch() {
  return (
    <div className={styles.error_page}>
      <h1>Oops, something went wrong!</h1>
      <p>
        Back to <a href='/'>safety</a>!
      </p>
    </div>
  );
}

export default NoMatch;
