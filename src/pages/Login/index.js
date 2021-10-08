import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const handleLogin = () => {
    localStorage.setItem("token", "ejma01290lalk109019njshaaajjaiaj109109y");
    history.push("/");
  };
  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
