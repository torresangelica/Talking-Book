import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://your-image-url.com/profile.jpg',
    bio: 'Avid reader and writer. Love exploring new worlds through stories.',
    stats: {
      stories: 10,
      followers: 250,
      following: 150,
    },
    favoriteGenres: ['Fantasy', 'Romance', 'Mystery'],
  };

  const animatedValue = new Animated.Value(0);

  const animateProfile = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animateProfile();
  }, []);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.titleContainer, { transform: [{ translateY }] }]}>
          <Text style={styles.title}>Profile</Text>
        </Animated.View>

        <Animated.Image
          source={{ uri: user.profilePicture }}
          style={[styles.profileImage, { transform: [{ translateY }] }]}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>{user.name}</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.label}>Bio:</Text>
          <Text style={styles.info}>{user.bio}</Text>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Statistics</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.stats.stories}</Text>
              <Text style={styles.statLabel}>Stories</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.stats.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{user.stats.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        <View style={styles.genresContainer}>
          <Text style={styles.genresTitle}>Favorite Genres</Text>
          <Text style={styles.genres}>{user.favoriteGenres.join(', ')}</Text>
        </View>

        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile', { user })}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#00796b',
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  profileInfo: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
  statsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5C5C',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  genresContainer: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginBottom: 20,
  },
  genresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  genres: {
    fontSize: 16,
    color: '#555',
  },
  editButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#00796b',
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    elevation: 2,
  },
  logoutButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FF5C5C',
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
