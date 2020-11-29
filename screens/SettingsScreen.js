import React from 'react'
import { Alert, StyleSheet, Text, Button} from 'react-native'
import Center from "../components/Center"

const SettingsScreen = () => {
    return (
        <Center>
            <Text>SettingsScreen</Text>
            <Button title="Click Me" onPress={()=>{Alert.alert("SettingsScreen Clicked")}}/>
        </Center>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})
