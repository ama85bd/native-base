import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screen/RegisterScreen';
import HomeScreen from '../screen/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../store/store';
import Footer from '../components/footer/Footer';
import { useCallback, useEffect } from 'react';
import { fetchCurrentUser, signOut } from '../slices/login/loginSlice';
import LeaveApplicationScreen from '../screen/LeaveApplicationScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from '../screen/ProfileScreen';
import IconButton from '../components/UI/IconButton';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Layout: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.login);
  function logOut() {
    dispatch(signOut());
  }
  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);
  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
      ) : (
        <BottomTab.Navigator
          sceneContainerStyle={{ backgroundColor: '#f7f7e6' }}
          screenOptions={{
            headerRight: ({ tintColor }) => (
              <IconButton
                icon='log-out-outline'
                size={30}
                color={tintColor}
                onPress={logOut}
              />
            ),
            headerStyle: { backgroundColor: '#4b1d03' },
            headerTintColor: '#f8f7f7',

            tabBarStyle: { backgroundColor: '#ebd6ca' },

            tabBarInactiveTintColor: '#cdbeb6',
            tabBarActiveTintColor: '#5e2707',
            tabBarActiveBackgroundColor: '#d2bfb4',
            tabBarInactiveBackgroundColor: '#4b1d03',
          }}
        >
          <BottomTab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              // headerRight: ({ tintColor }) => (
              //   <IconButton
              //     icon='log-out-outline'
              //     size={30}
              //     color={tintColor}
              //     onPress={logOut}
              //   />
              // ),
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='home' color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name='LeaveApplication'
            component={LeaveApplicationScreen}
            options={{
              title: 'Leave',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name='application'
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{
              title: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='person' color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Layout;
