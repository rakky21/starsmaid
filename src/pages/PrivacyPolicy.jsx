import Footer from '../components/Footer/Footer';
import styles from './PrivacyPolicy.module.css';
export default function PrivacyPolicy() {
	return (
		<>
			<div className={styles.Container}>
				<h1>Privacy Policy</h1>
				<h2> 1. Scope of This Policy </h2>
				<p>	This Privacy Policy describes how Stars Maid ("Company," "we," "us," or "our") collects, uses, maintains, and protects personal information obtained from clients, website visitors, and prospective customers.

					By using our services or interacting with us, you agree to the terms outlined in this Privacy Policy.</p>
				<h2> 2. Information We Collect </h2>
				<p>We collect only the information reasonably necessary to provide our services, including:</p>
				<ul>
					<li> Full Name</li>
					<li> Phone Number</li>
					<li> Email Address</li>
					<li> Service address and property details</li>
					<li> Appointment and service history</li>
					<li> Payment-related information (processed securely via third-party providers, if applicable)</li>
					<li> Communications and customer support inquiries</li>
				</ul>
				<strong>We do not intentionally collect sensitive personal information (e.g., Social Security numbers).</strong>
				<h2> 3. How We Use Your Information </h2>
				<p> Your information is used strictly for legitimate business purposes, including:</p>
				<ul>	<li>Scheduling, confirming, and completing services</li>
					<li>Providing quotes, invoices, and receipts</li>
					<li>Communicating service updates or issues</li>
					<li>Customer support and dispute resolution</li>
					<li>Internal recordkeeping and service improvement</li></ul>
				<p> We do not use your information for profiling or automated decision-making.</p>
				<h2> 4. No Sale or Third-Party Sharing of Data</h2>
				<p> We do not sell, rent, or trade your personal information.
					We also do not share your personal information with third parties for marketing purposes.
					Limited exceptions may apply only when necessary to operate our business, such as:</p>
				<ul>
					<li>Payment processors (to securely complete transactions)</li>
					<li>Legal or regulatory compliance (if required by law, subpoena, or legal process)</li>
				</ul>
				<p> All such disclosures are limited to what is strictly necessary.</p>
				<h2> 5. Data Security </h2>
				<p> We implement commercially reasonable administrative, technical, and physical safeguards to protect your information.

					However, no system is completely secure. By using our services, you acknowledge and accept this inherent risk.</p>
				<h2> 6. Your Rights and Choices </h2>
				<p> We retain personal information only for as long as necessary to:</p>
				<ul>
					<li>Fulfill the purposes outlined in this policy</li>
					<li>Maintain business and financial records</li>
					<li>Comply with legal obligations</li>
				</ul>
				<p> When no longer needed, data is securely deleted or anonymized.</p>
				<h2> 7. Your Rights </h2>
				<p> Depending on your state of residence (including Maryland, Virginia, and Washington, D.C.), you may have the right to:</p>
				<ul>
					<li> Request access to your personal information</li>
					<li> Request correction of inaccurate data</li>
					<li> Request deletion of your personal information</li>
					<li> Request limitation of certain data uses</li>
				</ul>
				<p> To exercise these rights, contact us using the information below. We may need to verify your identity before processing requests.</p>
				<h2> 8. Cookies and Website Tracking </h2>
				<p> If you access our website, we may use basic cookies or similar technologies to:</p>
				<ul>
					<li> Improve website functionality </li>
					<li> Remember user preferences (e.g., language settings)</li>
					<li> Analyze basic traffic data</li>
				</ul>
				<p> These do not collect sensitive personal information. You may disable cookies through your browser settings.</p>
				<h2> 9. Changes to This Privacy Policy </h2>
				<p> Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from minors.	</p>
				<h2> 10. Limitation of Liability </h2>
				<p> To the fullest extent permitted by law, Stars Maid shall not be liable for any indirect, incidental, or consequential damages arising from unauthorized access to or use of your personal information.</p>
				<h2> 11. Changes to This Policy</h2>
				<p>  We reserve the right to update or modify this Privacy Policy at any time. Updates will be posted with a revised effective date. Continued use of our services constitutes acceptance of those changes.</p>
				<h2> 12. Contact Information </h2>
				<p> For questions, requests, or concerns regarding this Privacy Policy:
					Stars Maid
					Email: [Insert Email]
					Phone: [Insert Phone Number]</p>
			</div>
			<Footer />
		</>
	)
}