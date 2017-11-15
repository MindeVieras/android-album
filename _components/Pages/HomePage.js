import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { headerActions, footerActions } from '../../_actions';

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(headerActions.titleChange('Dashboard'));
        this.props.dispatch(footerActions.linksClear());
    }

    render() {
        // const { user } = this.props;
        return (
            <View>
                <Text>homepage</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
