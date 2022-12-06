import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './src/components/Signup';

export default function App() {
  return (
    <View style={styles.container}>

    <View style={styles.viewText}>
      <Text style={{fontSize: 50}}> Hola xD </Text>
     </View>
      <StatusBar style="auto"/>
        <Signup/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText:{
    display:'flex',
    backgroundColor: 'red',
    height: '10%',
    justifyContent: 'center',


  }





});
