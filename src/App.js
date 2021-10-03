import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import ChartOne from './component/Chart/ChartOne';
import Footer from './component/Footer/Footer';
import Error from './component/Error/Error';
import Details from './component/Details/Details';
import VisitorDetails from './component/VisitorDetails/VisitorDetails';
import { createContext } from 'react';
export const NameContext = createContext();

function App() {
  const magic = 'Hello this is magic,I am here without props.Guess what? i am context api!!!'
  return (
    <NameContext.Provider value={magic}>
      <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <ChartOne></ChartOne>
          </Route>
          <Route path="/home">
            <ChartOne></ChartOne>
          </Route>
          <Route exact path="/details">
            <Details></Details>
          </Route>
          <Route path="/details/:visitorId">
            <VisitorDetails></VisitorDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
    </NameContext.Provider>
  );
}

export default App;