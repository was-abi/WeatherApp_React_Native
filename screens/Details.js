import React from "react";
import { View, Text, Button } from "react-native";

class Details extends React.Component {
    render() {
        const { navigation } = this.props;
        const deeksz = navigation.getParam('deeksize', 'already');
        const heightsz = navigation.getParam('height', 'some default value');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>Deek Size = {JSON.stringify(deeksz)} </Text>
                <Text>Height is {JSON.stringify(heightsz)} feet</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('neega')}
                />
            </View>
        );
    }
}
export default Details