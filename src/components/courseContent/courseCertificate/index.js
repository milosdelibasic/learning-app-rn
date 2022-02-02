import { StyleSheet, View } from "react-native";
import React from "react";
import Row from "../../row";
import Button from "../../button";
import Column from "../../column";
import { borderRadius, margin, padding } from "../../../config/spacing";
import Text from "../../text";

const CourseCertificate = () => {
  return (
    <Column>
      <Text primary semiBold h5 style={styles.left}>
        After successfully completing this course, you will get a certificate of
        completion.
      </Text>
      <View style={styles.bottom}>
        <Button primary label="See example" style={styles.fullWidth} />
      </View>
    </Column>
  );
};

export default CourseCertificate;

const styles = StyleSheet.create({
  bottom: {
    marginTop: margin.base,
    width: "100%",
  },
  fullWidth: {
    borderRadius: borderRadius.big,
    paddingVertical: padding.small,
  },
});
