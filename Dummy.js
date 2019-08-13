import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Details from "./screens/Details";
import Neega from "./screens/Neega";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('details',{deeksize :6,height:5.8,})}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  app:App,
  details:Details,
  neega:Neega
});

export default createAppContainer(HomeStack);