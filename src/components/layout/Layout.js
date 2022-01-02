import WebionAppBar from "./WebionAppBar";
import WebionSideBar from "./WebionSideBar";
import WebionFooter from './WebionFooter';

export default function Layout({children}) {
  return (
    <>
      <WebionSideBar/>
      <WebionAppBar/>
      {children}
      <WebionFooter/>
    </>
  )
}