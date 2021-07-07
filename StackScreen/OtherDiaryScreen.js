//react
import * as React from "react";
import { View, Text, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//navigate component
import OtherDiaryIndex from "../Components/OtherDiary/OtherDiaryIndex";

const Stack = createStackNavigator();

function OtherDiaryScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={OtherDiaryIndex}
        options={() => ({
          title: "공유 일기",
        })}
      />
    </Stack.Navigator>
  );
}

export default OtherDiaryScreen;
