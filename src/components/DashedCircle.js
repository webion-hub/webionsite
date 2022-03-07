import { CirlceSvg, Svg } from "./SvgComponents";

export default function DashedCircle({
  size,
  strokeWidth,
  strokeColor,
  strokeDasharray,
  ...props
}) {

  const getRadius = () => {
    return (size / 2) - strokeWidth * 2
  }

  return (
    <Svg
      {...props}
      width={size}
      height={size}
    >
      <CirlceSvg
        cx={size / 2}
        cy={size / 2}
        r={getRadius()}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeLinecap="round"
        fill="transparent"
      />
    </Svg>
  )
}