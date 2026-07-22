"use client";
import Image from "next/image";
import { } from "react";
import ImgeCollapsible from "./imgeCollapsible";
export default function ConfigurEditingHost() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            3: Optional: Configuring Your Editing Host
          </span>
          <div className="mt-2">
            <div className="rounded-md p-3">
              <ImgeCollapsible imgscr="/Media/Optionalconfiguration.jpg" alttext="Set up project" />
            </div>
          </div>
          <div className="space-y-4 text-slate-700">
            <div className="mt-2">You can skip this step; it's optional.</div>
            <div className="mt-2">
              Summary: The editing host provides a frontend to preview and edit
              site content. Typically you enable it, give it a host name, and
              optionally configure deployment or environment variables. The
              repository settings are usually inherited from your authoring
              environment.
            </div>

            <div className="mt-3">
              <div className="rounded-md p-3">
                <ul className="list-disc list-inside mt-2 text-slate-700">
                  <li>Enable the feature to include a frontend app for editing and previewing content.</li>
                  <li>Provide a unique Editing host name.</li>
                  <li>Repository settings are inherited; click Back to change them.</li>
                  <li>Optionally enable auto-deploy on push and add environment variables using + Add variable.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
