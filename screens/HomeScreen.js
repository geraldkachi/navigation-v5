import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useTheme } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>HomeScreen</Text>
      <Button
        title="Go to DetailScreen"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
