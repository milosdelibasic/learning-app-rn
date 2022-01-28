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
import ContinueLearningContainer from "../../components/containers/continueLearningContainer";
import FeaturedCoursesContainer from "../../components/containers/featuredCoursesContainer";
import { mainStack } from "../../config/navigator";
const { width } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const { user } = useSelector(authSelector);

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
      <ContinueLearningContainer />
      <View style={styles.paddingContainer}>
        <Row style={styles.row}>
          <Text>Featured Courses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(mainStack.featuredCourses)}>
            <Text>See all</Text>
          </TouchableOpacity>
        </Row>
      </View>
      <FeaturedCoursesContainer />
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
  row: {
    paddingTop: padding.base,
  },
});

export default Home;
