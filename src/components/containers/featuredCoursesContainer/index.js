import React from "react";
import { Dimensions, StyleSheet, ScrollView } from "react-native";

import FeaturedCourseCard from "@components/Cards/FeaturedCourseCard";

import { useSnapping } from "@hooks/useSnapping";

import { margin, padding } from "@config/spacing";

import { featuredCourses } from "../../../dummyData/featuredCourses";

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
