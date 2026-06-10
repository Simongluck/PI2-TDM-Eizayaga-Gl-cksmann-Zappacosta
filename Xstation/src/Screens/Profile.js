import React from "react";
import { View, Text, Pressable } from "react-native-web";



function Profile(){

  

return(
    <View>
        <Text>Nombre del Usuario</Text>
        <Text> EMAIL </Text>

        <Text>FOTO</Text>
        <Text>Posteos del Usuario</Text>

        <Pressable onPress={()=>navigation.navigate("Login")}><Text>Cerrar Sesión</Text></Pressable>

    </View>
)

}

export default Profile