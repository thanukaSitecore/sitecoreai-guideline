"use client";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function DataTemplateExercise() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">Data Template Exercise</span>
        </div>
        <p className="mt-4 text-slate-700">
          Let's test your knowledge by creating a new Data Template. Follow the
          steps below to complete the exercise.
        </p>
        <div>
          <div>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
              <li>
                Create a new Data Template (ex: HeroBanner) in the "Templates"
                folder and add the following fields:
                <ul className="list-disc list-inside mt-2 ml-2 space-y-2 text-slate-700">
                  <li>Title</li>
                  <li>Description</li>
                  <li>
                    BannerImages
                    <div className="ml-4">
                      Instruction: This image field should be configured as an
                      image carousel.
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                Create a json Rendering for the above Data Template.
                <div className="ml-6">
                 Hint : Copy and paste an existing JSON rendering, then edit it.
                </div>
              </li>
              <li>Create a nextjs Component for the above JSON rendering.</li>
              <li>Create a Datasource.</li>
              <li>Map Newly created Data Template to the Home Page.</li>
              <li>Expected Output from This Exercise
                <div className="mt-2 ml-6">
                  <ImgeCollapsible imgscr="/Media/exerciseHomePage.gif" alttext="Expected Output" />
                </div>
                </li>   
                      
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
