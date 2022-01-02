import colors from "./colors";

const scrollbar = {
  '&::-webkit-scrollbar': {
    width: '4px',
    height: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: colors.secondary,
    borderRadius: '2px',
  },
}

export default scrollbar