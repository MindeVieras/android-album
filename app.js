import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { LoginPage, BaseLayout } from './_components';
// import { history } from './_helpers';

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Switch>
            {/*<Route exact path="/" component={HomePage} />*/}
            <Route path="/login" component={LoginPage} />
            <Route component={BaseLayout} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
};

function mapStateToProps (state) {
  return state;
};

export default connect(
  mapStateToProps
)(App);
