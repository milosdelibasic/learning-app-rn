import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Text from "../../components/text";
import { grayDark } from "../../config/colors";
import { padding } from "../../config/spacing";
import { authSelector } from "../../modules/auth/reducer";
import ContinueLearningCard from "../../components/continueLearningCard";
import Row from "../../components/row";

const Home = () => {
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
      <ScrollView
        style={styles.continueLearningContainer}
        horizontal
        showsHorizontalScrollIndicator={false}>
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
