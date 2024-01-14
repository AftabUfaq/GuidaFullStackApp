import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable,TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Walkthrough: undefined;
  SignUpEmail: undefined;
  SignUpPhoneNumber: undefined; // Add this line
  // ... other screen names
};
// Define the type for the navigation prop specifically for this screen
type SignUpEmailNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpEmail'>;

// Define the props for the SignUpEmail component
type Props = {
  navigation: SignUpEmailNavigationProp;
}

const SignUpEmail:React.FC<Props> = ({ navigation }) => {

  return (
    <View style={[styles.signUpEmail, styles.iconLayout]}>
      
      <View style={[styles.controlsTextFields, styles.fieldLayout]}>
        
        <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="default" // 'default' allows for text and numbers
        autoCapitalize="none" // Usually emails are not capitalized
        autoCorrect={false}
        // Add any other props you need for the TextInput
      />
      </View>

      <View style={[styles.barsNavBarsStandard, styles.barsPosition]}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.rightActionable}>Sign up</Text>
        <Pressable style={styles.leftActionable} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/left-actionable.png")}
          />
        </Pressable>
      </View>

      <Text style={[styles.whatsYourEmail, styles.whatsYourEmailLayout]}>
        What’s your email address?
      </Text>
      <Pressable style={styles.controlsButtons} onPress={() => navigation.navigate('SignUpPhoneNumber')}>
        <Text style={[styles.text, styles.textTypo]}>Continue</Text>
      </Pressable>

      <View style={[styles.viewsProgressBars, styles.indicatorLayout]}>
        <View style={[styles.indicator, styles.indicatorLayout]} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  fieldLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
    left:-1,
    right: -1,
  },
  barsPosition: {
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.skyWhite,
  },
  whatsYourEmailLayout: {
    width: 327,
    left: 24,
  },
  textTypo: {
    lineHeight: 16,
    fontSize: FontSize.regularNoneMedium_size,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  input: {
    borderColor: '#000', // Set the border color to match the design
    borderWidth: 1,
    borderRadius: 5, // Use the same border radius as your design
    padding: 10, // Add padding to match the design
    marginBottom: 20, // Adjust the margin as needed
    fontSize: 16, // Set the font size as needed
    fontFamily: FontFamily.regularNoneMedium, // Set the font family as needed
    color: Color.inkDarkest, // Set the text color as needed
    width: '90%', // Set the width to match the design
    alignSelf: 'center', // Center align the text input
    height:48,
  },
  indicatorLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  
  controlsTextFields: {
    top: 194,
    left: 24,
    borderRadius: Border.br_81xl,
    right: 24,
    height: 48,
  },
  title: {
    marginLeft: -18.5,
    fontFamily: FontFamily.interRegular,
    display: "none",
    color: Color.inkDarkest,
    marginTop: -9,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.largeNoneBold_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rightActionable: {
    color: Color.primaryBase,
    textAlign: "right",
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    display: "none",
    lineHeight: 18,
    fontSize: FontSize.largeNoneBold_size,
    top: "50%",
    marginTop: -9,
    right: 24,
    position: "absolute",
  },
  icon: {
    marginTop: -12,
    height: "100%",
    overflow: "hidden",
  },
  leftActionable: {
    left: 18,
    width: 24,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  barsNavBarsStandard: {
    top: 44,
    height: 48,
  },
  whatsYourEmail: {
    top: 144,
    fontWeight: "700",
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.inkDarkest,
    lineHeight: 18,
    fontSize: FontSize.largeNoneBold_size,
    width: 327,
    position: "absolute",
  },
  text: {
    marginTop: -8,
    marginLeft: -34.5,
    fontSize: FontSize.regularNoneMedium_size,
    lineHeight: 16,
    color: Color.skyWhite,
    fontWeight: "500",
    textAlign: "center",
    left: "50%",
  },
  controlsButtons: {
    right: 21,
    bottom: 107,
    left: 27,
    borderRadius: 48,
    backgroundColor: Color.colorIndigo,
    height: 48,
    position: "absolute",
  },
  indicator: {
    width: "50%",
    top: "0%",
    right: "50%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorIndigo,
    height: "100%",
  },
  viewsProgressBars: {
    top: 108,
    backgroundColor: Color.skyLight,
    height: 4,
    width: 327,
    left: 24,
    overflow: "hidden",
  },
  text1: {
    marginTop: -6,
    left: 30,
    textAlign: "left",
    color: Color.inkDarkest,
  },
  nativeStatusBar: {
    top: 0,
    height: 44,
  },
  signUpEmail: {
    borderRadius: 32,
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.skyWhite,
  },
});

export default SignUpEmail;
