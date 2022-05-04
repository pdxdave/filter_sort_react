import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage'
import SingleProductPage from './pages/SingleProductPage'
import './App.css';

function App() {
  return (
    <Router>
        <Route exact path="/">
          <ProductPage />
        </Route>
        <Route path="/product/:id" children={<SingleProductPage />} />
    </Router>
  );
}

export default App;
