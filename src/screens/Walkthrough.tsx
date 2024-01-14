import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Walkthrough: undefined;
  SignUpEmail: undefined;
  // ... add other screen names as needed
};

// Define the type for the navigation prop specifically for this screen
type WalkthroughNavigationProp = StackNavigationProp<RootStackParamList, 'Walkthrough'>;

// Define the props for the Walkthrough component
type Props = {
  navigation: WalkthroughNavigationProp;
};

const Walkthrough: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.walkthrough}>
      <Pressable
        style={[styles.seeTheWorldContainer, styles.text2Position]}
        onPress={() => {}}
      >
        <Text style={[styles.seeTheWorldWithAi, styles.guidaTypo]}>
          See the world with AI
        </Text>
      </Pressable>
      <Pressable style={styles.controlsButtons} 
      onPress={() => navigation.navigate('SignUpEmail')}
      >
        <Text style={[styles.text, styles.textTypo]}>Create account</Text>
      </Pressable>
      <Pressable style={styles.haveAnAccountContainer} onPress={() => {}}>
        <Text style={styles.text1}>
          <Text style={styles.haveAnAccount}>{`Have an account? `}</Text>
          <Text style={[styles.logIn, styles.textTypo]}>Log in</Text>
        </Text>
      </Pressable>
      <Image
        style={[styles.nativeHomeIndicator, styles.nativePosition]}
        resizeMode="cover"
        source={require("../../assets/home-indicator.png")}
      />
      <Pressable style={styles.donswish1960sVintageStackO} onPress={() => {}}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/man-with-glasses.png")}
        />
      </Pressable>
      <View style={styles.walkthroughChild} />
      <Text style={[styles.guida, styles.guidaTypo]}>Guida</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text2Position: {
    top: "50%",
    position: "absolute",
  },
  guidaTypo: {
    fontFamily: FontFamily.title3,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.title3_size,
    textAlign: "center",
  },
  textTypo: {
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
  },
  nativePosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  seeTheWorldWithAi: {
    marginTop: 93,
    marginLeft: -163.5,
    width: 327,
    textAlign: "center",
    color: Color.inkDarkest,
  },
  seeTheWorldContainer: {
    left: "50%",
  },
  text: {
    color: Color.skyWhite,
    lineHeight: 16,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    fontSize: FontSize.regularNoneMedium_size,
    textAlign: "center",
  },
  controlsButtons: {
    right: 98,
    bottom: 114,
    left: 96,
    borderRadius: 48,
    backgroundColor: Color.colorIndigo,
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
    position: "absolute",
  },
  haveAnAccount: {
    fontFamily: FontFamily.interRegular,
    color: "#202325",
  },
  logIn: {
    color: Color.colorIndigo,
  },
  text1: {
    marginLeft: -93.5,
    lineHeight: 24,
    fontSize: FontSize.regularNoneMedium_size,
    textAlign: "center",
  },
  haveAnAccountContainer: {
    bottom: 66,
    left: "50%",
    position: "absolute",
  },
  nativeHomeIndicator: {
    bottom: 0,
    maxWidth: "100%",
    height: 34,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  donswish1960sVintageStackO: {
    left: 63,
    top: 196,
    width: 253,
    height: 223,
    position: "absolute",
  },
  walkthroughChild: {
    top: 579,
    left: 70,
    width: 8,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  guida: {
    top: 89,
    left: 150,
    color: Color.colorIndigo,
    textAlign: "center",
    position: "absolute",
  },
  text2: {
    marginTop: -6,
    left: 30,
    textAlign: "left",
    lineHeight: 16,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    fontSize: FontSize.regularNoneMedium_size,
    color: Color.inkDarkest,
    top: "50%",
    position: "absolute",
  },
  nativeStatusBar: {
    top: 0,
    height: 44,
    backgroundColor: Color.skyWhite,
  },
  walkthrough: {
    borderRadius: 32,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.skyWhite,
  },
});

export default Walkthrough;
