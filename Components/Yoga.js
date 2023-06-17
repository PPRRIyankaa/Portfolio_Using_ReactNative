import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Yoga() {
  return (
    <View>
      <Text style={styles.quotes}>“Yoga is a mirror to look at ourselves from within”
</Text>
      <Image style={styles.img} source={require('../Images/Yoga3.jpeg')}/>
      <Text style={styles.quotes}>“When you listen to yourself, everything comes naturally. It comes from inside, like a kind of will to do something. Try to be sensitive. That is yoga.” 
</Text>
      <Image style={[styles.img]} source={require('../Images/Yoga1.jpeg')}/>
      <Text style={styles.quotes}>“Yoga is the fountain of Youth. You're are only as young as your flexible as spine” 
</Text>
      <Image style={[styles.img,styles.img1]} source={require('../Images/Yoga.jpeg')}/>
      <Text style={styles.quotes}>““Yoga takes you into the present moment. The only place where life exists.“” 
</Text>

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
  },img1:{
    height:500,
  },
  text:{
    margin:13,
    marginTop:22,
    fontSize:15,
    color:'black',

  },
  quotes: {
    margin: 13,
    marginTop: 9,
    fontSize: 25,
    color: '#228b22',
    fontWeight: 'bold',
  },
})