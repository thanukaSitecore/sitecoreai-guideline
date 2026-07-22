
"use client";
import { useState } from "react";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function EnvironmentVariables() {
  const [copied, setCopied] = useState(false);
  const buildScript = `"book-shop": {
  "path": "./book-shop",
  "nodeVersion": "24.14.1",
  "jssDeploymentSecret": "110F1C44A496B45478640DD36F80C18C9",
  "enabled": true,
  "type": "sxa",
  "buildCommand": "build",
  "runCommand": "next:start"
}`;

  const copyBuildScript = async () => {
    try {
      await navigator.clipboard.writeText(buildScript);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="text-2xl font-bold">Setup your environment variables.</div>
        <div className="mt-2 text-slate-700">
          Environment variables store configuration outside your code so you can
          safely manage keys, URLs, and feature settings for each environment.
        </div>
        <div>
          <ul className="list-disc list-inside mt-2 text-slate-700">
            <li>Keep sensitive keys out of source code.</li>
            <li>Use different values for Dev, Staging, and Production.</li>
            <li>Manage hosted values in Sitecore Cloud and local values in .env files.</li>
          </ul>
        </div>
        <div>
          <ImgeCollapsible imgscr="/Media/EnvironmentVariables.jpg" alttext="Set up project" />
          
        </div>
        <div className="mt-4 text-slate-700">
            Follow these steps to add your local environment settings:
            <ul className="list-decimal list-inside mt-2">
              <li>Open your project in VS Code or another editor.</li>
              <li>Find the Examples folder.</li>
              <li>Copy the <code>basic-nextjs</code> template into the project root.</li>
              <li>Rename the copied folder to <code>book-shope</code>.</li>
              <li>Create an <code>.env.local</code> file inside <code>book-shope</code>.</li>
              <li>Open SitecoreAI Deploy &gt; Projects &gt; [Your Project] &gt; [Environment] &gt; Developer settings.</li>
              <li>Paste the environment variables into <code>.env.local</code>.</li>
              <li>
                Go to <code>xmcloud.build.json</code> and under <code>"renderingHosts"</code> find <code>"basic-nextjs"</code>. Duplicate that entry and change the name to your project name. Check the example below:
                <div className="mt-2 rounded-md bg-slate-950 p-3 text-sm text-slate-100">
                  <pre className="overflow-x-auto">
{buildScript}
                  </pre>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
  );
}
