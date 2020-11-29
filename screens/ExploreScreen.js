import React from 'react'
import { Alert, StyleSheet, Text, View, Button } from 'react-native'
import Center from "../components/Center"

const ExploreScreen = () => {
    return (
        <Center>
            <Text>ExploreScreen</Text>
            <Button title="Click Me" onPress={()=> Alert.alert("Button Clicked")} />
        </Center>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({})
