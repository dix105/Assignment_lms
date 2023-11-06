import { useEffect, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

const ProgressBar = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: progress }]} />
      {/* <Text>{progress}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    margin: 10,
  },
  bar: {
    height: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
});

export default ProgressBar;
