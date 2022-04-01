import theme from '../../theme/theme';
import Logo from './Logo';

export default function AnimatedLogo({label, open, ...others}) {

  const openStyle = {
    opacity: 1,
    transform: "translate(0%, 0%)",
  }

  const closeStyle = {
    opacity: 0,
    transform: "translate(-100%, 0%)",
  }

  const getMainStyle = () => {
    return open
      ? openStyle
      : closeStyle
  }

  return (
    <Logo
      {...others}
      color="info"
      sx={{
        paddingRight: 2,
        "& .webion-logo--label": {
          paddingLeft: 1,
          transition: `${theme.transitions.duration.short}ms opacity, ${theme.transitions.duration.short}ms transform`,
          ...getMainStyle(),
        },
        "&:hover > .webion-logo--label": openStyle,
      }}
    >
      <span className='webion-logo--label'>
        {label}
      </span>
    </Logo>
  )
}