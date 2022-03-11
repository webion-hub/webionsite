import { alpha } from "@mui/material";
import { Svg, TextSvg, TspanSvg } from "../SvgComponents";
import { KeyGenerator } from "../../lib/KeyGenerator";
import theme from "../../theme/theme";

export default function BinaryBackground({height, elements, position, ...svgProps}) {
  const columnStep = 14;
  const rowStep = 18;
  const bottomOffset = 2;
  const leftOffset = 6;

  const getWidth = () => elements.length * columnStep
  const isPosBottom = () => position == "bottom"

  const getTranslation = () => {
    return {
      top: 'translate(0, -100%)',
      bottom: 'translate(0, 100%)',
      left: 'translate(100%, 0%)',
      right: 'translate(-100%, 0%)',
    }[position]
  }

  const getSlideAnimation = (time) => {
    const translate = getTranslation()

    const animationName = KeyGenerator.generate('slide')
    const keyFrame = `@keyframes ${animationName}`

    return {
      animation: `${animationName} 1s ease-in-out forwards`,
      animationDelay: `${time / 10}s`,
      [keyFrame]: {
        "0%": {
          transform: translate,
        },
        "100%": {
          transform: "translate(0, 0%)",
        },
      },
    }
  }

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
          ...getSlideAnimation((x - 6)/14),
          transform: "translate(0, -100%)",
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
      {...svgProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${getWidth()} ${height}`}
    >
      {
        elements.map((element, key) => {
          return getTextColumn(key * columnStep + leftOffset, element)
        })
      }
    </Svg>
  )
}

BinaryBackground.defaultProps = {
  elements: [],
  position: 'top',
}