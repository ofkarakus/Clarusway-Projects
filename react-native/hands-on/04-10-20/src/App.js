import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';

const App = () => {
  const my_name = 'Omer';

  function myFunction() {
    return 'hello clarusway';
  }

  function myFunction2() {
    return (
      <>
        <Text style={{margin: 30}}>hellooo!</Text>
        <Text style={{margin: 30}}>hellooo!</Text>
      </>
    );
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY!</Text>
      </View>
      <Text style={styles.merhaba}>Merhaba {myFunction()}</Text>
      <Text style={styles.merhaba}>Merhaba {4 + 9}</Text>
      <Text style={styles.merhaba}>Merhaba {my_name}</Text>

      {myFunction2()}

      <MyComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
  },

  merhaba: {
    margin: 20,
    color: 'purple',
  },
});

export default App;
