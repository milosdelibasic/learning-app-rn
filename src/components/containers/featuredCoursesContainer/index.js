import { Dimensions, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Text from "../../text";
import { margin, padding } from "../../../config/spacing";
import FeaturedCourseCard from "../../featuredCourseCard";
import { featuredCourses } from "../../../dummyData/featuredCourses";
import { useSnapping } from "../../../../hooks/useSnapping";

const { width } = Dimensions.get("screen");

const FeaturedCoursesContainer = () => {
  const snapOffsets = useSnapping(featuredCourses, width / 2, margin.large * 2);

  return (
    <ScrollView
      style={styles.featuredCoursesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={snapOffsets}>
      {featuredCourses?.map((course, i) => (
        <FeaturedCourseCard
          key={course?._id}
          last={featuredCourses?.length === i + 1}
          course={course}
        />
      ))}
    </ScrollView>
  );
};

export default FeaturedCoursesContainer;

const styles = StyleSheet.create({
  featuredCoursesContainer: {
    paddingHorizontal: padding.large,
  },
});
