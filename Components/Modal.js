import {View, Text, Modal,StyleSheet} from 'react-native';
import React from 'react';

export default function Modal1() {
  const [visiblity,setvisiblity] = useState(false);
 
  return (
    
      <View style={styles.centeredView}>
         <Modal visible={visiblity} transparent animationType='slide'>
          <View style={styles.modal}>
            <Text>mmmms</Text>
          </View>
        </Modal>
      </View>
    
  );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    modal:{
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:'20%',
        borderWidth:2,
        marginTop:200
      },
})


