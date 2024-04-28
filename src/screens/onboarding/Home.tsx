import React from 'react';
import {styles} from './Home.styles';
import Video from 'react-native-video';
import {Text, View} from 'react-native';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {colors} from '../../constants/styles/colors';
import {SignInButton} from '../../components/atoms/SignInButton';
import {sizes} from '../../constants/styles/sizes';
import {useIsFocused} from '@react-navigation/native';

export const Home = ({navigate}: any) => {
  const isFocused = useIsFocused();

  return (
    <View style={styles.videWrapper}>
      <Video
        source={require('../../assets/videos/sample_video.mp4')}
        style={styles.wrapper}
        resizeMode="cover"
        controls={false}
        paused={!isFocused}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Tasty</Text>
      </View>
      <Text style={styles.description}>Yeah, I can cook that!</Text>
      <PrimaryButton
        backgroundColor={colors.dark_red}
        textColor="white"
        text="Get Started"
        onPress={() => navigate()}
        style={styles.buttonStyle}
      />
      <View style={styles.singInWrapper}>
        <Text style={{fontSize: sizes.bs}}>Already have an account? </Text>
        <SignInButton
          onPress={() => console.log('pressed')}
          text="Sign in"
          color={colors.pink}
        />
      </View>
    </View>
  );
};
