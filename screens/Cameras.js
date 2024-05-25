import React from "react";
import { Text,View,StyleSheet } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';


const Cameras = ()=>{
    return(
        <View style={styles.camreasMain}>
            <View style={styles.camerasTabs}>
                <MaterialCommunityIcons
                    name={'cctv'}
                    size={47}
                    color ={"white"}
                />
                <Text style={styles.camerasText}>Cam01.rec</Text>
            </View>
            <View style={styles.camerasTabs}>
                <MaterialCommunityIcons
                    name={'cctv'}
                    size={47}
                    color ={"white"}
                />
                <Text style={styles.camerasText}>Cam02.rec</Text>
            </View>
            <View style={styles.camerasTabs}>
                <MaterialCommunityIcons
                    name={'cctv'}
                    size={47}
                    color ={"white"}
                />
                <Text style={styles.camerasText}>Cam03.rec</Text>
            </View>
            <View style={styles.camerasTabs}>
                <MaterialCommunityIcons
                    name={'cctv'}
                    size={47}
                    color ={"white"}
                />
                <Text style={styles.camerasText}>Cam04.rec</Text>
            </View>
            <View style={styles.camerasTabs}>
                <MaterialCommunityIcons
                    name={'cctv'}
                    size={47}
                    color ={"white"}
                />
                <Text style={styles.camerasText}>Cam05.rec</Text>
            </View>
            <View style={styles.camerasTabs}>
                <MaterialCommunityIcons
                    name={'cctv'}
                    size={47}
                    color ={"white"}
                />
                <Text style={styles.camerasText}>Cam06.rec</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    camreasMain:{
        paddingTop:50,
        paddingLeft:10,
        backgroundColor:"rgb(45,45,45)",
        flexDirection:"row",
        flex: 1,
        flexWrap:"wrap"
    },
    camerasTabs:{
        backgroundColor:"rgb(25,25,25)",
        width:150,
        height:150,
        borderRadius:20,
        padding:10,
        margin: 20,
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    camerasText:{
        fontSize:20,
        color:"white"
    }
})

export default Cameras