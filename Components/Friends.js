import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const {height, width} = Dimensions.get('window');
export default function Friends() {
  const [data, setdata] = useState([
    require('../Images/Friends1.jpeg'),
    require('../Images/Friends2.jpeg'),
    require('../Images/Memorabl.jpeg'),
    require('../Images/Friends4.jpeg'),
    require('../Images/Friends3.jpeg'),
  ]);
  const [currInd, setCurrInd] = useState(0);
  // console.log(typeof(currInd))
  return (
    <View>
      <Text style={styles.header}>“No friendship is an accident.” </Text>
      <View style={styles.con}>
        <View>
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
        </View>
        <View style={styles.con1}>
          {data.map((item, ind) => {
            return (
              <View
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
      <View>
        <Text style={styles.header}>
          A great friendship is irreplaceable — it can inspire you to grow into
          a better version of yourself.
        </Text>
        <Image style={styles.img} source={require('../Images/Friends.jpeg')} />
        <Text style={styles.header}>
          “Don’t make friends who are comfortable to be with. Make friends who
          will force you to lever yourself up.”
        </Text>
        <Text style={styles.header}>“True friends are like diamonds — bright, beautiful, valuable, and always in style.”</Text>
        <Text style={styles.text}>
          I found the person who had the great qualites(also known by the name Yogini) and is always ready to learn new things. she gave me many reasons to be proud of her. My most of the time in college goes with her. And we both remains together in each other's good and bad times, we share almost everything with each other, takes care of each other. There are many similair things due to which we mostly stay with each other like same branch, same class, same clubs, rooms and roll number after one another. Apart from these similarties, there are some difference as well and those differences sometimes leads to an agrument.
        </Text>
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
    marginTop: 25,
  },
    header:{
        fontSize:19,
        color:'#3cb371',
        fontWeight:'bold',
        margin:5
    },
    img:{
      width:"100%",
      height:300,
      borderRadius:8
    },
  item: {
    // flex:1,
    width: '97%',
    height: '106%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  con1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
  },
  indicator: {
    borderRadius: 4,
    marginLeft: 5,
  },
  img:{
    width:'100%',
    height:430,
  },
  text:{
    margin:13,
    marginTop:2,
    fontSize:15,
    color:'#3cb371',
  }
});
