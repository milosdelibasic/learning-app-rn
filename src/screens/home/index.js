import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Text from "../../components/text";
import { grayDark } from "../../config/colors";
import { margin, padding } from "../../config/spacing";
import { authSelector } from "../../modules/auth/reducer";
import ContinueLearningCard from "../../components/continueLearningCard";
import Row from "../../components/row";
import FeaturedCourseCard from "../../components/featuredCourseCard";
import { featuredCourses } from "../../dummyData/featuredCourses";
const { width } = Dimensions.get("screen");

//ContinueLearning card snapping logic
const cardWidth = width / 1.5;
const cardContent = [1, 2, 3, 4, 5];
const halfGap = margin.large;
//End

const Home = ({ navigation }) => {
  const { user } = useSelector(authSelector);

  const snapOffsets = cardContent.map((_, index) => {
    return cardWidth * index + halfGap * index;
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.paddingContainer}>
        <Text white h5 bold>
          Welcome, {user?.fullName}!
        </Text>
        <Row style={styles.row}>
          <Text>Continue Learning</Text>
          <TouchableOpacity>
            <Text>See all</Text>
          </TouchableOpacity>
        </Row>
      </View>
      <ScrollView
        style={styles.continueLearningContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToOffsets={snapOffsets}>
        <ContinueLearningCard progress={0.2} />
        <ContinueLearningCard
          name="JavaScript"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
          progress={0.666}
        />
        <ContinueLearningCard progress={1} />
        <ContinueLearningCard />
        <ContinueLearningCard progress={0.9} last />
      </ScrollView>
      <View style={styles.paddingContainer}>
        <Row style={styles.row}>
          <Text>Featured Courses</Text>
          <TouchableOpacity>
            <Text>See all</Text>
          </TouchableOpacity>
        </Row>
      </View>
      <ScrollView
        style={styles.continueLearningContainer}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {featuredCourses?.map((course, i) => (
          <FeaturedCourseCard
            key={course?._id}
            last={featuredCourses?.length === i + 1}
            course={course}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
  },
  paddingContainer: {
    padding: padding.large,
  },
  continueLearningContainer: {
    paddingHorizontal: padding.large,
  },
  row: {
    paddingTop: padding.base,
  },
});

export default Home;
