import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight, Sparkles } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { COLORS, GRADIENTS, SIZES } from '../constants/theme';

export default function LandingScreen({ navigation }) {
  
  const handleGetStarted = () => {
    console.log("Get Started button pressed! Navigating to Login...");
    navigation.navigate('Login');
  };

  return (
    <LinearGradient colors={GRADIENTS.background} style={styles.container}>
      <View style={styles.contentContainer}>
        
        {/* Floating Icon / Badge */}
        <Animated.View 
          entering={FadeInDown.delay(200).duration(800)} 
          style={styles.badgeContainer}
        >
          <Sparkles color="#8B5CF6" size={24} />
          <Text style={styles.badgeText}>AI-Powered Recruitment</Text>
        </Animated.View>

        {/* Main Title & Subtitle */}
        <Animated.View entering={FadeInDown.delay(400).duration(800)}>
          <Text style={styles.title}>Filter<Text style={styles.titleHighlight}>AI</Text></Text>
          <Text style={styles.subtitle}>
            Screen hundreds of resumes down to the top candidates in seconds using local RAG & intelligent scoring.
          </Text>
        </Animated.View>

        {/* Action Button */}
        <Animated.View 
          entering={FadeInDown.delay(600).duration(800)} 
          style={styles.buttonWrapper}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleGetStarted}
            style={styles.touchableArea}
          >
            <LinearGradient
              colors={GRADIENTS.primary}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Get Started</Text>
              <ArrowRight color={COLORS.textPrimary} size={20} style={styles.buttonIcon} />
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    borderColor: COLORS.cardBorder,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: SIZES.pillRadius,
    marginBottom: 24,
  },
  badgeText: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 12,
  },
  titleHighlight: {
    color: '#8B5CF6',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: SIZES.pillRadius,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  touchableArea: {
    width: '100%',
  },
  gradientButton: {
    flexDirection: 'row',
    height: 56,
    borderRadius: SIZES.pillRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginLeft: 8,
  },
});