import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Common/Header/Header';
import PrivateRoute from './Components/Common/PrivateRoute/PrivateRoute';
import MyOrders from './Components/Admin/MyOrders/MyOrders';
import ManageOrders from './Components/Admin/ManageOrders/ManageOrders';
import Offers from './Components/Offers/Offers';
import OfferDetails from './Components/Offers/Offer/OfferDetails';
import Footer from './Components/Common/Footer/Footer';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Authentication from './Components/Authentication/Authentication';
import AddOffer from './Components/Admin/AddOffer/AddOffer';
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/offers">
              <Offers></Offers>
            </PrivateRoute>
            <PrivateRoute path="/offer/:id">
              <OfferDetails></OfferDetails>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addoffer">
              <AddOffer></AddOffer>
            </PrivateRoute>
            <Route path="/authentication">
              <Authentication></Authentication>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;