import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'

export default function Navbutton(props) {
  return (
   <TouchableOpacity style={{borderBottomWidth:props.weight,borderBottomColor:'#DC143C'}} onPress={()=>props.onclick(props.name)}>
    <Text style={styles.navbtn}>{props.name}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    navbtn:{
        color:'#DC143C',
        margin:8,
      fontSize:18,
      fontWeight:'bold',
    }
})