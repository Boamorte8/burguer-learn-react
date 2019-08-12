import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/orders" component={Orders} />
          <Route path="/order" component={BurguerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Redirect from="/" to="/order" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
