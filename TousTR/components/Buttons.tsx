import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { Colors } from '../constantes/Colors'
import { ThemeText } from './ThemeText'
import { scale, verticalScale } from '../styles/responsiveSize'
type Props = TouchableOpacityProps&{
    name:string,
    color?:string
    borderSize?:number,
    gap?:number,

}

export function Buttons ({name,color,style,...rest}:Props){
  return (
    <TouchableOpacity style={[{backgroundColor:color??Colors.jaune, borderWidth:rest.borderSize ?? 0,gap:rest.gap?? 0},styles.Button,style]} {...rest}>
        <ThemeText variant='h5'>{name}</ThemeText>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    Button:{
        justifyContent:'center',
        alignItems:'center',
        padding:scale(15),
        borderRadius:20,

    }
})