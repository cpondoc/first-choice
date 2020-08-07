import { Card, Image } from 'react-native-elements';
import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles/style.js'
import FirstChoiceHeader from '../views/generic/header.js'
  
function SocialFeed() {
    return(
        <View style={{flex: 1}}>
            <ScrollView>
                <Text style={styles.sectionHeader}>Instagram Feed</Text>
            </ScrollView>
        </View>
    );
}

export default SocialFeed;