import { spacing } from "../theme/theme_impl/spacing";

export default class GapUtils {
  static gap(size, direction) {
    const realSize = (size * spacing) / 2;
    const firstExtremist = direction == "row"
      ? 'margin-left'
      : 'margin-top'

    const secondExtremist = direction == "row"
      ? 'margin-right'
      : 'margin-bottom'

    if (direction == "both") {
      return {
        "& > *": {
          'margin-left': `${realSize}px !important`,
          'margin-right': `${realSize}px !important`,
          'margin-top': `${realSize}px !important`,
          'margin-bottom': `${realSize}px !important`,
        },
      }
    }

    return {
      "& > *": {
        [firstExtremist]: `${realSize}px !important`,
        [secondExtremist]: `${realSize}px !important`,
      },
      "& > *:first-child": {
        [firstExtremist]: `0px !important`,
        [secondExtremist]: `${realSize}px !important`,
      },
      "& > *:last-child": {
        [firstExtremist]: `${realSize}px !important`,
        [secondExtremist]: `0px !important`,
      },
    }
  }
}