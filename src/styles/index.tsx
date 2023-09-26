/* eslint-disable react/display-name */
export const withAttrs =
  <P extends object>(Component: React.ComponentType<P>, attrs: Partial<P>) =>
  (props: P) => <Component {...attrs} {...props} />;
