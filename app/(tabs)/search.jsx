import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// Sample data for audiobooks, recommended books, top books, and categories
const audiobooks = [
  {
    id: '1',
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    image: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2024/07/17125931/cSMdFWmajaX4oUMLx7HEDI84GkP-scaled.jpg',
  },
  {
    id: '2',
    title: 'A Gentle Reminder',
    author: 'Brittany Chen',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615620038i/57393737.jpg',
  },
];

const recommendedBooks = [
  {
    id: '1',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501161933/the-seven-husbands-of-evelyn-hugo-9781501161933_hr.jpg',
  },
  {
    id: '2',
    title: 'Shatter Me',
    author: 'Tahereh Mafi',
    image: 'https://cdn.kobo.com/book-images/6f2c3e42-4411-4fd4-918a-d9ea9b0719b1/1200/1200/False/shatter-me-1.jpg',
  },
];

const topBooks = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/The_Great_Gatsby_%281924%29.jpg/220px-The_Great_Gatsby_%281924%29.jpg',
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/1984first.jpg/220px-1984first.jpg',
  },
];

const categories = [
  {
    id: '1',
    title: 'Favorites',
    image: 'https://example.com/favorites.jpg', // Replace with a valid image URL
  },
  {
    id: '2',
    title: 'Recently Added',
    image: 'https://example.com/recently_added.jpg', // Replace with a valid image URL
  },
  {
    id: '3',
    title: 'Top Rated',
    image: 'https://example.com/top_rated.jpg', // Replace with a valid image URL
  },
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAudiobooks = audiobooks.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.recommendedItem}>
      <Image source={{ uri: item.image }} style={styles.recommendedImage} />
      <View style={styles.recommendedInfo}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderAudiobookItem = ({ item }) => (
    <TouchableOpacity style={styles.audiobookItem}>
      <ImageBackground source={{ uri: item.image }} style={styles.audiobookImage}>
        <View style={styles.audiobookInfo}>
          <Text style={styles.audiobookTitle}>{item.title}</Text>
          <Text style={styles.audiobookAuthor}>{item.author}</Text>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderRecommendedItem = ({ item }) => (
    <TouchableOpacity style={styles.recommendedItem}>
      <Image source={{ uri: item.image }} style={styles.recommendedImage} />
      <View style={styles.recommendedInfo}>
        <Text style={styles.recommendedTitle}>{item.title}</Text>
        <Text style={styles.recommendedAuthor}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderTopBookItem = ({ item }) => (
    <TouchableOpacity style={styles.recommendedItem}>
      <Image source={{ uri: item.image }} style={styles.recommendedImage} />
      <View style={styles.recommendedInfo}>
        <Text style={styles.topBookTitle}>{item.title}</Text>
        <Text style={styles.topBookAuthor}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlkWR-17cC9XYmVcMpAQMqq-j8RklIhOZEQ&s' }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Your Library</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search for a book or category..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {searchQuery.length > 0 && (
            <View>
              {filteredAudiobooks.length > 0 && (
                <FlatList
                  data={filteredAudiobooks}
                  keyExtractor={(item) => item.id}
                  renderItem={renderAudiobookItem}
                  style={styles.list}
                  ListHeaderComponent={<Text style={styles.sectionTitle}>Audiobooks</Text>}
                />
              )}
              {filteredCategories.length > 0 && (
                <FlatList
                  data={filteredCategories}
                  keyExtractor={(item) => item.id}
                  renderItem={renderCategoryItem}
                  style={styles.list}
                  ListHeaderComponent={<Text style={styles.sectionTitle}>Categories</Text>}
                />
              )}
            </View>
          )}

          {searchQuery.length === 0 && (
            <View>
              <Text style={styles.sectionTitle}>Recommended Books</Text>
              <FlatList
                data={recommendedBooks}
                keyExtractor={(item) => item.id}
                renderItem={renderRecommendedItem}
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
              <Text style={styles.sectionTitle}>Top Books</Text>
              <FlatList
                data={topBooks}
                keyExtractor={(item) => item.id}
                renderItem={renderTopBookItem}
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
              <Text style={styles.sectionTitle}>Categories</Text>
              <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  searchInput: {
    height: 45,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  audiobookItem: {
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  audiobookImage: {
    height: 120,
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 8,
  },
  audiobookInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
    padding: 10,
  },
  audiobookTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  audiobookAuthor: {
    fontSize: 14,
    color: '#fff',
  },
  playButton: {
    marginTop: 5,
    padding: 8,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  recommendedItem: {
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    margin: 10,
    overflow: 'hidden',
    width: 150,
  },
  recommendedImage: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  recommendedInfo: {
    padding: 10,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendedAuthor: {
    fontSize: 14,
    color: '#555',
  },
  topBookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  topBookAuthor: {
    fontSize: 14,
    color: '#555',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  list: {
    marginBottom: 20,
  },
});

export default Library;
