import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        
       <Text style={styles.title}>
        
       </Text>

        <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
        E-mail
        </Button>

        
        <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
        Senha
        </Button>


        <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
        Entrar
        </Button>

      

        <p>SENHA</p>

        <p>ENTRAR</p>

        <p>Cadastrar</p>

        <p>Esqueci minha senha</p>



      </Text>
      <Image style={styles.logo} source={require('../assets/images.jpg')} />


       <p>@2022 Todos os Direitos Reservados</p>

       <p>Contato:31-999953742</p>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
