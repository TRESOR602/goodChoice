import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
  Extrapolate,
  Easing,
} from 'react-native-reanimated';
import { Colors } from '../constantes/Colors'
import { scale, verticalScale } from '../styles/responsiveSize';


type Props = {
  count?: number;             // Nombre de carrés
  size?: number;              // Taille de base
  activeScale?: number;       // Facteur de grossissement
  activeColor?: string;       // Couleur active
  inactiveColor?: string;     // Couleur inactive
  cycleDuration?: number;     // Durée totale d'un cycle complet (ms)
  waveWidth?: number;         // Largeur de la "vague" (0-1, où 1 = tous les carrés actifs simultanément)
};

export function SequentialEvolvingLoader({
  count = 4,
  size = 40,
  activeScale = 1.5,
  activeColor = '#007AFF',
  inactiveColor = '#ccc',
  cycleDuration = 2000,
  waveWidth = 0.3, // 30% de la timeline = vague assez étroite pour un effet prononcé
}: Props) {
  
  // UNE SEULE valeur partagée qui contrôle toute l'animation
  // Cette valeur va de 0 à 1 en continu et représente notre "horloge globale"
  const globalProgress = useSharedValue(0);

  useEffect(() => {
    // Démarrer l'animation cyclique globale
    // Cette animation ne s'arrête jamais et fait des allers-retours de 0 à 1
    globalProgress.value = withRepeat(
      withTiming(1, { 
        duration: cycleDuration, 
        easing: Easing.inOut(Easing.ease) 
      }),
      -1,    // Répétition infinie
      false  // Pas d'inversion (toujours 0→1, puis redémarre à 0)
    );
  }, [cycleDuration]);

  // Fonction pour calculer les propriétés d'animation d'un carré spécifique
  const createSquareStyle = (index: number) => {
    return useAnimatedStyle(() => {
      // Calculer la position relative de ce carré dans la séquence (0 à 1)
      const squarePosition = index / (count - 1);
      
      // Définir la fenêtre d'activation pour ce carré
      // Le centre de la fenêtre correspond à la position du carré
      const windowCenter = squarePosition;
      const windowStart = Math.max(0, windowCenter - waveWidth / 2);
      const windowEnd = Math.min(1, windowCenter + waveWidth / 2);
      
      // Calculer l'intensité d'activation pour ce carré
      // Cette valeur sera 0 quand le carré est inactif, 1 quand il est pleinement actif
      let activationIntensity = 0;
      
      if (globalProgress.value >= windowStart && globalProgress.value <= windowEnd) {
        // Le carré est dans sa fenêtre d'activation
        // Calculer une courbe en cloche pour un effet plus naturel
        const windowProgress = (globalProgress.value - windowStart) / (windowEnd - windowStart);
        
        // Utiliser une fonction sinusoïdale pour créer une courbe douce
        // sin(π * x) crée une courbe en cloche parfaite de 0 à 1 puis retour à 0
        activationIntensity = Math.sin(Math.PI * windowProgress);
      }
      
      // Interpoler l'échelle basée sur l'intensité d'activation
      const currentScale = interpolate(
        activationIntensity,
        [0, 1],
        [1, activeScale],
        // Extrapolate.CLAMP
      );
      
      // Interpoler la couleur basée sur l'intensité d'activation
      // Ici nous utilisons l'opacité pour simuler le changement de couleur
      // Tu peux aussi utiliser une vraie interpolation de couleur si nécessaire
      const colorIntensity = interpolate(
        activationIntensity,
        [0, 1],
        [0, 1], // De semi-transparent à opaque
        // Extrapolate.CLAMP
      );
      
      return {
        transform: [{ scale: currentScale }],
        backgroundColor: activeColor,
        // opacity: colorIntensity,
      };
    });
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: count }, (_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.square,
            createSquareStyle(index),
            { 
              width: size, 
              height: size, 
              marginHorizontal: 8,
              backgroundColor: inactiveColor,
            }
          ]}
        />
      ))}
    </View>
  );
}

// Version alternative avec effet de "rebond" plus prononcé
export default function SequentialEvolvingLoaderBouncy({
  count = 4,
  activeScale = 1.8,
  activeColor = Colors.jaune,
  inactiveColor =Colors.black,
  cycleDuration = 1500,
}: Props) {
  
  const globalProgress = useSharedValue(0);

  useEffect(() => {
    globalProgress.value = withRepeat(
      withTiming(1, { 
        duration: cycleDuration, 
        easing: Easing.bezier(0.25, 0.46, 0.45, 0.94) // Easing plus dynamique
      }),
      -1,
      false
    );
  }, [cycleDuration]);

  const createSquareStyle = (index: number) => {
    return useAnimatedStyle(() => {
      // Position de ce carré dans la séquence
      const squarePosition = index / (count - 1);
      
      // Créer une vague plus étroite pour un effet plus net
      const waveWidth = 0.25;
      const distanceFromWave = Math.abs(globalProgress.value - squarePosition);
      
      // Calculer l'activation basée sur la distance à la vague
      const maxDistance = waveWidth / 2;
      let activation = 0;
      
      if (distanceFromWave <= maxDistance) {
        // Formule pour créer un pic d'activation net
        activation = Math.cos((distanceFromWave / maxDistance) * (Math.PI / 2));
        activation = Math.pow(activation, 2); // Élever au carré pour un effet plus prononcé
      }
      
      // Appliquer l'activation aux propriétés visuelles
      const currentScale = 1 + activation * (activeScale - 1);
      const currentOpacity = 0.4 + activation * 0.6; // De 0.4 à 1
      
      return {
        transform: [
          { scale: currentScale },
          // Ajouter un léger mouvement vertical pour plus de dynamisme
          { translateY: -activation * 5 }
        ],
        backgroundColor: activeColor,
        opacity: currentOpacity,
      };
    });
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: count }, (_, index) => (
        <Animated.View
          key={index}
          style={[
            styles.square,
            createSquareStyle(index),
            { 
              width: scale(10), 
              height: verticalScale(24), 
              marginHorizontal: scale(4),
              backgroundColor: inactiveColor,
            }
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
  },
  square: {
    borderRadius: 6,
  },
});