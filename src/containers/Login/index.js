import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "../../components/Login";
import { details } from "../../redux/reducers/auth";

export default function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("token", "ejma01290lalk109019njshaaajjaiaj109109y");
    dispatch(details({ user: data.email }));
    history.push("/");
  };

  return <Login onSubmit={onSubmit} />;
}
