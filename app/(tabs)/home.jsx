import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';

const featuredBooks = [
  {
    id: '1',
    title: 'Taste of Sky',
    image: 'https://skinofaskinny.wordpress.com/wp-content/uploads/2019/05/105252750-352-k135626.jpg',
  },
  {
    id: '2',
    title: 'It Ends With Us',
    image: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2024/07/17125931/cSMdFWmajaX4oUMLx7HEDI84GkP-scaled.jpg',
  },
  {
    id: '3',
    title: 'Shatter Me',
    image: 'https://cdn.kobo.com/book-images/6f2c3e42-4411-4fd4-918a-d9ea9b0719b1/1200/1200/False/shatter-me-1.jpg',
  },
  {
    id: '4',
    title: 'Dosage of Serotonin',
    image: 'https://img.wattpad.com/cover/261921277-352-k950424.jpg',
  },
  {
    id: '5',
    title: 'A Gentle Reminder',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615620038i/57393737.jpg',
  },
  {
    id: '6',
    title: 'It Starts With Us',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg',
  },
  {
    id: '7',
    title: 'The Seven Husband of Evelyn Hugo',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501161933/the-seven-husbands-of-evelyn-hugo-9781501161933_hr.jpg',
  },
  {
    id: '8',
    title: 'Avenues of the Diamond',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686020162i/55450632.jpg',
  },
  {
    id: '9',
    title: 'Living With A Half Blood',
    image: 'https://img.wattpad.com/99daa1e56b0232533313ba67c457388745901d55/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f696c725a4f5542347356725666673d3d2d33362e313635353834393030653365633565623234343234323130303036312e6a7067?s=fit&w=720&h=720',
  },
  {
    id: '10',
    title: 'I Love You Since 1892',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMHqREr-RPFmUAUu4rDLA6VocDms0JOOL2A&s',
  },
];

const Home = () => {
  const [addedBooks, setAddedBooks] = useState({});
  const [searchText, setSearchText] = useState('');

  const addToLibrary = (book) => {
    if (!addedBooks[book.id]) {
      setAddedBooks(prevState => ({ ...prevState, [book.id]: true }));
      Alert.alert(`${book.title} added to your library!`);
    } else {
      setAddedBooks(prevState => {
        const newState = { ...prevState };
        delete newState[book.id];
        return newState;
      });
      Alert.alert(`${book.title} removed from your library.`);
    }
  };

  const filteredBooks = featuredBooks.filter(book =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/ba/6d/fe/ba6dfe66fa3b9b4478097760034912b1.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Title Text with Enhanced Design */}
        <Text style={styles.titleText}>TALKING BOOK</Text>

        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search Books..."
          value={searchText}
          onChangeText={setSearchText}
        />

        <Text style={styles.sectionTitle}>Featured Books</Text>
        <FlatList
          data={filteredBooks}
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

        <TouchableOpacity style={styles.button}>
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
  titleText: {
    fontSize: 20, // Increased size for prominence
    fontWeight: 'bold',
    color: '#000000', // White text for contrast
    textAlign: 'left',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
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
    fontSize: 15,
    flex: 1,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Home;