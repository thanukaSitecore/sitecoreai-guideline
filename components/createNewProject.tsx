"use client";
import Image from "next/image";
import { useState } from "react";
import ImgCarousel from "./imgCarousel";

const slides = [
  { src: "/Media/QuickLinks.jpg", alt: "Quick Links" },
  { src: "/Media/DeployApp.jpg", alt: "Deploy App Page" },
  { src: "/Media/actionnewproject.gif", alt: "Action Gif" },
];

export default function CreateNewProject() {
  const [isProjectCollapsed, setIsProjectCollapsed] = useState(true);
  const [isEnvironmentCollapsed, setIsEnvironmentCollapsed] = useState(true);
  const [isRepositoryCollapsed, setIsRepositoryCollapsed] = useState(true);

  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-6">
          <span className="text-2xl font-bold">
            2: Create a New Project in the Deploy App
          </span>
        </div>
        <div className="w-full max-w-lg mx-auto">
          <ImgCarousel slides={slides} />
        </div>
        <div>
          <div className="mt-2">
            1. Once logged in, you will use the Deploy app to initialize your
            project.
          </div>
          <div className="mt-2">
            2. On the Cloud Portal home page, look for the QUICK LINKS section
            and click SitecoreAI Deploy (or the Deploy app).
          </div>
          <div className="mt-2">
            3. In the Deploy app, click the Create New Project button to start a
            new project.
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span>
              4. Enter a name for your project (e.g., "Demo_App") and click
              Continue.
            </span>

            <button
              type="button"
              onClick={() => setIsProjectCollapsed(!isProjectCollapsed)}
              className="btn btn-primary inline-flex items-center gap-2"
              aria-expanded={!isProjectCollapsed}
              aria-controls="basic-collapse-heading"
            >
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-300 focus:outline-none dark:bg-slate-800 dark:text-slate-100"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isProjectCollapsed ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
              <span>
                {isProjectCollapsed ? "Show details" : "Hide details"}
              </span>
            </button>
            <div
              id="basic-collapse-heading"
              className={`w-full overflow-hidden transition-all duration-300 mt-3 ${
                isProjectCollapsed
                  ? "max-h-0 opacity-0"
                  : "max-h-[500px] opacity-100"
              }`}
              aria-labelledby="basic-collapse"
            >
              <div className="border-base-content/25 rounded-md border p-3">
                <p className="text-base-content/80">
                  <img
                    src="Media/SetProject.jpg"
                    alt="Set up project"
                    className="w-full h-auto rounded-md"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="font-bold">Connect Your Source Control</div>
          <div>
            Sitecore requires a repository to hold your code. You can use your
            own existing repository or let the platform help you set one up.
          </div>
          <div>5. Setting Up Your Authoring Environment.</div>
          <div>
            <ul>
              <li>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span>
                    • Name your authoring environment: Enter a descriptive name
                    for your environment in the text box (e.g., dev, staging, or
                    prod).
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setIsEnvironmentCollapsed(!isEnvironmentCollapsed)
                    }
                    className="btn btn-primary inline-flex items-center gap-2"
                    aria-expanded={!isEnvironmentCollapsed}
                    aria-controls="basic-collapse-authoring-environment"
                  >
                    <span
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-300 focus:outline-none dark:bg-slate-800 dark:text-slate-100"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isEnvironmentCollapsed ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                    <span>
                      {isEnvironmentCollapsed ? "Show details" : "Hide details"}
                    </span>
                  </button>
                  <div
                    id="basic-collapse-authoring-environment"
                    className={`w-full overflow-hidden transition-all duration-300 mt-3 ${
                      isEnvironmentCollapsed
                        ? "max-h-0 opacity-0"
                        : "max-h-[500px] opacity-100"
                    }`}
                    aria-labelledby="basic-collapse"
                  >
                    <div className="border-base-content/25 rounded-md border p-3">
                      <p className="text-base-content/80">
                        <img
                          src="Media/addenvironment.jpg"
                          alt="Set up project"
                          className="w-full h-auto rounded-md mt-2"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                • Select Source control provider: Choose between GitHub or Azure
                DevOps.
              </li>
              <li>
                • Select GitHub account: Use the dropdown menu to choose the
                specific account where the repository will be stored. If your
                account is not listed, click Add GitHub account.
              </li>
              <li>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span>
                    • Name your new repository: Enter a name for the new
                    repository that will contain the code for your authoring
                    environment and editing host.
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setIsRepositoryCollapsed(!isRepositoryCollapsed)
                    }
                    className="btn btn-primary inline-flex items-center gap-2"
                    aria-expanded={!isRepositoryCollapsed}
                    aria-controls="basic-collapse-Repository"
                  >
                    <span
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform duration-300 focus:outline-none dark:bg-slate-800 dark:text-slate-100"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isRepositoryCollapsed ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                    <span>
                      {isRepositoryCollapsed ? "Show details" : "Hide details"}
                    </span>
                  </button>
                  <div
                    id="basic-collapse-Repository"
                    className={`w-full overflow-hidden transition-all duration-300 mt-3 ${
                      isRepositoryCollapsed
                        ? "max-h-0 opacity-0"
                        : "max-h-[500px] opacity-100"
                    }`}
                    aria-labelledby="basic-collapse"
                  >
                    <div className="border-base-content/25 rounded-md border p-3">
                      <p className="text-base-content/80">
                        <img
                          src="Media/setRepository.jpg"
                          alt="Set up project"
                          className="w-full h-auto rounded-md mt-2"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>• Configure Options:</div>
                <ul>
                  <li className="ml-4">
                    {" "}
                    * Check Auto deploy on push to repository if you want code
                    changes to automatically trigger a redeployment.
                  </li>
                  <li className="ml-4">
                    {" "}
                    * Check Production environment if this is intended for
                    production traffic (note: this setting cannot be changed
                    later).
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
           6. Click the Continue button to proceed with the setup.
          </div>
        </div>
      </div>
    </div>
  );
}
