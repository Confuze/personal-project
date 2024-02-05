import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./home";
import Settings from "./settings";

const HomeWrapper = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1B1C26",
        },
        headerTitleStyle: {
          color: "#E5DADA",
        },
        headerTintColor: "#E5DADA",
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeWrapper;
