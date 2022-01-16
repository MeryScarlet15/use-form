export interface IDesktopPlatform {
  maxIpad?: number;
  maxMobile: number;
}

export type IPlatform = "desktop" | "ipad" | "mobile";

export interface IReturnUseDetectPlatform {
  platform: IPlatform;
}

export interface IUseDetectPlatform {
  (params: IDesktopPlatform): IReturnUseDetectPlatform;
}
