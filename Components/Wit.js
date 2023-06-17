import { View, Text, StyleSheet,Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function Wit() {
  return (
    <View>
    <Text style={styles.header}> A community of professional women committed to providing you with inspiration, education, and opportunities.</Text>
    <Text style={styles.text}>Due to Online Classes, there was no practical Knowledge and i was Lossing my interest in my core subjects because three semester had passed in online classes. I know that i don't have that good knowledge of my subjects. And in 5th semester we have to do internships. If everything goes like this then it will be very difficult for me to get internship and then placement. And i saw most of the people doing coding from their 3rd semester for internships. So i also decided to start coding after knowing what percentage of company comes to campus for coding and core.</Text>
    <Image style={styles.img} source={require('../Images/Wit3.jpeg')}/>
    <Text style={styles.text}>
        One day i recieved a message in any of the group that there is <TouchableOpacity><Text style={styles.link} onPress={()=>Linking.openURL('https://wit-women-in-tech.vercel.app/')}>Women in Technology(WIT++).</Text></TouchableOpacity> They will be guiding the women in their coding journey and i was very happy that i got the path on which now i just need to move. I joined that group and after somedays, a session happened telling that they will tell each and thing about how to get internships not only they tell but also they will take the classes on DSA. And workshop like how to build resume and how to make projects. 
      </Text>
      <Image style={styles.img} source={require('../Images/Wit1.jpeg')}/>
      <Text style={styles.text}>So I start attending those classes and really they were very helpful for us. It was very good to see that the seniors are very helpful and if we faced any problem or get any error then these were ready to solve on dm's as well.</Text>
      <Image style={styles.img} source={require('../Images/Wit.jpeg')}/>
      <Text style={styles.text}>And now it comes our turn to what our seniors gave us, we should give it our juniors. So now they selected the mentors from our year and i was also the part of this. I was very happy to be the part of this society.</Text>
      <Image style={styles.img} source={require('../Images/Wit2.jpeg')}/>
      <Text style={styles.text}>On convocation we got a chance to meet the cofounder of Wit++. And we all were very excited to meet to them. We get to learn many things from them. And we all were very happy to meet to them and also we had a lunch with them.

     </Text>
    </View>
  )
}
const styles=StyleSheet.create({
  header:{
    fontSize:19,
    color:'#9400d3',
    fontWeight:'bold',
    margin:10
  },
  text:{
    margin:13,
    marginTop:9,
    fontSize:17,
    color:'#9400d3',
  },
  img:{
    width:"100%",
    height:320,
    borderRadius:7,
    margin:5
  },
  link:{
    color:'red',
    fontSize:15,
    fontWeight:'bold'
  },
})