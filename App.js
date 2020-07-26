import { StatusBar } from 'expo-status-bar';
import { Header, ListItem, Card } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

export default function App() {
  
  return (
    <View>
        <Header
        leftComponent={{ text: 'Workouts', style: { color: '#fff', fontSize: 35, fontWeight: "bold", marginLeft: 2, marginRight: -200 } }}
      />
      <Text style={styles.sectionHeader}>Categories</Text>
      <Text style={{paddingLeft: 15}}>Get started with one of these workouts.</Text>
      <View style={{height: 175}}>
        <ScrollView horizontal={true}> 
          {
            list.map((l, i) => (
              <>
              <Card containerStyle={{height: 150, width: 250}}>
                <Text>Dribbling</Text>
              </Card>
              </>
            ))
          }
        </ScrollView>
      </View>
      <Text style={styles.sectionHeader}>Dribbling Drills</Text>
      <Text style={{paddingLeft: 15}}>Looking to get your handle right?</Text>
      <ScrollView> 
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))
        }
      </ScrollView>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 25,
    paddingLeft: 15,
    paddingTop: 20,
    fontWeight: "bold"
  },
});
