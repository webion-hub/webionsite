import React, { useState } from "react";
import { useEffect, useRef } from "react";
import IllustrationLoader from "./illustration_loader";
import theme from '../../theme/theme';
import IllustrationSkeleton from "./IllustrationSkeleton";
import IllustrationIcon from "./IllustrationIcon";


/**
 * @type {import("./typing").IllustrationComponent}
 */
export const Illustration = React.forwardRef((props, ref) => {
  const skeleton = IllustrationSkeleton(props);
  const illustration = useRef(skeleton);
  const [, setIsLoaded] = useState(false);

  const updateContent = (svg) => {
    illustration.current = svg;
    setIsLoaded(true);
  };

  useEffect(() => {
    IllustrationLoader
      .create({...props, ref: ref })
      .load()
      .then(svg => updateContent(svg));
  }, [props, ref]);

  return illustration.current;
});


Illustration.lazy = (path) => {
  return (props) => {
    return <Illustration path={path} {...props}/>;
  };
};


Illustration.icon = (path) => {
  return (props) => {
    return <IllustrationIcon path={path} {...props}/>;
  }
}


Illustration.defaultProps = {
  boxProps: {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
  },
  svgProps: {
    height: '100%',
    width: '100%',
    textColor: '#fff',
    primaryColor: theme.palette.primary.main,
    secondaryColor: theme.palette.secondary.main,
  },
  skeletonProps: {
    size: 'normal',
  },
};
