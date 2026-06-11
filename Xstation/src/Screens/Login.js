import React, { useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";

function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")

    function onSubmit() {
        auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                navigation.navigate('NavigationTabs', { screen: "Home" })
            })
            .catch((error) => {
                setLoginError(error.message)
                console.log(error)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>

            <TextInput 
                style={styles.input}
                keyboardType="email-address" 
                placeholder="email" 
                onChangeText={text => setEmail(text)} 
                value={email} 
            />

            <TextInput 
                style={styles.input}
                keyboardType="default" 
                placeholder="contraseña" 
                secureTextEntry={true} 
                onChangeText={text => setPassword(text)} 
                value={password} 
            />
            
            {loginError !== "" && <Text style={styles.errorText}>{loginError}</Text>}
            
            <Pressable style={styles.botonPrimario} onPress={() => onSubmit()}>
                <Text style={styles.botonLogin}>Iniciar sesión</Text>
            </Pressable>
             
            <Pressable style={styles.noTengoCuenta} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.linkTexto}>No tengo cuenta</Text>
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
        fontSize: "32px",
        fontWeight: "bold",
        color: "white", 
        textAlign: "center",
        marginBottom: "40px",
    },
    input: {
        height: "55px",
        backgroundColor: "#1F2937",
        borderRadius: "12px",
        paddingLeft: "8%",
        fontSize: "16px",
        color: "white",
        marginBottom: "7%",
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
        height: 55,
        backgroundColor: "#6366F1",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3%",
    },
    botonLogin: {
        color: "white",
        fontSize: "16px",
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

export default Login;