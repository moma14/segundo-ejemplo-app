import { View, FlatList,Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

const CuriousCats=[
    {id:"1", text:'Hay mas gatos negros que blancos'},
    {id:"2", text:'Tienen 6 bigotes'},
    {id:"3", text:'Hay mas gatos siameses'},
    {id:"4", text:'hay pocos gatos pelones '},
    {id:"5", text:'Los gatos tienen orejas pequeñas'},
    {id:"6", text:'Tienen felinos prominentes'},
]

const ResultCat=()=>{
    const [List, setList]=useState(""); 


    return(
        <View style={styles.container}>
        <FlatList
            data={CuriousCats}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(      
                <View style={styles.listContainer}>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            )}
            contentContainerStyle={styles.viewContainer}
        >

        </FlatList>
        </View>
  
    )

};

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:20,
    },
    text:{
        fontFamily:'16',
        color:'#333',
        marginBottom:10,
        textAlign:'center',
        marginTop:15,
    },
    viewContainer:{
        flexGrow:1,//permite que la lista crezca y se mantenga centrada
        justifyContent:'center',//centra los elementos dentro del FlatList
        alignItems:'center',
    },
    listContainer:{
        fontFamily:'16',
        color:'#333',
        marginBottom:10,
        textAlign:'center',
    }

})
export default ResultCat;

