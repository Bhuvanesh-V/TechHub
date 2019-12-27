import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TextInput,
  Alert
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HubPlayer } from './src/components/HubPlayer';
import { Home } from './src/components/Home';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'SyncfusionHub LogIn',
  };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar style={styles.statusbar}></StatusBar>
      <Image source={require('./src/images/logo.png')} style={styles.logo} ></Image>
      <TextInput placeholder="User Name" style={styles.inputtxt}></TextInput>
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputtxt}></TextInput>
      <Button title="LogIn" color={"#7029e9"} onPress={this._signInAsync} style={styles.loginbtn}></Button>
      </View>
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
  };

  render() {
    return (
      <View style={styles.container}>
        <Home playVideo={this._showMoreApp}/>
      </View>
    );
  }

  _showMoreApp = (e) => {
    //Alert.alert(e.url);
    PlayerScreen.navigationOptions.title = e.name;
    this.props.navigation.navigate('Player', {url: e.url, name: e.name});
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class PlayerScreen extends React.Component {
  static navigationOptions = {
    //title: 'Video Player',
  };
  render() {
    const { url } = this.props.navigation.state.params.url;
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
inputtxt: {
    marginVertical: 10,
    borderColor: "#7029e9",
    borderWidth: 1,
    fontSize: 16,
    textAlign: "center",
    borderRadius: 5,
    width: "70%",
    color: '#000000'
},
loginbtn: {
    fontSize: 16,
    width: "90%",
},
logintxt: {
    fontSize: 18,
    color: '#FFFFFF'
},
statusbar: {
    backgroundColor: '#B894F6'
}, 
logo: {
    width: 80,
    height: 80
},
  loginbtn: {
    fontSize: 16,
    borderRadius: 50,
    color: '#FFFFFF'
  },
});

const AppStack = createStackNavigator({ Home: HomeScreen, Player: PlayerScreen });
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
