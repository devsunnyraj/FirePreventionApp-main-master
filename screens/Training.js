import React from "react";
import { Text, StyleSheet,View,ScrollView, Image, TouchableOpacity} from "react-native";

const Training = ()=>{
    return(
        <View style={styles.camreasMain}>
            <ScrollView>
                <Text style={styles.safetyTipsHeader}>Safety Tips</Text>
                <View style={styles.camerasTabs}>
                    <Text style={styles.TrainingTabsHeader}>Fire Safety</Text>
                    <Image style={styles.TrainingTabsImage} source={{uri:"https://www.filepicker.io/api/file/6i5N2hiEQU6TjzXJZ65n"}}/>
                    <Text style={styles.TrainingTabsSubText}>Click to expand</Text>
                    <View style={styles.SafetyTabsButton}>
                        <TouchableOpacity style={styles.ButtonReadMore}>
                            <Text style={styles.ReadMoreText}>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonExpand}>
                            <Text style={styles.expandText}>Expand</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.camerasTabs}>
                    <Text style={styles.TrainingTabsHeader}>Fall Protection</Text>
                    <Image style={styles.TrainingTabsImage} source={{uri:"https://t3.ftcdn.net/jpg/05/02/89/76/360_F_502897604_xhoDkgNGO7m6NMTpYajVIzjC1bIzlMt5.jpg"}}/>
                    <Text style={styles.TrainingTabsSubText}>Click to expand</Text>
                    <View style={styles.SafetyTabsButton}>
                        <TouchableOpacity style={styles.ButtonReadMore}>
                            <Text style={styles.ReadMoreText}>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonExpand}>
                            <Text style={styles.expandText}>Expand</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.camerasTabs}>
                    <Text style={styles.TrainingTabsHeader}>Toxic Gas Safety</Text>
                    <Image style={styles.TrainingTabsImage} source={{uri:"https://www.pngitem.com/pimgs/m/34-344017_toxic-gas-sign-hd-png-download.png"}}/>
                    <Text style={styles.TrainingTabsSubText}>Click to expand</Text>
                    <View style={styles.SafetyTabsButton}>
                        <TouchableOpacity style={styles.ButtonReadMore}>
                            <Text style={styles.ReadMoreText}>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonExpand}>
                            <Text style={styles.expandText}>Expand</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.camerasTabs}>
                    <Text style={styles.TrainingTabsHeader}>Unexpected Situations</Text>
                    <Image style={styles.TrainingTabsImage} source={{uri:"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2024/03/Resignation-letter-for-an-unexpected-emergency-2.png"}}/>
                    <Text style={styles.TrainingTabsSubText}>Click to expand</Text>
                    <View style={styles.SafetyTabsButton}>
                        <TouchableOpacity style={styles.ButtonReadMore}>
                            <Text style={styles.ReadMoreText}>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonExpand}>
                            <Text style={styles.expandText}>Expand</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    safetyTipsHeader:{
        fontSize: 27,
        color:"white",
        marginLeft:10
    },
    camreasMain:{
        paddingTop:50,
        paddingLeft:10,
        backgroundColor:"rgb(45,45,45)",
        flexDirection:"column",
        flex: 1,
    },
    camerasTabs:{
        backgroundColor:"white",
        width:350,
        height:350,
        borderRadius:20,
        paddingLeft:20,
        margin: 20,
        justifyContent:"space-evenly",
        alignItems:"start",
        flexDirection:"column"
    },
    TrainingTabsImage:{
        width:300,
        height:170
    },
    TrainingTabsHeader:{
        fontSize:22
    },
    TrainingTabsSubText:{
        fontSize:16,
        fontWeight:"bold"
    },SafetyTabsButton:{
        flexDirection:"row",
        justifyContent:"flex-end",
    },ButtonReadMore:{
        backgroundColor: "white",
        borderColor:"#6D28D9",
        borderWidth:1.5,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 20,
        height : 40,
        width:100,
        marginRight:10
    },ButtonExpand:{
        backgroundColor: "#6D28D9",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 20,
        height : 40,
        width:100,
        marginRight:10
    },expandText:{
        color:"white",
        fontSize:15
    },ReadMoreText:{
        color:"#6D28D9",
        fontSize:14
    }
})

export default Training