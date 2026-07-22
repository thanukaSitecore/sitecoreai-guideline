"use client";
import CarresolCollapsible from "@/components/carresolCollapsible";
import ImgeCollapsible from "@/components/imgeCollapsible";

export default function CreateSitecoreTemplate() {
  const slides = [
    { src: "/Media/contentTree_Templates.jpg", alt: "Set up project" },
    { src: "/Media/articleTemplate.jpg", alt: "Set up project" },
  ];
  return (
    <div>
      <div className="mt-3">
        <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="text-2xl font-bold">
            Create the Template in Sitecore (Content Editor)
          </div>
          <div className="mt-2 text-slate-700">
            Create a template quickly:
            <ul className="list-decimal list-inside mt-2 space-y-2">
              <li>Create or open a template under <code>/sitecore/templates/Project/YourProjectName</code>.</li>
              <li>Insert a new Template (name it e.g. <span className="font-semibold">Article</span>).</li>
              <li>Add a Data section and fields such as <code>title</code> and <code>description</code>.</li>
              <li>Save the template.</li>
            </ul>
            <div className="mt-3">
              <CarresolCollapsible slides={slides} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="text-2xl font-bold">
            Create the JSON Rendering in Sitecore
          </div>
          <div className="mt-2 text-slate-700">
            Create the JSON rendering (short):
            <ul className="list-decimal list-inside mt-2 space-y-2">
              <li>Go to <code>/sitecore/layout/Renderings/Project/YourProjectName</code>.</li>
              <li>Add a new <strong>Json Rendering</strong> named to match your template (e.g. <code>Article</code>).</li>
              <li>Set Datasource Location and select the Article template as the Datasource Template.</li>
              <li>Save the rendering.</li>
            </ul>
            <div className="mt-3">
              <ImgeCollapsible imgscr="/Media/jsonRendering.jpg" alttext="json Rendering" />
            </div>
          </div>
           <div className="mt-2 text-slate-700">
            Add Aviable Rendering:
            <ul className="list-decimal list-inside mt-2 space-y-2">
              <li>Go to <code>/sitecore/content/Your Tenant/Your Site/Presentation/Available Renderings/</code>.</li>
              <li>Add a new <strong>Available Renderings</strong> named to match your Requirement (e.g. <code>BookShop</code>).</li>
              <li>Click Edit and add your rendering</li>
              <li>Save the Available Renderings.</li>
            </ul>
            <div className="mt-3">
              <ImgeCollapsible imgscr="/Media/AvailableRenderings.jpg" alttext="Available Renderings" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
