import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TextInput,
  Animated,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Hlad() {
  const [value, setValue] = useState(1);
  const [text, settext] = useState('');
  const [visiblity, setvisiblity] = useState(false);
  const [playing, setPlaying] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const onStateChange = state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  };

  const togglePlaying = () => {
    setPlaying(prev => !prev);
  };

  const appendImage = () => {
    if (value == 1) return;
    return (
      <Animated.Image
        style={[styles.img, {transform: [{rotate: spin}]}]}
        source={require('../Images/Secy.jpeg')}
      />
    );
  };
  const setImage = () => {
    setValue(0);
  };
  const setText = el => {
    console.log(el);
    settext(el);
  };
  useEffect(() => {
    setTimeout(alert, 10000);
  }, []);
  function alert() {
    setvisiblity(true);
  }
  return (
    <View>
      <View style={[styles.centeredView]}>
        <Modal visible={visiblity} transparent>
          <View style={[styles.centeredView]}>
            <View style={[styles.modal]}>
              <Text style={[styles.quotes]}>What are your Views?</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TextInput
                  style={styles.input}
                  placeholder="Please write your Views"
                  placeholderTextColor={'white'}
                  onChangeText={settext}
                  value={text}
                />
              </View>
              <TouchableOpacity
                style={styles.done}
                onPress={() => setvisiblity(false)}>
                <Text style={[styles.quotes, {color: 'white'}]}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <Text style={styles.header}>HLAD PARIWAR</Text>
      <Text style={styles.text}>
        The first and the most kind senior that i met in the college who gave me
        many reasons to be the part of this club. He is extremely kind,
        Intelligent, great leader(Secretary of HLAD in 2022-2023), one of the
        best orator, and grounded personality. Actually when i went to college i
        was extremely childish, innocent girl who had not seen the world. So he
        told me many things about life. He is too understanding that if i told
        him anything, he can give the solution of any problem. One of best thing
        i like about him is that he had this same helping nature for everyone.
      </Text>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            opacity: value,
            height: value === 0 ? 0 : 45,
            marginLeft: 50,
            marginRight: 50,
          },
        ]}
        onPress={() => {
          setImage()
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }).start();
        }}>
        <Text style={styles.btntxt}>Who he is?</Text>
      </TouchableOpacity>
      {appendImage()}
      <Text style={styles.text}>
        Basically HLAD is Hindi literacy and Club. In short it is personality
        development and skill development club in which there are 5 teams
        (Oratory, Content, Designing, Media Reporting and Sponsorship). It is
        one of best cultural club in the college. Actually, it is not only a
        club but a family. Every member of this club is very kind and helping
        this is the most attracting quality of this club.
      </Text>
      <Image style={styles.img} source={require('../Images/Hlad.jpeg')} />
      <Text style={styles.text}>
        The most important thing that i learned from this club to be kindness,
        patience, and to speak. Actually i have never given any speech or spoke
        in front of the people. But when i joined this club i had made a short reel.
        This gave me a great confidence and the seniors and my years mates
        helped me alot.
      </Text>
      <YoutubePlayer
        height={300}
        // play={playing}
        videoId={'6p7lTW346oY'}
        onChangeState={onStateChange}
      />
      <Image
        style={[styles.img, styles.img1]}
        source={require('../Images/Hlad2.jpeg')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: '#800000',
    fontWeight: 'bold',
    margin: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  backgroundVideo: {
    width: '100%',
    height: 200,
  },
  input: {
    height: 40,
    fontSize: 17,
    padding: 10,
    borderBottomWidth: 3,
    color: 'white',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '84%',
    height: 200,
    backgroundColor: '#a52a2a',
    opacity: 0.9,
    borderRadius: 16,
  },
  quotes: {
    margin: 10,
    fontSize: 25,
    color: '#009688',
    fontWeight: 'bold',
  },
  done: {
    backgroundColor: '#009688',
    borderRadius: 10,

    marginBottom: 10,
  },
  btn: {
    // elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 8,
    // paddingHorizontal:
  },
  btntxt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  text: {
    margin: 13,
    marginTop: 9,
    fontSize: 15,
    fontSize: 17,
    color: '#800000',
  },
  img: {
    width: '100%',
    height: 320,
    borderRadius: 7,
  },
  img1: {
    height: 400,
  },
  link: {
    color: 'green',
    fontSize: 18,
  },
});
