import './App.css';
import {Footer, Header} from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Trade, Account} from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/account" element={<Account />} />
          </Routes>
      <Footer />
    </>
  );
}

export default App;
