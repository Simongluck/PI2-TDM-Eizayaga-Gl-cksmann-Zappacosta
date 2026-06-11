import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native-web";
import { auth, db } from "../firebase/config";



function Profile() {

    const [userName, setUsername] = useState("")
    const [posteos, setPosteos] = useState([]);
    const [email, setEmail] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(() => {

        db.collection('users').where('email', "==", auth.currentUser.email).onSnapshot((docs) => {
            docs.forEach((doc) => {
                setUsername(doc.data().username);
            });
        });
        db.collection('posts').onSnapshot((docs) => {
                let posts = [];
                docs.forEach((doc) => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
                setPosteos(posts);
                setLoading(false);
            });
            
            db.collection('posts').onSnapshot((docs) => {
                let posts = [];
                docs.forEach((doc) => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
                setPosteos(posts);
                setLoading(false);
            });
    })


    return (
        <View>
            <Text>{userName}</Text>
            <Text>{email}</Text>
            <Text>ME FALTA METER EL ARRAY DE POSTEOS ACA</Text>


            <Pressable onPress={() => navigation.navigate("Login")}><Text>Cerrar Sesión</Text></Pressable>

        </View>
    )

}

export default Profile