import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoCheckInstalledAppsViewProps } from './ExpoCheckInstalledApps.types';

const NativeView: React.ComponentType<ExpoCheckInstalledAppsViewProps> =
  requireNativeViewManager('ExpoCheckInstalledApps');

export default function ExpoCheckInstalledAppsView(props: ExpoCheckInstalledAppsViewProps) {
  return <NativeView {...props} />;
}
