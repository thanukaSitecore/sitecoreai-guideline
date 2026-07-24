"use client";
import { useState } from "react";
import ImgeCollapsible from "@/components/imgeCollapsible";
export default function GraphQL() {
  const [copiedHeader, setCopiedHeader] = useState(false);
  const [copiedQuery, setCopiedQuery] = useState(false);

  const headerCode = `{ "sc_apikey": "<YOUR_PREVIEW_API_TOKEN>" }`;
  const queryCode = `query {
  site {
    allSiteInfo {
      results {
        name
        hostname
        language
        rootPath
      }
    }
  }
}`;

  const copyToClipboard = async (text: string, setCopied: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("copy failed", err);
    }
  };

  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">GraphQL</span>
        </div>
        <div className="mt-2">
          <span className="text-1xl font-bold">Set up the GraphQL IDEs</span>
        </div>
        <p className="mt-4 text-slate-700">
          The GraphQL IDE (GraphQL Playground) is a graphical, in-browser IDE
          that lets you explore GraphQL APIs, make queries, and inspect and
          understand the response structure. The IDE is especially useful for
          testing queries during development, before you use them in your
          application.
        </p>{" "}
        <div>
          <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
            <li>
              On the Sitecore Cloud Portal home page, in the QUICK LINKS
              section, click SitecoreAI Deploy.
            </li>
            <li>
              In the Deploy app, on the Projects page, click the relevant
              project.
            </li>
            <li>
              Click the environment where you want to use the GraphQL IDE.
            </li>
            <li>
              Do one of the following, depending on the API you want to access:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Preview GraphQL API - on the Details tab, in the Preview
                  GraphQL IDE section, click Generate Preview API token, and
                  copy the token. You'll use the token in the GraphQL IDE in a
                  later step.
                </li>
                <li>
                  Delivery GraphQL API - on the Details tab, in the Live GraphQL
                  IDE (Experience Edge) section, click Generate Delivery API
                  token, and copy the token. You'll use the token in the GraphQL
                  IDE in a later step.
                </li>
              </ul>
            </li>
            <li>
              Do one of the following, depending on the API you want to access:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Preview GraphQL API - in the Preview GraphQL IDE section,
                  click Launch IDE. The GraphQL IDE opens in a new tab.
                </li>
                <li>
                  Delivery GraphQL API - in the Live GraphQL IDE (Experience
                  Edge) section, click Launch IDE. The GraphQL IDE opens in a
                  new tab.
                </li>
              </ul>
            </li>
            <li>
              In the GraphQL IDE, on the HTTP HEADERS tab, type the following
              code, replacing the API token placeholder with the token you
              copied in a previous step:
              <div className="mt-3 rounded bg-slate-950 w-3/5">
                <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
                  <div className="text-sm text-slate-200">HTTP headers</div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(headerCode, setCopiedHeader)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-medium text-slate-100 shadow-sm hover:bg-slate-700"
                  >
                    {copiedHeader ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className="overflow-x-auto p-4 text-sm text-slate-100">
                  <code>{headerCode}</code>
                </pre>
              </div>
            </li>
          </ul>
          <div>
            Here's an example query that retrieves information about all your
            sites, including every site name, language, and root path:
            <div className="mt-3 rounded bg-slate-950 w-3/5">
              <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
                <div className="text-sm text-slate-200">GraphQL query</div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(queryCode, setCopiedQuery)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-medium text-slate-100 shadow-sm hover:bg-slate-700"
                >
                  {copiedQuery ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto p-4 text-sm text-slate-100">
                <code>{queryCode}</code>
              </pre>
            </div>
          </div>
          <div>
            <ImgeCollapsible imgscr="/Media/GraphQLIDE.jpg"
                                alttext="GraphQLIDE" />
          </div>
        </div>
      </div>
    </div>
  );
}
