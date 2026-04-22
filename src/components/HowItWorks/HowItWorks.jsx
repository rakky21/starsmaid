import styles from './HowItWorks.module.css';

export default function HowItWorks() {
	return (
		<section className="steps-section" id='section-how'>
			<div className={styles.container}>
				<div className={styles.sectionLabel}>How It Works</div>
				<div className={styles.sectionTitle}>Book Your Service in 3 Simple Steps</div>
				<div className={styles.stepsGrid}>
					<div className={styles.stepCard}>
						<div className={styles.stepNumber}>1</div><div className={styles.stepIcon}>📲</div>
						<h3>Call or Book Online</h3>
						<p>Choose cleaning, handyman, or both. Get an accurate quote and pick your preferred date in minutes.</p>
					</div>
					<div className={styles.stepCard}>
						<div className={styles.stepNumber}>2</div><div className={styles.stepIcon}>⭐</div>
						<h3>We Show Up &amp; Deliver</h3>
						<p>Your Stars Maid team arrives on time and handles everything — cleaning, repairs, or both in one visit.</p>
					</div>
					<div className={styles.stepCard}>
						<div className={styles.stepNumber}>3</div><div className={styles.stepIcon}>🛋️</div>
						<h3>You Relax</h3>
						<p>Enjoy a spotless, fully functional home. 5-star service, guaranteed every time.</p>
					</div>
				</div>
			</div>
		</section>
	)
}