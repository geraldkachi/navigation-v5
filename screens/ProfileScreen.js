import React from 'react'
import { Alert,StyleSheet, Text, View,Button } from 'react-native'
import Center from "../components/Center"

const ProfileScreen = () => {
    return (
        <Center>
            <Text>Profile</Text>
            <Button title="Click Me Profile" onPress={()=> Alert.alert("Button Clicked")} />
        </Center>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
