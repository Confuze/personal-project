import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "./src/screens/test";
import HomeWrapper from "./src/screens/homeWrapper";
import { useEffect, useReducer, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SettingsContext, AnswersContext } from "./src/lib/context";
import { settingsDefaults } from "./src/lib/defaults";

function answerReducer(state, item) {
  return { ...state, ...item };
}

export default function App() {
  const Stack = createNativeStackNavigator();
  const [settings, setSettings] = useState(settingsDefaults);
  const [answers, setAnswers] = useReducer(answerReducer, {});

  useEffect(() => {
    (async function () {
      // INFO: Loading answer data
      const answersString = await AsyncStorage.getItem("answers");

      if (typeof answersString === "string") {
        const parsedAnswers = JSON.parse(answersString);

        setAnswers(parsedAnswers);
      }

      // INFO: Loading settings data
      const settingsString = await AsyncStorage.getItem("settings");

      if (typeof settingsString === "string") {
        const parsedSettings = JSON.parse(settingsString);

        setSettings(parsedSettings);
      }
    })();
  }, []);

  // WARN: This approach causes unnecessery writes to storage e.x. when data is first read and assigned to state but for the size of the state, it's insignificant and by far most developer-friendly
  useEffect(() => {
    (async function () {
      await AsyncStorage.setItem("settings", JSON.stringify(settings));
    })();
  }, [settings]);

  useEffect(() => {
    (async function () {
      await AsyncStorage.setItem("asnwers", JSON.stringify(answers));
    })();
  }, [answers]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <AnswersContext.Provider
        value={{ answers: answers, setAnswers: setAnswers }}
      >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
              name="HomeWrapper"
              component={HomeWrapper}
              options={{ title: "Home", headerShown: false }}
            />
            <Stack.Screen
              name="DailyTest"
              component={Test}
              options={{ title: "Daily test" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AnswersContext.Provider>
    </SettingsContext.Provider>
  );
}
