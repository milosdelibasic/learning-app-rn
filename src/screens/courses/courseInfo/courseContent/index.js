import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { gray900 } from "@config/colors";
import { margin, padding } from "@config/spacing";

import Text from "@components/Text";
import Accordion from "@components/Accordion";
import CourseSection from "@components/courseContent/CourseSection";
import CourseCertificate from "@components/courseContent/CourseCertificate";
import CourseExercise from "@components/courseContent/CourseExercise";
import CourseVideo from "@components/courseContent/CourseVideo";
import CourseAchievement from "@components/courseContent/CourseAchievement";
import CourseArticle from "@components/courseContent/CourseArticle";
import CourseResource from "@components/courseContent/CourseResource";

const CourseContent = ({ course }) => {
  const {
    sections,
    exercises,
    videos,
    articles,
    resources,
    title,
    certificate,
    achievements,
  } = course;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text white h3 semiBold style={styles.title}>
        {title} course content
      </Text>
      {course && sections && (
        <Accordion
          title={`${sections?.length} section${
            sections?.length !== 0 ? "s" : ""
          }`}
          type="section"
          icon
          spacing={margin.base}>
          {sections?.map((section, index) => (
            <CourseSection
              key={index}
              section={section}
              number={index + 1}
              last={sections?.length === index + 1}
            />
          ))}
        </Accordion>
      )}
      {course && certificate && (
        <Accordion
          title="Certificate of completion"
          type="certificate"
          icon
          spacing={margin.base}>
          <CourseCertificate />
        </Accordion>
      )}
      {course && exercises && (
        <Accordion
          title={`${exercises?.length} exercise${
            exercises?.length !== 0 ? "s" : ""
          }`}
          type="exercise"
          icon
          spacing={margin.base}>
          {exercises?.map((exercise, index) => (
            <CourseExercise
              key={index}
              exercise={exercise}
              icon={exercise?.type}
              number={index + 1}
              last={exercises?.length === index + 1}
            />
          ))}
        </Accordion>
      )}
      {course && videos && (
        <Accordion
          title={`${videos?.length} video${videos?.length !== 0 ? "s" : ""}`}
          type="video"
          icon
          spacing={margin.base}>
          {videos?.map((video, index) => (
            <CourseVideo
              key={index}
              video={video}
              number={index + 1}
              last={videos?.length === index + 1}
            />
          ))}
        </Accordion>
      )}
      {course && achievements && (
        <Accordion
          title={`${achievements?.length} achievement${
            achievements?.length !== 0 ? "s" : ""
          }`}
          type="achievements"
          icon
          spacing={margin.base}>
          <CourseAchievement achievements={achievements} />
        </Accordion>
      )}
      {course && articles && (
        <Accordion
          title={`${articles?.length} article${
            articles?.length !== 0 ? "s" : ""
          }`}
          type="article"
          icon
          spacing={margin.base}>
          {articles?.map((article, index) => (
            <CourseArticle
              key={index}
              article={article}
              number={index + 1}
              last={articles?.length === index + 1}
            />
          ))}
        </Accordion>
      )}
      {course && resources && (
        <Accordion
          title={`${resources?.length} resource${
            resources?.length !== 0 ? "s" : ""
          }`}
          type="download"
          icon>
          {resources?.map((resource, index) => (
            <CourseResource
              key={index}
              resource={resource}
              number={index + 1}
              last={resources?.length === index + 1}
              icon={resource?.type}
            />
          ))}
        </Accordion>
      )}
    </ScrollView>
  );
};

export default CourseContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
    paddingHorizontal: padding.big,
  },
  title: {
    marginBottom: margin.big,
    marginTop: margin.large,
  },
});
