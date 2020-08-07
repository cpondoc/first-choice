// Necessary Libraries
import { ListItem } from 'react-native-elements';
import React from 'react';
import { Text,ScrollView } from 'react-native';
import styles from '../../styles/style.js'
import { useNavigation } from '@react-navigation/native';

// Drill List
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

// React Component for Workouts
function WorkoutList() {

    const navigation = useNavigation();

    return(
      <>
      <Text style={styles.sectionHeader}>Beginner Drills</Text>
      <Text style={{paddingLeft: 15, fontSize: 18}}>New to the game? Pick up these drills.</Text>
      <ScrollView style={{marginTop: 15, marginLeft: 15, marginRight: 18, borderRadius: 15, marginBottom: 25}}> 
        {
          drillList.map((l, i) => (
            <ListItem
              key={i}
              leftIcon={{ name: l.icon }}
              title={l.name}
              subtitle={l.time}
              onPress={() => { navigation.navigate('Details', {
                  drillName: 'Two Ball Pound',
                  drillTime: '20 Seconds',
                });
              }}
              bottomDivider
            />
          ))
        }
      </ScrollView>
      </>
    );
}

// Exporting the workout list
export default WorkoutList;