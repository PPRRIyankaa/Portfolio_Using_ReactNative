import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Navbutton from './Navbutton';
import About from './About';
import Firstpage from './Firstpage';
import {setcomponent} from '../Reducer/NavbarComponent';
import Ist_Visit_After_Covid from './IstVisitAfterCollege';
import Online from './Online';
import Mermorable_movements from './Mermorable_movements';
import After_Result from './After_Result';
import Friends from './Friends';
import Hlad from './Hlad';
import Wit from './Wit';
import Yoga from './Yoga';
import Nbc from './Nbc';
import Internship from './Internship'

export default function Home() {
  const array = [
    'Home',
    'About',
    'Online',
    'Ist_Visit_After_Covid',
    'Mermorable_movements',
    'Friends',
    'HLAD',
    'YOGA',
    'WIT',
    'NBC',
    'Internship',
  ];
  const dispatch = useDispatch();
  const navbarcomponent = useSelector(state => state.navbar.data);
  const onclick = name => {
    if (name === 'Home') {
      dispatch(setcomponent(0));
    } else if (name === 'About') {
      dispatch(setcomponent(1));
    } else if (name === 'Online') {
      dispatch(setcomponent(2));
    } else if (name === 'Ist_Visit_After_Covid') {
      dispatch(setcomponent(3));
    } else if (name === 'Mermorable_movements') {
      dispatch(setcomponent(4));
    } else if (name === 'Friends') {
      dispatch(setcomponent(5));
    } else if (name === 'HLAD') {
      dispatch(setcomponent(6));
    } else if (name === 'YOGA') {
      dispatch(setcomponent(7));
    } else if (name === 'WIT') {
      dispatch(setcomponent(8));
    } else if (name === 'NBC') {
      dispatch(setcomponent(9));
    } else if (name === 'Internship') {
      dispatch(setcomponent(10));
    }
  };
  const componentRender = () => {
    if (navbarcomponent === -1) {
      return <After_Result />;
    } else if (navbarcomponent === 0) {
      return <Firstpage />;
    } else if (navbarcomponent === 1) {
      return <About />;
    } else if (navbarcomponent === 2) {
      return <Online />;
    } else if (navbarcomponent === 3) {
      return <Ist_Visit_After_Covid />;
    } else if (navbarcomponent === 4) {
      return <Mermorable_movements />;
    } else if (navbarcomponent === 5) {
      return <Friends />;
    } else if (navbarcomponent === 6) {
      return <Hlad />;
    } else if (navbarcomponent === 7) {
      return <Yoga />;
    } else if (navbarcomponent === 8) {
      return <Wit />;
    } else if (navbarcomponent === 9) {
      return <Nbc />;
    } else if (navbarcomponent === 10) {
      return <Internship />;
    }
  };
  const getName=(option)=>{
    return array[option]
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView style={styles.item} horizontal={true}>
          {array.map(ele => (
            <Navbutton onclick={name => onclick(name)} name={ele}  weight={(ele==getName(navbarcomponent)?3:0)}/>
          ))}
        </ScrollView>
      </View>
      <View style={styles.content}>
        <ScrollView key={navbarcomponent}>{componentRender()}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#F8F8FF',
  },
  header: {
    fontSize: 22,
    color: '#DC143C',
  },
  content: {
    flex: 12,
  },
});
