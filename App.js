import { StatusBar } from 'expo-status-bar';
import { Header, ListItem, Card, Image, Icon } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import dribblingImage from './assets/dribbling.jpg'
import shootingImage from './assets/shooting.jpg'
import passingImage from './assets/passing.jpg'
import defenseImage from './assets/defense.jpg'
import conditioningImage from './assets/conditioning.jpg'

const categoriesList = [
  {
    name: 'Dribbling',
    image: dribblingImage
  },
  {
    name: 'Shooting',
    image: shootingImage
  },
  {
    name: 'Passing',
    image: passingImage
  },
  {
    name: 'Defense',
    image: defenseImage
  },
  {
    name: 'Conditioning',
    image: conditioningImage
  }
]

const drillList = [
  {
    name: 'Two Pound Dribble',
    time: '20 Minutes',
    icon: 'alarm'
  },
  {
    name: 'Suicides',
    time: '10 Minutes',
    icon: 'directions-run'
  },
  {
    name: 'Around the World',
    time: '30 Minutes',
    icon: 'gps-fixed'
  },
  {
    name: 'Two Pound Dribble',
    time: '20 Minutes',
    icon: 'alarm'
  },
  {
    name: 'Suicides',
    time: '10 Minutes',
    icon: 'directions-run'
  },
  {
    name: 'Around the World',
    time: '30 Minutes',
    icon: 'gps-fixed'
  },
  {
    name: 'Two Pound Dribble',
    time: '20 Minutes',
    icon: 'alarm'
  },
  {
    name: 'Suicides',
    time: '10 Minutes',
    icon: 'directions-run'
  },
  {
    name: 'Around the World',
    time: '30 Minutes',
    icon: 'gps-fixed'
  }
]

export default function App() {
  
  return (
    <View style={{flex: 1}}>
        <Header
        backgroundColor={"#000"}
        leftComponent={{ text: 'Workouts', style: { color: '#fff', fontSize: 40, fontWeight: "bold", marginLeft: 2, marginRight: -200, paddingBottom: 10 } }}
      />
      <ScrollView>
        <Text style={styles.sectionHeader}>Categories</Text>
        <Text style={{paddingLeft: 15, fontSize: 18}}>Get started with one of these workouts.</Text>
        <View style={{height: 200}}>
          <ScrollView horizontal={true}> 
            {
              categoriesList.map((l, i) => (
                <>
                <Card key={i} containerStyle={{height: 180, width: 250, paddingRight: 0, paddingLeft: 0, paddingTop: 0}}>
                  <Image
                    source={l.image}
                    style={{ height: 130}}
                    PlaceholderContent={<ActivityIndicator />}
                    resizeMode="cover"
                  />
                  <Text style={{paddingTop: 15, paddingLeft: 10, fontSize: 18, fontWeight: "bold"}}>{l.name}</Text>
                </Card>
                </>
              ))
            }
          </ScrollView>
        </View>
        <Text style={styles.sectionHeader}>Beginner Drills</Text>
        <Text style={{paddingLeft: 15, fontSize: 18}}>New to the game? Pick up these drills.</Text>
        <ScrollView> 
          {
            drillList.map((l, i) => (
              <ListItem
                key={i}
                leftIcon={{ name: l.icon }}
                title={l.name}
                subtitle={l.time}
                bottomDivider
              />
            ))
          }
        </ScrollView>
        </ScrollView>
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
    fontSize: 28,
    paddingLeft: 15,
    paddingTop: 20,
    fontWeight: "bold"
  },
});
