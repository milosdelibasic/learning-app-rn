import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { gray50, gray900 } from "../../../../config/colors";
import { margin, padding } from "../../../../config/spacing";
import Text from "../../../../components/text";
import Icon from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import { sizes } from "../../../../config/fonts";
import Row from "../../../../components/row";
import { hitBox20, numberWithSpaces } from "../../../../config/helpers";
import { handleError, handleSuccess } from "../../../../utils/error";
import YoutubeVideo from "../../../../components/youtubeVideo";

const { width } = Dimensions.get("screen");

const CourseOverview = ({ course, extraHeight }) => {
  const [savedCourse, setSavedCourse] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleSaveCourse = () => {
    if (savedCourse) {
      setSavedCourse(false);
      handleError({
        message: "Course removed from favorites",
        visibility: 3000,
        dontUpload: true,
      });
    } else {
      setSavedCourse(true);
      handleSuccess({ message: "Course added to favorites", visibility: 3000 });
    }
  };

  return (
    <View style={[styles.container]}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Row style={styles.title}>
          <Text white h3 semiBold>
            {course.title}
          </Text>
          <TouchableOpacity onPress={handleSaveCourse} hitSlop={hitBox20}>
            <Icon
              name={savedCourse ? "bookmark" : "bookmark-outline"}
              size={sizes.h3}
              color={gray50}
            />
          </TouchableOpacity>
        </Row>

        <Row spacing="flex-start" style={styles.row}>
          <IconFontAwesome
            name="calendar"
            size={sizes.h5}
            color={gray50}
            style={styles.iconSpacing}
          />
          <Text h4 white>
            Feb 01, 2022.
          </Text>
        </Row>
        <Row spacing="flex-start" style={styles.row}>
          <IconFontAwesome
            name="book"
            size={sizes.h5}
            color={gray50}
            style={styles.iconSpacing}
          />
          <Text h4 white>
            {numberWithSpaces(course?.students)} students
          </Text>
        </Row>
        <Row spacing="flex-start" style={styles.row}>
          <Icon
            name="star"
            size={sizes.h5}
            color={gray50}
            style={styles.iconSpacing}
          />
          <Text h4 white>
            {course?.rating} / 5.0
          </Text>
        </Row>
        {course?.about && (
          <>
            <Text h6 white style={{ alignItems: "center" }}>
              {!showMore
                ? `${String(course?.about).substring(0, 200)} ...`
                : course?.about}

              <Text h6 link onPress={() => setShowMore(cur => !cur)}>
                {!showMore ? " Show more >>" : " << Show less"}
              </Text>
            </Text>
          </>
        )}
        <YoutubeVideo videoId={course?.youtubeOverview} />
      </ScrollView>
    </View>
  );
};

export default CourseOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray900,
    marginVertical: padding.large,
    paddingHorizontal: padding.big,
  },
  scrollContainer: {},
  title: {
    marginBottom: margin.base,
  },
  iconSpacing: {
    marginRight: margin.large,
  },
  row: {
    marginBottom: margin.small / 1.5,
  },
  videoContainer: {
    marginVertical: margin.base,
  },
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: 100,
  },
  center: {
    alignItems: "center",
    paddingVertical: padding.small,
  },
});
