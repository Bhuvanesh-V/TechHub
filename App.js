import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HubPlayer } from './src/components/HubPlayer';
import { Home } from './src/components/Home';
import { LogIn } from './src/pages/LogIn';
import { HubList } from './src/components/HubList';
var logout = "<--"
class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'SyncfusionHub LogIn'
  };

  render() {
    return (
      <LogIn onPress={this._signInAsync}></LogIn>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    var isAuthendicated = true;
    if (isAuthendicated) {
      this.props.navigation.navigate('App');
    }
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the SyncfusionHub!',
    headerRight: () => (
      <View style={styles.signout}  onTouchEnd={this._signOutAsync}>
        <Text style={styles.logoutlabel}>X</Text>
      </View>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Home showHubList={this._showMoreList}/>
      </View>
    );
  }

  _showMoreList = (e) => {
    HubListScreen.navigationOptions.title = e.category;
    this.props.navigation.navigate('HubList', {category: e.category, subCategory: e.subCategory});
  };

  _signOutAsync = async () => {
    Alert.alert("logout");
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class HubListScreen extends React.Component {
  static navigationOptions = {
    //title: '',
    headerRight: () => (
      <View style={styles.signout} onTouchEnd={this._signOutAsync}>
        <Text style={styles.logoutlabel}>X</Text>
      </View>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <HubList playVideo={this._showhubList} subCategory={this.props.navigation.state.params.subCategory}/>
      </View>
    );
  }

  _showhubList = (e) => {
    PlayerScreen.navigationOptions.title = e.videoTitle;
    this.props.navigation.navigate('Player', {url: e.url, name: e.videoTitle});
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
class PlayerScreen extends React.Component {
  static navigationOptions = {
    //title: 'Video Player',
    headerRight: () => (
      <View style={styles.signout} onTouchEnd={this._signOutAsync}>
        <Text style={styles.logoutlabel}>X</Text>
      </View>
    )
  };
  render() {
    return (
      <HubPlayer uri={this.props.navigation.state.params.url}>
      </HubPlayer>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    width: '100%',
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffff'
},
signout: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  width:  50,
  borderRadius: 30,
  backgroundColor: '#7029e9'
},
logoutlabel: {
  fontSize: 24,
  color: '#ffffff'
}
});

const AppStack = createStackNavigator({ Home: HomeScreen, Player: PlayerScreen, HubList: HubListScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
