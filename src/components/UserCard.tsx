import React from "react";
import { User } from "../type/UserType";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="card shadow-sm mb-2" style={{ width: "230px" }}>
      <div className="card-body text-center p-2">
        <img
          src="https://randomuser.me/api/portraits/men/64.jpg"
          className="rounded-circle border mb-2"
          width="60"
          height="60"
          alt="Profile"
        />

        <h6
          className="fw-bold text-truncate mb-1"
          style={{ maxWidth: "100%" }}
          title={user.name}
        >
          {user.name}
        </h6>

        <p
          className="text-muted text-truncate mb-1"
          style={{ maxWidth: "100%", fontSize: "0.8rem" }}
          title={user.email}
        >
          <i className="fas fa-envelope me-1"></i>
          {user.email}
        </p>

        <span className="badge bg-info mb-2" style={{ fontSize: "0.7rem" }}>
          {user.role}
        </span>

        <div>
          <span
            className={`badge px-2 py-1 ${
              user.isActive ? "bg-success" : "bg-secondary"
            }`}
            style={{ fontSize: "0.75rem" }}
          >
            {user.isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
