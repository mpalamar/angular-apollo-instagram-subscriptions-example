import ApolloClient, { createNetworkInterface } from 'apollo-client';

// Polyfill fetch
import 'whatwg-fetch';

const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/cis7q7f5r27ig01420766c54k');

// This is to let the server know that the example app has started. (Not necessary for normal projects)
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {};
    }
    req.options.headers['x-graphcool-source'] = 'example:angular-apollo-instagram';
    next();
  },
}]);

export const client = new ApolloClient({ networkInterface });
