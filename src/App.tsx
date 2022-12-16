import Mockup from "./Mockup"

function App() {
  return (
    <>
      <header
        style={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="mediakeys.png" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Mockup />
    </>
  );
}

export default App;
