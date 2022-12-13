import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cities from "../views/Cities";
// import Hotels from "../views/Hotels";
// import Home from "../views/Home";
// import CityDetail from "../views/CityDetail";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const cityStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <cityStackNavigator.Navigator>

      <cityStackNavigator.Screen name="Cities" component={Cities} />
      {/* <cityStackNavigator.Screen name="Hotels" component={Hotels} />
      <cityStackNavigator.Screen name="CityDetail" component={CityDetail} /> */}
    </cityStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTitleStyle: {
            color: "black",
          },
          tabBarStyle: { backgroundColor: "#fd9233", color: "black" },
        }}
      >
        {/* <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Cities"
          component={MyStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="map" size={24} color="black" />
            ),
          }}
        />
        {/* <Tab.Screen
          name="CityDetail"
          component={CityDetail}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="map" size={24} color="black" />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
