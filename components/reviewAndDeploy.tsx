"use client";
import Image from "next/image";
import { useState } from "react";
import ImgCarousel from "./imgCarousel";

const slides = [
  { src: "/Media/InprogressDeployments.jpg", alt: "Quick Links" },
  { src: "/Media/completeDeployments.jpg", alt: "Deploy App Page" },  
];
export default function ConfigurEditingHost() {
  const [isReviewandDeploy, setIsReviewandDeploy] = useState(true);
  const [isOptionalconfiguration, setIsOptionalconfiguration] = useState(true);
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            4: Review and Deploy Your Project
          </span>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setIsReviewandDeploy(!isReviewandDeploy)
              }
              className="btn btn-primary inline-flex items-center gap-2"
              aria-expanded={!isReviewandDeploy}
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
                    isReviewandDeploy ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
              <span>
                {isReviewandDeploy ? "Show details" : "Hide details"}
              </span>
            </button>
            <div
              id="basic-collapse-heading"
              className={`w-full overflow-hidden transition-all duration-300 mt-3 ${
                isReviewandDeploy
                  ? "max-h-0 opacity-0"
                  : "max-h-[500px] opacity-100"
              }`}
              aria-labelledby="basic-collapse"
            >
              <div className="border-base-content/25 rounded-md border p-3">
                <p className="text-base-content/80">
                  <Image
                    src="/Media/ReviewAndDeploy.jpg"
                    alt="Set up project"
                    width={1200}
                    height={700}
                    className="w-full h-auto rounded-md"
                  />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-2 text-bold">
              The final step in the process is to review your configurations and
              initiate the deployment.
            </div>

            <div>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Review your settings: Carefully check the Project details,
                  Authoring environment details, and Editing host details to
                  ensure all information is correct before proceeding.
                </li>
                <li>
                  Make adjustments: If you identify any errors or need to change
                  a configuration, click the Edit button located in the
                  top-right corner of the respective section to update your
                  settings.
                </li>
                <li>
                  Navigate back: If you need to revisit an earlier stage, click
                  the Back button at the bottom of the page.
                </li>
                <li>
                  Initiate deployment: Once you have verified all details, click
                  the Start deployment button to finalize the setup and begin
                  the deployment process.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-xl font-bold">
              Monitoring Deployment Status (optional)
            </span>
            <div>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Track Progress: The Deployments dashboard allows you to view
                  the real-time status of your projects, including those marked
                  as In progress.
                </li>
                <li>
                  Finalization: Once a deployment finishes successfully, the
                  status will update to Complete.
                </li>
                <li>
                  Management: You can use the dashboard to filter between views
                  (All, My, or Not deployed), create new deployments, or manage
                  existing ones via the ellipsis menu.
                </li>
              </ul>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setIsOptionalconfiguration(!isOptionalconfiguration)
                }
                className="btn btn-primary inline-flex items-center gap-2"
                aria-expanded={!isOptionalconfiguration}
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
                      isOptionalconfiguration ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <span>
                  {isOptionalconfiguration ? "Show details" : "Hide details"}
                </span>
              </button>
              <div
                id="basic-collapse-heading"
                className={`w-full overflow-hidden transition-all duration-300 mt-3 ${
                  isOptionalconfiguration
                    ? "max-h-0 opacity-0"
                    : "max-h-[500px] opacity-100"
                }`}
                aria-labelledby="basic-collapse"
              >
                <div className="border-base-content/25 rounded-md border p-3">
                  <p className="text-base-content/80">
                    <ImgCarousel slides={slides} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
