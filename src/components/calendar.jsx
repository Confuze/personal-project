import { CalendarProvider, WeekCalendar } from "react-native-calendars";
import { Button, Text, View } from "react-native";
import { useContext, useState } from "react";
import { AnswersContext } from "../lib/context";
import { useScore } from "../lib/useScore";

function Calendar({ navigation }) {
  const today = new Date().toISOString().split("T")[0];
  const [currentDay, setCurrentDay] = useState(today);
  const currentDate = new Date(currentDay);

  const { answers } = useContext(AnswersContext);
  const score = useScore(currentDay);

  return (
    <View className="h-full w-full">
      <CalendarProvider date={today}>
        <WeekCalendar
          className="absolute top-0 left-0"
          theme={{
            backgroundColor: "#2B2D42",
            calendarBackground: "#2B2D42",
            selectedDayBackgroundColor: "#2B2D42",

            textSectionTitleColor: "#E5DADA",
            dayTextColor: "#E5DADA",
            textDisabledColor: "#52556F",
            selectedDayBackgroundColor: "#44CF6C",
            todayTextColor: "#44CF6C",
          }}
          allowShadow={false}
          onDayPress={(day) => {
            setCurrentDay(day.dateString);
          }}
        ></WeekCalendar>
        <View className="flex-1 m-4 mb-20 min-h-[350px] bg-bg2 rounded-xl p-2">
          <Text className="text-2xl text-fg text-center">
            {currentDate.toLocaleString("en-EN", { weekday: "long" })}{" "}
            {currentDate.getDate()}{" "}
            {currentDate.toLocaleString("en-EN", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </Text>
          <View className="h-12 flex-1 items-center justify-center">
            <Text className="text-acc2 text-8xl">{score ? score : "??"}</Text>
            <Text className="text-xl text-fg">Your Score</Text>
          </View>
          <View className="m-2">
            <Button
              color="#44CF6C"
              title="Take daily test"
              onPress={() => {
                navigation.navigate("DailyTest", {
                  date: currentDay,
                });
              }}
            ></Button>
          </View>
          <View className="m-2 mt-0 mb-6">
            <Button
              color="#2B2D42"
              title="Go to settings"
              onPress={() => {
                navigation.navigate("Settings");
              }}
            ></Button>
          </View>
        </View>
      </CalendarProvider>
    </View>
  );
}

export default Calendar;
