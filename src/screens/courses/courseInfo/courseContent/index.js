import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { gray900 } from "../../../../config/colors";
import { margin, padding } from "../../../../config/spacing";
import Text from "../../../../components/text";
import Accordion from "../../../../components/accordion";
import CourseSection from "../../../../components/courseContent/courseSection";
import CourseExercise from "../../../../components/courseContent/courseExercise";
import CourseVideo from "../../../../components/courseContent/courseVideo";
import CourseArticle from "../../../../components/courseContent/courseArticle";
import CourseResource from "../../../../components/courseContent/courseResource";

const CourseContent = ({ course }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text white h3 semiBold style={styles.title}>
        Course content
      </Text>
      <Accordion title="10 sections" type="section" icon spacing={margin.base}>
        <CourseSection title="Intro" number={1} time="4.5h" />
        <CourseSection title="Const & Let" number={2} time="1h" />
        <CourseSection title="DOM" number={3} time="2h" />
        <CourseSection title="Advanced JS" number={4} time="6h" last />
      </Accordion>
      <Accordion
        title="17 exercises"
        type="exercise"
        icon
        spacing={margin.base}>
        <CourseExercise title="CSS in JS" type="drag" icon />
        <CourseExercise title="Basics" type="question" icon />
        <CourseExercise title="Coding" type="code" icon last />
      </Accordion>
      <Accordion title="20 videos" type="video" icon spacing={margin.base}>
        <CourseVideo />
        <CourseVideo
          number={2}
          video={{
            title: "Really long title name for a course...",
            duration: "05:15",
          }}
        />
        <CourseVideo
          number={3}
          video={{
            title: "Test 123",
            duration: "02:15",
          }}
          last
        />
      </Accordion>
      <Accordion title="5 articles" type="article" icon spacing={margin.base}>
        <CourseArticle
          article={{
            author: "Milos Delibasic",
            title: "JavaScript in a nutshell",
            minutes: "6",
          }}
        />
        <CourseArticle
          number={2}
          article={{
            author: "Milos Delibasic",
            title: "Just testing hehe :)",
            minutes: "3",
          }}
        />
        <CourseArticle
          number={3}
          article={{
            author: "Valentina Bordjoski",
            title: "Drawing 101",
            minutes: "16",
          }}
        />
        <CourseArticle
          number={4}
          last
          article={{
            author: "Perica",
            title: "How I met Marica",
            minutes: "9",
          }}
        />
      </Accordion>
      <Accordion title="3 resources" type="download" icon>
        <CourseResource
          resource={{ title: "JS CheatSheet", type: "pdf" }}
          number={1}
          icon
        />
        <CourseResource
          resource={{ title: "JS txt", type: "txt" }}
          icon
          number={2}
        />
        <CourseResource
          resource={{ title: "JS PS", type: "img" }}
          last
          icon
          number={3}
        />
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
