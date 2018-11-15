import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword';
import Invoice from './components/dashboard/viewInvoice/index';
import NotFound from './components/NotFound/NotFound';
import Defaultlayout from './components/dashboard/defaultLayout/defaultLayout'
import Forms from './components/dashboard/createInvoice/index';
import Updateform from './components/dashboard/updateInvoice/index';
import Email from './components/dashboard/email/index'
import Cleintforms from './components/dashboard/clientCreateInvoice/index'
import Clientformupdate from './components/dashboard/clientUpdateInvoice/index'
import Clientiviewinvoice from './components/dashboard/clientViewInvoice/index';

// class App extends React.Component {
//   render() {
//     return (
//      <Router>
//      <div>
//      <Switch>
//             <Route exact path="/" component={Signin} />
//             <Route path="/Signup" component={Signup} />
//             <Route path="/ForgotPassword" component={ForgotPassword} />
//             <Route path="/Invoice" component={PrintData} />
//             <Route path="/sidebar" component={Sidebar} />
//             <Route path="/form" component={Form} />
//             <Route  component={NotFound} />
//      </Switch>
//      </div>
//     </Router>
    
//     );
//   }
// }
const App =() =>(
  <div>
     <Router>
    
     <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/Signup" component={Signup} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            
            <Route path="/defaultLayout" component={Defaultlayout} />
            <Route path="/createInvoice" component={Forms} />
            <Route path="/updateInvoice" component={Updateform} />
            <Route path="/viewInvoice" component={Invoice} />
            <Route path="/email" component={Email} />
            <Route path="/clientCreateInvoice" component={Cleintforms} />
            <Route path="/clientUpdateInvoice" component={Clientformupdate} />
            <Route path="/clientViewInvoice" component={Clientiviewinvoice} />
          
            <Route  component={NotFound} />
     </Switch>
    </Router>
    </div>
);


export default App;
