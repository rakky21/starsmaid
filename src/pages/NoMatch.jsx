import { Link } from 'react-router-dom';
import styles from './NoMatch.module.css';

export default function NoMatch() {
  return (
    <div className={styles.wrap}>
      <div className={styles.code}>404</div>
      <h1 className={styles.h1}>Page not found</h1>
      <p className={styles.p}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
