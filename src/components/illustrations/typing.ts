import * as React from 'react';

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
}

export interface IllustrationComponent extends React.ForwardRefExoticComponent<IllustrationProps> {
  lazy:
    (illustrationPath: string) =>
      (props: IllustrationProps) => JSX.Element,
}
