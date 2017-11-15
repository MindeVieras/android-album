import React from 'react';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { alertActions, userActions } from '../../_actions';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    goToUserCreate() {
      const { history } = this.props;
      history.push('/user-create');
    }

    userCreate(value) {
      const form = this.props.form.user_create;
      const formData = form.values;

      this.props.dispatch(userActions.create(formData));

    }

    render() {
        
        const footerLinks = this.props.footer.links;
        
        return (
          <View style={styles.app_footer}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Link to="/trash"><Text style={styles.icons}><FontAwesome>{Icons.trash}</FontAwesome></Text></Link>
                <Link to="/unattached-media"><Text style={styles.icons}><FontAwesome>{Icons.cloudDownload}</FontAwesome></Text></Link>
              </View>

              <View>
                {footerLinks.goto_user_create &&
                  <Button
                      onPress={this.goToUserCreate.bind(this)}
                      title="New user"
                      color="#5cb85c"
                    />
                }
                {footerLinks.user_create &&
                  <Button
                      onPress={this.userCreate.bind(this)}
                      title="Save"
                      color="#5cb85c"
                    />
                }
              </View>

            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  app_footer: {
    backgroundColor: '#505050',
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    bottom: 21,
    left: 0,
    right: 0
  },
  icons: {
    color: '#ffffff',
    padding: 7,
    fontSize: 26
  }
});

function mapStateToProps(state) {
  // const { footer, form } = state;
  // return {
  //   footer,
  //   form
  // };
  return state;
}

const connectedFooter = connect(mapStateToProps)(Footer);
export { connectedFooter as Footer };

