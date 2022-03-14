import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Text from "@components/Text";
import SelectCategory from "./selectCategory";
import CourseCard from "./courseCard";

import { grayDark } from "@config/colors";
import { padding } from "@config/spacing";
import { featuredCourses } from "../../../dummyData/featuredCourses";

const FeaturedCourses = () => {
  const [selected, setSelected] = useState({
    type: "all",
    name: "All",
  });

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <SelectCategory selected={selected} setSelected={setSelected} />
        <ScrollView
          style={styles.innerContainer}
          showsVerticalScrollIndicator={false}>
          <Text h4 semiBold>
            {selected.name}
          </Text>
          {selected.type === "all" &&
            featuredCourses?.map((course, index) => (
              <CourseCard
                course={course}
                key={course?._id}
                last={featuredCourses?.length === index + 1}
              />
            ))}
          {selected.type !== "all" &&
            featuredCourses
              ?.filter(singleCourse =>
                singleCourse.type.includes(selected.type),
              )
              .map((course, index) => (
                <CourseCard
                  course={course}
                  key={course?._id}
                  last={featuredCourses?.length === index + 1}
                />
              ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default FeaturedCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
  },
  scrollContainer: {
    paddingVertical: padding.large,
  },
  innerContainer: {
    padding: padding.large,
  },
});
