"use client";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function Day2Exercise() {
  return (
    <div className="mt-3 mb-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">Day Two Exercise</span>
        </div>
      </div>

      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm mt-3">
        <div className="mt-2">
          <span className="text-2xl font-bold">Exercise One</span>
        </div>
        <div>
          <div>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
              <li>
                Create a new Data Template (ex: DetailPage) in the "Templates"
                folder and add the following fields:
                <ul className="list-disc list-inside mt-2 ml-2 space-y-2 text-slate-700">
                  <li>Heading</li>
                  <li>Description</li>
                  <li>Subheading</li>
                  <li>Sub Description</li>
                  <li>Sub Description Image</li>
                </ul>
              </li>

              <li>Create a json Rendering for the above Data Template.</li>
              <li>Create a nextjs Component for the above JSON rendering.</li>
              <li>Create About Us page using Page Builder.</li>
              <li>Create a Datasource Using Page Builder.</li>
              <li>
                Expected Output from This Exercise
                <div className="mt-2 ml-6">
                  <ImgeCollapsible
                    imgscr="/Media/PagebuilderExercise.jpg"
                    alttext="Expected Output"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm mt-3">
        <div className="mt-2">
          <span className="text-2xl font-bold">Exercise Two</span>
        </div>
        <div>
          <div>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
              <li>
                Create a Form useing Sitecore Forms and add the following
                fields:
                <ul className="list-disc list-inside mt-2 ml-2 space-y-2 text-slate-700">
                  <li>First Name:</li>
                  <li>Last Name:</li>
                  <li>Phone:</li>
                  <li>Email:</li>
                  <li>Message:</li>
                </ul>
              </li>
              <li>You need to display this form on the Contact Us page.</li>
              <li>
                Expected Output from This Exercise
                <div className="mt-2 ml-6">
                  <ImgeCollapsible
                    imgscr="/Media/SitecoreFormExercise.jpg"
                    alttext="Expected Output"
                  />
                </div>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
