import Slider from "@react-native-community/slider";
import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { Text, View } from "react-native";
import Picker from "react-native-picker-select";
import { Controller, useForm } from "react-hook-form";
import { AnswersContext } from "../lib/context";
import Sections from "../components/sections";
import onSubmit from "../lib/formSubmit";
import { testDefaults } from "../lib/defaults";

const Test = ({ navigation, route }) => {
  const { answers, setAnswers } = useContext(AnswersContext);
  const { date } = route.params;
  const { control, handleSubmit } = useForm({
    defaultValues: {
      ...testDefaults,
      ...answers[date],
    },
  });

  return (
    <View className="bg-bg h-full p-4 text-fg">
      <Sections
        onSubmit={handleSubmit((data) => {
          onSubmit({ [date]: data }, setAnswers, navigation);
        })}
        submitText="Submit test"
      >
        <>
          <Text className="text-fg text-3xl">Diet</Text>
          <Controller
            control={control}
            name="animalBased"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    How much animal-based food did you eat today?
                  </Text>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">None</Text>
                    <Text className="text-fg inline">A lot</Text>
                  </View>
                  <Slider
                    value={value}
                    onValueChange={onChange}
                    minimumTrackTintColor="#44CF6C"
                    maximumTrackTintColor="#777"
                    thumbTintColor="#44CF6C"
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                  />
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="local"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    How much of your food was locally produced? ({"<"}50km)
                  </Text>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">None</Text>
                    <Text className="text-fg inline">All of it</Text>
                  </View>
                  <Slider
                    value={value}
                    onValueChange={onChange}
                    minimumTrackTintColor="#44CF6C"
                    maximumTrackTintColor="#777"
                    thumbTintColor="#44CF6C"
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                  />
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="packages"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    How much of your food was packaged in environmentally
                    friendly containers?
                  </Text>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">None</Text>
                    <Text className="text-fg inline">All of it</Text>
                  </View>
                  <Slider
                    value={value}
                    onValueChange={onChange}
                    minimumTrackTintColor="#44CF6C"
                    maximumTrackTintColor="#777"
                    thumbTintColor="#44CF6C"
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                  />
                </>
              );
            }}
          />
        </>
        <>
          <Text className="text-fg text-3xl">Goods</Text>
          <Controller
            control={control}
            name="clothes"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    How much new unused clothing did you buy today?
                  </Text>
                  <View className="bg-fg rounded-lg my-2">
                    <Picker
                      value={value}
                      placeholder={{}}
                      onValueChange={onChange}
                      items={[
                        { label: "None", value: 0 },
                        {
                          label: "Very few - 1-2 small items, 1 medium item",
                          value: 1,
                        },
                        {
                          label: "Few - 3 small items, 1-2 medium items",
                          value: 2,
                        },
                        {
                          label:
                            "Some - 4-5 small items, 3 mediuem items, 1 large item",
                          value: 3,
                        },
                        {
                          label:
                            "A lot - 5-7 small items, 4-5 medium items, 2 large items",
                          value: 5,
                        },
                        {
                          label:
                            "More - >7 small items, >5 medium items, >2 large items",
                          value: 7,
                        },
                      ]}
                    />
                  </View>
                  <Text className="text-gray-500 text-xs">
                    Small item - underwear, medium item - shirt, large item -
                    pants, jacket
                  </Text>
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="bags"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">
                      How many plastic bags at the store did you buy/take?
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
                    maximumValue={10}
                    step={1}
                  />
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="papers"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">
                      How much books/magazines/newspapers did you buy today?
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
                    maximumValue={10}
                    step={1}
                  />
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="other"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    How many other items that are expensive (in carbon
                    emmissions) to produce did you buy?
                  </Text>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg inline">None</Text>
                    <Text className="text-fg inline">A lot</Text>
                  </View>
                  <Slider
                    value={value}
                    onValueChange={onChange}
                    minimumTrackTintColor="#44CF6C"
                    maximumTrackTintColor="#777"
                    thumbTintColor="#44CF6C"
                    minimumValue={0}
                    maximumValue={20}
                    step={1}
                  />
                </>
              );
            }}
          />
        </>
        <>
          <Text className="text-fg text-3xl">Commute</Text>
          <Controller
            control={control}
            name="commuteType"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    How did you commute to work/school back and forth today?
                  </Text>
                  <View className="bg-fg rounded-lg my-2">
                    <Picker
                      value={value}
                      placeholder={{}}
                      onValueChange={onChange}
                      items={[
                        { label: "Foot/bike", value: 0 },
                        { label: "Public transport", value: 1 },
                        { label: "Train", value: 3 },
                        { label: "Car", value: 12 },
                      ]}
                    />
                  </View>
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="commuteLength"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg font-bold">
                      How long did the commute take?
                    </Text>
                    <Text className="text-fg inline">{value} m</Text>
                  </View>
                  <Slider
                    value={value}
                    onValueChange={onChange}
                    minimumTrackTintColor="#44CF6C"
                    maximumTrackTintColor="#777"
                    thumbTintColor="#44CF6C"
                    minimumValue={0}
                    maximumValue={120}
                    step={1}
                  />
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="plane"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    Did you travel by plane today?
                  </Text>
                  <View className="bg-fg rounded-lg my-2">
                    <Picker
                      value={value}
                      placeholder={{}}
                      onValueChange={onChange}
                      items={[
                        { label: "No", value: 0 },
                        { label: "Yes, <1hr", value: 1 },
                        { label: "Yes, 1-2hr", value: 2 },
                        { label: "Yes, 3-5hr", value: 4 },
                        { label: "Yes, 6-8hr", value: 7 },
                        { label: "Yes, >8hr", value: 10 },
                      ]}
                    />
                  </View>
                </>
              );
            }}
          />
        </>
        <>
          <Text className="text-fg text-3xl">Appliances</Text>
          <Controller
            control={control}
            name="washing"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    Did you shower or take a bath?
                  </Text>
                  <View className="bg-fg rounded-lg my-2">
                    <Picker
                      value={value}
                      placeholder={{}}
                      onValueChange={onChange}
                      items={[
                        { label: "Neither", value: 0 },
                        { label: "Quick shower", value: 1 },
                        { label: "Long shower (>10m)", value: 2 },
                        { label: "Bath", value: 4 },
                      ]}
                    />
                  </View>
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="lights"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    For how long did you use your lights?
                  </Text>
                  <View className="bg-fg rounded-lg my-2">
                    <Picker
                      value={value}
                      placeholder={{}}
                      onValueChange={onChange}
                      items={[
                        { label: "Very short", value: 1 },
                        { label: "Short", value: 2 },
                        { label: "Medium", value: 3 },
                        { label: "Long", value: 4 },
                        { label: "Very long", value: 5 },
                      ]}
                    />
                  </View>
                </>
              );
            }}
          />
        </>
        <>
          <Text className="text-fg text-3xl">Trash</Text>
          <Controller
            control={control}
            name="trash"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    How much trash did you generate today?
                  </Text>
                  <View className="bg-fg rounded-lg my-2">
                    <Picker
                      value={value}
                      placeholder={{}}
                      onValueChange={onChange}
                      items={[
                        { label: "Very little", value: 1 },
                        { label: "Little", value: 3 },
                        { label: "Average", value: 5 },
                        { label: "A lot", value: 10 },
                      ]}
                    />
                  </View>
                </>
              );
            }}
          />
          <Controller
            control={control}
            name="recycling"
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Text className="text-fg font-bold">
                    How much trash did you recycle?
                  </Text>
                  <View className="flex-row justify-between ">
                    <Text className="text-fg">None</Text>
                    <Text className="text-fg">All of it</Text>
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

export default Test;
