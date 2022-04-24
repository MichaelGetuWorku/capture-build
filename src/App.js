import React from 'react';
//Router
import { Switch, Route, useLocation, BrowserRouter } from 'react-router-dom';
//Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//style
import GlobalStyle from './components/GlobalStyle';
//animation
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation(); //like useHistory but it will give us the key of the page we are on
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={AboutUs} />
            <Route exact path="/work" component={OurWork} />
            {/* hear we used exact so we can pass id and go to movie Details */}
            <Route path="/work/:id" component={MovieDetail} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
