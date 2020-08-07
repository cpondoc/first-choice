import { ListItem, Image, ButtonGroup, Button, Icon } from 'react-native-elements';
import React from 'react';
import { Text, View, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import styles from '../styles/style.js'
import FirstChoiceHeader from '../views/generic/header.js'
import conditioningImage from '../assets/dribbling.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

// Settings Tab List
const drillList = [
    {
      name: 'Email and Password',
      icon: 'vpn-key'
    },
    {
      name: 'Privacy Policy',
      icon: 'lock'
    },
    {
      name: 'Terms of Service',
      icon: 'description'
    },
    {
      name: 'FAQs',
      icon: 'help-outline'
    }
  ]

// Creating the Screen
class AccountDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
          }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }

    render() {

        const buttons = ['Level', 'Workout', 'Followers']
        const { selectedIndex } = this.state

        return(
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20}}>
                        <Image
                            source={conditioningImage}
                            style={{ height: 220, width: 220, borderRadius: 110}}
                            PlaceholderContent={<ActivityIndicator />}
                            resizeMode="cover"
                        />
                        <Text style={{fontSize: 25, marginTop: 15, fontWeight:'bold'}}>Chris Pondoc</Text>
                        <Button buttonStyle={{ fontSize: 10, size: 10, height: 40, width: 75, marginTop: 10}} title="Edit" type="outline" />
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center", marginTop: 13}}>
                       <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height: 40, marginRight: 18, marginLeft: 15, borderRadius: 15}}
                        />
                    </View>
                    <View style={{marginTop: 0}}>
                        <Text style={styles.sectionHeader}>Settings</Text>
                        <Text style={{paddingLeft: 15, fontSize: 18}}>Settings of your account.</Text>
                        <ScrollView style={{marginTop: 18, marginLeft: 15, marginRight: 18, borderRadius: 15, marginBottom: 25}}> 
                            {
                                drillList.map((l, i) => (
                                    <ListItem
                                    key={i}
                                    leftIcon={{ name: l.icon }}
                                    title={l.name}
                                    bottomDivider
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default AccountDetails;