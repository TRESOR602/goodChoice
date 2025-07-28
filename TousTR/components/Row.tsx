import { View, ViewStyle, type ViewProps } from "react-native";
// typage avec typeScript
type Props = ViewProps&{
    gap?:number
}
//  se composant fonctionne comme une view mais rends automatiquement les elements  en flexDirection Row
export function Row({style, gap ,...rest}:Props){
    return <View style={[RowStyle,style,gap?{gap:gap}:undefined]} {...rest} ></View>
}

const RowStyle = {
    flex:0,
    flexDirection: 'row',
    alignItems: 'center',
} satisfies ViewStyle