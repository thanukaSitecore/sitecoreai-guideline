"use client";
import { useState } from "react";

export default function CreateNextjsTemplate() {
  const [copied, setCopied] = useState(false);
  const exampleCode = `import { Field, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

type ArticleProps = {
  fields: {
    title: Field<string>;
    description: Field<string>;
  };
};

const Article = (props: ArticleProps): JSX.Element => (
  <div>
    <Text field={props.fields.title} />
    <RichText field={props.fields.description} />
  </div>
);

export default Article;`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(exampleCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("copy failed", err);
    }
  };
  return (
    <div>
      <div className="mt-3">
        <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="text-2xl font-bold">Create the Component File (Next.js)</div>
          <div className="mt-2 text-slate-700">
            Add a simple Next.js component for the Sitecore rendering:
            <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
              <li>Go to <code>book-shop/src/components/</code>.</li>
              <li>Create a new file named <code>Article.tsx</code>.</li>
              <li>Paste the example code below into that file.</li>
            </ul>

            <div className="mt-3 rounded bg-slate-950 w-3/5">
              <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
                <div className="text-sm text-slate-200">book-shop/src/components/Article.tsx</div>
                <button
                  type="button"
                  onClick={copyCode}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm font-medium text-slate-100 shadow-sm hover:bg-slate-700"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M16 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
                    <path d="M8 2H6a2 2 0 0 0-2 2v12" />
                  </svg>
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto p-4 text-sm text-slate-100"><code>{exampleCode}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
