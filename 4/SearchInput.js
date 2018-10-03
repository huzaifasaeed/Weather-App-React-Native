import React from 'react';
import { StyleSheet, View,TextInput } from 'react-native';

export default class SearchInput extends React.Component {
  handleChangeText= (newLocation) => {
    this.props.location =newLocation;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        autoCorrect={false}
        placeholder={this.props.placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always" 
        onChangeText={this.handleChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgba(0,0,0,0.2)",
    height:40,
    width:300,
    marginTop:20,
    marginHorizontal:40,
    paddingHorizontal:10,
    borderRadius:5,
  },
  
  textInput:{
    flex: 1,
    color:"white",
  },
});
