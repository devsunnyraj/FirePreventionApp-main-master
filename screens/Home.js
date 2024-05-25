import React ,{useState, useEffect} from "react";
import { Text,View ,StyleSheet,Image,SafeAreaView,ScrollView, ActivityIndicator} from "react-native";

import { MaterialCommunityIcons,Ionicons,MaterialIcons,FontAwesome } from '@expo/vector-icons';

import MapView,{Marker,Circle,Polygon} from 'react-native-maps'

const Home = ({navigation,route})=>{

    // const {name,email}= route.params

    const [isLoading,setIsLoading]=useState(false)

    const [mapRegion, setMapRegion] = useState({
        latitude : 17.426653428003128,
        longitude: 78.47229349145623,
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0421
    })

    const refreshIconPressed =()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);
    }

    return(
        <SafeAreaView style={styles.HomeTopMain}>
            <ScrollView>
            <View style={styles.HomeTopBar}>
                <Image style={styles.HomeTopIcon} source={require("../assets/img/sunnyrajpic.jpg")}/>
                <View style ={styles.HomeTopText}>
                    <Text style={styles.HomeTopWelcomeText}>Welcome Back</Text>
                    {/* <Text style={styles.HomeTopNameText}>{name || 'Sunny Raj'}</Text> */}
                    <Text style={styles.HomeTopNameText}>{'Sunny Raj'}</Text>
                </View>
                <MaterialCommunityIcons
                    name={'logout'}
                    size={27}
                    style={styles.HomeTopLogout}
                />
            </View>
            <View style={styles.HomemapView}>
                <MapView 
                    style={styles.map}
                    region={mapRegion} 
                >
                    <Marker coordinate={mapRegion} title="Marker"/>
                    <Circle
                    center={{
                        latitude : 17.426653428003128,
                        longitude: 78.47229349145623
                    }}
                    radius={2500}
                    fillColor="rgba(224, 141, 58,0.5)"
                    strokeWidth={0}
                    />
                    <Polygon
                        strokeWidth={0}
                        coordinates={[
                            {
                             latitude : 17.456225, 
                             longitude : 78.474485
                            },
                            {
                                latitude : 17.438253,  
                                longitude :78.434681
                               },
                               {
                                latitude : 17.398190,  
                                longitude : 78.456211
                               },
                               {
                                latitude : 17.401139, 
                                longitude : 78.503589
                               },
                               {
                                latitude : 17.433406, 
                                longitude : 78.515091
                               }
                        ]}
                        fillColor="rgba(252, 190, 3,0.5)"
                    />
                </MapView>     
            </View>
            <View style={styles.HomeMidInfo}>
                <View style={styles.HomeMidInfoTab}>
                    <Ionicons
                        name="people"
                        color={"orange"}
                        size={35}
                    />
                    <Text style={styles.HomeMidInfoHeaderText}>5</Text>
                    <Text style={styles.HomeMidInfoSubText}>Workers</Text>
                </View>
                <View style={styles.HomeMidInfoTab}>
                    <MaterialCommunityIcons
                        name="contacts"
                        color={"orange"}
                        size={35}
                    />
                    <Text style={styles.HomeMidInfoHeaderText}>Contacts</Text>
                    <Text style={styles.HomeMidInfoSubText}>Emergency</Text>                    
                </View>
                <View style={styles.HomeMidInfoTab}>
                    <MaterialIcons
                        name="sensor-window"
                        color={"orange"}
                        size={35}
                    />
                    <Text style={styles.HomeMidInfoHeaderText}>Sensor</Text>
                    <Text style={styles.HomeMidInfoSubText}>Status</Text>
                </View>
            </View>
            <View style={styles.HomeLowerMain}>
                    <Text style={styles.HomeLowerHeadText}>Checked in Workers:</Text>
                    <MaterialCommunityIcons
                        name={'refresh'}
                        size={27}
                        style={styles.HomeTopLogout}
                        onPress={refreshIconPressed}
                    />
                    { isLoading ?
                        <View style={styles.workersLoadingList}>
                            <ActivityIndicator size={"large"} color={"white"}/>
                            <Text style={styles.loadingText}>Loading...</Text>
                        </View>
                            :
                        <View style={styles.HomeLowerInfo}>
                            <View style={styles.HomeLowerInfoTabs}>
                                <Text style={styles.HomeLowerInfoText}>ID Name</Text>
                                <Text style={styles.HomeLowerInfoText}>Check-In</Text>
                                <Text style={styles.HomeLowerInfoText}>Check-Out</Text>
                            </View>
                            <View style={styles.HomeLowerInfoTabs}>
                                <Text style={styles.HomeLowerInfoText}>Sunny Raj</Text>
                                <Text style={styles.HomeLowerInfoText}>8:00 AM</Text>
                                <Text style={styles.HomeLowerInfoText}>7:30 PM</Text>
                            </View>
                            <View style={styles.HomeLowerInfoTabs}>
                            <Text style={styles.HomeLowerInfoText}>Rahul Kumar</Text>
                                <Text style={styles.HomeLowerInfoText}>9:00 AM</Text>
                                <Text style={styles.HomeLowerInfoText}>2:30 PM</Text>
                            </View>
                            <View style={styles.HomeLowerInfoTabs}>
                            <Text style={styles.HomeLowerInfoText}>Pankaj Thakur</Text>
                                <Text style={styles.HomeLowerInfoText}>10:00 AM</Text>
                                <Text style={styles.HomeLowerInfoText}>1:30 PM</Text>
                            </View>
                            <View style={styles.HomeLowerInfoTabs}>
                            <Text style={styles.HomeLowerInfoText}>Jyoti Rathore</Text>
                                <Text style={styles.HomeLowerInfoText}>10:00 AM</Text>
                                <Text style={styles.HomeLowerInfoText}>9:30 PM</Text>
                            </View>
                            <View style={styles.HomeLowerInfoTabs}>
                            <Text style={styles.HomeLowerInfoText}>Shewta Jha</Text>
                                <Text style={styles.HomeLowerInfoText}>6:00 AM</Text>
                                <Text style={styles.HomeLowerInfoText}>2:30 PM</Text>
                            </View>
                        </View>    
                    }          
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    HomeTopMain:{
        overflow:"scroll",
        flex: 1,
        marginTop:38,
        backgroundColor:"rgb(45,45,45)",
        position:"relative"
    },
    HomeTopBar:{
        // flex: 100,
        height:80,
        // backgroundColor : "black",
        flexDirection: "row",
        alignItems: "center",
        position:"relative"
    },
    HomeTopIcon:{
        width: 50,
        height: 50,
        // backgroundColor : "white",
        margin : 12,
        borderRadius: 20
    },
    HomeTopText:{
        // backgroundColor:"yellow",
        height: 50,
    },
    HomeTopNameText:{
        fontSize: 27,
        color:"white"
    },
    HomeTopWelcomeText:{
        color:"white"
    },
    HomeTopLogout:{
        position:"absolute",
        right: 12,
        color:"white"
    },
    HomemapView:{
        height:425,
        // flex: 0.55,
        // backgroundColor:"black",
        marginTop:8,
        borderRadius:50,
        overflow:"hidden",
        borderWidth : 2
    },  
    map: {
        flex : 1,
    },HomeMidInfo:{
        flexDirection:'row'
    },
    HomeMidInfoTab:{
        padding:6,
        backgroundColor:"rgb(31,31,31)",
        height: 110,
        width: 110,
        marginTop:20,
        marginLeft:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'space-evenly'
    },HomeMidInfoHeaderText:{
        color:"white",
        fontSize:17
    },HomeMidInfoSubText:{
        color:"rgb(200, 200, 200)",
        fontSize:10
    },HomeLowerHeadText:{
        color:"white",
        fontSize:20
    },HomeLowerMain:{
        // backgroundColor:"white",
        width:380,
        marginBottom: 30,
        marginTop:10,
        marginLeft:15
    },HomeLowerInfoTabs:{
        backgroundColor:"rgb(31,31,31)",
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-around",
        height:30,
        borderRadius:10,
        alignItems:"center"
    },HomeLowerInfoText:{
        textAlign:"center",
        color:'white'
    },workersLoadingList:{
        alignItems:"center",
        height: 80,
        marginTop: 20,
        justifyContent:"space-evenly"
    },loadingText:{
        color:"white",
        fontSize:15
    }
})