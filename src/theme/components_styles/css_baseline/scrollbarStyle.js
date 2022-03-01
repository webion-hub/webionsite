import { colors } from "../../theme_impl/index";

const scrollbarStyle = {
  '&::-webkit-scrollbar': {
    width: '4px',
    height: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: colors.tertiary,
    borderRadius: '2px',
  },
}

export default scrollbarStyle