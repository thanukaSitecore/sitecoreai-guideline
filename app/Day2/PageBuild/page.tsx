"use client";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function PageBuild() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            Page Builder
          </span>
        </div>
        <p className="mt-4 text-slate-700">
          Sitecore AI Page Builder lets you quickly design and assemble pages using AI-guided components, content, and layout tools. It simplifies page creation while keeping your Sitecore experience consistent.
        </p>
        <div>
          <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
            <li>Open Page Builder via Channels
              <div>
                <ImgeCollapsible imgscr="/Media/Channel_PageBuilder.jpg" alttext="Page Builder" />
              </div>
            </li>
            <li>Change Default editing host to Local Host
              <div>
                <ImgeCollapsible imgscr="/Media/PageBuilder_localhost.jpg" alttext="Change Default editing host to Local Host" />
              </div>
            </li>
            <li>
              Create a new Page in Page Builder
            </li>
            <li>
              Select Compontent from the top and Select your component from the list and Add your Component.
            <div>
                <ImgeCollapsible imgscr="/Media/PageBuilderDataSour.gif" alttext="Add Data Source" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
