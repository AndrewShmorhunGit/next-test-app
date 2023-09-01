export interface IMedia {
  big: boolean;
  medium: boolean;
  small: boolean;
  mini: boolean;
}

export interface ISetMedia {
  (
    bigParam: string | number,
    mediumParam?: string | number,
    smallParam?: string | number,
    minParam?: string | number
  ): string | number;
}

export interface IMediaSettings {
  windowSize: number;
  isMedia: IMedia;
  setMedia: ISetMedia;
  setMediaByStep(param: number, step: number): number;
}
