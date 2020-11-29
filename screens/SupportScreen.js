// import { Button } from 'native-base'
import React from 'react'
import { Alert, StyleSheet, Text, Button} from 'react-native'
import Center from "../components/Center"

const SupportScreen = () => {
    return (
        <Center>
            <Text>SupportScreen</Text>
            <Button title="Click Me" onPress={()=>{Alert.alert("SupportScreen Clicked")}}/>
        </Center>
    )
}

export default SupportScreen

const styles = StyleSheet.create({})
