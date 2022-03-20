import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";

import CheckBox from "@react-native-community/checkbox";
import * as Keychain from "react-native-keychain";
import { useDispatch } from "react-redux";

import Text from "@components/Text";
import Button from "@components/Button";
import Input from "@components/Input";

import useFormInput from "@hooks/useFormInput";

import { actions } from "@modules/auth/reducer";

import { margin, padding } from "@config/spacing";
import { verticalScale } from "@config/fonts";
import { hitBox10 } from "@config/helpers";
import { gray200, grayDark } from "@config/colors";
import t from "@config/constants";
import Row from "@components/Row";

const { width } = Dimensions.get("screen");

const Login = () => {
  const [submit, setSubmit] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const email = useFormInput(t.auth.text_input_email);
  const password = useFormInput(t.auth.text_input_password);

  const dispatch = useDispatch();

  useEffect(() => {
    getLoginData();
  }, []);

  const getLoginData = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials && credentials.username !== "_pfo") {
        setToggleCheckBox(true);
        email.setValue(credentials.username);
        password.setValue(credentials.password);
      }
    } catch (e) {
      // handleError(e, "LoginForm/getLoginData", "dont");
    }
  };

  const removeLoginData = async () => {
    try {
      await Keychain.resetGenericPassword();
    } catch (e) {
      // handleError(e, "LoginForm/removeLoginData", "dont");
    }
  };

  const onSubmitHandler = async () => {
    setSubmit(true);
    if (!email.error && !password.error) {
      const data = {
        email: email.value.trim().toLowerCase(),
        password: password.value,
      };
      console.log("data for sending", data);
      dispatch(actions.login({ data }));

      if (!toggleCheckBox) {
        return removeLoginData();
      }
      await Keychain.setGenericPassword(email.value, password.value);
    }
  };

  return (
    <View style={styles.container}>
      <Text center h3>
        Login
      </Text>
      <Input submit={submit} {...email} keyboardType="email-address" />
      <Input submit={submit} {...password} secureTextEntry />
      <Row spacing="flex-start" style={styles.checkbox}>
        <CheckBox
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={{ true: gray200, false: gray200 }}
          boxType="square"
          tintColor={gray200}
          onCheckColor={gray200}
          onTintColor={gray200}
          onAnimationType="bounce"
          offAnimationType="bounce"
          style={{ height: verticalScale(22), width: verticalScale(22) }}
        />
        <TouchableOpacity
          hitSlop={hitBox10}
          onPress={() => setToggleCheckBox(!toggleCheckBox)}>
          <Text h5 semiBold style={styles.savePassword}>
            Remember password
          </Text>
        </TouchableOpacity>
      </Row>
      <Button label="Submit" primary large onPress={onSubmitHandler} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
    padding: padding.big,
  },
  checkbox: {
    marginVertical: margin.small,
  },

  savePassword: {
    color: gray200,
    marginLeft: width <= 400 ? margin.large : margin.small / 1.5,
  },
});
