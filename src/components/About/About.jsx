import styles from './About.module.css';

const STATS = [
  { val: '500+', lbl: 'Happy Clients'    },
  { val: '8+',   lbl: 'Years Serving DMV' },
  { val: '4.9★', lbl: 'Average Rating'   },
];

export default function About() {
  return (
    <section className={styles.section} id="section-about">
      <div className={styles.inner}>
        <div className={styles.imgWrap}>🏡</div>

        <div className={styles.content}>
          <p className="section-label">About Us</p>
          <h2 className={styles.h2}>Family-owned, DMV proud</h2>
          <p className={styles.p}>
            As a proudly family-owned business serving the DMV area, we provide
            reliable cleaning and renovation services designed to keep your spaces
            clean, comfortable, and refreshed.
          </p>
          <p className={styles.p}>
            From deep cleaning to full renovations, every job is delivered with
            exceptional attention to detail and a personal touch that larger
            companies simply can't match.
          </p>
          {/* <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.lbl}>
                <div className={styles.statVal}>{s.val}</div>
                <div className={styles.statLbl}>{s.lbl}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
