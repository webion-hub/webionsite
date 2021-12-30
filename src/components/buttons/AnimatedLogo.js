import theme from '../../Theme';
import Logo from './Logo';

export default function AnimatedLogo({label, ...others}){
  return (
    <Logo
      {...others}
      sx={{
        paddingRight: 1,
        "& span": {
          paddingLeft: 1,
          transition: `${theme.transitions.duration.short}ms all`,
          opacity: 0,
          transform: "translate(-100%, 0%)",
        },
        "&:hover > span": {
          opacity: 1,
          transform: "translate(0%, 0%)",
        }, 
      }}
    >
      <span>
        {label}
      </span>
    </Logo>
  )
}