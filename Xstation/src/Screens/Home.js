import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    Pressable,
    StyleSheet
} from "react-native";

import { auth, db } from "../firebase/config";

function Home({ navigation }) {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = db
            .collection("posts")
            .orderBy("createdAt", "desc")
            .onSnapshot((docs) => {

                let posteos = [];

                docs.forEach((doc) => {
                    posteos.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });

                setPosts(posteos);
                setLoading(false);
            });

        return () => unsubscribe();

    }, []);

    function likePost(post) {

        let likes = post.data.likes || [];
        let email = auth.currentUser.email;

        if (likes.includes(email)) {

            likes = likes.filter(user => user !== email);

        } else {

            likes.push(email);

        }

        db.collection("posts")
            .doc(post.id)
            .update({
                likes: likes
            });
    }

    function renderItem({ item }) {

        return (
            <View style={styles.card}>

                <Text style={styles.email}>
                    {item.data.email}
                </Text>

                <Text style={styles.description}>
                    {item.data.description}
                </Text>

                <Text>
                    Likes: {item.data.likes ? item.data.likes.length : 0}
                </Text>

                <Pressable
                    onPress={() => likePost(item)}
                >
                    <Text style={styles.button}>
                        Me gusta
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() =>
                        navigation.navigate("Comentarios", {
                            postId: item.id
                        })
                    }
                >
                    <Text style={styles.button}>
                        Comentar
                    </Text>
                </Pressable>

            </View>
        );
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Posteos
            </Text>

            {loading ? (
                <Text>Cargando...</Text>
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },

    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 15,
        marginBottom: 15
    },

    email: {
        fontWeight: "bold"
    },

    description: {
        marginVertical: 10
    },

    button: {
        color: "blue",
        marginTop: 10
    }
});

export default Home;