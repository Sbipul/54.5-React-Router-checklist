import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import ChartOne from './component/Chart/ChartOne';
import Footer from './component/Footer/Footer';
import Error from './component/Error/Error';
import Details from './component/Details/Details';
import VisitorDetails from './component/VisitorDetails/VisitorDetails';

function App() {
  return (
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
  );
}

export default App;