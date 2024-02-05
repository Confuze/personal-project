import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import onSubmit from "../lib/formSubmit";
import Sections from "../components/sections";
import Slider from "@react-native-community/slider";
import Picker from "react-native-picker-select";
import { SettingsContext } from "../lib/context";
import { useContext } from "react";
import { settingsDefaults } from "../lib/defaults";

const Settings = ({ navigation }) => {
  const { settings, setSettings } = useContext(SettingsContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      ...settingsDefaults,
      ...settings,
    },
  });

  return (
    <View className="bg-bg h-full pt-6 text-fg">
      <Sections
        onSubmit={handleSubmit((data) => {
          onSubmit(data, setSettings, navigation);
        })}
        submitText="Save settings"
      >
        <>
          <Controller
            control={control}
            name="carType"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    What fuel does you car use
                  </Text>

                  <View className="bg-fg rounded-lg my-2">
                    <Picker
                      value={value}
                      placeholder={{}}
                      onValueChange={onChange}
                      items={[
                        { label: "Gasoline", value: 15 },
                        { label: "Hydrogen", value: 10 },
                        { label: "Electric", value: 5 },
                      ]}
                    />
                  </View>
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="carFuel"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">
                      How fuel-efficient is your car?
                    </Text>
                    <Text className="text-fg inline">{value}</Text>
                  </View>
                  <Slider
                    value={value}
                    onValueChange={onChange}
                    minimumTrackTintColor="#44CF6C"
                    maximumTrackTintColor="#777"
                    thumbTintColor="#44CF6C"
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                  />
                  <Text className="text-gray-500 text-xs">
                    0 - tiny 2-person car; 100 - truck
                  </Text>
                </>
              );
            }}
          />
        </>
        <>
          <Controller
            control={control}
            name="houseSize"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">
                      How big is your house?
                    </Text>
                    <Text className="text-fg inline">{value} m^2</Text>
                  </View>
                  <Slider
                    value={value}
                    className="text-acc"
                    onValueChange={onChange}
                    minimumTrackTintColor="#44CF6C"
                    maximumTrackTintColor="#777777"
                    thumbTintColor="#44CF6C"
                    minimumValue={20}
                    maximumValue={1200}
                    step={1}
                  />
                  <Text className="text-gray-500 text-xs">
                    20 - tiny room; 1200 - mansion
                  </Text>
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="houseEnergy"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">
                      How energy-efficient is your house?
                    </Text>
                    <Text className="text-fg inline">{value}</Text>
                  </View>
                  <Text className="text-gray-500 text-xs">
                    Is your light's energy consumption high? How well
                    heat-insulated is your house? etc.
                  </Text>
                  <Slider
                    value={value}
                    className="text-acc"
                    onValueChange={onChange}
                    minimumTrackTintColor="#44CF6C"
                    maximumTrackTintColor="#777"
                    thumbTintColor="#44CF6C"
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                  />
                  <Text className="text-gray-500 text-xs">
                    0 - very ineficient; 100 - very efficient
                  </Text>
                </>
              );
            }}
          />
        </>
      </Sections>
      <StatusBar style="light" />
    </View>
  );
};

export default Settings;
