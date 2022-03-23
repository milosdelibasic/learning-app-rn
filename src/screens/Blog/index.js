import { StyleSheet, ScrollView, View, Dimensions } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { borderRadius, margin, padding } from "@config/spacing";
import Text from "@components/Text";
import FastImage from "react-native-fast-image";
import Divider from "@components/Divider";
import { gray100, gray50, gray900 } from "@config/colors";
import Row from "@components/Row";
import Icon from "@components/Icon";
import { sizes } from "@config/fonts";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import YoutubeVideo from "@components/YoutubeVideo";
import Link from "@components/Link";
import Code from "@components/Code";

const { width } = Dimensions.get("screen");

const Blog = () => {
  const route = useRoute();
  const { blog } = route.params;

  const insets = useSafeAreaInsets();
  console.log(blog);

  const renderItem = (item, i) => {
    const { type, content, url } = item;
    switch (type) {
      case "subtitle":
        return (
          <Text h4 semiBold primary key={i} style={styles.subtitle}>
            {content}
          </Text>
        );
      case "text":
        return (
          <Text h6 key={i} style={styles.text}>
            {content}
          </Text>
        );
      case "image":
        return (
          <FastImage
            key={i}
            source={{ uri: content }}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.renderImage}
          />
        );
      case "youtube":
        return <YoutubeVideo key={i} videoId={content} style={styles.video} />;
      case "link":
        return <Link key={i} text={content} link={url} />;
      case "divider":
        return (
          <Divider
            key={i}
            bottomSpacing={margin.large}
            backgroundColor={gray900}
          />
        );
      case "code":
        return <Code key={i} content={content} />;
      default:
        break;
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ marginBottom: insets.bottom / 1.5 }}>
      <FastImage
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
        source={{ uri: blog.image }}>
        <Row spacing="flex-start" style={styles.likes}>
          <Icon
            name="heart-outline"
            type="ionicon"
            color={gray100}
            size={sizes.h4}
          />
          <Text semiBold h6 style={styles.iconText}>
            {blog?.likes}
          </Text>
        </Row>
      </FastImage>
      <Text primary bold h3 style={{ marginBottom: margin.large }}>
        {blog.title}
      </Text>
      <Row>
        <Row spacing="flex-start">
          <Icon name="pen" type="fa5" color={gray100} size={sizes.h5} />
          <Text h6 style={styles.iconText}>
            {blog?.author}
          </Text>
        </Row>
        <Row spacing="flex-start">
          <Icon
            name="calendar"
            type="feather"
            color={gray100}
            size={sizes.h5}
          />
          <Text h6 style={styles.iconText}>
            {blog?.date}
          </Text>
        </Row>
      </Row>
      <Divider spacing={margin.large} backgroundColor={gray900} />
      {blog?.data?.map((item, i) => renderItem(item, i))}
    </ScrollView>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: padding.large,
    // paddingTop: padding.large,
    // paddingBottom: padding.large * 2,
    // paddingBottom: 100,
    padding: padding.large,
  },
  image: {
    width: width - padding.large * 2,
    height: (width - padding.large * 2) / 2,
    borderRadius: borderRadius.big * 1.5,
    marginBottom: margin.large,
  },
  iconText: {
    marginLeft: margin.small / 1.2,
    color: gray50,
  },
  likes: {
    backgroundColor: "#000000B8",
    width: 100,
    position: "absolute",
    right: -1,
    justifyContent: "center",
    paddingVertical: padding.small / 1,
    borderBottomLeftRadius: borderRadius.big * 1.5,
  },
  subtitle: {
    marginBottom: margin.base,
  },
  text: {
    marginBottom: margin.base,
  },
  renderImage: {
    width: width - padding.large * 2,
    height: (width - padding.large * 2) / 2,
    borderRadius: borderRadius.big * 1.5,
    marginBottom: margin.base,
  },
  video: {
    marginVertical: 0,
    marginBottom: margin.base,
  },
});
