import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { View, Text } from "react-native";
import { useColorScheme } from "react-native";
import { BLACK_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

//screenOptions는 navigator의 모든 screen 에 적용
const Tabs = () => {
    const isDark = useColorScheme() === "dark"; //라이트이지 다크인지 확인
    return (
        <Tab.Navigator
            initialRouteName="Movies"
            // screenOptions={{
            //     tabBarStyle: {
            //         backgroundColor: isDark ? BLACK_COLOR : "white",
            //     },
            //     tabBarActiveTintColor: isDark ? "#ffa801" : BLACK_COLOR,
            //     tabBarInactiveTintColor: isDark ? "#d2dae2" : "#808e9b",
            //     headerStyle: {
            //         backgroundColor: isDark ? BLACK_COLOR : "white",
            //     },
            //     headerTitleStyle: {
            //         color: isDark ? "white" : BLACK_COLOR,
            //     },
            // }}
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
};

export default Tabs;
