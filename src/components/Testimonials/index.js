import teaImg from '../../assets/photos/tea.jpg'
import '../../utils/style.css'

const Testimonials = () => {
    return (
        <section className="testimonial_section">


            {/* MAPPING STARTS HERE */}
            <div className="test_card">
                <h2 className="test_header">TESTIMONIALS HEADER</h2>
                <p className="test_para">
                    <img className="testimonial_port" src={teaImg} alt="fotoDeusuarios" />
                    Username</p>
                <p> Description</p>
            </div>


            <div>
                <h2 className="test_header">TESTIMONIALS HEADER</h2>
                <p className="test_para">
                    <img className="testimonial_port" src={teaImg} alt="fotoDeusuarios" />
                    Username</p>
                <p> Description</p>
            </div>


            <div>
                <h2 className="test_header">TESTIMONIALS HEADER</h2>
                <p className="test_para">
                    <img className="testimonial_port" src={teaImg} alt="fotoDeusuarios" />
                    Username</p>
                <p> Description</p>
            </div>
            {/* MAPPING ENDS */}

        </section>);
}

export default Testimonials;