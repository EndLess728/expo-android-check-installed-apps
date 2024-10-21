import * as React from 'react';

import { ExpoCheckInstalledAppsViewProps } from './ExpoCheckInstalledApps.types';

export default function ExpoCheckInstalledAppsView(props: ExpoCheckInstalledAppsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
