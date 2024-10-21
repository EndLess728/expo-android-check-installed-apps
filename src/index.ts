import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoCheckInstalledApps.web.ts
// and on native platforms to ExpoCheckInstalledApps.ts
import ExpoCheckInstalledAppsModule from './ExpoCheckInstalledAppsModule';
import ExpoCheckInstalledAppsView from './ExpoCheckInstalledAppsView';
import { ChangeEventPayload, ExpoCheckInstalledAppsViewProps } from './ExpoCheckInstalledApps.types';

// Get the native constant value.
export const PI = ExpoCheckInstalledAppsModule.PI;

export function hello(): string {
  return ExpoCheckInstalledAppsModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoCheckInstalledAppsModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoCheckInstalledAppsModule ?? NativeModulesProxy.ExpoCheckInstalledApps);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoCheckInstalledAppsView, ExpoCheckInstalledAppsViewProps, ChangeEventPayload };
