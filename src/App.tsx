import { useState } from "react";

import ToolBar from "./components/ToolBar.tsx";
import UserForm from "./components/UserForm.tsx";
import UserCard from "./components/UserCard.tsx";
import { User } from "./type/UserType";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addNewUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>

      <main className="container d-flex justify-content-between align-items-center">
        <div
          style={{
            paddingTop: "30px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            gap: "10px",
          }}
        >
          <UserForm onCreate={addNewUser} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {users.map((user, index) => {
              return <UserCard key={index} user={user} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
