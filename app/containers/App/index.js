// @flow
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
import Header from 'components/Header';
import Budget from 'routes/Budget';
import Reports from 'routes/Reports';
import TransactionDetails from 'routes/TransactionDetails';
import './style.scss';

const App = () => (
  <ErrorBoundary fallbackComponent={AppError}>
    <main>
      <Header />

      <Switch>
        <Route exact path="/budget" component={Budget} />
        <Route path="/budget/transaction/:id" component={TransactionDetails} />
        <Route path="/reports" component={Reports} />
        <Redirect to="/budget" />
      </Switch>
    </main>
  </ErrorBoundary>
);

export default App;
