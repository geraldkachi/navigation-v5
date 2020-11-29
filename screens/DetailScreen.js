import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>DetailScreen</Text>
            <Button title="Go to HomeScreen" onPress={()=> {navigation.navigate("Home")}} />
            <Button title="Go to Back to Previous Screen" onPress={()=> {navigation.goBack()}} />
            <Button title="Go to DetailScreen" onPress={()=> {navigation.navigate("Detail")}} />
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container :{
        flex:1, 
        justifyContent:"center",
        alignItems:"center"
    }
})
