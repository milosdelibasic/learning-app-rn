import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CustomHandle from "./customHandle";
import CustomBackdrop from "./customBackdrop";

import { gray600, gray800 } from "@config/colors";
import { padding } from "@config/spacing";
import { useSelector } from "react-redux";
import { bottomSheetSelector } from "@modules/bottomSheet/reducer";

const BottomSheetComponent = ({
  initialSnapIndex = -1,
  snapPoints: customSnapPoints,
}) => {
  const [index, setIndex] = useState(initialSnapIndex);

  const bottomSheetRef = useRef();

  const insets = useSafeAreaInsets();

  // const { isOpen, content } = useSelector(bottomSheetSelector);

  const snapPoints = customSnapPoints || ["CONTENT_HEIGHT"];

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  const handleSheetChanges = useCallback(i => {
    setIndex(i);
    if (i === -1) {
      // closeBottomSheet();
    }
  }, []);

  // useEffect(() => {
  //   isOpen && bottomSheetRef?.current?.expand();
  //   !isOpen && bottomSheetRef?.current?.close();
  // }, [isOpen]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={index}
      snapPoints={customSnapPoints || animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      onChange={handleSheetChanges}
      handleComponent={CustomHandle}
      backdropComponent={CustomBackdrop}
      backgroundStyle={{ backgroundColor: gray800 }}
      enablePanDownToClose>
      <BottomSheetView onLayout={handleContentLayout}>
        <View
          style={[
            styles.container,
            {
              paddingBottom: insets.bottom > 0 ? insets.bottom : padding.large,
            },
          ]}>
          {/* {content} */}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding.large,
    paddingTop: padding.large,
    backgroundColor: gray800,
  },
  closeLineContainer: {
    alignSelf: "center",
  },
  closeLine: {
    width: 36,
    height: 5,
    borderRadius: 5,
    backgroundColor: gray600,
    marginTop: 9,
  },
});

export default BottomSheetComponent;
