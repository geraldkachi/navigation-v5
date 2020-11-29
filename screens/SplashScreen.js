import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Button,Alert } from 'react-native'
// import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/MaterialIcons"

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.header}>
               <View style={{borderRadius: 50,}}>
               <Image source={require("../assets/splash.png")} style={styles.logo}  resizeMode="stretch" />
               </View>
           </View>
           <View style={styles.footer}>
               <Text style={styles.title}>Stay connected with everyone!</Text>
               <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={[styles.signIn,styles.ban]} onPress={()=> navigation.navigate("SignInScreen")}>
                        <View style={{flexDirection:"row",justifyContent:"space-between", textAlign:"center"}}>
                            <Text style={[styles.textbutton,styles.buttonCenter]}>Get Started</Text>
                            <Icon name="keyboard-arrow-right" color="#fff" size={30} />
                        </View>  
                    </TouchableOpacity>
                </View>
           </View>
        </View>
    )
}

export default SplashScreen
const{height} = Dimensions.get("screen")
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    buttonCenter:{
        paddingTop:1
    },
    ban:{
        backgroundColor:"#01ab9d",
        color:"#fff",
       
    },
    container:{
        flex:1,
        backgroundColor:"#009387"
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
    },
    footer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        width: height_logo,
        height: height_logo,
        borderRsdius: 50
    },  
    title:{
      color:"#05375a",
      fontSize:30,
      fontWeight:"bold",
    }, 
    textbutton:{
        color:"white",
        marginTop: 5,
    },
    text:{
        color:"grey",
        marginTop: 5,
    },
    button:{
        alignItems:"flex-end",
        marginTop:30
    },
    signIn:{
        width:150,
        height: 40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        flexDirection:"row",
    },
    textSign:{
        color:"white",
        fontWeight:"bold"
    },
})


{/* <LinearGradient colors={["#08d4c4","#01ab9d"]} style={styles.signIn}>
    <Text style={style.text}>Get Started</Text>
    <Icon name="naviagte-next" color="#fff" size={20}/>
</LinearGradient> */}