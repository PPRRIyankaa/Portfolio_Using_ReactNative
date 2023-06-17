import { View, Text,Image,StyleSheet, Animated, Easing, Button } from 'react-native'
import React,{useRef} from 'react'
import { height } from '@mui/system';
import Video from 'react-native-video';

export default function Nbc() {
  const [isPlaying, setIsPlaying] = React.useState(false);  
    const [isMuted, setIsMuted] = React.useState(false);  

    const togglePlaying = () => {};  
  const value = useRef(new Animated.Value(0)).current;
  Animated.timing(value,{
    toValue:200,
    duration:2000,
  }).start();
  return (
    <View>
      <Text style={styles.quotes}>Bhangra beats makes me feel ALIVE.</Text>
      <Animated.Image style={[styles.img,{height:value}]} source={require('../Images/Nbc3.jpeg')}/>
      <Text style={styles.text}>Bhangra is traditionally danced to the dhol instrument, a large drum, and boliyan, short sets of lyrics that describe scenes or stories from Punjab. These lyrics most commonly reference themes of love, patriotism, strength, and celebration.</Text>
      <Image style={styles.img} source={require('../Images/Nbc1.jpeg')}/>
      <View style={styles.video}>
      <Video
                source={require('../Images/Nbc.mp4')}  
                paused={!isPlaying}  
                controls={true}  
                style={styles.backgroundVideo}  
                muted={isMuted}           
                />  
            <Button style={styles.btn}
                onPress={() => setIsPlaying(p => !p)}  
                title={isPlaying ? 'Stop' : 'Play'}  
            />  
            <Button style={styles.btn}
                onPress={() => setIsMuted(m => !m)}  
                title={isMuted ? 'Unmute' : 'Mute'}  
            />  
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header:{
      fontSize:25,
      color:'#ff3333',
      fontWeight:'bold',
      margin:8
  },
  img:{
    width:"100%",
    height:300,
    borderRadius:8
  },
  img1:{
    height:500,
  },
  text:{
    margin:13,
    marginTop:22,
    fontSize:17,
    color:'#4b0082',
  },
  quotes: {
    margin: 13,
    marginTop: 9,
    fontSize: 25,
    color: '#4b0082',
    fontWeight: 'bold',
  },
  video:{
   
    margin:2,
    borderWidth:3,  
  },
  backgroundVideo:{
    width:300,
    height:300,
    margin:20
  },
  btn:{
    width:'20%',
    height:45,
    borderWidth:8,
    backgroundColor:'red'
  }
})