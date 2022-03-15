import { KeyGenerator } from "../lib/KeyGenerator";
import DashedCircle from "./DashedCircle";

export default function RotatingDashedCirlce({animationDuration, sx, ...props}) {
  const {
    transform,
    ...otherSx
  } = sx;

  const animationName = KeyGenerator.generate('rotation')
  const keyFrame = `@keyframes ${animationName}`


  return (
    <DashedCircle
      {...props}
      sx={{
        ...otherSx,
        animation: `${animationName} infinite linear`,
        animationDuration: animationDuration,
        [keyFrame]: {
          "0%": {
            transform: transform ? `${transform} rotate(0)` : 'rotate(0)',
          },
          "100%": {
            transform: transform ? `${transform} rotate(360deg)` : 'rotate(360deg)',
          },
        },
      }}
    />
  )
}

RotatingDashedCirlce.defaultProps = {
  sx: {
    transform: "",
  },
}