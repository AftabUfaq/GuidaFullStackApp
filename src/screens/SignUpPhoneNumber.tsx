import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
  Walkthrough: undefined;
  SignUpEmail: undefined;
  SignUpPhoneNumber: undefined; // Add this line
  Verification: { phoneNumber: string };
  ChoosePassword: { email?: string; phoneNumber?: string }; // Updated line
};
// Define the type for the navigation prop specifically for this screen
type SignUpPhoneNumberNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUpPhoneNumber"
>;

// Define the props for the SignUpEmail component
type Props = {
  navigation: SignUpPhoneNumberNavigationProp;
};

const SignUpPhoneNumber: React.FC<Props> = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation<SignUpPhoneNumberNavigationProp>();

  const handleContinue = () => {
    // Navigate to Verification screen and pass the phone number
    navigation.navigate("ChoosePassword", { phoneNumber });
  };
  return (
    <View style={[styles.SignUpPhoneNumber, styles.iconLayout]}>
      <View style={[styles.controlsTextFields, styles.fieldLayout]}>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="default" // 'default' allows for text and numbers
          autoCapitalize="none" // Usually emails are not capitalized
          autoCorrect={false}
          value={phoneNumber}
          onChangeText={setPhoneNumber} // Update the phone number state
        />
      </View>

      <View style={[styles.barsNavBarsStandard, styles.barsLayout]}>
        <Text style={styles.title}>Title</Text>
        <Text style={[styles.rightActionable, styles.textTypo]}>Sign up</Text>

        <Pressable
          style={styles.leftActionable}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/images/left-action.png")}
          />
        </Pressable>
      </View>

      <Text style={[styles.whatsYourPhone, styles.whatsYourPhonePosition]}>
        What’s your phone number?
      </Text>

      <Pressable
        style={[styles.controlsButtons, styles.barsLayout]}
        onPress={handleContinue}
      >
        <Text style={[styles.text, styles.textTypo]}>Continue</Text>
      </Pressable>

      <View style={[styles.viewsProgressBars, styles.indicatorLayout]}>
        <View style={[styles.indicator, styles.indicatorLayout]} />
      </View>

      <View style={[styles.nativeStatusBar, styles.barsPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  barsLayout: {
    height: 48,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  input: {
    borderColor: "#000", // Set the border color to match the design
    borderWidth: 1,
    borderRadius: 5, // Use the same border radius as your design
    padding: 10, // Add padding to match the design
    marginBottom: 20, // Adjust the margin as needed
    fontSize: 16, // Set the font size as needed
    fontFamily: FontFamily.regularNoneMedium, // Set the font family as needed
    color: Color.inkDarkest, // Set the text color as needed
    width: "90%", // Set the width to match the design
    alignSelf: "center", // Center align the text input
    height: 48,
  },
  whatsYourPhonePosition: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  barsPosition: {
    left: 0,
    right: 0,
    backgroundColor: Color.skyWhite,
  },
  fieldLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
    left: -1,
    right: -1,
  },
  title: {
    marginLeft: -18.5,
    fontFamily: FontFamily.interRegular,
    display: "none",
    marginTop: -9,
    textAlign: "center",
    color: Color.inkDarkest,
    lineHeight: 18,
    fontSize: FontSize.largeNoneBold_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rightActionable: {
    color: Color.primaryBase,
    textAlign: "right",
    right: 24,
    fontWeight: "500",
    display: "none",
    lineHeight: 18,
    fontSize: FontSize.largeNoneBold_size,
    marginTop: -9,
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
    left: 0,
    right: 0,
    backgroundColor: Color.skyWhite,
  },
  whatsYourPhone: {
    top: 144,
    fontWeight: "700",
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.inkDarkest,
    lineHeight: 18,
    fontSize: FontSize.largeNoneBold_size,
    width: 327,
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
    right: 18,
    bottom: 110,
    left: 30,
    borderRadius: 48,
    backgroundColor: "#521887",
  },
  viewsProgressBars: {
    top: 108,
    backgroundColor: Color.skyLight,
    height: 4,
    width: 327,
    left: 24,
    overflow: "hidden",
  },
  nativeStatusBar: {
    top: 0,
    height: 44,
    position: "absolute",
    right: 0,
  },
  indicator: {
    width: "50%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "50%",
    backgroundColor: Color.colorIndigo,
    height: "100%",
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
  SignUpPhoneNumber: {
    borderRadius: 32,
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.skyWhite,
  },
});

export default SignUpPhoneNumber;
