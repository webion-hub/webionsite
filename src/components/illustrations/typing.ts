import * as React from 'react';

export interface Size {
  width: number | string,
  height: number | string,
};


export type SkeletonSize =
  'small' | 'normal' | 'large' | Size;

export interface IllustrationProps extends React.RefAttributes<any> {
  path?: string,
  boxProps?: {
    width?: string,
    maxWidth?: string,
    margin?: number,
    height?: string,
  },
  svgProps?: {
    height?: string,
    width?: string,
    textColor?: string,
    primaryColor?: string,
    secondaryColor?: string,
  },
  skeletonProps?: {
    size?: SkeletonSize,
  }
}

export interface IllustrationComponent extends React.ForwardRefExoticComponent<IllustrationProps> {
  lazy: (path: string) => (props: IllustrationProps) => JSX.Element;
  icon: (path: string) => (props: IllustrationProps) => JSX.Element;
}
