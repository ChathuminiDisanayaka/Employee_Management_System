
import './App.css';
import ListEmployee from "./component/ListEmployee";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import CreateEmployee from "./component/CreateEmployee";

function App() {
  return (
          <Router>
              <div className="container">
                  <Header/>
                  <div className="container">
                        <Switch>
                          <Route exact path="/">
                            <ListEmployee/>
                          </Route>
                          <Route path="/add-employees">
                              <CreateEmployee/>
                          </Route>
                        </Switch>
                  </div>
                  <Footer/>
              </div>
          </Router>
  );
}

export default App;
