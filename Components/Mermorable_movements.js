import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  Easing,
  Animated
} from 'react-native';
import React, {useEffect, useState,useRef} from 'react';

const {height, width} = Dimensions.get('window');

export default function Mermorable_movements() {
  const data = [
    require('../Images/Memo1.jpeg'),
    require('../Images/Memo2.jpeg'),
    require('../Images/Memo6.jpeg'),
    require('../Images/Memo3.jpeg'),
    require('../Images/Memo5.jpeg'),
    require('../Images/Memo4.jpeg'),
  ];
  const [currInd, setCurrInd] = useState(0);
  const [value, setvalue] = useState(1);

  const setimage = () => {
    setvalue(0);
  };
  const value1 = new Animated.Value(0);
  Animated.timing(value1,{
    toValue: 1,
    duration:2000,
    useNativeDriver:true
  }).start();
  
  const appendimage = () => {
    if (value === 1) return;
    return (
      <View>
      <Animated.Image style={[styles.img,{transform:[{scale:value1}]}]} source={require('../Images/Rahul.jpg')} />
      <Text style={styles.text}>
      Well, I accept it'll be really annoying for him as he was making good poses. Once you can bear and it is ok, second time is like, don't do it again, but when it's done the third time, the water's just crossed the level. And you can see in third picture what happened. But actually it was quite funny moment for us and has become one of the memorable moment for me.
      </Text>
      </View>
    );
  };
  const emptyurl = require('../Images/emptystar.png')
  const fullurl = require('../Images/star.png')
  const [star1,setStar1]=useState([emptyurl,emptyurl,emptyurl,emptyurl,emptyurl])
  const [visiblity,setvisiblity] = useState(false);
 
  useEffect(()=>{
      setTimeout(alert,10000)
  },[]);
  function alert(){
    setvisiblity(true)
  }
  const star = [1,1,1,1,1]
  return (
    <View >
    <View style={[styles.centeredView,{opacity:0.1}]}>
      <Modal visible={visiblity} transparent>
      <View style={[styles.centeredView,{backgroundColor:''}]}>
      
        <View style={styles.modal}>
        <Image style={styles.star} source={require('../Images/star.png')}/>
          <Text style={[styles.quotes,{marginTop:-9}]}>Did you Liked it?</Text>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
          {star.map((ele,ind)=>{return(
            <TouchableOpacity onPress={()=>{
                let newArr={...star1}
                if(newArr[ind]==emptyurl)
                for(let i=0;i<=ind;i++)
                newArr[i]= fullurl 
                else
                for(let i=ind+1;i<=star.length;i++)
                newArr[i]= emptyurl               
            
                setStar1(newArr)
            }}>
              <Image style={{width:45,height:45}} source={star1[ind]}/>
            </TouchableOpacity>
          )})}
          
          </View>
          <TouchableOpacity style={styles.done} onPress={()=>(setvisiblity(false))}><Text style={[styles.text,{fontWeight:'bold'}]}>Done</Text></TouchableOpacity>
        </View>

        </View>
      </Modal>
    </View>

    <View style={styles.container}>
      <Text style={styles.quotes}>
        “We don't remember days, we remember moments.”
      </Text>

      <View style={styles.con}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrInd((x / width).toFixed(0));
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: width,
                  height: height / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image style={styles.item} source={item} />
              </View>
            );
          }}
        />

        <View style={styles.con1}>
          {data.map((item, ind) => {
            return (
              <View
              key={ind}
                style={[
                  styles.indicator,
                  {
                    backgroundColor: currInd == ind ? 'black' : 'grey',
                    width: currInd == ind ? 13 : 10,
                    height: currInd == ind ? 13 : 10,
                  },
                ]}></View>
            );
          })}
        </View>
      </View>
      <Text style={styles.text}>
        If we describe something as unforgettable, you mean that it is,
        extremely beautiful, enjoyable, or unusual, so that you remember it for
        a long time. These positive memories that we hold onto have the power to
        help use overcome and transform our negative thoughts.
      </Text>
      <Image style={styles.img} source={require('../Images/Memorable.jpeg')} />
      <Text style={styles.text}>
      Look how many smiles this one picture holds and it was not at all made up we were actually excited , enjoying , laughing and capturing as many moments we could. Lame joking, cool dressing under peer pressure, a little nervousness that we all had in common.
And Yes this is my circle
      </Text>
      <Animated.Image style={[styles.img]} source={require('../Images/Momorable1.jpeg')} />
      <Text style={styles.text}>
        A beautiful water tank in Kurukshetra, Brahma Sarovar, is dedicated to
        Lord Shiva. It is believed, the Brahma Sarovar was created by Lord Bramha during creating the universe and also believed, the hero's of Mahabharata's, the Pandava's offered their prayers and took bath in the Brahma Sarovar. Brahma sarovar is very clean and center of attraction for Kurukshetra. Very large and picturestic place that hold historical significance as well as healing power by taking bath. 
      </Text>
      <TouchableOpacity
        style={[styles.btn, {opacity: value, height: value === 0 ? 0 : 45,marginLeft:50,marginRight:50}]}
        onPress={() => setimage()}>
        <Text style={styles.btntxt}>Funny But Memorable</Text>
      </TouchableOpacity>
      {appendimage()}
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    marginTop: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal:{
    justifyContent:'center',
    alignItems:'center',
    width:'84%',
    height:'35%',
    backgroundColor:'white',
    opacity:0.8,
    borderRadius:16 
  },
  done:{
    padding:4,
    backgroundColor:'#ffd700',
    borderRadius:10,
    color: '#000080',
    marginBottom:10
  },
  star:{
    width:100,
    height:100,
    marginTop:-20
  },
  item: {
    // flex:1,
    width: '97%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  con1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 9,
  },
  indicator: {
    borderRadius: 4,
    marginLeft: 5,
  },
  img: {
    margin: 10,
    marginLeft: -1,
    height: 330,
    width: '100%',
    borderRadius: 9,
  },
  quotes: {
    margin: 10,
    marginTop: 5,
    fontSize: 25,
    color: '#000080',
    fontWeight: 'bold',
  },
  text: {
    margin: 8,
    marginTop: 4,
    fontSize: 17,
    color: '#000080',
  },
  btn: {
    backgroundColor: '#dc143c',
    borderRadius: 10,
    paddingVertical: 10,
  },
  btntxt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
