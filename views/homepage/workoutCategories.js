import { Card, Image } from 'react-native-elements';
import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import dribblingImage from '../../assets/dribbling.jpg'
import shootingImage from '../../assets/shooting.jpg'
import passingImage from '../../assets/passing.jpg'
import defenseImage from '../../assets/defense.jpg'
import conditioningImage from '../../assets/conditioning.jpg'
import styles from '../../styles/style.js'

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
  
function WorkoutCategories() {
    return(
        <>
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
        </>
    );
}

export default WorkoutCategories;