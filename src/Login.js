import React from "react";
import { View, Text, TextInput, Image, Button, StyleSheet } from "react-native";

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
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 30, height: "40%",justifyContent: "center"}}>
          <View style={styles.userName}>
            <Text style={{color: "#fff",fontSize: 16,fontWeight: "bold"}}>Demon</Text>
          </View>
        </View>
        <View style={{width: "100%", borderColor: "#606f98", borderBottomWidth: 1}}>
          <TextInput style={{ height: 40, color: "#606f98"}} placeholder="请输入手机号" placeholderTextColor="#606f98"/>
        </View>
        <View style={{width: "100%", borderColor: "#606f98", borderBottomWidth: 1, marginTop: 10}}>
          <TextInput style={{ height: 40, color: "#606f98"}} placeholder="请输入密码" placeholderTextColor="#606f98"/>
        </View>
        <View style={{width: "100%", height: 40, borderWidth: 1, borderStyle: "solid", borderColor: "transparent", backgroundColor: "#559aff", borderRadius: 5, marginTop: 40}}>
          <Button
            title="登 陆"
            color="#fff"
            onPress={() => {alert("点击了一下")}}
          />
        </View>
      </View>
    )
  }
}

export default Login;