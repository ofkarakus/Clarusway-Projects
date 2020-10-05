import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponent = () => {
    return(
        <View style = {styles.container}  >
            <Text>Selamlar</Text>
            <Text>Clarusway App'e hosgeldiniz</Text>

            <View>
                <Text>Fullstack Developer olmaya hazir olun!</Text>
            </View>
        </View>
    )
}

export default MyComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'yellowgreen',
        margin: 15,
        padding: 10,
        borderWidth: 3,
        borderColor: 'pink',
        borderRadius: 5
    }
})