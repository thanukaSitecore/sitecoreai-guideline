"use client";
import CarresolCollapsible from "./carresolCollapsible";

const slides = [
  { src: "/Media/GithubSetup.jpg", alt: "Github" },
  { src: "/Media/GithubSteps.png", alt: "Github Steps" },
];
export default function SetupRepository() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            Cloning Your Repository and Setting Up Your Local Folder
          </span>
          <div>
            To start working on your project, you need to set up a local
            workspace. If you do not have a specific project folder on your
            drive, you can create one and clone your code directly into it.
          </div>
        </div>

        <div className="mt-2">
          <span className="text-2xl font-bold">
            Steps to Prepare Your Local Environment
          </span>
          <CarresolCollapsible slides={slides} />

          <div>
            <div>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Open the Command Prompt (CMD): Press the Windows Key, type
                  cmd, and press Enter to open the Command Prompt.
                </li>
                <li>
                  Navigate to or Create Your Folder:
                  <ul className="list-decimal list-inside ml-4">
                    <li>
                      To navigate to the C drive, type cd C:\ and press Enter.
                    </li>
                    <li>
                      To create a new directory named &quot;SitecoreAI&quot; (if
                      it does not exist), type mkdir SitecoreAI and press Enter.
                    </li>
                    <li>
                      Move into that new folder by typing cd SitecoreAI and
                      press Enter.
                    </li>
                  </ul>
                </li>
                <li>
                  Clone a Specific Branch: To clone only a specific branch
                  instead of the entire repository, use the following command:
                  
                  <ul className="list-decimal list-inside ml-4 font-bold">
                    <li>git clone -b &lt;branch-name&gt; &lt;repository-url&gt;.</li>
                    <li>{'CD {{repofolder}}\\{{editing hosts folder}}\\{{editing host}}'}</li>
                    <li>npm install</li>
                    <li>code .</li>
                    <li>npm run dev</li>
                  </ul>
                </li>               
              </ul>
              <div>
                You can find these settings in the Developer Settings section within SitecoreAI Deploy by navigating to: Projects &gt; All projects / My projects &gt; Select your project &gt; Select Environment &gt; Developer Settings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
