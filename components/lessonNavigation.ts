export type LessonGroup = "Day 01" | "Day 02" | "Bonus";

export type LessonNavItem = {
  href: string;
  label: string;
  group: LessonGroup;
};

export const lessonNavigation: LessonNavItem[] = [
  {
    href: "/Day1/login",
    label: "Step 1 : Login and Setup",
    group: "Day 01",
  },
  {
    href: "/Day1/createTemplate",
    label: "Step 2 : Setup Local Environment",
    group: "Day 01",
  },
  {
    href: "/Day1/manualtemplate",
    label: "Step 3 : Create Site and Template",
    group: "Day 01",
  },
  {
    href: "/Day1/DataTemplateExercise",
    label: "Step 4 : Data Template Exercise",
    group: "Day 01",
  },
  {
    href: "/Day2/PageBuild",
    label: "Step 1 : Page Builder",
    group: "Day 02",
  },
  {
    href: "/Day2/Forms",
    label: "Step 2 : Web Hooks and Forms",
    group: "Day 02",
  },
  {
    href: "/Day2/Vercel",
    label: "Step 3 : Vercel Deployment",
    group: "Day 02",
  },
  {
    href: "/Day2/Day2Exercise",
    label: "Step 4 : Day 2 Exercise",
    group: "Day 02",
  },
  {
    href: "/Day2/GraphQL",
    label: "Step 5 : GraphQL",
    group: "Day 02",
  },
  {
    href: "/Day2/Workflow",
    label: "Workflow",
    group: "Bonus",
  },
];