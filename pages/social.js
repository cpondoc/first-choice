import { Card, Image } from 'react-native-elements';
import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles/style.js'
import { createStackNavigator } from '@react-navigation/stack';

// Creating a stack navigator
const SocialStack = createStackNavigator();
  
function SocialFeed() {
    return(
        <View style={{flex: 1}}>
            <ScrollView>
                <Text style={styles.sectionHeader}>Instagram Feed</Text>
            </ScrollView>
        </View>
    );
}

function SocialStackNav() {
    return(
        <SocialStack.Navigator>
            <SocialStack.Screen name="Feed" component={SocialFeed} />
        </SocialStack.Navigator>
    );
}

export default SocialStackNav;