import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth.js';
import styles from './Services.module.css';

const PACKAGES = [
  { emoji: '🧹', name: 'Standard Cleaning', cat: 'Cleaning',   price: 'From $89',  desc: 'Surfaces, floors, bathrooms and kitchen — a thorough clean for everyday freshness.' },
  { emoji: '✨', name: 'Deep Cleaning',      cat: 'Cleaning',   price: 'From $149', desc: 'Full detail clean including inside appliances, baseboards and hard-to-reach areas.' },
  { emoji: '🪟', name: 'Window Cleaning',    cat: 'Cleaning',   price: 'From $65',  desc: 'Streak-free interior and exterior window cleaning for homes and offices.' },
  { emoji: '🧶', name: 'Carpet Cleaning',    cat: 'Cleaning',   price: 'From $99',  desc: 'Deep-extraction carpet cleaning that removes stains, odours and allergens.' },
  { emoji: '🔧', name: 'Minor Repairs',      cat: 'Renovation', price: 'From $75',  desc: 'Patch drywall, fix doors, replace fixtures — small fixes that make a big difference.' },
  { emoji: '🚿', name: 'Plumbing Repair',    cat: 'Renovation', price: 'From $95',  desc: 'Leaky faucets, clogged drains, running toilets — fast and reliable solutions.' },
  { emoji: '⚡', name: 'Electrical Repair',  cat: 'Renovation', price: 'From $110', desc: 'Outlets, switches, fixtures — licensed electricians for safe, compliant repairs.' },
];

export default function Services() {
  const navigate = useNavigate();

  const handleSelect = () => {
    if (Auth.loggedIn()) navigate('/book');
    else navigate('/login');
  };

  return (
    <section className={styles.section} id="section-services">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Offer</p>
          <h2 className="section-h2">Every service your space needs</h2>
          <p className="section-sub">
            From routine upkeep to full renovations — handled with care and precision.
          </p>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className={styles.card}>
              <div className={styles.cardImg}>{pkg.emoji}</div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className="tag tag-accent">{pkg.cat}</span>
                </div>
                <h3 className={styles.cardName}>{pkg.name}</h3>
                <p className={styles.cardDesc}>{pkg.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardPrice}>{pkg.price}</span>
                  <button className="btn btn-outline btn-sm" onClick={handleSelect}>
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
