import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const audiobooks = [
  {
    id: '1',
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    image: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2024/07/17125931/cSMdFWmajaX4oUMLx7HEDI84GkP-scaled.jpg',
  },
  // ... other audiobooks
];

const Library = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlkWR-17cC9XYmVcMpAQMqq-j8RklIhOZEQ&s' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Your Talking Book Library</Text>

        <FlatList
          data={audiobooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.bookImage} />
              <View style={styles.textContainer}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play" size={20} color="#28a745" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  bookImage: {
    width: 50,
    height: 75,
    borderRadius: 5,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#555',
  },
  playButton: {
    padding: 10,
  },
});

export default Library;
