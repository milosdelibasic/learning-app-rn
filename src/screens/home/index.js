import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Text from "../../components/text";
import { grayDark } from "../../config/colors";
import { padding } from "../../config/spacing";
import { authSelector } from "../../modules/auth/reducer";
import Row from "../../components/row";
import ContinueLearningContainer from "../../components/containers/continueLearningContainer";
import FeaturedCoursesContainer from "../../components/containers/featuredCoursesContainer";
import { mainStack } from "../../config/navigator";
import { actions as modalActions } from "../../modules/modal/reducer";
import { useAndroidBackButton } from "../../../hooks/useAndroidBackButton";

const Home = ({ navigation }) => {
  const { user } = useSelector(authSelector);
  const dispatch = useDispatch();

  const handleBackPress = () => {
    dispatch(
      modalActions.open({
        title: "Are you sure you want to exit?",
        content: (
          <Text secondary h5 semiBold>
            We hope to see you again soon!
          </Text>
        ),
        btn1: { label: "Exit", onPress: () => BackHandler.exitApp() },
        btn2: {
          label: "Cancel",
          onPress: () => dispatch(modalActions.close()),
        },
      }),
    );
    return true;
  };

  useAndroidBackButton(handleBackPress);

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
