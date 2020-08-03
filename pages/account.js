import { Card, Image } from 'react-native-elements';
import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles/style.js'
import FirstChoiceHeader from '../views/generic/header.js'
  
function AccountDetails() {
    return(
        <View style={{flex: 1}}>
            <FirstChoiceHeader name="Account" />
            <Text>Account Stuff!</Text>
        </View>
    );
}

export default AccountDetails;