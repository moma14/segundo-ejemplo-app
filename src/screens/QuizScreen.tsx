import { View, StyleSheet, Pressable,Text, ActivityIndicator } from "react-native";
import React from "react";
import { useCatFact } from "../viewModels/FactViewModel";

const QuestionCat=()=>{

    const { fact, error, loading, showFetch } = useCatFact();
    console.log(fact)
    console.log(loading)
    console.log(error,"este es un error")

    return(
        <View style={styles.container} >
            {/* {loading && <ActivityIndicator size={'large'}></ActivityIndicator>} */}
            {fact&&<View>
                <Text style={styles.text}>Este es el dato random:{fact.fact}</Text>
                <Pressable style={styles.button} onPress={showFetch}>
                    <Text style={styles.buttonText}>Es verdadero? o falso</Text>
                </Pressable>
            </View>
            }
            
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    text:{
        fontFamily:'16',
        color:'#333',
        marginTop:25,
    },
    button:{
        alignItems:'center',
        backgroundColor:'#007AFF',
        borderRadius:5,
        padding:10,
        marginBottom:10,
        color:'white',
    },
    buttonText:{
        textAlign:'center',
        color:'white',
    },
});

export default QuestionCat;