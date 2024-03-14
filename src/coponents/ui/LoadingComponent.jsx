import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={"#fff"} size={"large"} />
    </View>
  );
};

export default LoadingComponent;


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ff1100',
        alignItems: 'center',
        justifyContent: 'center',
    }
})