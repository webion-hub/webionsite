import IconContainer from "../IconContainer";
import iconContainer from "../IconContainer";
import { Illustration } from "./Illustration";

export const LogoIcon = () => <IconContainer Component={Illustration} path="svgs/logo.svg"/>;
export const LinkedinIcon = () => <IconContainer Component={Illustration} path="svgs/linkedin.svg"/>;
export const InstagramIcon = () => <IconContainer Component={Illustration} path="svgs/instagram.svg"/>;

export const Programming = Illustration.lazy('images/programming.svg');
