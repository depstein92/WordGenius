import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import App from './components/app';

const client = new ApolloClient({});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
   document.querySelector('.container'));
