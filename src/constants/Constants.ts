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
    prePrompt:
      "Write a professional and engaging blog post about the following topic: ",
  },
  {
    title: "Social Media Post",
    description: "Create attention-grabbing posts for any platform",
    icon: Instagram,
    category: "Social",
    prePrompt:
      "Write a catchy and engaging social media post for the following idea: ",
  },
  {
    title: "Tweet Thread",
    description: "Generate viral Twitter/X threads that engage your audience",
    icon: Twitter,
    category: "Social",
    prePrompt: "Write a detailed and engaging Twitter thread on the topic: ",
  },
  {
    title: "Email Newsletter",
    description: "Craft compelling email newsletters that convert",
    icon: Mail,
    category: "Marketing",
    prePrompt:
      "Compose an effective email newsletter about the following subject: ",
  },
  {
    title: "Product Description",
    description: "Write persuasive product descriptions that sell",
    icon: ShoppingBag,
    category: "Marketing",
    prePrompt: "Write a persuasive product description for: ",
  },
  {
    title: "Chat Response",
    description: "Generate professional customer service responses",
    icon: MessageSquare,
    category: "Support",
    prePrompt:
      "Compose a professional and helpful customer service response to: ",
  },
  {
    title: "YouTube Script",
    description: "Create engaging video scripts for YouTube content",
    icon: Youtube,
    category: "Content",
    prePrompt:
      "Write an engaging script for a YouTube video on the following topic: ",
  },
  {
    title: "Technical Doc",
    description: "Generate clear and concise technical documentation",
    icon: FileCode,
    category: "Technical",
    prePrompt: "Write detailed and clear technical documentation about: ",
  },
  {
    title: "Ad Copy",
    description: "Write compelling ad copy that drives conversions",
    icon: PenTool,
    category: "Marketing",
    prePrompt: "Compose a high-converting ad copy for: ",
  },
  {
    title: "Press Release",
    description: "Create professional press releases for your announcements",
    icon: Newspaper,
    category: "PR",
    prePrompt: "Write a professional press release about: ",
  },
  {
    title: "Sales Pitch",
    description: "Generate persuasive sales pitches and presentations",
    icon: Presentation,
    category: "Sales",
    prePrompt: "Compose a persuasive sales pitch for: ",
  },
  {
    title: "Support FAQ",
    description: "Create comprehensive FAQ answers for customer support",
    icon: MessageSquare,
    category: "Support",
    prePrompt: "Write a clear and helpful FAQ answer for: ",
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

export const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "Perfect for individuals and small projects",
    features: ["5 requests", "Basic templates", "Export to PDF"],
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "Ideal for professionals and growing businesses",
    features: [
      "Unlimited requests",
      "Advanced templates",
      "Export to multiple formats",
    ],
    popular: true,
  },
];
