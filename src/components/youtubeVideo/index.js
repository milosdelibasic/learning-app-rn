import React, { useCallback, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";

import { gray50 } from "@config/colors";
import { sizes } from "@config/fonts";
import { margin } from "@config/spacing";
import { logger } from "@config/helpers";

const YoutubeVideo = ({ videoId = "DHjqpvDnNGE" }) => {
  const [videoLoading, setVideoLoading] = useState(true);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const handleYoutubeError = e => {
    logger(e);
  };

  return (
    <View style={styles.videoContainer}>
      {videoLoading && (
        <ActivityIndicator
          color={gray50}
          style={styles.loader}
          size={sizes.h1}
        />
      )}
      <YoutubePlayer
        height={210}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        onError={handleYoutubeError}
        webViewStyle={{ opacity: 0.99 }}
        onReady={() => setVideoLoading(false)}
      />
    </View>
  );
};

export default YoutubeVideo;

const styles = StyleSheet.create({
  videoContainer: {
    marginVertical: margin.base,
  },
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: 100,
  },
});
