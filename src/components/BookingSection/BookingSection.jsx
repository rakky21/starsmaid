import styles from './BookingSection.module.css';

export default function BookingSection() {
  return (
    <section className={styles.bookingSection} id="book">
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Book Now</div>
        <div className={styles.sectionTitle}>Ready for a 5-Star Home?</div>
        <p className={styles.sub}>Get your free estimate in seconds — cleaning, handyman, or both.</p>
        <div className={styles.bookingFormInline}>
          <input type="text" placeholder="Your zip code" />
          <select>
            <option value="">Select a service</option>
            <optgroup label="🧹 Cleaning">
              <option>Standard Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move In / Move Out</option>
              <option>Eco-Friendly Cleaning</option>
            </optgroup>
            <optgroup label="🔧 Handyman">
              <option>General Repairs</option>
              <option>Furniture Assembly</option>
              <option>TV / Shelf Mounting</option>
            </optgroup>
            <option>Cleaning + Handyman Bundle</option>
          </select>
          <button className="btn btn-gold">Get My Quote ★</button>
        </div>
        <p style={{ fontSize: '0.78rem', opacity: 0.45, marginTop: '14px' }}>🔒 Your info is safe. We never share your data.</p>
      </div>
    </section>
  )
}