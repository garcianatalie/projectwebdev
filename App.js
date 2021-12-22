// App.js

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import WeeklySpending from "./components/weeklyspending";
import MainPage from "./components/main";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="MainPage">
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        //options={{ title: "Main Page" }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({ title: "Sign up" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ title: "Login" }, { headerLeft: null })}
      />

      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ title: "Dashboard" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="WeeklySpending"
        component={WeeklySpending}
        options={({ title: "Weekly Spending" }, { headerLeft: null })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
