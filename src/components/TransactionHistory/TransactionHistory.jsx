import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css["table-header"]}>
        <tr>
          <th className={css["table-header-cell"]}>Type</th>
          <th className={css["table-header-cell"]}>Amount</th>
          <th className={css["table-header-cell"]}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css["table-body-row"]}>
              <td
                className={`${css["table-body-cell"]} ${css["uppercase-first-letter"]}`}
              >
                {type}
              </td>
              <td className={css["table-body-cell"]}>{amount}</td>
              <td className={css["table-body-cell"]}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
