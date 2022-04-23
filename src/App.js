import React from 'react';
//Router
import { Switch, Route } from 'react-router-dom';
//Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//style
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/work" component={OurWork} />
          {/* hear we used exact so we can pass id and go to movie Details */}
          <Route path="/work/:id" component={MovieDetail} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
