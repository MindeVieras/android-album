import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { headerActions, footerActions } from '../../_actions';

class UsersPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(headerActions.titleChange('Users'));
        this.props.dispatch(footerActions.linksClear());
        this.props.dispatch(footerActions.linkGoToUserCreate(true));
    }

    render() {
        return (
            <View>
                <Text>Users list</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const connectedUserCreatePage = connect(mapStateToProps)(UsersPage);
export { connectedUserCreatePage as UsersPage };