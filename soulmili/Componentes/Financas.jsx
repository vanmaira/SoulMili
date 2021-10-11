import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const image = { uri:"https://media.giphy.com/media/XmWKDF92dZEVuF0K8G/giphy.gif" }

export default function Financas(){
    return(
        <View style={styles.corpo}>
           <ImageBackground source={image} resizeMode="cover" style={styles.viewGif}></ImageBackground>
            <Text style={styles.texto2}> 1. Entenda quais são os seus gastos</Text>
            <Text style={styles.texto2}> 2. Defina objetivos financeiros</Text>
            <Text style={styles.texto2}> 3. Mantenha uma planilha de gastos</Text>
            <Text style={styles.texto2}> 4. Faça uma reserva de emergência</Text>
            <Text style={styles.texto2}> 5. Tenha outras fontes de renda</Text>
            <Text style={styles.texto2}> 6. Mantenha a rotina de pagamento organizada</Text>
            <Text style={styles.texto2}> 7. Renegocie suas dívidas</Text>
            <Text style={styles.texto2}> 8. Controle os gastos supérfluos</Text>
            <Text style={styles.texto2}> 9. Conheça aplicativos de organização financeira</Text>
            <Text style={styles.texto2}> 10. Invista dinheiro com segurança</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    corpo:{
        backgroundColor:'black',
        flex:1,
        justifyContent:'center',
        fontSize:30
    },
    texto:{
        color:'white',
        margin:5,
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold'
    },
    texto2:{
        color:'white',
        margin:5,
        fontSize:20,
        textAlign:'left'
        
    },
    viewGif:{
        width:400,
        height:250
    },
 });