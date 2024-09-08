import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, status }) {
  return (
    <div className={css.root}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${css[status ? "online" : "offline"]}`}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
