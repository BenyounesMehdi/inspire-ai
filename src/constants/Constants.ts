import { Template } from "@/types/Types";
import {
  Shield,
  Sparkles,
  Zap,
  FileText,
  Instagram,
  Mail,
  MessageSquare,
  Search,
  ShoppingBag,
  Twitter,
  Youtube,
  FileCode,
  PenTool,
  Newspaper,
  Presentation,
} from "lucide-react";

export const features = [
  {
    id: 1,
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Advanced AI models ensure your content is unique and engaging.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate content in seconds, not hours or days.",
  },
  {
    id: 3,
    icon: Shield,
    title: "SEO Optimized",
    description: "Content that ranks and drives organic traffic.",
  },
];

export const questionsAndAnswers = [
  {
    id: 1,
    question: "How does the AI content generation work?",
    answer:
      "Our AI uses advanced language models to understand your requirements and generate relevant, engaging content. It analyzes your input, researches the topic, and creates original content that matches your needs.",
  },
  {
    id: 2,
    question: "Is the generated content unique?",
    answer:
      "Yes, all content generated through our platform is unique and original. Our AI creates fresh content for each request, and we have built-in plagiarism checks to ensure originality.",
  },
  {
    id: 3,
    question: "Can I edit the generated content?",
    answer:
      "Once content is generated, you have full control to edit, modify, or enhance it according to your needs. Our platform includes a built-in editor with formatting tools.",
  },
  {
    id: 4,
    question: "What types of content can I create?",
    answer:
      "Our platform supports various content types including blog posts, social media content, product descriptions, email newsletters, and more. We're constantly adding new content types and templates.",
  },
];

export const templates: Template[] = [
  {
    title: "Blog Post",
    description: "Generate engaging blog posts with SEO-optimized content",
    icon: FileText,
    category: "Content",
  },
  {
    title: "Social Media Post",
    description: "Create attention-grabbing posts for any platform",
    icon: Instagram,
    category: "Social",
  },
  {
    title: "Tweet Thread",
    description: "Generate viral Twitter/X threads that engage your audience",
    icon: Twitter,
    category: "Social",
  },
  {
    title: "Email Newsletter",
    description: "Craft compelling email newsletters that convert",
    icon: Mail,
    category: "Marketing",
  },
  {
    title: "Product Description",
    description: "Write persuasive product descriptions that sell",
    icon: ShoppingBag,
    category: "Marketing",
  },
  {
    title: "Chat Response",
    description: "Generate professional customer service responses",
    icon: MessageSquare,
    category: "Support",
  },
  {
    title: "YouTube Script",
    description: "Create engaging video scripts for YouTube content",
    icon: Youtube,
    category: "Content",
  },
  {
    title: "Technical Doc",
    description: "Generate clear and concise technical documentation",
    icon: FileCode,
    category: "Technical",
  },
  {
    title: "Ad Copy",
    description: "Write compelling ad copy that drives conversions",
    icon: PenTool,
    category: "Marketing",
  },
  {
    title: "Press Release",
    description: "Create professional press releases for your announcements",
    icon: Newspaper,
    category: "PR",
  },
  {
    title: "Sales Pitch",
    description: "Generate persuasive sales pitches and presentations",
    icon: Presentation,
    category: "Sales",
  },
  {
    title: "Support FAQ",
    description: "Create comprehensive FAQ answers for customer support",
    icon: MessageSquare,
    category: "Support",
  },
];

export const categories = [
  "All",
  "Content",
  "Social",
  "Marketing",
  "Support",
  "Technical",
  "PR",
  "Sales",
];
