 import { View, Text, StyleSheet, TouchableOpacity, xEasing, Animated,} from 'react-native'
 import React from 'react'
import { useDispatch} from 'react-redux'
import { setcomponent } from '../Reducer/NavbarComponent'

 export default function About() {
  const dispatch = useDispatch()
const afterResult = () =>{
  dispatch(setcomponent(-1))
}
const value = new Animated.Value(0);
Animated.timing(value, {
  toValue: 1,
  duration: 1200,
  easing:Easing.bounce,
  useNativeDriver: true,
}).start();
   return (
     <View>
        <Animated.Image style={[styles.img,{transform:[{scale:value}]}]} source={require('../Images/About1.jpeg')}/>
        <Text style={styles.text}> This app is going to tell you story of my college life. So i will start the story from very begining, in Class 12 i got sometimes worried like what should i choose, in which college should i take addmission, where should i apply ,like the normal questions which comes in everybody's mind. 
        </Text>
        <Text style={styles.text}>
        So few students of my class gave the exam of Jee-Main and when they cleared the exam then i came to know what is jee-Mains for before that i don't know what is Jee-Mains. And i come to know that they got a very good rank to enter into a very good college. And i was very worried because i was very confused. So next day i come to know that there are two attempts for this exam. And the next exam will be in April 2020. So i was like... i have to give this exam. 
        </Text>
        <Text style={styles.text}>
        After giving my board exams. I start preparing for the exam and there comes Covid. Due to covid the exam postponed and i got time to prepare for the exam. So finally the exam held in September 2020 and my exam was on 5 september. I gave the exam and during the exam for the first hour i was very nervous but then relaxed and completed the exam? And after giving the exam when i came out of examination hall and my father asked me how was your exam. I was very tensed and said i don't know what will happen. So we went home and during the journey i realized that my exam was not soo bad and not soo good. But still was i was tensed. 
        And then the day comes, which will tell the result </Text>
        <TouchableOpacity onPress={()=>afterResult()} style={styles.btn}>
          <Text style={styles.btntxt}>After Result</Text>
        </TouchableOpacity>
     </View>
   )
 }
 const styles = StyleSheet.create({
    img:{
      margin:10,
        height:350,
        width:"100%",
    },
    text:{
      margin:13,
      marginTop:9,
      fontSize:15,
      color:'black',
      fontSize:17,
      color:'green'
    },
    btn:{
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10
    },
    btntxt:{
      fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
    }
})