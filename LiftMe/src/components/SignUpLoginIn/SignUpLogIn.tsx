import React from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as Google from 'expo-google-app-auth';

interface SignUpLogInProps {
  signedIn: boolean | null;
  name: string | null;
  photoUrl: string | null;
}

const SignUpLogIn = ({
  signedIn,
  name,
  photoUrl,
}: SignUpLogInProps) => {
  const signIn = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: "293234050382-2ncjlbdpnasa63664j90nvi2u88dm49f.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log(result)
        console.log(result.user.name)
        signedIn = true;
        name = result.user.name;
        photoUrl = result.user.photoUrl;
        // this.setState({
        //   signedIn: true,
        //   name: result.user.name,
        //   photoUrl: result.user.photoUrl
        // })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  return (
    <View style={styles.container}>
    {signedIn ? (
      <LoggedInPage name={name} photoUrl={photoUrl} />
    ) : (
      <LoginPage signIn={signIn} />
    )}
  </View>
  )
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})

export default SignUpLogIn
