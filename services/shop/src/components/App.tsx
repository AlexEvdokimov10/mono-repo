import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>PAGE SHOP</h1>
      <Outlet/>
    </div>
  );
};

export default App;
