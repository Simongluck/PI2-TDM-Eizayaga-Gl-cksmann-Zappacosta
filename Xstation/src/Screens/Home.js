import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { db, auth } from "../firebase/config";

function Home({ navigation }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const unsubscribe = db
            .collection("posts")
            .orderBy("fecha", "desc")
            .onSnapshot((docs) => {

                let posteos = [];

                docs.forEach((doc) => {

                    posteos.push({
                        id: doc.id,
                        data: doc.data()
                    });

                });

                setPosts(posteos);

            });

        return unsubscribe;

    }, []);

    function handleLike(post) {

        let likes = [];

        if (post.data.likes) {
            likes = post.data.likes;
        }

        const userEmail = auth.currentUser.email;

        if (likes.includes(userEmail)) {

            let nuevosLikes = [];

            likes.forEach((email) => {

                if (email !== userEmail) {
                    nuevosLikes.push(email);
                }

            });

            db.collection("posts")
                .doc(post.id)
                .update({
                    likes: nuevosLikes
                });

        } else {

            likes.push(userEmail);

            db.collection("posts")
                .doc(post.id)
                .update({
                    likes: likes
                });

        }

    }

    return (

        <View style={{ flex: 1 }}>

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {

                    let cantidadLikes = 0;

                    if (item.data.likes) {
                        cantidadLikes = item.data.likes.length;
                    }

                    let imagen =
                        item.data.imagen !== ""
                            ? (
                                <Image
                                    source={{
                                        uri: item.data.imagen
                                    }}
                                    style={{
                                        width: 300,
                                        height: 300
                                    }}
                                />
                            )
                            : null;

                    return (

                        <View
                            style={{
                                margin: 15,
                                padding: 15,
                                borderWidth: 1
                            }}
                        >

                            <Text>
                                {item.data.email}
                            </Text>

                            <Text>
                                {item.data.descripcion}
                            </Text>

                            {imagen}

                            <Text>
                                Likes: {cantidadLikes}
                            </Text>

                            <Pressable
                                onPress={() => handleLike(item)}
                            >
                                <Text>
                                    Me gusta
                                </Text>
                            </Pressable>

                            <Pressable
                                onPress={() =>
                                    navigation.navigate(
                                        "Comentarios",
                                        {
                                            postId: item.id
                                        }
                                    )
                                }
                            >
                                <Text>
                                    Comentar
                                </Text>
                            </Pressable>

                        </View>

                    );

                }}
            />

        </View>

    );

}

export default Home;