"use client";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function PageBuild() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">Work Flow</span>
        </div>
        <p className="mt-4 text-slate-700">
          Workflows, states, actions, and commands are all definition items
          stored in the content tree under /sitecore/System/Workflows. Workflows
          contain states, and states contain actions and commands. Commands can
          also contain actions. Together the definition items define the steps a
          content item must pass through before it becomes publishable.
        </p>
        <div>
          Create a workflow.
          <div>
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
              <li>
                Go to the Content Editor and right-click the Workflows item
                under /sitecore/System/Workflows, then select Insert to create a
                new workflow.
                 <ImgeCollapsible imgscr="/Media/AddNewWorkflow.jpg"
                    alttext="Add New Workflow" />
              </li>
              <li>
                Right-click the newly created workflow and add the required States and Commands.
              </li>
              <li>Create Draft ,Awaiting Approval and Approve. </li>
              <li>Create the following commands: Submit, Approve, Reject, and Auto Publish.
                <ImgeCollapsible imgscr="/Media/WorkflowStage.jpg"
                    alttext="Workflow Stage" />
              </li>
              
              <li>Assign users from the Security tab.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
