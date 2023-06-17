import { View, Text, Image, ImageBackground,TouchableOpacity,Linking , StyleSheet,Animated} from 'react-native'
import React from 'react'
// import style from '../App.module.css';

export default function Firstpage() {
  const value = new Animated.Value(0);
  Animated.timing(value,{
    toValue: 1,
    duration:2000,
    useNativeDriver:true
  }).start();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>College</Text>
      <Animated.Image style={[styles.img1,{transform:[{scale:value}]}]} source={require('../Images/homeimg.webp')} />
      <View>
        <Text style={styles.text}>In 2020, after completing the school i got admission in <TouchableOpacity><Text style={styles.link} onPress={()=>Linking.openURL('https://nitkkr.ac.in/')}>National Institute of Technology, Kurukshetra</Text></TouchableOpacity></Text>
      </View>
      <Animated.Image style={[styles.img2,{transform:[{scale:value}]}]} source={{uri:'https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg'}}/>
      <Text style={styles.text}>
      National Institute of Technology Kurukshetra (NIT Kurukshetra or NITKKR) is a public technical and research university located in Kurukshetra. In December 2008, it was accredited with the status of Institute of National Importance (INI). It is one of the 30 National Institutes of Technology established and administered by Government of India.[1] It runs undergraduate and postgraduate in programme Engineering and Doctor of Philosophy programme in Engineering, Sciences and Humanities.
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    margin:9
  },
  header:{
      fontSize:25,
      color:'#ff3333',
      fontWeight:'bold',
      margin:8
  },
  img1:{
    height:230,
    width:"100%",
    // borderRadius:9
  },
  img2:{
    width:'100%',
    height:300
  },
  link:{
    color:'red',
    fontSize:15
  },
  text:{
    margin:13,
    marginTop:22,
    fontSize:15,
    color:'black',

  }
})