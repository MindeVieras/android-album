import React from 'react';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, Dimensions } from 'react-native';

// import { userActions } from '../../_actions';

// require('../../../scss/login/login.scss');

class LoginPage extends React.Component {
    // constructor(props) {
    //     super(props);

    //     // reset login status
    //     this.props.dispatch(userActions.logout());

    //     this.state = {
    //         username: '',
    //         password: '',
    //         submitted: false
    //     };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(e) {
    //     const { name, value } = e.target;
    //     this.setState({ [name]: value });
    // }

    // handleSubmit(e) {
    //     e.preventDefault();

    //     this.setState({ submitted: true });
    //     const { username, password } = this.state;
    //     const { dispatch } = this.props;
    //     if (username && password) {
    //         dispatch(userActions.login(username, password));
    //     }
    // }

    render() {
        //const { loggingIn, alert } = this.props;
        //const { username, password, submitted } = this.state;
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text>Loogin page.</Text>
                        <Link to="/"><Text>HOME</Text></Link>
{/*                        <Button
                          raised
                          icon={{name: 'home', size: 32}}
                          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                          textStyle={{textAlign: 'center'}}
                          title={`Welcome to\nReact Native Elements`}
                        />*/}
                    </View>
                </View>
{/*
                    <form name="form" id="login_form" className="form-signin" onSubmit={this.handleSubmit}>

                        <input type="text" id="username" placeholder="Username" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        <input type="password" id="password" placeholder="Password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        <button className="btn btn-lg btn-primary btn-block" id="login-button">Login</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }

                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }

                    </form>

            */}
            </View>
        );
    }
}
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#76b852',
    height: ScreenHeight
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    backgroundColor: '#ffffff',
    width: 360,
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 35,
    paddingRight: 35
  }
});

function mapStateToProps(state) {
    // const { loggingIn } = state.authentication;
    // const { alert } = state;
    // return {
    //     loggingIn,
    //     alert
    // };
    return state;
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };


