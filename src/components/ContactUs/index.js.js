import "../../utils/style.css";
import aboutthecomp from "../../assets/photos/aboutthecomp.jpg";
const ContactUs = () => {
  return (
      <section className="section_about">
        <div>
          <h2 className="about_title "> ABOUT US</h2>
          <p className="about_details">
            As a proudly family-owned business serving the DMV area, we provide reliable cleaning and renovation services designed to keep your spaces clean, comfortable, and refreshed—from deep cleaning to full renovations, all delivered with exceptional attention to detail.
          </p>
        </div>
        <img className="about_fotografia" src={aboutthecomp} alt="office" />{" "}
      </section>
  );
};

export default ContactUs;
