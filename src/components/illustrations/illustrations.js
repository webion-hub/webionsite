import IconContainer from "../IconContainer";
import { Illustration } from "./Illustration";

export const Programming = Illustration.lazy('illustrations/programming.svg');
export const Personalization = Illustration.lazy('illustrations/personalization.svg');
export const Speed = Illustration.lazy('illustrations/speed2.svg');

export const LogoIcon = () => <IconContainer Component={Illustration} path="svgs/logo.svg"/>;
export const LinkedinIcon = () => <IconContainer Component={Illustration} path="svgs/linkedin.svg"/>;
export const InstagramIcon = () => <IconContainer Component={Illustration} path="svgs/instagram.svg"/>;
