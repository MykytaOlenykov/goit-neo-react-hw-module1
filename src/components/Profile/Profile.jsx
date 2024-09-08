import PropTypes from "prop-types";
import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) {
  return (
    <div className={css.root}>
      <div className={css["user-info"]}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css["stats-list"]}>
        {Object.entries(stats).map(([key, value]) => {
          return (
            <li key={key} className={css["stat-item"]}>
              <span className={css["stat-label"]}>{key}</span>
              <span className={css["stat-quantity"]}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
