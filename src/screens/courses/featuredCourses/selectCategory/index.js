import React, { useRef } from "react";
import { StyleSheet, ScrollView } from "react-native";

import CourseTag from "@components/Cards/CourseTag";
import Text from "@components/Text";

import { margin, padding } from "@config/spacing";
import Row from "@components/Row";
import Icon from "@components/Icon";
import { gray50 } from "@config/colors";

const SelectCategory = ({ selected, setSelected }) => {
  const scrollOne = useRef();

  const handleSelectedChange = (type, name) => {
    type !== selected.type && setSelected({ type, name });
    scrollOne?.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <>
      <Row
        style={{
          alignItems: "center",
          marginBottom: margin.base,
        }}>
        <Text primary bold h4 style={styles.title}>
          Select category
        </Text>
      </Row>
      <ScrollView
        horizontal
        style={styles.horizontalScrollView}
        showsHorizontalScrollIndicator={false}
        ref={scrollOne}>
        <CourseTag
          type="all"
          name="All"
          selected={selected.type === "all"}
          onPress={() => handleSelectedChange("all", "All Courses")}
        />
        <CourseTag
          type="frontend"
          name="Frontend"
          selected={selected.type === "frontend"}
          onPress={() =>
            handleSelectedChange("frontend", "Front-end Development")
          }
        />
        <CourseTag
          type="backend"
          name="Backend"
          selected={selected.type === "backend"}
          onPress={() =>
            handleSelectedChange("backend", "Back-end Development")
          }
        />
        <CourseTag
          type="mobile"
          name="Mobile dev"
          selected={selected.type === "mobile"}
          onPress={() => handleSelectedChange("mobile", "Mobile Development")}
        />
        <CourseTag
          type="db"
          selected={selected.type === "db"}
          name="Databases"
          onPress={() => handleSelectedChange("db", "Databases")}
        />
        <CourseTag
          type="game"
          name="Game dev"
          selected={selected.type === "game"}
          onPress={() => handleSelectedChange("game", "Game Development")}
        />
        <CourseTag
          type="machine"
          name="Machine Learning"
          selected={selected.type === "machine"}
          onPress={() => handleSelectedChange("machine", "Machine Learning")}
        />
        <CourseTag
          type="design"
          name="UI/UX Design"
          selected={selected.type === "design"}
          last
          onPress={() => handleSelectedChange("design", "UI/UX Design")}
        />
      </ScrollView>
    </>
  );
};

export default SelectCategory;

const styles = StyleSheet.create({
  horizontalScrollView: {
    paddingLeft: padding.small,
  },
  title: {
    marginLeft: margin.small,
    // marginBottom: margin.base,
  },
});
