import { alpha } from '@mui/material';

import palette from './palette';

const shape = {
  borderRadius: 6,
  border: {
    main: `1px solid ${alpha(palette.primary.main, 0.25)}`,
    dark: `1px solid ${alpha(palette.background.default, 0.25)}`,
  },
}

export default shape