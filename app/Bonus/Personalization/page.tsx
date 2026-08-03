"use client";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function PageBuild() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">Personalization</span>
        </div>
        <p className="mt-4 text-slate-700">
         Sitecore AI Personalization dynamically tailors website content, media, and digital experiences in real time based on who a visitor is and what they do.
        </p>
        <div>
          
          <div>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
              <li>
                Go to the Page Builder and select the page you want to personalize.                 
              </li>
              <li>
                Select Personalization from the toolbar and choose the component you want to personalize.
              </li>
              <li>Create new variants for the selected component and Create your audience.
                <ImgeCollapsible imgscr="/Media/CreateVariants.jpg"
                    alttext="Create Variants" />
              </li>
              <li>Select existing Datasource or Create new Datasource for the personalization component.
                <ImgeCollapsible imgscr="/Media/AddDatasourcePersonalization.gif"
                    alttext="Add Datasource Personalization" />
              </li>
              
              <li>Publish the page.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
