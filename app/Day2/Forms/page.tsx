"use client";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function Forms() {
  return (
    <div className="mb-3">
      <div className="mt-3">
        <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="mt-2">
            <span className="text-2xl font-bold">Web Hooks</span>
          </div>
          <p className="mt-4 text-slate-700">
            <div>
              You can receive real-time notifications about events or workflow
              actions that occur in SitecoreAI, by adding a webhook. You can
              also use a webhook to run external validation on item workflow
              state changes.
            </div>
            <div>
              In SitecoreAI, webhooks provide the supported mechanism for
              reacting to system events. Instead of handling events internally
              within the platform (for example, through custom event handlers),
              external services can subscribe to events and receive
              notifications via webhooks when those events occur.{" "}
            </div>
            <div>
              You can use webhooks to trigger external processing and
              integrations when events occur in SitecoreAI.
            </div>
          </p>
          <div>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
              <li>In the top navigation bar of Sitecore AI, click Forms.</li>
              <li>
                Select Forms from the left navigation pane, and then click
                Webhooks.
              </li>
              <li>Click Create Webhook</li>
              <li>Name: A recognizable label (e.g., Webhook.site Receiver).</li>
              <li>
                URL: Your target endpoint (e.g.,
                [https://webhook.site/your-unique-id](https://webhook.site/your-unique-id)).
              </li>
              <li>
                Authentication Type: Select one of the supported methods:
                <ul className="list-disc list-inside ml-4">
                  <li>
                    No authentication: For quick sandbox/local testing (Sitecore
                    flags this with a security warning).
                  </li>
                  <li>API Key: Provide Header name and API key value.</li>
                  <li>Basic authentication: Enter Username and Password.</li>
                  <li>
                    OAuth2 (Client Credentials): Provide Client ID, Client
                    Secret, and Authorization endpoint URL.
                  </li>
                  <li>
                    Note : Use No Authentication for this exercise.
                    <div>
                      <ImgeCollapsible
                        imgscr="/Media/ClientDatawebhook.jpg"
                        alttext="Client Data"
                      />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3 pd-3">
        <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="mt-2">
            <span className="text-2xl font-bold">Sitecore Forms</span>
          </div>
          <p className="mt-4 text-slate-700">
            <div>
              In Forms, you can create and design forms that are visually
              appealing and easy to use within a webpage.
            </div>
            <div>
              To access, in the navigation menu, click Design. Then, in the left
              sidebar, select Forms.
            </div>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
              <li>Click Create foem</li>
              <li>Give a Form Name (Client Data Form) and Save</li>
              <li>Select Layout</li>
              <li>
                Drag and Drop Fileds from Items tab.
                <div>
                  <ImgeCollapsible
                    imgscr="/Media/SitecoreForm.jpg"
                    alttext="Client Form"
                  />
                </div>
              </li>
              <li>
                Goto Setting and Select a webhook
                <div>
                  <ImgeCollapsible
                    imgscr="/Media/SitecoreFormWebhook.jpg"
                    alttext="Client Form"
                  />
                </div>
              </li>
              <li>Save and exit</li>
            </ul>
            <div className="mt-3 font-bold text-slate-700">Active the Form</div>
            <div>
              <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
                <li>You need to activate the form before you can use it.</li>
                <li>Click the Actions button and select Activate to activate the form.
                    <div>
                  <ImgeCollapsible
                    imgscr="/Media/SitecoreFormActive.jpg"
                    alttext="Client Form"
                  />
                </div>
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
      <div className="mt-3 pd-3">
        <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="mt-2">
            <span className="text-2xl font-bold">Use Sitecore Forms in WebPage</span>
          </div>
          <p className="mt-4 text-slate-700">
            <div className="mt-2">
             After activating the form, it will be available for use in Page Builder.
            </div>
            <div className="mt-2">
              Drag and drop the form onto the page wherever you want it to appear.
            </div>           
              <div>
                  <ImgeCollapsible
                    imgscr="/Media/SitecoreForminPagebuild.jpg"
                    alttext="Client Form"
                  />
                </div>
          </p>
        </div>
      </div>
    </div>
  );
}
