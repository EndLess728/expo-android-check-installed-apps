import * as React from 'react';

import { ExpoAndroidCheckInstalledAppsViewProps } from './ExpoAndroidCheckInstalledApps.types';

export default function ExpoAndroidCheckInstalledAppsView(props: ExpoAndroidCheckInstalledAppsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
