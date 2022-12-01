import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground 
      source={require('../../../assets/images/background-wallpaper.jpg')} 
      style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>

        <Pressable
        style={styles.button}
        onPress={() => console.warn('Explore Btn clicked')}
        >
          <Text style={styles.buttonText}>Explore nerby stays</Text>
        </Pressable>
      </ImageBackground>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search') }
        >
          <Fontisto name="search" size={25} color={'gold'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
    </View>
  );
};

export default HomeScreen;