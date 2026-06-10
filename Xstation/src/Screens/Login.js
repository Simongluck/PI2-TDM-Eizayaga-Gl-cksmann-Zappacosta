import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { auth, db } from "../firebase/config";

function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")

    function onSubmit() {
        auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                navigation.navigate("Home")
            })
            .catch((error) => {
                setLoginError(error.message)
                console.log(error)
            })
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>Login</Text>

            <TextInput keyboardType="email-address" placeholder="email" onChangeText={text => setEmail(text)} value={email} />
            <TextInput keyboardType="default" placeholder="password" secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
            {loginError !== "" && <Text>{loginError}</Text>}
            <Pressable onPress={() => onSubmit()}>
                <Text>Iniciar sesión</Text>
            </Pressable>
             

            <Pressable onPress={() => navigation.navigate("Register")}>
                <Text>No tengo cuenta</Text>
            </Pressable>
        </View>
    )
}

export default Login;