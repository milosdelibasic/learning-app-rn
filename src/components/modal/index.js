import React from "react";
import {
  StyleSheet,
  View,
  Modal as RNModal,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import Text from "@components/Text";
import Button from "@components/Button";
import Row from "@components/Row";

import { actions, modalSelector } from "@modules/modal/reducer";

import {
  gray100,
  gray200,
  gray50,
  gray600,
  grayDark,
  warning,
} from "@config/colors";
import { borderRadius, margin, padding } from "@config/spacing";
import { sizes } from "@config/fonts";
import { hitBox10 } from "@config/helpers";

const { width, height } = Dimensions.get("screen");

const Modal = () => {
  const {
    isOpen,
    backgroundClickDisabled,
    title,
    content,
    buttonDivider,
    buttonDirection,
    btn1,
    btn2,
  } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actions.close());
  };

  return (
    <RNModal transparent visible={isOpen} animationType="fade">
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => (backgroundClickDisabled ? {} : closeModal())}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.container}
          onPress={() => {}}>
          <Row style={styles.titleContainer}>
            {title && (
              <Text bold h4 secondary style={styles.title}>
                {title}
              </Text>
            )}
            {!title && <View />}
            <TouchableOpacity onPress={closeModal} hitSlop={hitBox10}>
              <Icon name="close-circle" color={warning} size={sizes.h2} />
            </TouchableOpacity>
          </Row>
          <View style={styles.contentContainer}>{content}</View>
          <View
            style={[
              styles.buttonContainer,
              {
                backgroundColor: !buttonDivider ? gray100 : gray200,
                borderTopWidth: !buttonDivider ? StyleSheet.hairlineWidth : 0,
              },
            ]}>
            {btn1 && !btn2 && (
              <Button
                style={styles.singleButton}
                textStyle={styles.singleButtonText}
                label={btn1?.label}
                onPress={btn1?.onPress}
              />
            )}
            {btn1 && btn2 && buttonDirection === "horizontal" && (
              <Row>
                <Button
                  primary
                  medium
                  label={btn1?.label}
                  onPress={btn1?.onPress}
                />
                <Button
                  secondary
                  medium
                  label={btn2?.label}
                  onPress={btn2?.onPress}
                />
              </Row>
            )}
            {btn1 && btn2 && buttonDirection === "vertical" && (
              <View style={styles.buttonColumn}>
                <Button
                  primary
                  medium
                  style={styles.verticalButtons}
                  label={btn1?.label}
                  onPress={btn1?.onPress}
                />
                <Button
                  secondary
                  medium
                  style={[styles.verticalButtons, styles.lastButton]}
                  label={btn2?.label}
                  onPress={btn2?.onPress}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  overlay: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(24, 30, 40, 0.6)",
    flex: 1,
    zIndex: 2,
  },
  container: {
    backgroundColor: gray200,
    width: width / 1.2,
    maxHeight: height / 1.5,
    borderRadius: borderRadius.large * 1.3,
    position: "relative",
    zIndex: 3,
  },
  titleContainer: {
    paddingHorizontal: padding.large,
    paddingVertical: padding.base,
    borderBottomColor: gray600,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    width: "90%",
  },
  contentContainer: {
    padding: padding.large,
  },
  buttonContainer: {
    padding: padding.large,
    borderTopColor: gray600,
    borderBottomLeftRadius: borderRadius.large * 1.3,
    borderBottomRightRadius: borderRadius.large * 1.3,
  },
  singleButton: {
    backgroundColor: grayDark,
    width: "100%",
    paddingVertical: padding.base,
    borderRadius: borderRadius.big,
  },
  singleButtonText: {
    color: gray50,
  },
  buttonColumn: {
    alignItems: "center",
    width: "100%",
  },
  verticalButtons: {
    width: width / 1.2 - 2 * padding.large,
  },
  lastButton: {
    marginTop: margin.base,
  },
});
