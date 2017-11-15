import React from 'react';
import { Switch, Route } from 'react-router-native';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { alertActions } from '../_actions';
import { Header, HomePage, UsersPage, UserCreatePage, NoMatch, Footer } from '../_components';

class BaseLayout extends React.Component {

    constructor(props) {
        super(props);

        const { dispatch, history } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert, history } = this.props;
        return (
            <View style={styles.wrapper}>
                <Image
                    style={{
                        flex: 1,
                        resizeMode: 'cover',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center'
                    }}
                    source={{ uri: 'https://s3-eu-west-1.amazonaws.com/app.mindelis.com/images/bg.jpg' }}
                />
                <Header />
                <View>
                    {alert.message &&
                        <View style={styles.alert}>
                                <Text>{alert.message}</Text>
                        </View>
                    }
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/users" component={UsersPage} />
                        <Route path="/user-create" component={UserCreatePage} />
                        <Route component={NoMatch} />
                    </Switch>
                </View>
                <Footer history={history} />
                
{/*            <div className="app-wrapper" id="app_wrapper">
            <div>
                <Header />
                <div id="app_content">

                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <PrivateRoute path="/users" component={UsersPage} />
                        <PrivateRoute path="/user-create" component={UserCreatePage} />
                        <PrivateRoute component={NoMatch} />
                    </Switch>
                </div>
                <Footer />
            </div>
            </div>*/}
            </View>
        );
    }
}

let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2b3643',
    height: ScreenHeight
  },
  alert: {
    backgroundColor: '#505050'
  }
});

function mapStateToProps(state) {
    // const { alert } = state;
    // return {
    //     alert
    // };
    return state;
}

const connectedHomePage = connect(mapStateToProps)(BaseLayout);
export { connectedHomePage as BaseLayout };