import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User } from "../type/UserType";

interface Form {
  name: string;
  email: string;
  role: string;
  isActive: boolean;
}

interface Props {
  onCreate: (user: User) => void;
}

const UserForm: React.FC<Props> = ({ onCreate }) => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    role: "",
    isActive: false,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.role) {
      toast.error("Please fill the form!");
      return;
    }

    onCreate({
      name: form.name,
      email: form.email,
      role: form.role,
      isActive: form.isActive,
    });
    setForm({ name: "", email: "", role: "", isActive: false });
  };

  const updateField = (field: keyof Form, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div
        className="card shadow-sm"
        style={{ width: "350px", maxHeight: "290px" }}
      >
        <div className="card-body">
          <h5 className="card-title mb-3">Create User</h5>

          <form onSubmit={onSubmit}>
            <div className="row">
              {}
              <div className="col-6 mb-3">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  value={form.name}
                  placeholder="John"
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </div>

              {}
              <div className="col-6 mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="example@mail.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              {}
              <div className="col-8 mb-3">
                <label htmlFor="inputRole" className="form-label">
                  Role
                </label>
                <select
                  id="inputRole"
                  className="form-select"
                  value={form.role}
                  onChange={(e) => updateField("role", e.target.value)}
                >
                  <option value="" disabled>
                    Choose...
                  </option>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="EDITOR">EDITOR</option>
                </select>
              </div>

              {}
              <div className="col-4 d-flex align-items-center">
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="isActive"
                    checked={form.isActive}
                    onChange={(e) => updateField("isActive", e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="isActive">
                    Active
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              Save
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default UserForm;
