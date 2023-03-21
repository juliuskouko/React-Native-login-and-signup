import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: ""
        }
    }
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Log In</Text>
            </View>

            <View>
                <TextInput 
                    style={styles.input} 
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.email}
                    onChange={(email)=>{
                        this.setState({email:email})
                    }}
                />
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Password'
                    value={this.state.password}
                    onChange={(password)=>{
                        this.setState({password:password})
                    }}
                />
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.noAccountContainer}>
                <Text style={styles.noAccountText}>Don't have an account?</Text>
                <Text style={styles.signUp}>Sign up</Text>
            </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
        marginHorizontal: 50,
    },
    loginText: {
        fontSize: 45,
        color: "#5100ad",
    },
    loginContainer: {
        marginBottom: 35
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#5100ad",
        fontSize: 20,
        height: 50,
        marginBottom: 10,
    },
    forgotPassword: {
        alignSelf:"flex-end",
        marginVertical: 4,
        color:"#0853a8"
    },
    buttonContainer: {
        height: 40,
        backgroundColor: "#5100ad",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 45,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
    noAccountContainer: {
        flexDirection: "row",
        justifyContent:"center"
    },
    noAccountText: {
        marginRight: 5
    },
    signUp:  {
        color: "#5100ad"
    }


  });
