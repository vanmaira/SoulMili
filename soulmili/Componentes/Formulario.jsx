import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';



export default function Formulario(){
    const [valores, setValores] = useState({
        a:0,
    });
    const [result, setResult] = useState(0);
   
console.log(valores);

    return(
        
        <View style={styles.corpo}>  
        
            <Text style={styles.texto}>Simule seu investimento e receba retorno de até 70%</Text>
                    
        <View> 

        <Image 
            style={styles.gif}
            source={require('./invest.jpg')}/>

            <TextInput style={styles.input}
            keyboardType='numeric' 
            placeholder='Valor'
            onChangeText={
                (valor)=>setValores({
                    ...valores, a: parseInt(valor)
                })
            }
            />
             <Text>{`\n`}</Text> 

        </View>
                      
        <View style={styles.botoes}>
              
                <TouchableOpacity
                style={styles.button}
                onPress ={
                    ()=> setResult (((valores.a*70)/100)+valores.a)
                }>
                    <Text style={styles.texto}> CALCULAR </Text>
                </TouchableOpacity>
              
        </View>
                <Text>{`\n`}</Text>
                <Text>{`\n`}</Text>
                <Text style={styles.texto}>Seu novo Saldo será: {result.toFixed(2)}</Text>

        
        </View>
        
    )
}

const styles = StyleSheet.create({
   
   button:{
    backgroundColor:'red',
    borderWidth:2,
    borderRadius:30,
    padding:2,
    fontSize:30,
    height:50,
    width:150,
       
   },
   texto:{
       color:'white',
       margin:5,
       fontSize:20,
       textAlign:'center'
   },
   input:{
       alignItems:'center',
       color:'white',
       backgroundColor:'gray',
       width:200,
       textAlign:'center',
       margin:10,
       height:40,
       fontSize:30
   },
   corpo:{
       backgroundColor:'black',
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       fontSize:30
   },
   gif:{
       width:210,
       height:200,
       alignItems:'center',
       justifyContent:'center',
       margin:5
       
   }
 });

 