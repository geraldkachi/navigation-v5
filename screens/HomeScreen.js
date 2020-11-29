import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="Go to DetailScreen" onPress={()=> navigation.navigate("Detail")} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container :{
        flex:1, 
        justifyContent:"center",
        alignItems:"center"
    }
})
