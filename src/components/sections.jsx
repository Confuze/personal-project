import { useState } from "react";
import { Pressable, View } from "react-native";
import { Button } from "react-native";

export default function Sections({ children, onSubmit, submitText }) {
  const [current, setCurrent] = useState(0);

  return (
    <View className="h-full w-full mb-12 bg-bg">
      {children.map((child, index) => {
        return (
          <View
            className={`h-full w-full bg-bg p-4 absolute top-0 left-0 transition-1s ${current === index ? "opacity-100" : "opacity-0"}`}
            key={index}
            pointerEvents={current === index ? "auto" : "none"}
          >
            {child}
            <View className="mt-4">
              <Button
                color="#44CF6C"
                title={submitText}
                onPress={() => {
                  onSubmit();
                }}
              ></Button>
            </View>
            <View className="w-full mt-2 justify-between flex-row">
              <Button
                color="#44CF6C"
                title="Previous section"
                disabled={current === 0 ? true : false}
                onPress={() => {
                  setCurrent(current - 1);
                }}
              />
              <Button
                color="#44CF6C"
                title="Next section"
                disabled={current === children.length - 1 ? true : false}
                onPress={() => {
                  setCurrent(current + 1);
                }}
              />
            </View>
          </View>
        );
      })}
      <View className="z-10 absolute left-0 bottom-6 w-full items-center justify-center flex-1">
        <View className="bg-bg2 flex-row p-3 rounded-lg">
          {children.map((_child, index) => {
            return (
              <Pressable
                className={`block rounded-full h-4 w-4 mx-2 ${current === index ? "bg-acc" : "bg-fg"}`}
                onPress={() => {
                  setCurrent(index);
                }}
                key={index}
              ></Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
