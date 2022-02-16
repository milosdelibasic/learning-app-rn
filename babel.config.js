module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["."],
        // extensions: [".js", ".ios.js", ".android.js", ".json"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@navigations": "./src/navigation",
          "@modules": "./src/modules",
          "@config": "./src/config",
          "@hooks": "./hooks",
          "@images": "./assets/images",
          "@navigation": "./src/navigation",
        },
      },
    ],
  ],
};
