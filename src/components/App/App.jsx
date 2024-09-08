import Profile from "../Profile";
import FriendList from "../FriendList";
import TransactionHistory from "../TransactionHistory";

import css from "./App.module.css";

import userData from "../../db/userData.json";
import friends from "../../db/friends.json";
import transactions from "../../db/transactions.json";

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
