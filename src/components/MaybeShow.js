import EmptyComponent from "./EmptyComponent";

export default function MaybeShow({children, alternativeChildren, show}) {
  if (show)
    return children;
  return alternativeChildren;
}

MaybeShow.defaultProps = {
  alternativeChildren: <EmptyComponent/>,
}