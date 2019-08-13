import React from "react";
import { View, Text, Button } from "react-native";
class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('neega')}
                />
            </View>
        );
    }
}
export default ProfileScreen