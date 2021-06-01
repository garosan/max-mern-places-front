import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const DUMMY_USERS = [
    {
      id: "u1",
      image:
        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
      name: "Garosan",
      places: 3,
    },
    {
      id: "u2",
      image:
        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
      name: "Maximilian",
      places: 5,
    },
    {
      id: "u3",
      image:
        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
      name: "Manu",
      places: 2,
    },
  ];
  return <UsersList items={DUMMY_USERS} />;
};

export default Users;
