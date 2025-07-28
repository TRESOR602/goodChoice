import { Image, StyleSheet, Text, View, ViewProps } from 'react-native';
import React from 'react';
import { ThemeText } from './ThemeText';
import ImagePath from '../constantes/ImagePath';
import { scale, verticalScale } from '../styles/responsiveSize';
import { Colors } from '../constantes/Colors';
import Foundation from 'react-native-vector-icons/Foundation';
import { Row } from './Row';
// differents type de classe de voyage
/*
    j'ai juste definit que deux class de voyage 
*/
const classVoyage = {
  Standard: 'Standard',
  VIP: 'VIP',
};
// sa prend tout les props de view et sa augmente d'autres props
type Props = ViewProps & {
  // prix du tickets sans la monaie
  price: number;
  // ville de depart
  depart: string;
  // ville d'arriver
  arriver: string;
  // nom de lagence
  nomDeLagence: string;
  // class de voyage
  classDeVoyage: keyof typeof classVoyage;
  // heure de depart
  heure: string;
};

const Voyages = ({
  price,
  depart,
  arriver,
  nomDeLagence,
  classDeVoyage,
  heure,
  style,
  ...rest
}: Props) => {
  return (
    <View style={styles.Voyages} {...rest}>
      <View style={styles.row}>
        <ThemeText
          variant="littlePBold"
          color="black"
          style={[styles.time, { backgroundColor: Colors.bg }]}
        >
          {heure}
        </ThemeText>
        <View style={{ flexDirection: 'row' }}>
          <ThemeText variant="littlePBold" color="black">
            {price}FCFA
          </ThemeText>
          <ThemeText>/billet</ThemeText>
        </View>
      </View>
      <View style={styles.row}>
        <ThemeText variant="pSemilbold" color="black">
          {depart}
        </ThemeText>
        <Row style={{ alignItems: 'center' }}>
          {/* <Image source={ImagePath.line} style={{ width: scale(66), height: verticalScale(3) }} /> */}
          <Text>-------------</Text>
          <ThemeText style={{ fontSize: 20 }}>{'>'}</ThemeText>
        </Row>

        <ThemeText variant="pSemilbold" color="black">
          {arriver}
        </ThemeText>
      </View>
      <View style={styles.row}>
        <ThemeText variant="littleP">{nomDeLagence}</ThemeText>
        {/* sa conditionne l'affiche en fonction de la class de voyage  */}
        {classDeVoyage === 'Standard' ? (
          <ThemeText variant="littleP">Standard</ThemeText>
        ) : (
          <ThemeText
            variant="DmRegular"
            style={{
              backgroundColor: '#FAE1B2',
              borderRadius: 10,
              textAlign: 'center',
              paddingVertical: verticalScale(3),
              paddingHorizontal: scale(10),
            }}
          >
            VIP <Foundation name="crown" color="#000" size={12} />
          </ThemeText>
        )}
      </View>
    </View>
  );
};

export default Voyages;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    // flex: 1
  },
  Voyages: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    gap: 30,
  },
  time: {
    padding: 6,
    borderRadius: 10,
  },
});
