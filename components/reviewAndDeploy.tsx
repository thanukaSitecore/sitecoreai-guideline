"use client";
import Image from "next/image";
import { useState } from "react";
import CarresolCollapsible from "./carresolCollapsible";
import ImgeCollapsible from "./imgeCollapsible";

const slides = [
  { src: "/Media/InprogressDeployments.jpg", alt: "Quick Links" },
  { src: "/Media/completeDeployments.jpg", alt: "Deploy App Page" },  
];
export default function ConfigurEditingHost() {

  const [isOptionalconfiguration, setIsOptionalconfiguration] = useState(true);
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            4: Review and Deploy Your Project
          </span>
          <ImgeCollapsible imgscr="/Media/ReviewAndDeploy.jpg" alttext="Set up project" />
          
          <div className="space-y-4 text-slate-700">
            <div className="mt-2 font-semibold">
              Finish by checking your settings and starting deployment.
            </div>
            <div>
              <ul className="list-disc list-inside mt-2">
                <li>Verify project, authoring, and editing host details.</li>
                <li>Click Start deployment once everything is correct.</li>
              </ul>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-xl font-bold">Deployment status</span>
            <div>
              <ul className="list-disc list-inside mt-2">
                <li>Use the dashboard to watch deployment progress.</li>
                <li>Status updates from In progress to Complete appear automatically.</li>
              </ul>
            </div>
            <CarresolCollapsible slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}
