import theme from '../../theme/theme';
import Logo from './Logo';

export default function AnimatedLogo({label, ...others}) {
  return (
    <Logo
      {...others}
      color="info"
      sx={{
        paddingRight: 2,
        "& .webion-logo--label": {
          paddingLeft: 1,
          transition: `${theme.transitions.duration.short}ms all`,
          opacity: 0,
          transform: "translate(-100%, 0%)",
        },
        "&:hover > .webion-logo--label": {
          opacity: 1,
          transform: "translate(0%, 0%)",
        },
      }}
    >
      <span className='webion-logo--label'>
        {label}
      </span>
    </Logo>
  )
}