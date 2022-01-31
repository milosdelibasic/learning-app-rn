import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { gray900 } from "../../../../config/colors";
import { margin, padding } from "../../../../config/spacing";
import Text from "../../../../components/text";
import Accordion from "../../../../components/accordion";
import CourseSectionCard from "../../../../components/courseContent/courseSectionCard";
import CourseExercise from "../../../../components/courseContent/courseExercise";

const CourseContent = ({ course }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text white h3 semiBold style={styles.title}>
        Course content
      </Text>
      <Accordion title="10 sections" type="section" icon spacing={margin.base}>
        <CourseSectionCard title="Intro" number={1} time="4.5h" />
        <CourseSectionCard title="Const & Let" number={2} time="1h" />
        <CourseSectionCard title="DOM" number={3} time="2h" />
        <CourseSectionCard title="Advanced JS" number={4} time="6h" last />
      </Accordion>
      <Accordion
        title="17 exercises"
        type="exercise"
        icon
        spacing={margin.base}>
        <CourseExercise title="CSS in JS" type="drag" icon />
        <CourseExercise title="Basics" type="question" icon />
        <CourseExercise title="Basics" type="code" icon last />
      </Accordion>
      <Accordion title="20 videos" type="video" icon spacing={margin.base}>
        <Text>Test</Text>
      </Accordion>
      <Accordion title="5 articles" type="article" icon spacing={margin.base}>
        <Text>Test</Text>
      </Accordion>
      <Accordion title="3 resources" type="download" icon>
        <Text>Test</Text>
      </Accordion>
    </ScrollView>
  );
};

export default CourseContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
    marginVertical: padding.large,
    paddingHorizontal: padding.big,
  },
  title: {
    marginBottom: margin.base,
  },
});
