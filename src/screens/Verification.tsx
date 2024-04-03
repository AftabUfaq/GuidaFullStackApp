import * as React from "react";
import { useState,useRef, useImperativeHandle,forwardRef,} from "react";
import { StyleSheet, View, Text, Pressable, Image, Keyboard, TouchableWithoutFeedback, TextInput, } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
type RootStackParamList = {
  Verification: {
    phoneNumber: string;
  };
};

type VerificationRouteProps = RouteProp<RootStackParamList, 'Verification'>;

const Verification = React.forwardRef((props, ref) => {
  const route = useRoute<VerificationRouteProps>();
  const navigation = useNavigation();
  const phoneNumber = route.params?.phoneNumber;
  const [code, setCode] = useState("");
  
  // Declare digitInputsRef here, accessible throughout the component
  const digitInputsRef = useRef<TextInput[]>(Array(4).fill(null));

  useImperativeHandle(ref, () => ({
    focusNextInput: () => {
      const nextTextInput = digitInputsRef.current.find((input) => input);
      if (nextTextInput) {
        nextTextInput.focus();
      }
    },
  }));

  const handleDigitChange = (index: number, value: string) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode.join(""));
    // ... existing code

    if (value.length === 1) {
      const nextTextInput = digitInputsRef.current
        .find((input, nextIndex) => nextIndex === (index + 1) % 4);
      if (nextTextInput) {
        nextTextInput.focus();
      }
    }
  };

  // ... rest of your component code
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={[styles.verification, styles.iconLayout]}>
      <View style={styles.nativeStatusBar} />
      <View style={styles.barsNavBarsStandard}>
        <Text style={styles.title}>Title</Text>
        <Pressable
          style={[styles.rightActionable, styles.actionablePosition]}
          onPress={() => navigation.goBack()}>

          <Text style={styles.changeNumber}>Change number</Text>
        </Pressable>
        <Pressable
          style={[styles.leftActionable, styles.actionablePosition]}
          onPress={() => navigation.goBack()}>
        
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/images/left-action.png")}
          />
        </Pressable>
      </View>
      <View style={styles.digitCode}>
          {Array.from({ length: 4 }, (_, index) => (
            <View key={index} style={styles.controlsLayout}>
              <TextInput
                style={[styles.field, styles.fieldBorder]}
                maxLength={1}
                keyboardType="numeric"
                value={code[index] || ""}
                onChangeText={(value) => handleDigitChange(index, value)}
                ref={(input) => (digitInputsRef.current[index] = input!)}
              />
              
            </View>
          ))}
        </View>
      <Text style={[styles.enterAuthenticationCode, styles.enterPosition]}>
        Enter authentication code
      </Text>

      <Text style={[styles.enterThe4DigitContainer, styles.enterPosition]}>
        <Text style={styles.enterThe4Digit}>
            {`Enter the 4-digit that we have sent via the phone number `}</Text>
        <Text style={styles.text4Typo}>
          {phoneNumber ? phoneNumber : 'your phone number'}
        </Text>
      </Text>

      <Pressable
          style={[
            styles.controlsButtons,
            styles.controlsPosition,
            code.length === 4 && styles.enabledButton,
          ]}
          onPress={() => navigation.goBack()}>
          <Text style={[styles.text5, styles.textPosition1]}>Continue</Text>
        </Pressable>
      <View style={[styles.controlsButtons1, styles.controlsPosition]}>
        <Text style={[styles.text6, styles.textPosition1]}>Resend code</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  actionablePosition: {
    top: "50%",
    position: "absolute",
  },
  fieldBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_45xl,
    position: "absolute",
    backgroundColor: Color.skyWhite,
  },
  textPosition: {
    height: 16,
    width: 16,
    left: 16,
    lineHeight: 16,
    fontSize: FontSize.regularNoneMedium_size,
    marginTop: -8,
    display: "none",
    fontFamily: FontFamily.regularNoneMedium,
    top: "50%",
    position: "absolute",
  },
  controlsLayout: {
    width: 48,
    borderRadius: Border.br_29xl,
    height: 48,
    marginRight: 10, // Example spacing
  },
  enterPosition: {
    width: 327,
    left: 24,
    textAlign: "center",
    color: Color.inkDarkest,
    position: "absolute",
  },
  controlsPosition: {
    left: 33,
    right: 15,
    borderRadius: Border.br_29xl,
    height: 48,
    position: "absolute",
  },
  textPosition1: {
    lineHeight: 16,
    marginTop: -8,
    fontSize: FontSize.regularNoneMedium_size,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  nativeStatusBar: {
    top: 0,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.skyWhite,
  },
  title: {
    marginLeft: -18.5,
    display: "none",
    lineHeight: 18,
    fontSize: FontSize.largeNoneBold_size,
    marginTop: -9,
    textAlign: "center",
    color: Color.inkDarkest,
    fontFamily: FontFamily.interRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  changeNumber: {
    textAlign: "right",
    color: Color.colorIndigo,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.largeNoneBold_size,
    marginTop: -9,
  },
  rightActionable: {
    right: 24,
  },
  icon: {
    marginTop: -12,
    height: "100%",
  },
  leftActionable: {
    left: 18,
    width: 24,
    height: 24,
  },
  barsNavBarsStandard: {
    top: 44,
    height: 48,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.skyWhite,
  },
  field: {
    top: -2,
    right: -2,
    bottom: -2,
    left: -2,
    borderColor: "#6b4eff",
    borderWidth: 2,
  },
  text: {
    textAlign: "center",
    color: Color.inkDarkest,
    height: 16,
    width: 16,
    left: 16,
  },
  field1: {
    top: -1,
    right: -1,
    bottom: -1,
    left: -1,
    borderColor: Color.skyLight,
    borderWidth: 1,
  },
  text1: {
    color: Color.inkLighter,
    textAlign: "left",
  },
  controlsTextFields1: {
    marginLeft: 16,
  },
  digitCode: {
    marginLeft: -119.5,
    top: 232,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  enterAuthenticationCode: {
    top: 108,
    fontSize: FontSize.title3_size,
    lineHeight: 32,
    fontFamily: FontFamily.title3,
    fontWeight: "700",
  },
  enterThe4Digit: {
    fontFamily: FontFamily.interRegular,
  },
  text4Typo: {
    fontFamily: FontFamily.title3,
    fontWeight: "700",
  },
  enterThe4DigitContainer: {
    top: 152,
    lineHeight: 24,
    fontSize: FontSize.regularNoneMedium_size,
    width: 327,
    left: 24,
  },
  text5: {
    marginLeft: -34.5,
    color: Color.skyDark,
  },
  controlsButtons: {
    bottom: 151,
    backgroundColor: Color.skyLight,
  },
  text6: {
    marginLeft: -49.5,
    color: Color.colorIndigo,
  },
  controlsButtons1: {
    bottom: 91,
  },
  verification: {
    borderRadius: 32,
    flex: 1,
    height: 812,
    backgroundColor: Color.skyWhite,
    width: "100%",
  },
  enabledButton: {
    backgroundColor: "#6b4eff", // Purple color
  },


});

export default Verification;
