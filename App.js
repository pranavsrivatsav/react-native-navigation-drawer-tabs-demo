import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <NavigationContainer>
            {/* <Drawer.Navigator
                screenOptions={{
                    drawerType: isLargeScreen ? 'permanent' : 'front',
                    headerStyle: {
                        backgroundColor: "#7D73D2",
                    },
                    headerTintColor: "white",
                    drawerActiveBackgroundColor: "#CACEE6",
                }}
                initialRouteName="Welcome"
            >
                <Drawer.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        drawerIcon: ({ color, size, focused }) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                        title: "Welcome Screen"
                    }}
                />
                <Drawer.Screen
                    name="User"
                    component={UserScreen}
                    options={{
                        drawerIcon: ({ color, size, focused }) => (
                            <Ionicons name="person" color={color} size={size} />
                        ),
                    }}
                />
            </Drawer.Navigator> */}
            <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: '#2C8BE9'
                }}
                initialRouteName="Welcome"
            >
                <Tab.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={UserScreen}
                    options={{
                      tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
