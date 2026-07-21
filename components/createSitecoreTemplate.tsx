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
          <div className="mt-2">
            <ul className="list-decimal list-inside mt-2">
              <li>Create a new template or modify an existing one.</li>
              <li>Navigate to /sitecore/templates/Project/YourProjectName.</li>
              <li>
                Right-click your project folder, click Insert &gt; Template, and
                name it Article (or your preferred component name).
              </li>
              <li>Add a Template Section (e.g., Data)</li>
              <li>
                Add the following fields:
                <ul className="list-circle  ml-2">
                  <li>title (Type: Single-Line Text)</li>
                  <li>description (Type: Rich Text)</li>
                </ul>
              </li>
              <li>Save the template.</li>
            </ul>
            <div>
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
          <div className="mt-2">
            <ul className="list-decimal list-inside mt-2">              
              <li>Navigate to /sitecore/layout/Renderings/Project/YourProjectName.</li>
              <li>                
                Right-click the folder, click &gt; Json Rendering, and name it Article (must match your template/component name).  
              </li>              
              <li>
                Configure the rendering fields:  
                <ul className="list-circle  ml-2">
                  <li>Datasource Location: ./ (or your data folder path)</li>
                  <li>Datasource Template: Select the Article template you created in Phase 1. (Type: Rich Text)</li>
                </ul>
              </li>
              <li>Save the rendering item.</li>
            </ul>
            <div>
              <ImgeCollapsible imgscr="/Media/jsonRendering.jpg" alttext="json Rendering" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
