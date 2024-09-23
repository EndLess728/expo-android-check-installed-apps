// Import the native module. On web, it will be resolved to ExpoAndroidCheckInstalledApps.web.ts
// and on native platforms to ExpoAndroidCheckInstalledApps.ts
import ExpoAndroidCheckInstalledAppsModule from "./ExpoAndroidCheckInstalledAppsModule";

// Get the native constant value.
export const PI = ExpoAndroidCheckInstalledAppsModule.PI;

export function hello(): string {
  return ExpoAndroidCheckInstalledAppsModule.hello();
}

export async function checkInstalledApps(
  packageNames: Array<string>
): Promise<Record<string, boolean>> {
  return ExpoAndroidCheckInstalledAppsModule.checkAppsInstalled(packageNames);
}

export async function setValueAsync(value: string) {
  return await ExpoAndroidCheckInstalledAppsModule.setValueAsync(value);
}
