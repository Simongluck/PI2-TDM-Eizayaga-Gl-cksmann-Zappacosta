import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { auth, db } from "../firebase/config";

function Register({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [registerError, setRegisterError] = useState("")

    function onSubmit() {
        auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                db.collection("users").add({
                    email: email,
                    username: username,
                })
                navigation.navigate("Login");
            })
            .catch((error) => {
                setRegisterError(error.message);
                console.log(error);
            });
    }

    return (
        <View>
            <Text>Registro</Text>

            <TextInput keyboardType="default" placeholder="username" onChangeText={text => setUsername(text)} value={username} />
            <TextInput keyboardType="email-address" placeholder="email" onChangeText={text => setEmail(text)} value={email} />
            <TextInput keyboardType="default" placeholder="password" secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
            {registerError !== "" && <Text>{registerError}</Text>}
            <Pressable onPress={() => onSubmit()}>
                <Text>Registrate</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text>Ya tengo cuenta</Text>
            </Pressable>
        </View>
    )
}

export default Register;

