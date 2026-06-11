import React, { useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
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
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro</Text>

            <TextInput style={styles.input} keyboardType="default" placeholder="username"
                onChangeText={text => setUsername(text)} value={username} />

            <TextInput style={styles.input} keyboardType="email-address" placeholder="email"
                onChangeText={text => setEmail(text)} value={email} />

            <TextInput style={styles.input} keyboardType="default" placeholder="contraseña" secureTextEntry={true}
                onChangeText={text => setPassword(text)} value={password} />


            {registerError !== "" && <Text style={styles.errorText}>{registerError}</Text>}

            <Pressable style={styles.botonPrimario} onPress={() => onSubmit()}>
                <Text style={styles.botonRegister}>Registrate</Text>
            </Pressable>

            <Pressable style={styles.noTengoCuenta} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.linkTexto}>Ya tengo cuenta</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0F19",
        justifyContent: "center",
        padding: "10%",
    },
    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 40,
    },
    input: {
        height: 55,
        backgroundColor: "#1F2937",
        borderRadius: 12,
        paddingLeft: "8%",
        fontSize: 16,
        color: "white",
        marginBottom: "7%",
        placeholderTextColor: "#666",
        border: "1px solid rgb(55, 65, 81)",
    },
    errorText: {
        color: "#EF4444",
        fontSize: "14px",
        textAlign: "center",
        marginBottom: "3%",
        fontWeight: "500",
    },
    botonPrimario: {
        height: "55px",
        backgroundColor: "#6366F1",
        borderRadius: "12px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3%",
    },
    botonRegister: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    noTengoCuenta: {
        marginTop: "24px",
        alignItems: "center",
    },
    linkTexto: {
        color: "#9CA3AF",
        fontSize: "14px",
        textDecorationLine: "underline",
    }
});

export default Register;