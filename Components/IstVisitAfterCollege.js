import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function IstVisitAfterCollege() {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Finally the day comes...</Text>
    <Image style={styles.img} source={require('../Images/FirstVisit2.jpeg')}/>
      <Text style={styles.text}>The moment for which everyone of us were waiting from 3 semester, here the day comes. In October 2021, we recieved an offical notice from the college that we are can come to college for 15 days for our practicals. And we all were very excited that we will meet our friends to whom we have only seen in google meets or sometimes in videocalls.</Text>
  
      <Image style={styles.img} source={require('../Images/FirstVisit3.jpeg')}/>
      <Text style={styles.text}>In those 15 days there were very few people who came close to my heart. And with them i spend my alot of time during those days. Actually i used to sleep at 10pm but with these people i never slept at 10pm. During nights we enjoyed alot the mostly time we spend with each other is in the night. In those days there were certain limitation on us due to covid like we were not allowed to outside college and the in-timing of girls were 6pm. But apart from these limitations we enjoyed our hostel life. </Text>
      
      <Image style={styles.img} source={require('../Images/FirstVisit1.jpeg')}/>
      <Text style={styles.text}>"A smiling face is a beautiful face. A smilng heart is a happy heart"</Text>
      <Text style={styles.text}> How 15 days went we don't know. And we were realising that the time to go back homes is coming closer. As the time was coming closer the bond of friendship was becoming more closer. Actually in those 15 days we became a family and it was quite difficult for us to go back.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      padding:17,
      paddingRight:3,
      color:'#8b008b',
  },
  header:{
    fontSize:25,
    color:'#8b008b',
    fontWeight:'bold',
    margin:8
},
  img:{
      // margin:22,
      height:270,
      width:"100%",
      borderRadius:9,
      margin:5
    },
    text:{
      margin:13,
      marginTop:9,
      fontSize:15,
      fontSize:17,
      color:'#8b008b',
    },
})
