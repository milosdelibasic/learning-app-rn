import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import Text from "@components/Text";
import BlogCard from "@components/Cards/BlogCard";
import { blog as blogs } from "../../../dummyData/blog";
import { useSnapping } from "@hooks/useSnapping";
import { margin, padding } from "@config/spacing";
const { width } = Dimensions.get("screen");

const BlogContainer = () => {
  const snapOffsets = useSnapping(blogs, width / 1.5, margin.large * 2);

  return (
    <ScrollView
      style={styles.blogContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={snapOffsets}>
      {blogs?.map((blog, i) => (
        <BlogCard key={i} last={blog?.length === i + 1} blog={blog} />
      ))}
    </ScrollView>
  );
};

export default BlogContainer;

const styles = StyleSheet.create({
  blogContainer: {
    paddingHorizontal: padding.large,
  },
});
