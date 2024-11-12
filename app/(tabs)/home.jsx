import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert, Linking } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const featuredBooks = [
  {
    id: '1',
    title: 'It Ends With Us',
    image: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2024/07/17125931/cSMdFWmajaX4oUMLx7HEDI84GkP-scaled.jpg',
  },
  {
    id: '2',
    title: 'Taste of Sky',
    image: 'https://skinofaskinny.wordpress.com/wp-content/uploads/2019/05/105252750-352-k135626.jpg',
  },
  {
    id: '3',
    title: 'The Seven Husbands of Evelyn Hugo',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501161933/the-seven-husbands-of-evelyn-hugo-9781501161933_hr.jpg',
  },
  {
    id: '4',
    title: 'Avenues of the Diamond',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686020162i/55450632.jpg',
  },
  {
    id: '5',
    title: 'Shatter Me',
    image: 'https://cdn.kobo.com/book-images/6f2c3e42-4411-4fd4-918a-d9ea9b0719b1/1200/1200/False/shatter-me-1.jpg',
  },
  {
    id: '6',
    title: 'The Great Gatsby',
    image: 'https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg',
  },
  {
    id: '7',
    title: 'Dosage of Serotonin',
    image: 'https://img.wattpad.com/cover/261921277-352-k950424.jpg',
  },
  {
    id: '8',
    title: 'I Love You Since 1892',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMHqREr-RPFmUAUu4rDLA6VocDms0JOOL2A&s',
  },
  {
    id: '9',
    title: 'It Starts With Us',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg',
  },
  {
    id: '10',
    title: 'A Gentle Reminder',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615620038i/57393737.jpg',
  },
];

const Home = () => {
  const [addedBooks, setAddedBooks] = useState({});
  const navigation = useNavigation(); // Hook to access navigation

  const addToLibrary = (book) => {
    if (!addedBooks[book.id]) {
      setAddedBooks(prevState => ({ ...prevState, [book.id]: true }));
      Alert.alert(`${book.title} added to your library!`);
    } else {
      setAddedBooks(prevState => {
        const newState = { ...prevState };
        delete newState[book.id]; // Remove book from library
        return newState;
      });
      Alert.alert(`${book.title} removed from your library.`);
    }
  };

  const handleStartListening = () => {
    Linking.openURL('http://localhost:8082/library'); // Replace with your actual URL
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlkWR-17cC9XYmVcMpAQMqq-j8RklIhOZEQ&s' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Your Talking Book App!</Text>
        
        <Text style={styles.sectionTitle}>Recommendations</Text>
        <FlatList
          data={featuredBooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <Image source={{ uri: item.image }} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{item.title}</Text>
              <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => addToLibrary(item)}
              >
                <Text style={styles.addButtonText}>
                  {addedBooks[item.id] ? 'Remove from Library' : 'Add to Library'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleStartListening} // Link to external site
        >
          <Text style={styles.buttonText}>Start Listening</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    margin: 10,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookItem: {
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
  bookTitle: {
    fontSize: 18,
    flex: 1,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
