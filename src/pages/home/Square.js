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



const SquareSvg = ({scale, position, ...props}) => {
  const size = scale * 256;

  const getTextColumn = (x, y) => {
    return (
      <text
        style={{
          fontSize: 18,
        }}
        x={x}
        y={y}
      >
        {
          [...Array(13 * scale)].map((_, key) => {
            return (
              <tspan
                key={KeyGenerator.generate(key)}
                className="text-style"
                style={getAnimation()}
                x={x}
                y={y + key * 22}
              >
                {randomValue()}
              </tspan>
            )
          })
        }
      </text>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox={`0 0 ${size} ${size}`}
      {...props}
      transform={`scale(${scale})`}
    >
      <defs>
        <filter
          style={{
            colorInterpolationFilters: "sRGB",
          }}
          id="b"
          x={-0.038}
          y={-0.038}
          width={1.072}
          height={1.072}
        >
          <feFlood floodOpacity={0.698} floodColor="#000" result="flood" />
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
          />
          <feGaussianBlur in="composite1" stdDeviation={4} result="blur" />
          <feOffset dx={-1} dy={-1} result="offset" />
          <feComposite in="SourceGraphic" in2="offset" result="composite2" />
        </filter>
      </defs>
      <path
        style={{
          fill: "#060f37",
        }}
        d={`M0 0h${size}v${size}H0z`}
      />
      {
        [...Array(16 * scale)].map((_, key) => {
          return (
            <React.Fragment key={key}>
              {getTextColumn(-0.282 + key*16, 3.511)}
            </React.Fragment>
          )
        })
      }
      <path
        style={{
          fill: "#020512",
          strokeWidth: 1,
          paintOrder: "stroke fill markers",
          filter: "url(#b)",
          transform: `translate(${position}) scale(${scale*2})`,
        }}
        d={`M0 0v${size}h${size}V0H0zm128 4a124 124 0 0 1 124 124 124 124 0 0 1-124 124A124 124 0 0 1 4 128 124 124 0 0 1 128 4z`}
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

SquareSvg.defaultProps = {
  position: "-100%, -100%",
}

export default SquareSvg


