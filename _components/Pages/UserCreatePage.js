import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { View, Text, TouchableOpacity, TextInput, CheckBox, Picker, StyleSheet } from 'react-native';

import { headerActions, footerActions } from '../../_actions';

class UserCreatePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(headerActions.titleChange('Create user'));
        this.props.dispatch(footerActions.linksClear());
        this.props.dispatch(footerActions.linkUserCreate(true));
    }

    render() {
        return (
            <View style={{paddingTop:15}}>
                <Field name="username" component={usernameInput} />
                <Field name="display_name" component={displayNameInput} />
                <Field name="email" component={emailInput} />
                <Field name="password" component={passwordInput} />
                <Field name="access_level" component={accessLevelInput} />
            </View>
        );
    }
}

const usernameInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.text_input} placeholder="Username" placeholderTextColor="#eeeeee" onChangeText={onChange} {...restInput} />
}
const displayNameInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.text_input} placeholder="Display name" placeholderTextColor="#eeeeee" onChangeText={onChange} {...restInput} />
}
const emailInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.text_input} placeholder="Email" placeholderTextColor="#eeeeee" keyboardType="email-address" onChangeText={onChange} {...restInput} />
}
const passwordInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.text_input} placeholder="Password" placeholderTextColor="#eeeeee" secureTextEntry={true} onChangeText={onChange} {...restInput} />
}
const accessLevelInput = ({ input: { onChange, ...restInput }}) => {
    return <Picker
                style={styles.picker}
                selectedValue="50"
                onValueChange={onChange}
                {...restInput}
            >
                <Picker.Item label="Administrator" value="100" />
                <Picker.Item label="Simple user" value="50" />
            </Picker>
}

const styles = StyleSheet.create({
    // label: {
    //     color: '#ffffff',
    //     marginLeft: 10,
    //     marginRight: 10,
    //     marginBottom: 5
    // },
    text_input: {
        backgroundColor: 'rgba(0,0,0,0.25)',
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#fafafa',
        textAlign: 'center'
    },
    picker: {
        backgroundColor: 'rgba(0,0,0,0.25)',
        borderRadius: 3,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#fafafa'
    }
});

const connectedUserCreatePage = reduxForm({
    form: 'user_create'
})(UserCreatePage);
export { connectedUserCreatePage as UserCreatePage };

