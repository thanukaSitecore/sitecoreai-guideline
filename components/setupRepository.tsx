"use client";
import CarresolCollapsible from "./carresolCollapsible";

const slides = [
  { src: "/Media/GithubSetup.jpg", alt: "Github" },
  { src: "/Media/GithubSteps.png", alt: "Github Steps" },
];
export default function SetupRepository() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            Cloning Your Repository and Setting Up Your Local Folder
          </span>
          <div>
            To start working on your project, you need to set up a local
            workspace. If you do not have a specific project folder on your
            drive, you can create one and clone your code directly into it.
          </div>
        </div>

        <div className="mt-2">
          <span className="text-2xl font-bold">Steps to Prepare Your Local Environment</span>
          <CarresolCollapsible slides={slides} />

          <div className="mt-4 text-slate-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Open a terminal and go to your project folder.</li>
              <li>If needed, create a folder like <code>SitecoreAI</code> and navigate into it.</li>
            </ul>
            <div className="mt-3 text-slate-700">
              <ul className="list-decimal list-inside ml-4 font-bold">
                <li>git clone -b &lt;branch-name&gt; &lt;repository-url&gt;.</li>
                <li>{'CD {{repofolder}}\\{{editing hosts folder}}\\{{editing host}}'}</li>
                <li>npm install</li>
                <li>code .</li>
                <li>npm run dev</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-slate-500">
              Use your SitecoreAI Deploy project settings to get the exact repository URL and branch.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
