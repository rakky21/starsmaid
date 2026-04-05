import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* <!-- Col 1: Brand --> */}
          <div>
            <div className={styles.brandName}>Stars Maid</div>
            <div className={styles.stars}>★ ★ ★ ★ ★</div>
            <p className={styles.brandDesk}>
              A family-owned cleaning &amp; handyman service proudly serving
              the DMV. Bonded, insured, and dedicated to 5-star results
              every time.
            </p>
            <div className={styles.footerContact}>
              <a href="tel:+17035550100" className="icon-phone">(703) 555-0100</a>
              <a href="mailto:hello@starsmaid.com" className="icon-email">hello@starsmaid.com</a>
            </div>
          </div>

          {/* <!-- Col 2: Cleaning --> */}
          <div className={styles.footerCol}>
            <h4>Cleaning</h4>
            <ul>
              <li><a href="#">Standard Cleaning</a></li>
              <li><a href="#">Deep Cleaning</a></li>
              <li><a href="#">Move In / Move Out</a></li>
              <li><a href="#">Eco-Friendly</a></li>
              <li><a href="#">Post-Event</a></li>
            </ul>
          </div>

          {/* <!-- Col 3: Handyman --> */}
          <div className={styles.footerCol}>
            <h4>Handyman</h4>
            <ul>
              <li><a href="#">General Repairs</a></li>
              <li><a href="#">Furniture Assembly</a></li>
              <li><a href="#">TV Mounting</a></li>
              <li><a href="#">Drywall &amp; Paint</a></li>
              <li><a href="#">Plumbing Fixes</a></li>
            </ul>
          </div>

          {/* <!-- Col 4: Company --> */}
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Service Areas</a></li>
              <li><a href="#">Book Online</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* <!-- Bottom bar --> */}
      <div className={styles.footerBottomBar}>
        <span className={styles.footerCopyright}>© 2025 Stars Maid. All rights reserved.</span>
        <div className={styles.footerLegal}>
          <a href="#">Privacy Policy</a>
          <span className="sep">·</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
