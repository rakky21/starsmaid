import '../../utils/style.css'

const Inquires = ({ loading, error, data, children }) => {
  if (error) {
    return <p> Error: {error.message}</p>;
  }
  if (loading) {
    return <div> Loading...</div>;
  }
  if (!data) {
    return <p> No data has been entered</p>;
  }
  if (data) {
    return children;
  }
};

export default Inquires;