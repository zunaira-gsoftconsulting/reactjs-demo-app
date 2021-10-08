import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleLogout}>Logout</button>
      </header>
    </div>
  );
}

export default Home;
