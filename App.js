//react
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

//redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//StackScreen
import MyDiaryScreen from "./StackScreen/MyDiaryScreen";
import OtherDiaryScreen from "./StackScreen/OtherDiaryScreen";

//Admob
import { AdMobBanner } from "expo-ads-admob";
import { AdMobBannerKey } from "./AdmobKey";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (focused === true) {
                  size = 25;
                } else if (focused === false) {
                  size = 18;
                }

                if (route.name === "MyDiaryScreen") {
                  return <Entypo name="open-book" size={size} color={color} />;
                } else if (route.name === "OtherDiary") {
                  return (
                    <MaterialCommunityIcons
                      name="human-male-male"
                      size={size}
                      color={color}
                    />
                  );
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato", // 탭 활성
              inactiveTintColor: "gray", // 탭 비활성
            }}
          >
            <Tab.Screen
              name="MyDiaryScreen"
              component={MyDiaryScreen}
              options={() => {
                return {
                  title: "나의 일기",
                };
              }}
            />
            <Tab.Screen
              name="OtherDiary"
              component={OtherDiaryScreen}
              options={() => {
                return {
                  title: "공유 일기",
                };
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID={AdMobBannerKey} // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds={true} // true or false
        />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
