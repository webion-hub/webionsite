import { alpha } from "@mui/material";
import { Svg, TextSvg, TspanSvg } from "../svgs/SvgComponents";
import { KeyGenerator } from "../../lib/KeyGenerator";
import theme from "../../theme/theme";
import React, { useEffect, useRef, useState } from "react";

export default function BinaryBackground({height, elements, position, ...svgProps}) {
  const [refresh, setRefresh] = useState(true);
  const mainSvg = useRef()
  const ref = useRef()

  const columnStep = 14;
  const rowStep = 18;
  const bottomOffset = 2;
  const leftOffset = 6;

  useEffect(() => {
    mainSvg.current = elements.map((element, key) => {
      return getTextColumn(key * columnStep + leftOffset, element)
    })

    setRefresh(!refresh)
  }, [])

  const getWidth = () => elements.length * columnStep
  const isPosBottom = () => position == "bottom"

  const getAnimation = () => {
    return {
      animation: `flicker ${Math.random() + 2}s ease-in-out alternate infinite`,
      animationDelay: `-${Math.random() * 4}s`,
      "@keyframes flicker": {
        "0%": {
          opacity: 1,
        },
        "100%": {
          opacity: 0.05,
        },
      },
    }
  }

  const getDigit = () => {
    return Math.random() > .5
      ? 1
      : 0
  }


  const getDigitYPosition = (index) => {
    return isPosBottom()
      ? height - rowStep * index - bottomOffset
      : rowStep * (index + 1)
  }

  const getTextColumn = (x, height) => {
    return (
      <TextSvg
        key={KeyGenerator.generate()}
        sx={{
          fontSize: 18,
        }}
        x={x}
        y={rowStep}
        textAnchor="middle"
      >
        {
          [...Array(height)].map((_, i) => (
            <TspanSvg
              key={i}
              sx={{
                ...getAnimation(),
                fontSize: "18px",
                fill: alpha(theme.palette.secondary.main, 1),
              }}
              x={x}
              y={getDigitYPosition(i)}
            >
              {getDigit()}
            </TspanSvg>
          ))
        }
      </TextSvg>
    )
  }

  return (
    <Svg
      ref={ref}
      {...svgProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${getWidth()} ${height}`}
    >
      {mainSvg.current}
    </Svg>
  )
}

BinaryBackground.defaultProps = {
  elements: [],
  position: 'top',
}