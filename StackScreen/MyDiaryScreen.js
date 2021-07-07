//react
import * as React from "react";
import { View, Text, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//navigate component
import MyDiaryIndex from "../Components/MyDiary/MyDiaryIndex";

const Stack = createStackNavigator();

function MyDiaryScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={MyDiaryIndex}
        options={() => ({
          title: "나의 일기",
        })}
      />
    </Stack.Navigator>
  );
}

export default MyDiaryScreen;
