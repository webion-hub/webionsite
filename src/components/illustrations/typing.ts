type IllustrationProps = ReactRefProps & {
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
};

type IllustrationComponent = ReactForwardedComponent<IllustrationProps> & {
  lazy:
    (illustrationPath: string) =>
      (props: IllustrationProps) => JSX.Element,
};
