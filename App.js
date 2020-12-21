import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {

  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color= "orange"
      title= "Click Me"
      onPress={() => 
        Alert.alert("My Title", "My Message", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "No", onPress: () => console.log("No")},
        ])
      }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
