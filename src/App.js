import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Services from './pages/Services/Services';
import Home from './pages/Home';
import './App.css'
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import ContentPage from './templates/ContentPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <div style={{ paddingTop: "90px", backgroundColor: "white" }}>
            <Route path="/zakres-uslug/:id?/:id2?" exact component={Services} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
