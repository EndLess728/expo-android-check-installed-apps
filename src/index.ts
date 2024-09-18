import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAndroidCheckInstalledApps.web.ts
// and on native platforms to ExpoAndroidCheckInstalledApps.ts
import ExpoAndroidCheckInstalledAppsModule from './ExpoAndroidCheckInstalledAppsModule';
import ExpoAndroidCheckInstalledAppsView from './ExpoAndroidCheckInstalledAppsView';
import { ChangeEventPayload, ExpoAndroidCheckInstalledAppsViewProps } from './ExpoAndroidCheckInstalledApps.types';

// Get the native constant value.
export const PI = ExpoAndroidCheckInstalledAppsModule.PI;

export function hello(): string {
  return ExpoAndroidCheckInstalledAppsModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAndroidCheckInstalledAppsModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAndroidCheckInstalledAppsModule ?? NativeModulesProxy.ExpoAndroidCheckInstalledApps);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAndroidCheckInstalledAppsView, ExpoAndroidCheckInstalledAppsViewProps, ChangeEventPayload };
