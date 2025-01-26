import { useState } from 'react';
import './App.css';
import Welcome from './welcome';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>BDD and Component Test</h1>
      <div className="card">
        <Welcome />
        <button onClick={() => setCount((count) => count + 1)}>
          the count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
