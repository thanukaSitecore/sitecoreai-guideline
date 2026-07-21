"use client";
import ImgCarousel from "./imgCarousel";
import ImgeCollapsible from "./imgeCollapsible";

const slides = [
  { src: "/Media/QuickLinks.jpg", alt: "Quick Links" },
  { src: "/Media/DeployApp.jpg", alt: "Deploy App Page" },
  { src: "/Media/actionnewproject.gif", alt: "Action Gif" },
];

export default function CreateNewProject() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            2: Create a New Project in the Deploy App
          </span>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-slate-700">
            <div>1. Once logged in, use the Deploy app to start your project.</div>
            <div>
              2. From the Cloud Portal, click SitecoreAI Deploy under QUICK LINKS.
            </div>
            <div>
              3. Click Create New Project, enter a name like "Demo_App", then
              continue.
              <ImgeCollapsible imgscr="/Media/SetProject.jpg" alttext="" />
            </div>
            <div>
              4. Connect a repository and choose GitHub or Azure DevOps.
              <ImgeCollapsible imgscr="/Media/setRepository.jpg" alttext="" />
            </div>
            <div>
              5. Set up an authoring environment (dev, staging, prod) and finish
              the deploy configuration.
              <ImgeCollapsible imgscr="/Media/addenvironment.jpg" alttext="" />
            </div>
            <div>
              6. Review your settings and click Continue to complete setup.
            </div>
          </div>
          <div className="w-full lg:sticky lg:top-10">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <ImgCarousel slides={slides} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
