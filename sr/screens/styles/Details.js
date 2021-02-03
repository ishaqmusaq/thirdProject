import React ,{Component} from 'react';
import {  StyleSheet, Text, View ,Button} from 'react-native';






class  Details extends Component() {
    Render(){
  return (
    <View style={styles.center}>
<Text style={styles.center}></Text>
<Button  
title="go to Bottom tabs"
onPress={()=>this.props.navigation.navigate('Bottom tabs') }

/>
<Button  
title="go to Top tabs"
onPress={()=>this.props.navigation.navigate('Top tabs') }

/>
    </View>
  )
    }

}


 export default Details;