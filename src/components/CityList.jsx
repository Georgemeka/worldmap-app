// import PropTypes from "prop-types"; // Import PropTypes

import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map " />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} isLoading={isLoading} key={city.id} />
      ))}
    </ul>
  );
}

// Define PropTypes for the props
// CityList.propTypes = {
//   cities: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       // Add other required properties here if needed
//     })
//   ).isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };

export default CityList;
