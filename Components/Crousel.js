import { View, Text, Image, StyleSheet, Dimensions,ScrollView } from 'react-native'
import React, { useEffect,useRef, useState } from 'react'
// import { useDispatch, useSelector } from
//  'react-redux';
// import {setindex} from '../Reducer/Index'
const DEVICE_WIDTH = Dimensions.get("window").width

export default function (props) {
    // const selectedIndex=useSelector(state=>state.crousal)
    const [selectedIndex,setIndex]=useState(0)
    // const dispatch=useDispatch();
    const scrollRef = useRef();
    // console.log(selectedIndex+" actual ")
    // console.log(props.images+"122")
    const setinterval=()=>{
      setInterval( async() => {
        // setTime(prevTime => prevTime + 1)
        const l=props.images.length
        console.log(selectedIndex)
        setIndex(prev=>(prev==5?0:(prev+1)))
         await scrollRef.current.scrollTo({
            animated:true,
            x:DEVICE_WIDTH*selectedIndex,
            y:0
        })
      }, 3000)
    }
    useEffect (()=>{
       
        setinterval()
        
    },[])
   const  setSelectedIndex = event => {
        const contentOffset = event.nativeEvent.contentOffset;
        const viewSize = event.nativeEvent.layoutMeasurement;
    
        // Divide the horizontal offset by the width of the view to see which page is visible
        const selectedIndex1 = Math.floor(contentOffset.x / viewSize.width);
        // this.setState({ selectedIndex });
        dispatch(setindex(selectedIndex1))
      };
  return (
    <View style={styles.container}> 
    <ScrollView
      horizontal
      pagingEnabled
      // onMomentumScrollEnd={setSelectedIndex()}
      ref={scrollRef}
    >
      {props.images.map(image => (
        <Image
          style={styles.backgroundImage}
          source={{ uri: image }}
          key={image}
        />
      ))}
    </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    backgroundImage: {
        height: "100%",
        width: Dimensions.get("window").width
      },
    container:{
        width:"100%",
        height:"100%"
    }
})