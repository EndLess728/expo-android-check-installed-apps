import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAndroidCheckInstalledAppsViewProps } from './ExpoAndroidCheckInstalledApps.types';

const NativeView: React.ComponentType<ExpoAndroidCheckInstalledAppsViewProps> =
  requireNativeViewManager('ExpoAndroidCheckInstalledApps');

export default function ExpoAndroidCheckInstalledAppsView(props: ExpoAndroidCheckInstalledAppsViewProps) {
  return <NativeView {...props} />;
}
