import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FlashMessage from "react-native-flash-message";
import Login from './src/pages/Login';
import Sign from './src/pages/Sign';
import Messages from './src/pages/Messages';
import colors from './src/colors/colors';

const Stack = createStackNavigator();

const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const logOut = () => { auth().signOut() }

  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerBackAccessibilityLabel: false }}>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Sign' component={Sign} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !user ?

            (<Stack.Screen name='AuthStack' component={AuthStack} options={{ headerShown: false }} />)

            :
            (<Stack.Screen name='Messages' component={Messages}
              options={{
                title: 'Social App',
                headerTitleAlign: 'center',
                headerTintColor: colors.darkGreen,
                headerRight: () => (
                  <Icon name="logout" size={30} color={colors.darkGreen} onPress={logOut} />
                )
              }}
            />)
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App

