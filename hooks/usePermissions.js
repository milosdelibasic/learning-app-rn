import { logger } from "@config/helpers";
import { useState } from "react";
import { Platform } from "react-native";
import {
  PERMISSIONS,
  RESULTS,
  check,
  request,
  checkNotifications,
  requestNotifications,
  checkMultiple,
  requestMultiple,
} from "react-native-permissions";

const PLATFORM_ANDROID = Platform.OS === "android";
const PLATFORM_IOS = Platform.OS === "ios";

const permissions = {
  android: {
    camera: PERMISSIONS.ANDROID.CAMERA,
    location: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    gallery: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  },
  ios: {
    camera: PERMISSIONS.IOS.CAMERA,
    location: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    gallery: PERMISSIONS.IOS.PHOTO_LIBRARY,
  },
};

export const checkNotification = async () => {
  try {
    const result = await checkNotifications();
    logger("notification result", result.status);
    const granted = result.status === "granted";
    if (!granted) {
      const res = await requestNotificationPermissions();
      return res;
    }
    return result.status;
  } catch (e) {
    logger("Check Notification Permissions error", e);
  }
};

const requestNotificationPermissions = async () => {
  try {
    const res = await requestNotifications([]);
    return res.status;
  } catch (e) {
    logger("Request Notification Permissions error", e);
  }
};

export const checkPermissions = async (permissionsArray, checkBlocked) => {
  try {
    let nativePermissions;
    if (typeof permissionsArray === "string") {
      nativePermissions = [permissions[Platform.OS][permissionsArray]];
    } else if (permissionsArray.length > 0) {
      nativePermissions = permissionsArray.map(
        perm => permissions[Platform.OS][perm],
      );
    } else return;
    let statuses = await checkMultiple(nativePermissions);
    if (Object.values(statuses).every(i => i === RESULTS.GRANTED)) {
      return { blocked: false, granted: true };
    }
    if (Object.values(statuses).includes(RESULTS.DENIED)) {
      statuses = await requestMultiple(nativePermissions);
      if (Object.values(statuses).every(i => i === RESULTS.GRANTED)) {
        return { blocked: false, granted: true };
      }
    }
    if (checkBlocked && Object.values(statuses).includes(RESULTS.BLOCKED)) {
      return { blocked: true, granted: false };
    }
    return { blocked: false, granted: false };
  } catch (e) {
    logger("checking permissions", e);
  }
};

export const usePermission = permission => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  const checkPermission = async () => {
    try {
      const result = await check(
        PLATFORM_ANDROID
          ? permissions.android[permission]
          : permissions.ios[permission],
      );
      switch (result) {
        case RESULTS.UNAVAILABLE:
          setPermissionStatus("unavailable");
          break;
        case RESULTS.DENIED:
          setPermissionStatus("denied");
          requestPermission();
          break;
        case RESULTS.LIMITED:
          setPermissionStatus("limited");
          break;
        case RESULTS.GRANTED:
          setPermissionStatus("granted");
          break;
        case RESULTS.BLOCKED:
          setPermissionStatus("blocked");
          requestPermission();
          break;
      }
    } catch (e) {
      logger(e);
    }
  };

  const requestPermission = async () => {
    try {
      const result = await request(
        PLATFORM_ANDROID
          ? permissions.android[permission]
          : permissions.ios[permission],
      );
      switch (result) {
        case RESULTS.UNAVAILABLE:
          setPermissionStatus("unavailable");
          break;
        case RESULTS.DENIED:
          setPermissionStatus("denied");
          break;
        case RESULTS.LIMITED:
          setPermissionStatus("limited");
          break;
        case RESULTS.GRANTED:
          setPermissionStatus("granted");
          break;
        case RESULTS.BLOCKED:
          setPermissionStatus("blocked");
          break;
      }
    } catch (e) {
      logger(e);
    }
  };

  return [permissionStatus, checkPermission];
};
