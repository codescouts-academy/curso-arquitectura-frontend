export const Show = ({
  when,
  children,
}: {
  when: boolean;
  children: React.ReactElement;
}) => {
  if (when) return children;

  return null;
};
