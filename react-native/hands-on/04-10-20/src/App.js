import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';

const App = () => {
  const my_name = 'Omer';
  const isAdmin = true;


  function myFunction() {
    return 'hello clarusway';
  }

  function myFunction2() {
    return (
      <>
        <Text style={{margin: 10}}>hellooo!</Text>
        <Text style={{margin: 10}}>hellooo!</Text>
      </>
    );
  }

  function myFunction3() {

    if (isAdmin)
      return <Text>Welcome Function</Text>
    return <Text>Welcome Member</Text>
    
  }

  function myFunction4(userName) {
    return <Text>Selam {userName}!</Text>
  }

  function myFunction5() {
    const cities = ['izmir', 'ankara', 'istanbul']
    return cities.map(city => <Text style={{fontSize:20, marginLeft: 20}}>{city}</Text>)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>CLARUSWAY!</Text>
      </View>
      <Text style={styles.merhaba}>Merhaba {myFunction()}</Text>
      <Text style={styles.merhaba}>Merhaba {4 + 9}</Text>
      <Text style={styles.merhaba}>Merhaba {my_name}</Text>

      {myFunction2()}

      {myFunction3()}
      {isAdmin ? <Text>Welcome Ternary</Text> : null}
      {isAdmin && <Text>Welcome Boolean</Text>}

      {myFunction4('Omer')}

      {myFunction5()}

      <MyComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    padding: 20,
    margin: 20,
    borderRadius: 15,
  },

  text: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  merhaba: {
    marginLeft: 20,
    color: 'purple',
  },
});

export default App;
