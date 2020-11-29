import React from 'react'
import { StyleSheet, Text, View, Button,StatusBar, Platform,TextInput, TouchableOpacity, Dimensions} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"

import { AuthContext } from "../components/Context"


const SignInScreen = ({navigation}) => {

    // EMAIL LOGIC
    const [data, setData] = React.useState({
        emai: "",
        password:"",
        check_textInputChange: false,
        secureTextEntry: true
    })

    const { signIn } = React.useContext(AuthContext)

    const TextInputChange = (val) => { 
        if(val.lenght !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }
    // PASSWORD LOGIC
    const handlePassword = (val) => {
       setData({
        ...data, 
        password: val,
       })
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.container}> 
            <StatusBar backgroundColor="#009387"  barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput placeholder="Your Email" style={styles.textInput} onChangeText={(val)=> TextInputChange(val)} />
                   {data.check_textInputChange ?  
                   <Feather name="check-circle" color="grey" size={20} /> 
                   : null }
                </View>
                {/* Password */}
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20} />
                    <TextInput placeholder="Your Password" secureTextEntry={data.secureTextEntry ? true : false} autoCapitalize="none" onChangeText={(val)=> handlePassword(val)} style={styles.textInput} />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <Feather name="eye-off" color="grey" size={20} /> 
                        :
                        <Feather name="eye" color="grey" size={20} /> 
                        }
                    </TouchableOpacity>
                </View>
                    {/* SIGN IN */}
                    <TouchableOpacity>
                        <Text style={{ color: "#009387" , marginTop:15}}>Forget Password</Text>
                    </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity style={[styles.signIn, {backgroundColor:"#009387"}]} onPress={()=> {signIn()}}>
                            <Text style={[styles.textSign,{color:"#fff"}]}>SIgn In</Text>
                    </TouchableOpacity>
                    {/* SIGN UP */}
                    <TouchableOpacity style={[styles.signIn,{borderColor:"#009387", borderWidth:1,marginTop:15}]} onPress={()=> navigation.navigate("SignUpScreen")}>
                        <View style={{flexDirection:"row",justifyContent:"space-between", textAlign:"center"}}>
                            <Text style={[styles.textSign,{color:"#009387"}]}>SIgn Up</Text>
                        </View>  
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Button title="Click SignInScreen" onPress={()=> navigation.navigate("")} /> */}
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#009387",
    },
    header:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:20,
        paddingBottom:50 
    },
    footer:{
        flex:3,
        backgroundColor:"#fff",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:"#fff",
        fontWeight:"bold",
        fontSize: 30,
    },
    text_footer:{
        color:"#05375a",
        fontSize:18,
    },
    action: {
        flexDirection:"row",
        marginTop:10,
        borderBottomWidth: 1,
        borderBottomColor:"#f2f2f2",
        paddingBottom: 5
    },
    textInput:{
        flex:1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingleft: 10,
        color:"#05375a",
        marginLeft: 10,
        border:0
    },
    button:{
       alignItems:"center",        
       marginTop: 50,         
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold"
    }
})
