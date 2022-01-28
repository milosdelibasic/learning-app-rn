import { Dimensions, ScrollView, StyleSheet } from "react-native";
import React from "react";
import ContinueLearningCard from "../../continueLearningCard";
import { margin, padding } from "../../../config/spacing";
import { continueLearning } from "../../../dummyData/continueLearning";
import { useSnapping } from "../../../../hooks/useSnapping";

const { width } = Dimensions.get("screen");

const ContinueLearningContainer = () => {
  const snapOffsets = useSnapping(
    continueLearning,
    width / 1.5,
    margin.large * 2,
  );

  return (
    <ScrollView
      style={styles.continueLearningContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={snapOffsets}>
      {continueLearning?.map((course, i) => (
        <ContinueLearningCard
          key={course?._id}
          course={course}
          last={continueLearning?.length === i + 1}
        />
      ))}
    </ScrollView>
  );
};

export default ContinueLearningContainer;

const styles = StyleSheet.create({
  continueLearningContainer: {
    paddingHorizontal: padding.large,
  },
});
