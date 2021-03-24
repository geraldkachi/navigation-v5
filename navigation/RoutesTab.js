import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"

import  {MaterialCommunityIcons} from "react-native-vector-icons"

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen"
import ProfileScreen from "../screens/ProfileScreen"
import ExploreScreen from "../screens/ExploreScreen"
import MessageScreen from '../screens/MessageScreen';


const HomeStack = createStackNavigator()
const DetailStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const ExploreStack = createStackNavigator()
const MessageStack = createStackNavigator()

const Tab = createMaterialBottomTabNavigator ()

const RoutesTab = () => (
    <Tab.Navigator initialRouteName="Feed" 
    activeColor="#fff"
    // activeTintColor="none"
    >
        <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{tabBarLabel: "Home", 
        tabBarColor:"#009387",
        tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
        ), }} />

        <Tab.Screen name="DetailStackScreen" component={DetailStackScreen} options={{tabBarLabel: "Updates", 
         tabBarColor:"#1f65ff",
        tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
        ), }} />

        <Tab.Screen name="ProfileStackScreen" component={ProfileStackScreen} options={{tabBarLabel: "Profile", 
            tabBarColor:"#694fad",
        tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
        ), }} />

        <Tab.Screen name="ExploreStackScreen" component={ExploreStackScreen} options={{tabBarLabel: "Explore", 
         tabBarColor:"#d02860",
        tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="access-point" color={color} size={26} />
        ), }} />
        <Tab.Screen name="MessageStackScreen" component={MessageStackScreen} options={{tabBarLabel: "Message", 
         tabBarColor:"#d02860",
        tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
        ), }} />
    </Tab.Navigator>
)

export default RoutesTab

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#009387"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"} }}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title:"HomeScreen", headerLeft:()=> (<MaterialCommunityIcons name="menu" style={{marginHorizontal: 15}} color="white" size={26} onPress={()=> navigation.openDrawer() }  /> ) }} />
    </HomeStack.Navigator>
)

const DetailStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#1f65ff"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"} }}>
        <DetailStack.Screen name="DetailScreen" component={DetailScreen} options={{ title:"DetailScreen", headerLeft:()=> (<MaterialCommunityIcons name="menu" color="white" style={{marginHorizontal:15}} size={26} onPress={()=> navigation.openDrawer() }  />)  }} />
    </DetailStack.Navigator>
)
const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#1f65ff"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"} }}>
        <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title:"ProfileScreen", headerLeft:()=> (<MaterialCommunityIcons name="menu" color="white" style={{marginHorizontal:15}} size={26} onPress={()=> navigation.openDrawer() }  />)  }} />
    </ProfileStack.Navigator>
)
const ExploreStackScreen = ({navigation}) => (
    <ExploreStack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#1f65ff"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"} }}>
        <ExploreStack.Screen name="ExporeScreen" component={ExploreScreen} options={{ title:"ExploreScreen", headerLeft:()=> (<MaterialCommunityIcons name="menu" color="white" style={{marginHorizontal:15}} size={26} onPress={()=> navigation.openDrawer() }  />)  }} />
    </ExploreStack.Navigator>
)
const MessageStackScreen = ({navigation}) => (
    <MessageStack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#1f65ef"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"} }}>
        <MessageStack.Screen name="MessageScreen" component={MessageScreen} options={{ title:"MessageScreen", headerLeft:()=> (<MaterialCommunityIcons name="menu" color="white" style={{marginHorizontal:15}} size={26} onPress={()=> navigation.openDrawer() }  />)  }} />
    </MessageStack.Navigator>
)