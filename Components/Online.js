import { View, Text, Image,TouchableOpacity,Linking, StyleSheet } from 'react-native'
import React from 'react'

export default function Online() {
  return (
    <View>
    <Image style={styles.img} source={require('../Images/Online.webp')}/>
      <Text style={styles.text}>Every Student is very Excited for his/ her College life in their intial Phases. They think that will have fun, meet more people and discover aspects of campus life that they will enjoy throughout their college career. While the purpose at college is to learn, living in a dorm and connecting with like-minded peers is filled with adventures! From college sports to club meetings to study parties to dining hall conversations, you will have plenty of moments to fondly remember and cherish.</Text>
      <Text style={styles.text}>But As we Know that about the pandemic happened in 2020. The <TouchableOpacity><Text style={styles.link} onPress={()=>Linking.openURL('https://www.who.int/health-topics/coronavirus')}>COVID-19 pandemic</Text></TouchableOpacity> was predicted to eventually transition into an endemic situation. As in other countries, the so-called “Corona semester” </Text>
      <Image style={styles.img1} source={require('../Images/Online1.jpg')}/>
      <Text style={styles.text}>As we all had experinced that how boring online classes were. Basically Sitting at home we cannot get the experience of sitting in the class. The class has the different environment than home. For a normal student it is quite difficult to online classes at home for long period of time. Same happened with me. </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  img:{
    margin:10,
      height:350,
      width:"100%",
  },
  img1:{
    margin:10,
      height:250,
      width:"100%",
  },
  text:{
    margin:13,
    marginTop:9,
    fontSize:15,
    fontSize:17,
    color:'#00BFFF'
  },
  link:{
    color:'red',
    fontSize:16,
    // marginTop:8,
    // borderWidth:3
  }
})