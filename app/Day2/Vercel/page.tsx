"use client";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function Vercel() {
  return (
    <div className="mt-3 mb-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">Vercel</span>
        </div>
        <div>
          <div>
            <div>
              <p className="mt-4 text-slate-700">
                Vercel is an all-in-one platform with Global Content Delivery
                Networks (CDNs). It supports the deployment and delivery of
                front-end applications and has first-class support for Next.js.
              </p>
            </div>

             <div>
              <p className="mt-4 text-slate-700">
                To deploy your front-end application to Vercel:
              </p>
            </div>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
            
              <li>In the Vercel dashboard, create a new project by importing your solution repository.</li>
              <li>Enter the Project name.</li>
              <li>In the Root directory field, enter the path to the root folder of the Next.js application.
                <div className="mt-2 ml-6">
                  <ImgeCollapsible
                    imgscr="/Media/VercelNewProject.jpg"
                    alttext="Expected Output"
                  />
                </div>
              </li>
              
              <li>
                Expand the Environment Variables panel and import the .env file.
                <div className="mt-2 ml-6">
                  <ImgeCollapsible
                    imgscr="/Media/VercelEnvironmentvariables.jpg"
                    alttext="Expected Output"
                  />
                </div>
              </li>
              <li>Click Deploy. You can see a deployment preview of the website.</li>
              <li>
                When the Vercel deployment process finishes, verify that the deployed application hosted by Vercel renders as expected.
                <div className="mt-2 ml-6">
                  <ImgeCollapsible
                    imgscr="/Media/VercelEnd.jpg"
                    alttext="Expected Output"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
  );
}
