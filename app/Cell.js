import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cell: {
    width: '94%',
    height: 120,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: 10,
    marginTop: 16,
    flexDirection: "row"
  },
  head: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: 'flex-end'
  },
  content: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: 'flex-start',
    paddingLeft:10
  },
  next: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems:"center"
  },
  odd:{
    width: 70,
    height: 70,
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"transparent",
    borderRadius:35,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#80cafb"
  },
  even: {
    width: 70,
    height: 70,
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"transparent",
    borderRadius:35,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#f9a686"
  }
});
const atm = require("./../images/atm.png");
const cattle = require("./../images/niu.png");

class Cell extends Component {
  render() {
    const { count, title, parity } = this.props;
    return (
      <View style={styles.cell}>
        <View style={styles.head}>
          <View style={parity === "odd" ? styles.odd : styles.even}>
            <Image source={parity === "odd" ? atm : cattle} style={{width:40,height:40}}/>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={{fontSize: 18,fontWeight: "bold",lineHeight:40}}>{title}</Text>
          <Text style={{color: "#999", lineHeight:30}}>人数 {count}</Text>
        </View>
        <View style={styles.next}>
          <Image source={require("./../images/right.png")} style={{width:20,height:30}}/>
        </View>
      </View>
    )
  }
}

export default Cell;