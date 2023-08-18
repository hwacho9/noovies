import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { View, Text } from "react-native";
import { useColorScheme } from "react-native";
import { BLACK_COLOR } from "../colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

//screenOptions는 navigator의 모든 screen 에 적용
const Tabs = () => {
    const isDark = useColorScheme() === "dark"; //라이트이지 다크인지 확인
    return (
        <Tab.Navigator
            initialRouteName="Movies"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: isDark ? BLACK_COLOR : "white",
                },
                tabBarActiveTintColor: isDark ? "#ffa801" : BLACK_COLOR,
                tabBarInactiveTintColor: isDark ? "#d2dae2" : "#808e9b",
                headerStyle: {
                    backgroundColor: isDark ? BLACK_COLOR : "white",
                },
                headerTitleStyle: {
                    color: isDark ? "white" : BLACK_COLOR,
                },
                tabBarLabelStyle: {
                    marginTop: -5,
                    fontSize: 12,
                    fontWeight: "600",
                },
            }}
        >
            <Tab.Screen
                name="Movies"
                component={Movies}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        // console.log(focused, color, size);
                        return (
                            <Ionicons
                                name={"ios-film-outline"}
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="TV"
                component={Tv}
                options={{
                    // tabBarBadge: "hi", //빨간 알람 점
                    tabBarIcon: ({ focused, color, size }) => {
                        console.log(focused, color, size);
                        return (
                            <Ionicons
                                name="ios-tv-outline"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        console.log(focused, color, size);
                        return (
                            <Ionicons
                                name={
                                    focused
                                        ? "ios-search"
                                        : "ios-search-outline"
                                }
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
