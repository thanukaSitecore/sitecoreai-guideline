"use client";
import Image from "next/image";
import { useState } from "react";
export default function ConfigurEditingHost() {
  const [isOptionalconfiguration, setIsOptionalconfiguration] = useState(true);
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            3: Optional: Configuring Your Editing Host
          </span>
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
                  <Image
                    src="/Media/Optionalconfiguration.jpg"
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
              You can skip this step, as it is optional.
            </div>
            <div className="mt-2">
              If you choose to proceed, here are the guidelines for setting up
              the editing host:
            </div>
            <div>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Enable the Feature: Toggle the Set up editing host switch to
                  the &quot;on&quot; (green) position if you want to include a frontend
                  application for viewing and editing content, layouts, and
                  other site components.
                </li>
                <li>
                  Define the Host Name: Enter a unique name for your editing
                  host in the Editing host name field.
                </li>
                <li>
                  Verify Repository Settings: The repository settings—including
                  source control, GitHub account, and repository name—are
                  automatically inherited from your authoring environment
                  configuration.
                  <div className="mt-2 ml-2">
                    If you need to change these inherited settings, you must
                    click the &apos;Back&apos; button to return to the previous
                    configuration step.
                  </div>
                </li>
                <li>
                  Configure Deployment Options: You may check the Auto deploy on
                  push to repository box to automatically trigger a redeployment
                  of your environment whenever you push code to your source
                  control system.
                </li>
                <li>
                  Add Custom Variables: If your configuration requires specific
                  environment variables, click the + Add variable button to
                  input them.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
