import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'

export default function After_Result() {
  return (
    <View style={styles.container}>
    <Image style={styles.img} source={require('../Images/AfterExam.jpg')}/>
    <Text style={styles.text}>The Result of exam had to be announced at 10 September 2020. And I was very tensed. The entire day passed but it did'nt come. So next mornning when i wake up early in the morning i saw that the result has been announced. When i saw my result i was got 94.4 percentile. And i was very confused that...will this percentage give a good college. I called my school friend who got 97.6 percentile and he did'nt gave any assurance as he was also somewhat confused but he college toh mil jyega but ksa milega yeh nhi pta. I was worried and asked more people ...but nobody gave me any assurance.</Text>
    <Text style={styles.text}>Now we have to go through the jossa counciling. And my father filled the choices for counciling. And he was adding all colleges and that too top IIT's and NIT's and i branch in which i can't get. So due to this i had an argument with my father. And then i cried and said ki thik h jo bhrna h bhrdo. And then i slept.</Text>
    <Text style={styles.text}>Here comes the result of first round of jossa. And i got Civil Engineering of NIT Kurukshetra. I was like College to thik h acha h or pass bhi h ...But i won't take Civil Engineering. So there are three options in that freeze, float and sink. So my father did float. And in the next round i got nothing. I was very worried like ki jo mila tha wo bhi gya. Then we were so worried. Then comes the result of 3rd round and i got Eletrical engineering in Nit Kurukshetra. I was like Eletrical Engineering yeh ladkiya leti h? So i called one of my chachu. He is  civil Engineering and he said dekhlo ladkiya leti toh bhot kam h. I was still worried but when i saw that my rank and closing rank was the same. Then i asked my father to freeze it. And we came out of Jossa.</Text>
    <Image style={styles.img} source={require('../Images/About.jpeg')}/>
      <Text></Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:17,
        paddingRight:3
    },
    img:{
        // margin:22,
        height:240,
        width:"100%",
        borderRadius:9
      },
    text:{
      margin:8,
      marginTop:9,
      fontSize:15,
      color:'black',
      fontSize:17,
      color:'green'
    },
})
