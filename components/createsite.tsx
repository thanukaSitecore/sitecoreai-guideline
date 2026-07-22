"use client";
import Image from "next/image";
import ImgeCollapsible from "@/components/imgeCollapsible";

export default function CreateSite() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="text-2xl font-bold">Create a site</div>
        <div className="mt-2 text-slate-700">
          Use Channels to create a new site from a template and finish the setup
          in a few quick steps.
        </div>
        <ul className="list-decimal list-inside mt-2 text-slate-700 space-y-2">
          <li>
            Open Channels and click Create site.
            <div className="mt-3">
              <ImgeCollapsible
                imgscr="/Media/newchannels.jpg"
                alttext="Create site dialog"
              />
            </div>
          </li>
          <li>
            Select a template such as{" "}
            <span className="font-semibold">Start from Scratch</span>.
          </li>
          <li>Enter the site name and optional description.</li>

          <li>
            Select the languages and default language for the site.
            <div className="mt-3">
              <ImgeCollapsible
                imgscr="/Media/channelsData.jpg"
                alttext="Site created"
              />
            </div>
          </li>

          <li>Click Create and wait for the site to finish provisioning.</li>
        </ul>
      </div>{" "}
    </div>
  );
}
