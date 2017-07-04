import React from "react";
import { View, Text, Image, StyleSheet,TouchableHighlight } from "react-native";
import Cell from "./Cell";

const styles = StyleSheet.create({
  view:{
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#edf1fc'
  },
  titleView: {
    height: 80,
    width: "100%",
    backgroundColor:"#363f5e"
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight:"bold",
    textAlign: "center",
    marginTop:46
  },
  footer: {
    height: 60,
    flexDirection: "row",
    paddingLeft:30,
    paddingRight:30
  },
  footerContent: {
    width: "50%",
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "column"
  }
});

class BusinessDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 1
    }
  }

  render() {
    const { activeKey } = this.state;
    const activePeople = require("./../images/activePeople.png");
    const people = require("./../images/people.png");
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <View style={styles.titleView}>
            <Text style={styles.title}>工作台</Text>
          </View>
          <Cell count="40" title="客户管理" parity="odd"/>
          <Cell count="50" title="业务管理" parity="even"/>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <TouchableHighlight onPress={()=> {this.setState({activeKey: 1})}}>
              <Image source={ activeKey === 1 ? activePeople : people} style={{width:26,height:26}} />
            </TouchableHighlight>
            <Text style={{fontSize: 12, marginTop: 6, color: activeKey === 1 ? "#619af8" : "#2c2c2c"}}>工作区</Text>
          </View>
          <View style={styles.footerContent}>
            <TouchableHighlight onPress={()=> {this.setState({activeKey: 2})}}>
              <Image source={ activeKey !== 1 ? activePeople : people} style={{width:26,height:26}} />
            </TouchableHighlight>
            <Text style={{fontSize: 12, marginTop: 6, color: activeKey !== 1 ? "#619af8" : "#2c2c2c"}}>我的</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default BusinessDetail;
