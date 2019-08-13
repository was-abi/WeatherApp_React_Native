import React from "react";
import { View, Text, Button } from "react-native";

class Neega extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Neega"
                    onPress={() => this.props.navigation.navigate('app')}
                />
            </View>
        );
    }
}
export default Neega