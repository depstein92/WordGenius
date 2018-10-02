const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();


app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));


const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
