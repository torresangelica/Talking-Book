import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput, Modal, ScrollView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router'; // Import the router

const Profile = () => {
  const router = useRouter(); // Initialize the router
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('Angelica C. Torres');
  const [userTagline, setUserTagline] = useState('Love exploring new worlds through stories.');

  const userFavorites = [
    { id: '1', title: 'It Ends With Us', author: 'Colleen Hoover', image: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2024/07/17125931/cSMdFWmajaX4oUMLx7HEDI84GkP-scaled.jpg' },
    { id: '2', title: 'Shatter Me', author: 'Tahereh Mafi', image: 'https://cdn.kobo.com/book-images/6f2c3e42-4411-4fd4-918a-d9ea9b0719b1/1200/1200/False/shatter-me-1.jpg' },
    { id: '3', title: 'Twisted Love', author: 'Ana Huang', image: 'https://cdn01.sapnaonline.com/product_media/9780349434278/md_9780349434278_080820241012087.jpg' },
  ];

  const renderFavorite = ({ item }) => (
    <View style={styles.favoriteItem}>
      <Image source={{ uri: item.image }} style={styles.bookCover} />
      <Text style={styles.favoriteTitle}>{item.title}</Text>
    </View>
  );

  const handleLogout = () => {
    // Navigate to sign-in page on logout
    router.push(''); // Change this path to your desired logout destination
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/ba/6d/fe/ba6dfe66fa3b9b4478097760034912b1.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/2c/4e/64/2c4e64f4263ba2d174104c367ec9a698.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userTagline}>{userTagline}</Text>
        </View>

        <Text style={styles.favoritesTitle}>Favorite Books</Text>

        <ScrollView horizontal contentContainerStyle={styles.favoritesList}>
          <FlatList
            data={userFavorites}
            renderItem={renderFavorite}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={isEditing} animationType="slide" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Edit Profile</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={userName}
                onChangeText={setUserName}
              />
              <TextInput
                style={styles.input}
                placeholder="Tagline"
                value={userTagline}
                onChangeText={setUserTagline}
              />
              <TouchableOpacity style={styles.saveButton} onPress={() => setIsEditing(false)}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setIsEditing(false)}>
                <Text style={styles.cancelButtonText}>Close</Text>
              </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'transparent',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userTagline: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  favoritesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'left',
  },
  favoritesList: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
  favoriteItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  bookCover: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  favoriteTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  editButton: {
    padding: 10,
    backgroundColor: '#00796b',
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#28a745',
    alignItems: 'center',
    width: '90%',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#00796b',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile;
