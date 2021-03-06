import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

import Index from "views/Index.js";
import SingleRoom from "views/SingleRoom/SingleRoom";
import ThankYouPage from "views/ThankYouPage/ThankYouPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route exact path="/showRoomById/:id" render={(props) => <SingleRoom {...props} />} />
        <Route exact path="/thankyoupage" render={(props) => <ThankYouPage {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
