import { StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'
import fontFamily from '../constantes/fontFamily'
import { Colors } from '../constantes/Colors'
import { moderateScale } from '../styles/responsiveSize'
const styles = StyleSheet.create({
    paragraph: {
        fontFamily: fontFamily.DMregular,
        fontSize: moderateScale(16),
        fontWeight: 400,
    },
    h5: {
        fontFamily: fontFamily.BRbold,
        fontSize: moderateScale(18),
        fontWeight: 700
    },
    h1: {
        fontFamily: fontFamily.BRbold,
        fontSize: moderateScale(24),
        fontWeight: 700,

    },
    h2: {
        fontFamily: fontFamily.BRbold,
        fontSize: moderateScale(20),
        fontWeight: 700,

    },
    pBold: {
        fontFamily: fontFamily.DMbold,
        fontSize: moderateScale(16),
        fontWeight: 700,

    },
    littlePBold: {
        fontFamily: fontFamily.DMbold,
        fontSize: moderateScale(14),
    },
    pSemilbold: {
        fontFamily: fontFamily.DMsemiBold,
        fontSize: moderateScale(16)
    },
    littleP: {
        fontFamily: fontFamily.DMregular,
        fontSize: moderateScale(14),

    },
    pPresent: {
        fontFamily: fontFamily.DMregular,
        fontSize: moderateScale(14),
        lineHeight: 34
    },
    DmRegular: {
        fontFamily: fontFamily.BRregular,
        fontSize: moderateScale(14),
        fontWeight: 400,
    }

})
type Props = TextProps & {
    variant?: keyof typeof styles;
    color?: keyof typeof Colors

}

export function ThemeText({ variant, color, style, ...props }: Props) {
    return (
        <Text style={[styles[variant ?? 'paragraph'], { color: color }, style]} {...props}></Text>
    )
}


