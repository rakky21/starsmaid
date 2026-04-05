import styles from './ServiceArea.module.css';

export default function ServiceArea() {
	return (
		<section className={styles.areasSection} id="areas">
			<div className={styles.areasContainer}>
				<div className={styles.areasLabel}>Where We Serve</div>
				<div className={styles.areasTitle}>Serving the DMV Area</div>
				<div className={styles.areasGrid}>
					<div className={styles.areasPill}>Alexandria, VA</div>
					<div className={styles.areasPill}>Arlington, VA</div>
					<div className={styles.areasPill}>Fairfax, VA</div>
					<div className={styles.areasPill}>McLean, VA</div>
					<div className={styles.areasPill}>Vienna, VA</div>
					<div className={styles.areasPill}>Falls Church, VA</div>
					<div className={styles.areasPill}>Annandale, VA</div>
					<div className={styles.areasPill}>Washington, D.C.</div>
					<div className={styles.areasPill}>Bethesda, MD</div>
					<div className={styles.areasPill}>Silver Spring, MD</div>
					<div className={styles.areasPill}>Lanham, MD</div>
					<div className={styles.areasPill}>College Park, MD</div>
				</div>
			</div>
		</section>
	)
}