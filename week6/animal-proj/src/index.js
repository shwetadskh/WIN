import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './header'
import About from './about'
import reportWebVitals from './reportWebVitals';
import ProductsInfo from './product-list';
import Footer from './footer'


ReactDOM.render(
    <React.StrictMode>
         <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/products" component={ProductsInfo} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
     
    </React.StrictMode> ,
    document.getElementById('root')
  );

  ReactDOM.render(<Footer />, document.getElementById('footerContainer'));


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
