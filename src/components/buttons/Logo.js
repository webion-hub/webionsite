import { Button } from '@mui/material';
import { LogoIcon } from '../illustrations/illustrations';

export default function Logo({children, leftLabel, ButtonComponent, ...others}){
  return (
    <ButtonComponent
      {...others}
    >
      {leftLabel}
      <LogoIcon
        boxProps={{
          display: "flex"
        }}
      />
      {children}
    </ButtonComponent>
  )
}

Logo.defaultProps = {
  color: "inherit",
  ButtonComponent: Button
}