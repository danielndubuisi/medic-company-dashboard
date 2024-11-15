import spinner from "../images/spinner.gif";

const Spinner = () => {
    return (
    <div className="spinner">
        <img src={spinner} alt="loading" />
        <h1>Fetching data...</h1>
    </div>
    );
};

export default Spinner;