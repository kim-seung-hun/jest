import Hello from "./component/Hello";
import Timer from "./component/Timer";

function App() {
  const uesr = {
    name: "huni",
    age: 30,
  };
  return (
    <div className="App">
      <Hello user={uesr} />
      <Timer />
    </div>
  );
}

export default App;
