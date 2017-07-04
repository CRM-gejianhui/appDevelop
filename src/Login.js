import React from "react";
import { View, Text, TextInput, Image, Button, StyleSheet, AsyncStorage } from "react-native";
import Storage from "./util/Storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#363f5e',
    paddingLeft: 50,
    paddingRight: 50
  },
  userName: {
    width: 100,
    height: 100,
    backgroundColor: "#559aff",
    padding: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius:51,
    justifyContent: "center",
    alignItems: 'center',
  }
});

/**
 * 登录页面
 */

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {

    fetch('http://apicrm.nongfenqi.net/user/login', {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        "crmDevice": {
          "appVersion": "string",
          "deviceBrand": "string",
          "deviceId": "63dff528-b645-449f-bc84-a95a8222a6b4",
          "deviceMemory": "string",
          "deviceModel": "string",
          "deviceName": "string",
          "deviceType": 0,
          "isRoot": 0,
          "osType": 0,
          "resolutionHeight": 0,
          "resolutionWidth": 0,
          "screenDensity": "string",
          "systemRom": "string",
          "systemVersion": "string"
        },
        "password": "1111zz",
        "username": "zhaozhao"
      })
    }).then(response => {
      return response.json()
    })
      .then(result => {
        const data = result.data || {};
        console.log(data.token.accessToken,'data.token.accessToken')
        Storage.save("token",data.token.accessToken);
        console.log(Storage.get("token"),'----token');
        const { navigate } = this.props.navigation;
        navigate('BusinessDetail');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 30, height: "40%",justifyContent: "center"}}>
          <View style={styles.userName}>
            <Text style={{color: "#fff",fontSize: 16,fontWeight: "bold"}}>Demon</Text>
          </View>
        </View>
        <View style={{width: "100%", borderColor: "#606f98", borderBottomWidth: 1, flexDirection:'row'}}>
          <Image source={require("./images/head.png")} style={{width:30,height:30}}/>
          <TextInput onChangeText={value =>{console.log(value)}} autoCorrect={false} autoCapitalize="none" style={{flex:1, height: 40, color: "#606f98",marginLeft:10}} placeholder="请输入手机号" placeholderTextColor="#606f98"/>
        </View>
        <View style={{width: "100%", borderColor: "#606f98", borderBottomWidth: 1, marginTop: 12, flexDirection:'row'}}>
          <Image source={require("./images/password.png")} style={{width:30,height:30}}/>
          <TextInput secureTextEntry autoCapitalize="none" style={{flex:1, marginLeft:10, height: 40, color: "#606f98"}} placeholder="请输入密码" placeholderTextColor="#606f98"/>
        </View>
        <View style={{width: "100%", height: 40, borderWidth: 1, borderStyle: "solid", borderColor: "transparent", backgroundColor: "#559aff", borderRadius: 5, marginTop: 40, paddingLeft: 5, paddingRight: 5}}>
          <Button
            title="登 陆"
            color="#fff"
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    )
  }
}

export default Login;