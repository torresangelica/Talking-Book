import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={('./assets/bg.png')} style={styles.logo} />
      <Text style={styles.title}>WELCOME TO TALKING BOOK</Text>
      <Link href="/home" style={styles.link}>Go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#728C69',
  },
  logo: {
    width: 100, // adjust as needed
    height: 100, // adjust as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  link: {
    fontSize: 18,
    color: 'blue',
  },
});