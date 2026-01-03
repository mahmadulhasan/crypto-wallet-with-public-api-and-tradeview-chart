import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { View } from 'react-native';

import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Trade from '../Pages/Trade';
import Market from '../Pages/Market';
import Profile from '../Pages/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const icons = {
            Home: "home-outline",
            Portfolio: "wallet-outline",
            Trade: "swap-vertical-outline",
            Market: "stats-chart-outline",
            Profile: "person-outline",
          };

          // 🔥 SPECIAL TRADE BUTTON
          if (route.name === "Trade") {
            return (
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 27.5,
                  backgroundColor: "#02ff89ff",
                  borderWidth: 6,
                  borderColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 30,
                  elevation: 6,
                }}
              >
                <Ionicons
                  name={icons[route.name]}
                  size={28}
                  color="#000"
                />
              </View>
            );
          }

          // Normal tabs
          return (
            <Ionicons
              name={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "#02ff89ff",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 20,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen
        name="Trade"
        component={Trade}
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.setParams({ coin: null });
          },
        })}
      />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
