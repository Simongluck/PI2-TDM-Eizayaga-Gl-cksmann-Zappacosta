import React, { useState } from "react"
import { View, Text, TextInput } from "react-native-web"
import { Pressable, StyleSheet } from "react-native"
import { db, auth } from "../firebase/config"

function createPost() {

    const [descripcion, setDescripcion] = useState("")

    function onSubmit() {
        db.collection('posts').add({
            fecha: Date.now(),
            email: auth.currentUser.email,
            descripcion: descripcion,
            imagen: "",
        })
            .then(() => {
                setDescripcion("");
            })
            .catch((error) => {
                console.log("Error al crear el post: ", error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Crear nuevo post</Text>

            <TextInput onChangeText={text => setDescripcion(text)}
                style={styles.inputTextArea}
                value={descripcion}
                keyboardType="default"
                placeholder="Escribe aquí tu comentario..."
                placeholderTextColor="#666"
                multiline={true}
            />

            <Pressable style={styles.botonPublicar} onPress={onSubmit}>
                <Text style={styles.textoBoton}>Publicar post</Text>
            </Pressable>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B0F19",
        padding: "30px",
        paddingTop: "50px",
    },
    titulo: {
        fontSize: "26px",
        fontWeight: "bold",
        color: "white",
        marginBottom: "20px",
    },
    inputTextArea: {
        width: "100%",
        height: "120px",
        backgroundColor: "#1F2937",
        borderWidth: "1px",
        borderColor: "#374151",
        borderRadius: "4px",
        padding: "12px",
        fontSize: "16px",
        color: "white",
        marginBottom: "25px",
    },
    botonPublicar: {
        width: "100%",
        height: "50px",
        backgroundColor: "#6366F1",
        borderRadius: "14px",
        justifyContent: "center",
        alignItems: "center",
    },
    textoBoton: {
        fontSize: "20px",
        fontWeight: "600",
        color: "white",
    }
});

export default createPost