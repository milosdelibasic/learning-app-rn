import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";

import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CustomHandle from "./customHandle";
import CustomBackdrop from "./customBackdrop";

import { actions, bottomSheetSelector } from "@modules/bottomSheet/reducer";

import { gray600, gray800 } from "@config/colors";
import { padding } from "@config/spacing";

const BottomSheetComponent = ({
  initialSnapIndex = 1,
  snapPoints: customSnapPoints,
}) => {
  const bottomSheetRef = useRef();

  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();
  const { isOpen, content } = useSelector(bottomSheetSelector);

  const snapPoints = useMemo(
    () => customSnapPoints || [1, "CONTENT_HEIGHT"],
    [],
  );

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  const handleSheetChanges = useCallback(i => {
    if (i === -1) {
      dispatch(actions.close());
    }
    if (i === 0 && !customSnapPoints) {
      dispatch(actions.close());
    }
  }, []);

  useEffect(() => {
    isOpen && bottomSheetRef.current?.present();
    !isOpen && bottomSheetRef.current?.dismiss();
  }, [isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={initialSnapIndex}
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
          {content}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
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
