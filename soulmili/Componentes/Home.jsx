import React from 'react';
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native';

const image = { uri:"https://media.giphy.com/media/C3AWtOqhTU04Wk9bD1/giphy.gif" }

export default function Home(){
    return(
        
            <View style={styles.cabecalho}>

            <ImageBackground source={image} resizeMode="cover" style={styles.viewGif}></ImageBackground>

            <Text style={styles.titulo}>Dados da Conta</Text>
            <Text style={styles.texto2}>Cliente: Rincón Castello Branco</Text>

            <View style={styles.viewConta}>
            <Text style={styles.texto}>Agência: 0001</Text>
            <Text style={styles.texto}>Conta: 000012345-6</Text>
            <Text style={styles.texto}>Tipo de Conta: Corrente</Text>
            </View>

            <Text style={styles.titulo}>Saldo: R$ 1.025.854,99</Text>

            <Text>{`\n`}</Text>

            <Text style={styles.texto2}>Faça uma boa ação, ajude uma amiga!</Text>

            <View style={styles.viewConta}>

                <Image style={styles.gif}source={require('./logopix.png')}/>
                      
            </View>
            <View style={styles.viewConta}>

                <Text style={styles.texto}>Pix para Vanessa</Text>
                
            </View>

            <Text>{`\n`}</Text>
            <Text style={styles.texto}>Acesse Investir e veja quanto seu dinheiro pode render conosco!</Text>
            <Text style={styles.texto}>Acesse nossas dicas de Investimento e Controle Financeiro para aumentar seu patrimônio!</Text> 
           
           
           

            

            </View>
        
    )
}

const styles = StyleSheet.create({
    viewGif:{
       width:300,
       height:300
   },
   gif:{
       width:50,
       height:50
   },
   cabecalho:{
       flex:1,
       alignItems:'center',
       backgroundColor:'black',
       
   },
   button:{
    backgroundColor:'gray',
    borderWidth:2,
    borderRadius:30,
    padding:2
   },
   texto:{
       color:'white',
       margin:5,
       textAlign:'center'
   },
   texto2:{
    color:'white',
    margin:5,
    fontSize:15
},
   viewConta:{
       flexDirection:'row'
   },
   titulo:{
    color:'white',
    margin:5,
    fontSize:18,
    fontWeight:'bold'
   }
 });