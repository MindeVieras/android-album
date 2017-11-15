import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { headerActions, footerActions } from '../../_actions';

class NoMatch extends React.Component {
    
  componentDidMount() {
    this.props.dispatch(headerActions.titleChange('Not Found'));
    this.props.dispatch(footerActions.linksClear());
  }

  render() {
    return (
      <View>
        <Text>404 Not Found!</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const connectedNoMatch = connect(mapStateToProps)(NoMatch);
export { connectedNoMatch as NoMatch };