import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Text from "@components/Text";
import {
  amberYellow,
  gray100,
  gray300,
  gray400,
  gray50,
  gray700,
  success,
  warning,
} from "@config/colors";
import { borderRadius, margin, padding } from "@config/spacing";
import Row from "@components/Row";
import { sizes } from "@config/fonts";
import Icon from "@components/Icon";
import Clipboard from "@react-native-community/clipboard";
import { handleSuccess } from "@utils/error";

const { height } = Dimensions.get("screen");

const Code = ({ content = "" }) => {
  const [splittedContent, setSplittedContent] = useState([]);
  const Dot = ({ color: backgroundColor = "#eee" }) => (
    <View style={[styles.dot, { backgroundColor }]} />
  );

  console.log(splittedContent);

  useEffect(() => {
    content && setSplittedContent(content.split("\n"));
  }, [content]);

  const onCopyHandler = () => {
    Clipboard.setString(content);
    handleSuccess({ message: "Successfully copied code" });
  };
  return (
    <View style={styles.container}>
      <Row style={styles.header}>
        <Row spacing="flex-start">
          <Dot color={warning} />
          <Dot color={amberYellow} />
          <Dot color={success} />
        </Row>
        <Icon
          type="ionicon"
          name="copy"
          size={18}
          color={gray50}
          onPress={onCopyHandler}
          style={styles.copyIcon}
        />
      </Row>
      <ScrollView
        horizontal
        contentContainerStyle={styles.innerContainer}
        style={styles.innerContainerStyle}>
        <ScrollView contentContainerStyle={{ height: "auto" }}>
          {splittedContent?.map((line, i) => (
            <Row
              spacing="flex-start"
              key={i}
              style={[
                { paddingLeft: padding.base },
                i === 0 && { paddingTop: padding.base },
                i + 1 === splittedContent?.length && {
                  paddingBottom: padding.base,
                },
              ]}>
              <Text
                h6
                tertiary
                style={{
                  width:
                    splittedContent?.length >= 10
                      ? sizes.h4
                      : splittedContent?.length >= 100
                      ? sizes.h3 + 1
                      : splittedContent?.length >= 1000
                      ? sizes.h1
                      : sizes.h6,
                }}>
                {i + 1}
              </Text>
              <View style={styles.line} />
              <Text h6>{line}</Text>
            </Row>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Code;

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray700,
    borderRadius: borderRadius.base,
    maxHeight: height / 4.5,
    overflow: "scroll",
  },
  header: {
    backgroundColor: gray400,
    height: 26,
    paddingLeft: 8,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 14,
    marginRight: 8,
  },
  innerContainerStyle: {
    // margin: padding.base,
    // paddingBottom: -margin.base,
    // height: "100%",
  },
  line: {
    width: StyleSheet.hairlineWidth,
    height: "100%",
    backgroundColor: gray300,
    marginRight: margin.small,
    marginLeft: margin.small / 2,
  },
  copyIcon: {
    marginRight: 8,
  },
});
