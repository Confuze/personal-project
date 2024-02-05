import { useState, useEffect } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import Calendar from "../components/calendar";

const Home = ({ navigation }) => {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    (async function () {
      const storedName = await AsyncStorage.getItem("username");
      if (storedName) {
        setUserName(storedName);
      }
    })();
  }, []);

  async function userNameChange(e) {
    if (e.nativeEvent.text) {
      await AsyncStorage.setItem("username", e.nativeEvent.text);
    }
  }

  return (
    <View className="h-full flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-bg text-fg"
      >
        <View className="items-center m-4 mb-0 flex-row">
          <Text className="inline text-3xl text-fg">Hello, </Text>
          <TextInput
            className="inline text-3xl text-fg h-9"
            onSubmitEditing={(e) => userNameChange(e)}
          >
            {userName}
          </TextInput>
          <AntDesign
            className="h-9 fg-white bg-white"
            color="#E5DADA"
            name="edit"
            size={24}
          />
        </View>
        <Calendar navigation={navigation} />
        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
};

export default Home;
