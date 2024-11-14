import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome for icons
import { useRouter } from 'expo-router'; // Importing router for navigation
import { images } from '../../constants'; // Ensure you have the path to your images

const SignUp = () => {
    const router = useRouter(); // Initialize router
    const backgroundImageUrl = 'https://i.pinimg.com/564x/ba/6d/fe/ba6dfe66fa3b9b4478097760034912b1.jpg'; // Background image URL
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility

    // Function to handle Sign Up navigation
    const handleSignUpPress = () => {
        router.push('/sign-in'); // Change to your desired path
    };

    // Function to navigate to the Login screen
    const handleLogInPress = () => {
        router.push('/sign-in'); // Change to your login path
    };

    return (
        <ImageBackground
            source={{ uri: backgroundImageUrl }}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <View style={{
                        width: '100%',
                        maxWidth: 400,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 12,
                        padding: 30,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        elevation: 5,
                    }}>
                        {/* Logo Image */}
                        <Image
                            source={images.logo} // Make sure this points to your logo image
                            style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 20 }}
                            resizeMode='contain'
                        />
                        <Text style={{
                            fontSize: 15,
                            color: '#001F3F',
                            marginBottom: 20,
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}>
                            Create Your Account
                        </Text>

                        {/* Email Input */}
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#F9F9F9',
                                borderRadius: 10,
                                width: '100%',
                                padding: 15,
                                marginBottom: 15,
                                borderWidth: 1,
                                borderColor: '#B0BEC5',
                            }}
                            keyboardType="email-address"
                        />

                        {/* Password Input */}
                        <View style={{ position: 'relative', marginBottom: 15 }}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#B0BEC5"
                                secureTextEntry={!passwordVisible}
                                style={{
                                    backgroundColor: '#F9F9F9',
                                    borderRadius: 10,
                                    width: '100%',
                                    padding: 15,
                                    borderWidth: 1,
                                    borderColor: '#B0BEC5',
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 15,
                                    top: 15,
                                    padding: 5
                                }}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            >
                                <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#B0BEC5" />
                            </TouchableOpacity>
                        </View>

                        {/* Confirm Password Input */}
                        <View style={{ position: 'relative', marginBottom: 20 }}>
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor="#B0BEC5"
                                secureTextEntry={!confirmPasswordVisible}
                                style={{
                                    backgroundColor: '#F9F9F9',
                                    borderRadius: 10,
                                    width: '100%',
                                    padding: 15,
                                    borderWidth: 1,
                                    borderColor: '#B0BEC5',
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 15,
                                    top: 15,
                                    padding: 5
                                }}
                                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            >
                                <Icon name={confirmPasswordVisible ? "eye" : "eye-slash"} size={20} color="#B0BEC5" />
                            </TouchableOpacity>
                        </View>

                        {/* Sign Up Button */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#28a745',
                                borderRadius: 12,
                                width: '100%',
                                height: 48,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 20
                            }}
                            activeOpacity={0.7}
                            onPress={handleSignUpPress}
                        >
                            <Text style={{
                                fontSize: 18,
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                        {/* Additional Links */}
                        <Text style={{
                            color: '#000000',
                            marginTop: 16,
                            textAlign: 'center'
                        }}>
                            Already have an account?{' '}
                            <TouchableOpacity onPress={handleLogInPress}>
                                <Text style={{
                                    color: 'blue',
                                    textDecorationLine: 'underline'
                                }}>
                                    Log In
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignUp;
