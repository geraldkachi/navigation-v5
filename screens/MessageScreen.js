import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Center from "../components/Center";
import { useTheme } from "@react-navigation/native";

const MessageScreen = () => {
    
    const { colors } = useTheme()
  return (
    <View style={styles.container}>
      <Center>
        <Text style={{color: colors.text}}>Message</Text>
      </Center>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
