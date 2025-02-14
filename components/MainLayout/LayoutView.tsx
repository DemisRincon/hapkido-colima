import { ReactNode } from "react";

interface LayoutViewProps {
  children: ReactNode;
}

const LayoutView: React.FC<LayoutViewProps> = () => {
  return <div>LayoutView</div>;
};

export default LayoutView;
