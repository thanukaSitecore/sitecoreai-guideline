import Image from "next/image";
export default function EnvironmentVariables() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="text-2xl font-bold">Setup your environment variables.</div>
        <div className="mt-2">
          Environment variables in Sitecore (XM Cloud/SitecoreAI) are external
          key-value pairs used to manage configuration without changing your
          code.
        </div>
        <div>
          <ul className="list-disc list-inside mt-2">
            <li>
              Security: Keeps sensitive info (like API keys) out of your
              code.{" "}
            </li>
            <li>
              Environment-Specific: Allows different settings (like URLs or
              feature flags) for Dev, Staging, and Production.
            </li>
            <li>
              Management: Defined in the Sitecore Cloud portal for hosted
              environments and in .env files for local development.
            </li>
          </ul>
          <div>
            Essentially, they act as the &quot;settings&quot; for your app that
            you can tweak without needing a code deployment.
          </div>
        </div>
        <div>
          <Image
            src="/Media/EnvironmentVariables.jpg"
            alt="Set up project"
            width={1200}
            height={700}
            className="w-full h-auto rounded-md border border-gray-600"
          />
        </div>
        <div>
            To prepare your project for development, follow these steps to configure your local environment variables:
            <ul className="list-decimal list-inside mt-2">
              <li>Open Project: Open your project in Visual Studio Code or your preferred code editor.</li>
              <li>Locate Examples: Navigate to the Examples folder.</li>
              <li>Duplicate Template: Copy the basic-nextjs folder and paste it into the project root.</li>
              <li>Rename Folder: Rename the copied basic-nextjs folder to book-shope.</li>
              <li>Create File: Create an .env.local file inside the book-shope folder.</li>
              <li>Access Settings: Navigate to SitecoreAI Deploy &gt; Projects &gt; [Your Project] &gt; [Environment] &gt; Developer settings.</li>
              <li>Sync Variables: Copy the Environment variables and paste them into the .env.local file.</li>
            </ul>
          </div>
        </div>
      </div>
    
  );
}
