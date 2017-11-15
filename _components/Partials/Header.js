import React from 'react';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Header extends React.Component {

    render() {
        const { header } = this.props;
        return (
          <View style={styles.app_header}>
            <View style={{flex: 1, flexDirection: 'row'}}>

              <View>
                <Link to="/"><Text style={styles.app_name}>{header.title}</Text></Link>
              </View>

              <View style={styles.main_menu}>
                <Link to="/faces"><Text style={styles.icons}><FontAwesome>{Icons.smileO}</FontAwesome></Text></Link>
                <Link to="/users"><Text style={styles.icons}><FontAwesome>{Icons.users}</FontAwesome></Text></Link>
                <Link to="/login"><Text style={styles.icons}><FontAwesome>{Icons.signOut}</FontAwesome></Text></Link>
              </View>

            </View>
          </View>
        );
    }
}

let ScreenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  app_header: {
    backgroundColor: '#2b3643',
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  app_name: {
    color: '#ffffff',
    fontSize: 22,
    lineHeight: 35,
    fontWeight: 'bold',
    width: ScreenWidth - 130
  },
  main_menu: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  icons: {
    color: '#ffffff',
    padding: 7,
    fontSize: 26
  }
});

function mapStateToProps(state) {
    const { header } = state;
    return {
        header
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };