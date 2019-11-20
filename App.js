import React from 'react';
import { AppRegistry, View } from 'react-native';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Feed from './screens/Feed';
import Detail from './screens/Detail';
import { defaults, resolvers } from './resolvers';
import { typeDefs } from './schema';

const client = new ApolloClient({
  uri: 'https://dog-graphql-api.glitch.me/graphql',
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <View>
            <Switch>
              <Route path="/" exact component={Feed} />
              <Route path="/:breed/:id" component={Detail} />
            </Switch>
          </View>
        </Router>
      </ApolloProvider>
    );
  }
}
