import * as React from "react"
import { KeyGenerator } from "../../lib/KeyGenerator"
import "./styles/square.css"

const randomValue = () => {
  return Math.random() > 0.5
    ? 1
    : 0
}

const getAnimation = () => {
  return {
    animation: `flicker ${Math.random() + 1}s ease alternate infinite`,
    animationDelay: `-${Math.random()*4}s`,
  }
}

const getTextColumn = (x, y) => {
  return (
    <text
      xmlSpace="preserve"
      x={x}
      y={y}
      transform="translate(-1.058)"
    >
      {
        [...Array(11)].map((_, key) => {
          return (
            <tspan
              key={KeyGenerator.generate(key)}
              className="text-style"
              style={getAnimation()}
              x={x}
              y={y + key * 5.469}
            >
              {randomValue()}
            </tspan>
          )
        })
      }
    </text>
  )
}

const SquareSvg = ({flip, ...props}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 114 58"
      {...props}
    >
      <defs>
        <filter
          style={{
            colorInterpolationFilters: "sRGB",
          }}
          id="a"
          x={-0.019}
          y={-0.036}
          width={1.039}
          height={1.073}
        >
          <feGaussianBlur stdDeviation={0.973} />
        </filter>
      </defs>
      <path
        style={{
          fill: "#060f37",
          fillOpacity: 1,
          strokeWidth: 0.180621,
        }}
        d="M0 36V0h128v72H0Z"
      />
      {
        [...Array(24)].map((_, key) => {
          return (
            <React.Fragment key={key}>
              {getTextColumn(-0.282 + key*5, 3.511)}
            </React.Fragment>
          )
        })
      }
      <path
        className={flip ? "flip" : ""}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.26049,
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
          filter: "url(#a)",
        }}
        d="M111-1v32a24 24 0 0 1-23.981 24H-1v8h120V-1Z"
      />
      <path
        className={flip ? "flip" : ""}
        style={{
          fill: "#020512",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.26049,
          strokeOpacity: 1,
          paintOrder: "stroke fill markers",
        }}
        d="M112 0v32a24 24 0 0 1-23.981 24H0v16h128V0Z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "10.5833px",
          lineHeight: 1.25,
          fontFamily: "sans-serif",
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.264583,
        }}
        x={2.514}
        y={4.895}
      />
    </svg>
  )
}

export default SquareSvg
