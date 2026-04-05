import styles from './WhyUs.module.css';

export default function WhyUs() {
	return (
		<section className={styles.whySection} id="why-us">
			<div className={styles.whyInner}>
				<div className={styles.whyVisual}>
					<div className={styles.whyCard}>
						<svg viewBox="0 0 140 140" width="200" xmlns="http://www.w3.org/2000/svg" fill="none">
							<text x="14" y="32" font-size="22" fill="#EBC053" font-family="serif">★ ★ ★</text>
							<circle cx="42" cy="52" r="12" stroke="#5ec4b6" stroke-width="2.8" fill="none"></circle>
							<line x1="42" y1="64" x2="42" y2="88" stroke="#5ec4b6" stroke-width="3" stroke-linecap="round"></line>
							<line x1="42" y1="74" x2="28" y2="82" stroke="#5ec4b6" stroke-width="2.6" stroke-linecap="round"></line>
							<line x1="42" y1="74" x2="56" y2="80" stroke="#5ec4b6" stroke-width="2.6" stroke-linecap="round"></line>
							<line x1="42" y1="88" x2="35" y2="106" stroke="#5ec4b6" stroke-width="2.6" stroke-linecap="round"></line>
							<line x1="42" y1="88" x2="49" y2="106" stroke="#5ec4b6" stroke-width="2.6" stroke-linecap="round"></line>
							<circle cx="98" cy="52" r="12" stroke="#7eb0f5" stroke-width="2.8" fill="none"></circle>
							<line x1="98" y1="64" x2="98" y2="88" stroke="#7eb0f5" stroke-width="3" stroke-linecap="round"></line>
							<line x1="98" y1="74" x2="84" y2="82" stroke="#7eb0f5" stroke-width="2.6" stroke-linecap="round"></line>
							<line x1="98" y1="74" x2="112" y2="80" stroke="#7eb0f5" stroke-width="2.6" stroke-linecap="round"></line>
							<line x1="98" y1="88" x2="91" y2="106" stroke="#7eb0f5" stroke-width="2.6" stroke-linecap="round"></line>
							<line x1="98" y1="88" x2="105" y2="106" stroke="#7eb0f5" stroke-width="2.6" stroke-linecap="round"></line>
							<line x1="112" y1="79" x2="122" y2="69" stroke="#7eb0f5" stroke-width="2.6" stroke-linecap="round"></line>
							<circle cx="123" cy="68" r="5" stroke="#7eb0f5" stroke-width="2" fill="none"></circle>
							<rect x="88" y="87" width="20" height="5" rx="2.5" stroke="#EBC053" stroke-width="1.8" fill="none"></rect>
						</svg>
					</div>
					<div className={styles.whyBadge}>
						<strong className={styles.whyBardeScore}>5 ★</strong>
						<span className={styles.badgeLabel}>Rated Service<br />Guaranteed</span>
					</div>
				</div>
				<div>
					<div className={styles.whyLabel}>Why Choose Stars Maid</div>
					<div className={styles.whyTitle}>One Team.<br />Total Home Care.</div>
					<p className={styles.whyDesc}>We're not a franchise — we're a family team who genuinely cares about your home. The only company in the DMV offering both professional cleaning and handyman services under one roof.</p>
					<div className={styles.featuresList}>
						<div className={styles.featureItem}><div className={styles.featureIcon}>✅</div><div className={styles.featureText}><h4>Background-Checked Professionals</h4><p>Every cleaner and handyman is thoroughly vetted, trained, and fully insured.</p></div></div>
						<div className={styles.featureItem}><div className={styles.featureIcon}>📅</div><div className={styles.featureText}><h4>Easy Online Booking</h4><p>Schedule cleaning, repairs, or both in one booking. Reschedule any time, no fees.</p></div></div>
						<div className={styles.featureItem}><div className={styles.featureIcon}>🔒</div><div className={styles.featureText}><h4>Bonded &amp; Fully Insured</h4><p>Full liability coverage on every cleaning and handyman job. Always protected.</p></div></div>
						<div className={styles.featureItem}><div className={styles.featureIcon}>💬</div><div className={styles.featureText}><h4>Real People, Same-Day Response</h4><p>No bots. Call or text us directly — we always respond the same day.</p></div></div>
					</div>
				</div>
			</div>
		</section>

	)
}