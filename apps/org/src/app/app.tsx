import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { Products } from '@org/products';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
