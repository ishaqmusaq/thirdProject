
import React ,{Component} from 'react';
import {  StyleSheet, Text, View ,Button} from 'react-native';

import {styles} from './screens/styles/styles'




class  Feed extends Component() {
    Render(){
  return (
    <View style={styles.center}>
<Text style={styles.center}></Text>
<Button  
title="go to Feed"
onPress={()=>this.props.navigation.navigate('Details') }

/>
    </View>
  )
    }

}


 export default Feed;