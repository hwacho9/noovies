import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

//screenOptions는 navigator의 모든 screen 에 적용
const Tabs = () => (
    <Tab.Navigator
        initialRouteName="Movies"
        screenOptions={{
            tabBarActiveTintColor: "red",
        }}
    >
        <Tab.Screen
            name="Movies"
            component={Movies}
            options={{
                headerRight: () => (
                    <View>
                        <Text>Hello</Text>
                    </View>
                ),
            }}
        />
        <Tab.Screen
            name="Tv"
            component={Tv}
            options={{
                tabBarBadge: "hi",
            }}
        />
        <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
);

export default Tabs;
