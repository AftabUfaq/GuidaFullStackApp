import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SetupPersonalization = () => {
  return (
    <View style={[styles.setupPersonalization1, styles.iconLayout]}>
      <View style={[styles.barsNavBarsStandard, styles.barsPosition]}>
        <Text style={styles.title}>Title</Text>
        <Pressable style={styles.rightActionable} onPress={() => {}}>
          <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
        </Pressable>
        <Pressable
          style={[styles.leftActionable, styles.leftActionablePosition]}
          onPress={() => {}}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/images/left-action.png")}
          />
        </Pressable>
        <View style={styles.barsNavBarsStandardChild} />
      </View>
      <View style={[styles.stepperDots, styles.textPosition]}>
        <View style={styles.controlsLayout1} />
        <View style={[styles.stepperDotsChild, styles.controlsLayout1]} />
      </View>
      <View style={[styles.title1, styles.barsPosition]}>
        <Text style={styles.whatsYourAge}>What’s your age</Text>
        <Text style={styles.soWeCan}>So we can recommend new friends</Text>
      </View>
      <View style={styles.chipsGroup}>
        <View style={[styles.controlsChipsRounded, styles.controlsLayout]}>
          <Text style={[styles.typeHere, styles.textLayout]}>Type here:</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../../assets/images/Vector.png")}
          />
        </View>
        <View style={[styles.controlsChipsRounded1, styles.controlsLayout]}>
          <Pressable
            style={[styles.dontWantToContainer, styles.textPosition]}
            onPress={() => {}}
          >
            <Text style={[styles.dontWantToAnswer, styles.textLayout]}>
              Don’t want to answer
            </Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        style={[styles.controlsButtons, styles.leftActionablePosition]}
        onPress={() => {}}
      >
        <Text style={[styles.text, styles.textLayout]}>Add</Text>
      </Pressable>
      <View style={[styles.nativeStatusBar, styles.barsPosition]} />
      <Image
        style={[styles.nativeHomeIndicator, styles.nativeHomeIndicatorPosition]}
        resizeMode="cover"
        source={require("../../assets/images/home.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  barsPosition: {
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.skyWhite,
  },
  skipTypo: {
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
  },
  leftActionablePosition: {
    left: 18,
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  controlsLayout1: {
    backgroundColor: Color.skyLight,
    height: 8,
    width: 8,
    borderRadius: Border.br_81xl,
  },
  controlsLayout: {
    height: 40,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textLayout: {
    lineHeight: 16,
    marginTop: -8,
    fontSize: FontSize.regularNoneMedium_size,
  },
  nativeHomeIndicatorPosition: {
    maxWidth: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    marginLeft: -18.5,
    display: "none",
    textAlign: "center",
    color: Color.inkDarkest,
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 18,
    fontSize: FontSize.largeNoneRegular_size,
    left: "50%",
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  skip: {
    color: "#979c9e",
    textAlign: "right",
    lineHeight: 18,
    fontSize: FontSize.largeNoneRegular_size,
    marginTop: -9,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
  },
  rightActionable: {
    right: 24,
    top: "50%",
    position: "absolute",
  },
  icon: {
    marginTop: -12,
    height: "100%",
  },
  leftActionable: {
    width: 24,
    height: 24,
    top: "50%",
  },
  barsNavBarsStandardChild: {
    top: 20,
    left: 160,
    backgroundColor: Color.primaryBase,
    height: 8,
    width: 8,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  barsNavBarsStandard: {
    top: 44,
    height: 48,
  },
  stepperDotsChild: {
    marginLeft: 8,
  },
  stepperDots: {
    marginLeft: -11.5,
    top: 64,
    flexDirection: "row",
  },
  whatsYourAge: {
    fontSize: FontSize.title2_size,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.title2,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.inkDarkest,
  },
  soWeCan: {
    lineHeight: 24,
    color: Color.inkLight,
    marginTop: 4,
    fontSize: FontSize.regularNoneMedium_size,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.regularNoneMedium,
  },
  title1: {
    top: 92,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
  },
  typeHere: {
    marginLeft: -147.5,
    color: "#9596a3",
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
    marginTop: -8,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  vectorIcon: {
    top: 9,
    left: 306,
    width: 13,
    height: 22,
    position: "absolute",
  },
  controlsChipsRounded: {
    backgroundColor: Color.skyLighter,
  },
  dontWantToAnswer: {
    marginLeft: -80.5,
    color: Color.colorIndigo,
    textAlign: "center",
    fontFamily: FontFamily.regularNoneMedium,
    marginTop: -8,
  },
  dontWantToContainer: {
    top: "50%",
  },
  controlsChipsRounded1: {
    backgroundColor: Color.primaryLightest,
    marginTop: 12,
  },
  chipsGroup: {
    top: 204,
    right: 21,
    left: 27,
    position: "absolute",
  },
  transparentBackgroundIcon: {
    height: 130,
  },
  text: {
    marginLeft: -15.5,
    color: Color.skyWhite,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
    textAlign: "center",
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  controlsButtons: {
    right: 30,
    bottom: 50,
    borderRadius: 48,
    backgroundColor: Color.colorIndigo,
    height: 48,
  },
  nativeStatusBar: {
    top: 0,
    height: 44,
  },
  nativeHomeIndicator: {
    height: 34,
  },
  setupPersonalization1: {
    borderRadius: 32,
    flex: 1,
    height: 812,
    backgroundColor: Color.skyWhite,
    width: "100%",
  },
});

export default SetupPersonalization;
