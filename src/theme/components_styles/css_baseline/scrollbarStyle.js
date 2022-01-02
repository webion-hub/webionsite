import colors from "../../colors";

const scrollbarStyle = {
  '&::-webkit-scrollbar': {
    width: '4px',
    height: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: colors.secondary,
    borderRadius: '2px',
  },
}

export default scrollbarStyle