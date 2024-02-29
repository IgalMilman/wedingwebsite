import { HomePage } from "./pages/HomePage";

export const AllComponentsList: {
  tag: string;
  element: (props: any) => JSX.Element;
}[] = [
  {
    tag: "homepage",
    element: HomePage,
  },
];
