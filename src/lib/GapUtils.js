import { spacing } from "../theme/theme_impl/spacing";

export default class GapUtils {
  static gap(size, direction) {
    const realSize = (size * spacing) / 2;
    const firstExtremist = direction == "row"
      ? 'marginLeft'
      : 'marginTop'

    const secondExtremist = direction == "row"
      ? 'marginRight'
      : 'marginBottom'

    if (direction == "both") {
      return {
        "& > *": {
          'marginLeft': `${realSize}px !important`,
          'marginRight': `${realSize}px !important`,
          'marginTop': `${realSize}px !important`,
          'marginBottom': `${realSize}px !important`,
        },
      }
    }

    return {
      "& > *": {
        [firstExtremist]: `${realSize}px !important`,
        [secondExtremist]: `${realSize}px !important`,
      },
      "& > *:first-of-type": {
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