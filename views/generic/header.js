import { Header } from 'react-native-elements';
import React from 'react';

function FirstChoiceHeader() {
    return(
      <Header
        backgroundColor={"#000"}
        leftComponent={{ text: 'Workouts', style: { color: '#fff', fontSize: 40, fontWeight: "bold", marginLeft: 2, marginRight: -200, paddingBottom: 10 } }}
      />
    );
}

// Code for the footer
/* function FirstChoiceFooter() {
  return(
    <>
    <View style={{backgroundColor: "black", height: 67, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    <View style={{paddingLeft: "0%", color: '#fff'}}>
      <Icon size={30} name='assessment' color='#fff'/>
      <Text style={{color: "white", fontSize: 13, textAlign: 'center'}}>Drills</Text>
    </View>
      <View style={{paddingLeft: "25%", color: '#fff'}}>
        <Icon size={30} name='assignment' color='#fff'/>
        <Text style={{color: "white", fontSize: 13, textAlign: 'center'}}>Workouts</Text>
      </View>
      <View style={{paddingLeft: "25%", color: '#fff'}}>
        <Icon size={30} name='account-circle' color='#fff'/>
        <Text style={{color: "white", fontSize: 13, textAlign: 'center'}}>Account</Text>
      </View>
    </View>
    </>
  );
} */

export default FirstChoiceHeader;
