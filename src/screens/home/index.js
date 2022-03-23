import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Config from "react-native-config";

import Text from "@components/Text";
import Row from "@components/Row";
import ContinueLearningContainer from "@components/containers/ContinueLearningContainer";
import FeaturedCoursesContainer from "@components/containers/FeaturedCoursesContainer";

import { useAndroidBackButton } from "@hooks/useAndroidBackButton";

import { authSelector } from "@modules/auth/reducer";
import { actions as modalActions } from "@modules/modal/reducer";

import { gray400, gray600, gray700, gray800, grayDark } from "@config/colors";
import { padding } from "@config/spacing";
import { mainStack } from "@config/navigator";
import HomeRow from "./homeRow";
import BecomePrime from "./becomePrime";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import BlogContainer from "@components/containers/BlogContainer";

const Home = ({ navigation }) => {
  const { user } = useSelector(authSelector);
  const dispatch = useDispatch();

  console.log(user);

  console.log(Config.getConstants());

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      bounces={false}>
      <Row style={styles.lineContainer}>
        <View style={styles.line} />
        <View>
          <View style={styles.paddingContainer} />
          <View style={styles.primeContainer}>
            <BecomePrime />
          </View>
          <HomeRow title="Continue Learning" />
          <ContinueLearningContainer />

          <HomeRow
            title="Featured Courses"
            btnAction={() => navigation.navigate(mainStack.featuredCourses)}
            backgroundColor={gray800}
          />
          <FeaturedCoursesContainer />

          <HomeRow
            title="Blog"
            btnAction={() => navigation.navigate(mainStack.featuredCourses)}
            backgroundColor={gray400}
          />
          <BlogContainer />
        </View>
      </Row>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grayDark,
  },
  lineContainer: {
    paddingLeft: padding.large,
    marginBottom: 100,
  },
  line: {
    backgroundColor: gray600,
    width: StyleSheet.hairlineWidth,
    height: "100%",
  },
  paddingContainer: {
    padding: padding.large,
  },
  primeContainer: {
    paddingRight: padding.large,
  },
});

export default Home;
