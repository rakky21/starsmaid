import renovation from "../../assets/photos/renovation.jpg";
import '../../utils/style.css'

const Card = ({ PACKAGELIST }) => {
  return (
    <>
      {PACKAGELIST.map((PACKAGE) => (
        <div className="Card_body" key={PACKAGE.id}>
          <img
            className="Card_photo"
            src={renovation}
            alt="Display sameple for job"
          />
          <h2 className="Card_header"> {PACKAGE.name}</h2>
          <p className="Card_description">{PACKAGE.description}</p>
          <button className="btn"> Select </button>
          {/* When pressed, this will take you to the page
          where it will allow you to select the date and time */}
        </div>
      ))}
    </>
  );
};

export default Card;
