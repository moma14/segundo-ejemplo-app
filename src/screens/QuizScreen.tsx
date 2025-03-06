import { StyleSheet, View, Text, Button, ActivityIndicator, Modal } from "react-native";
import { useCatFact } from "../viewModels/FactViewModel";

export default function Index() {

    const { fact, error, loading, showFetch } = useCatFact();
    return(
        <View style={styles.container}>
            {loading && <ActivityIndicator size={'large'}></ActivityIndicator>}

            {error && <Text>Este es el error: {error}</Text>}

            {fact && <View>
                <Text>{fact.fact}</Text>
                </View>}

                <Button title="Verdadero"></Button>
                <Button title="Falso"></Button>
                <Button title="Reset" onPress={showFetch}></Button>
        </View>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})
