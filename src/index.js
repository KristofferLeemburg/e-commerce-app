import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css";
import App from './components/App';
import Contact from './pages/contact';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container'

ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <Router>
      <Switch>
      <Route path="/" exact component={App} />
      <Route path="/contact" exact component={Contact}/>
      </Switch>
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

