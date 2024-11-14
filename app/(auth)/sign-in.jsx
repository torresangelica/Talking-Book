import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import an icon library
import { router } from 'expo-router'; // Import router for navigation

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const backgroundImageUrl = 'https://i.pinimg.com/564x/ba/6d/fe/ba6dfe66fa3b9b4478097760034912b1.jpg';

    // Navigation functions
    const handleSignUpPress = () => router.push('/sign-up');
    const handleSignInPress = () => router.push('/home');

    return (
        <ImageBackground
            source={{ uri: backgroundImageUrl }}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20
                    }}
                >
                    <View style={{
                        width: '100%',
                        maxWidth: 400,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 12,
                        padding: 30,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        elevation: 5
                    }}>
                        <Image
                            source={images.logo}
                            style={{ width: '100%', height: 100, alignSelf: 'center', marginBottom: 20 }}
                            resizeMode='contain'
                        />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#F0F0F0',
                                borderRadius: 10,
                                width: '100%',
                                padding: 15,
                                marginBottom: 15
                            }}
                            keyboardType="email-address"
                        />
                        <View style={{ position: 'relative', marginBottom: 15 }}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#B0BEC5"
                                secureTextEntry={!passwordVisible}
                                style={{
                                    backgroundColor: '#F0F0F0',
                                    borderRadius: 10,
                                    width: '100%',
                                    padding: 15
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
                            onPress={handleSignInPress}
                        >
                            <Text style={{
                                fontSize: 18,
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Sign In
                            </Text>
                        </TouchableOpacity>

                        <Text style={{
                            color: '#000000',
                            marginTop: 16,
                            textAlign: 'center'
                        }}>
                            Don't have an account?{' '}
                            <TouchableOpacity onPress={handleSignUpPress}>
                                <Text style={{
                                    color: 'blue',
                                    textDecorationLine: 'underline'
                                }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignIn;