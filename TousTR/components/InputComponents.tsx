import { Pressable, PressableProps, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constantes/Colors'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { ThemeText } from './ThemeText';
import { scale, verticalScale } from '../styles/responsiveSize';
// typage du code
type Props = PressableProps & {
  placeholder: string;
  data: datainput[]
}
// typage des data
type datainput={
  id:number,
  nom:string,
}
// recu
const InputComponents = ({ placeholder, data, ...Props }: Props) => {

  const [checked,setChecked]= useState(true);
  const [selected,setSelected]= useState<number | null>(null);
  const [value,setValue]=useState<string>('')
    const handleId =(id:number)=>{
      setSelected(prev => prev === id? null:id)
    }

  return (
    <View style={{alignItems:'center'}}>
      <Pressable style={[styles.Select, { backgroundColor: Colors.bg }]} {...Props} onPress={()=>{setChecked(!checked)}} >
        <ThemeText>{value?value:placeholder} </ThemeText>
        <EvilIcons name="chevron-down" color="#000" size={24} />
      </Pressable>
      <View style={[styles.container,checked&&{display:'none'}]} >
        <ScrollView showsVerticalScrollIndicator={false} style={{padding:scale(10)}}>
          {data.map(({id,nom}) => {
            return <Pressable key={id} style={[
              styles.elements
            ]} onPress={()=>{
              handleId(id)
              setValue(nom)
              setChecked(!checked)
              }} >
              <ThemeText>{nom}</ThemeText>
              <Pressable style={[styles.circle,selected===id&&{backgroundColor:Colors.black} ]}>
              </Pressable>
            </Pressable>
          })}
        </ScrollView>
      </View>

    </View>
  )
}

export default InputComponents

const styles = StyleSheet.create({
  Select: {
    borderRadius: 20,
    color: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width:scale(320)
  },
  circle:{
    borderRadius:20,
    width:scale(15),
    height:verticalScale(15),
    borderWidth:0.6,
    color:'#ccc',
  },
  elements:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:scale(8)
  },
  container:{
    width:scale(300),
    height:verticalScale(200),
    elevation:2,
    padding:scale(8),
  }
})