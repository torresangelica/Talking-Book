import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ImageBackground, Modal } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const audiobooks = [
  {
    id: '1',
    title: 'Taste of Sky',
    author: 'VentreCanard',
    image: 'https://skinofaskinny.wordpress.com/wp-content/uploads/2019/05/105252750-352-k135626.jpg',
  },
  {
    id: '2',
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    image: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2024/07/17125931/cSMdFWmajaX4oUMLx7HEDI84GkP-scaled.jpg',
  },
];

const playbackSpeeds = [0.5, 1, 1.5, 2];

const Library = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  const [currentBook, setCurrentBook] = useState(null);
  const [playingBookId, setPlayingBookId] = useState(null);
  const [listeningScreenVisible, setListeningScreenVisible] = useState(false);

  const openSpeedModal = (book) => {
    setCurrentBook(book);
    setModalVisible(true);
  };

  const handleSpeedSelect = (speed) => {
    setSelectedSpeed(speed);
    setModalVisible(false);
  };

  const handlePlayPress = (bookId) => {
    if (playingBookId === bookId) {
      setPlayingBookId(null);
    } else {
      setPlayingBookId(bookId);
    }
  };

  const openListeningScreen = (book) => {
    setCurrentBook(book);
    setListeningScreenVisible(true);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/ba/6d/fe/ba6dfe66fa3b9b4478097760034912b1.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Listening Library</Text>

        <FlatList
          data={audiobooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => openListeningScreen(item)}>
              <Image source={{ uri: item.image }} style={styles.bookImage} />
              <View style={styles.textContainer}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>{item.author}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Listening Screen Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={listeningScreenVisible}
          onRequestClose={() => setListeningScreenVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              {currentBook && (
                <>
                  <Image source={{ uri: currentBook.image }} style={styles.modalBookImage} />
                  <Text style={styles.modalTitle}>{currentBook.title}</Text>
                  <Text style={styles.modalAuthor}>{currentBook.author}</Text>

                  <View style={styles.controlsContainer}>
                    {/* Play Button above Playback Speed Options */}
                    <TouchableOpacity
                      style={styles.playButton}
                      onPress={() => handlePlayPress(currentBook.id)}
                    >
                      <Icon name={playingBookId === currentBook.id ? "pause" : "play"} size={30} color="#fff" />
                    </TouchableOpacity>

                    {/* Playback Speed Options */}
                    <View style={styles.speedContainer}>
                      {playbackSpeeds.map((speed) => (
                        <TouchableOpacity
                          key={speed}
                          style={[
                            styles.speedButton,
                            selectedSpeed === speed && styles.selectedSpeedButton, // Change color if selected
                          ]}
                          onPress={() => handleSpeedSelect(speed)}
                        >
                          <Text style={styles.speedText}>{`${speed}x`}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setListeningScreenVisible(false)}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
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
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    width: '90%',
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBookImage: {
    width: 150,
    height: 225,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalAuthor: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 20,
  },
  controlsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  playButton: {
    borderRadius: 50,
    padding: 15,
    marginBottom: 20,
  },
  speedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ensure the speed buttons take the full width
    marginHorizontal: 20, // Add horizontal margin for spacing
  },
  speedButton: {
    backgroundColor: '#00796b',
    borderRadius: 5,
    padding: 10,
    flex: 1, // Ensure buttons take equal width
    marginHorizontal: 5, // Add margin between buttons
    alignItems: 'center', // Center text
  },
  selectedSpeedButton: {
    backgroundColor: '#28a745', // Change to a darker shade when selected
  },
  speedText: {
    color: '#fff',
  },
  closeButton: {
    backgroundColor: '#FF5C5C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Library;