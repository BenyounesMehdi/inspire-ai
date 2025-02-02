import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Template = {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  category: string;
  prePrompt: string;
};

export type State = {
  status: "error" | "success" | undefined;
  message?: string | null;
  content?: string;
};

export type Content = {
  id: string;
  template: string;
  prompt: string;
  output: string;
  createdAt: Date;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  customerId: string | null;
};
