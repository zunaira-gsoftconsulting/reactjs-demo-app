import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "../../components/Login";
export default function LoginContainer() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("token", "ejma01290lalk109019njshaaajjaiaj109109y");
    history.push("/");
  };

  return <Login onSubmit={onSubmit} loading={loading} />;
}
