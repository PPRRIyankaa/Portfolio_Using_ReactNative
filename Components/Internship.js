import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Internship() {
  return (
    <View>
      <Text style={styles.text}>In our college, everyone start finding Internship in the begining their 3rd year. Compainies starts coming to the campus in july ending. So intially all the compainies takes different online test as per their requirements and then the proceed to the interviews. So what happened with me is that i was not able to clear the online test of any company but then the company came that is Byjus and it took the online test of all the students in Training and placement cell and there were no chance to cheat. So in the evening the result of test came and i had qualified that online test. So now comes the interview and interview had started on the same day. And i was waiting for my turn Also i was too nervous as i had interview experience.
      So here comes one of the my favourite senior who helped in my interview. He taught me the interview skills which helped me to crack my interview. After giving my interview i was too tensed for the results. And there comes the result of interview where there was my name in the list of selected students. I was very happy and for this i would like to thank my parents, mentors and Umang sir(helped me to crack my interview).</Text>
      <Image style={styles.img} source={require('../Images/byjus.png')} />
      <Text style={styles.text}>On 3rd January i had started my Internship. In intial 2 weeks there were just normal meetings like they were giving us introduction of various teams and telling about the company and various products. So then we were assigned the different teams. After that there were one more week in which they tell us about the team what does the team do and how we will be working also assigned the mentor. Then we got a mentor and then comes the training part and where we have to learn the differnt language and Technology on which we have to work on. So for one weeks everything went good but next week the mentor laid off then the things got stucked. So 3-4 weeks we did nothing and then after that everything got changed and we were assigned new mentor and now we have to work on different things. And here met a wonderful kind personality he was an intern working with me, he helped me alot told me about different things in my field also he taught me about varoius things and we both learned various things. One wonderful thing happened is that by the time we became very good brother and sister. The wonderful thing that i got during this internship is the very kind and caring brother. This inetrnship had taught me various things and it was the wonderful part of life.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text:{
    margin:13,
    marginTop:22,
    fontSize:17,
    color:'#4b0082',
  },
  img: {
    width: '100%',
    height: 320,
    borderRadius: 7,
  }
})