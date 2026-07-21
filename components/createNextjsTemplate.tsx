"use client";
export default function CreateSitecoreTemplate() {
  return (
    <div>
      <div className="mt-3">
        <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="text-2xl font-bold">Create the Component File (Nextjs)</div>
          <div className="mt-2">
            <ul className="list-decimal list-inside mt-2">
              <li>
                CNavigate to your project folder: book-shop/src/components/
              </li>
              <li>Create a new file and name it Article.tsx</li>
              <li>
                Paste the following code into
                book-shop/src/components/Article.tsx
              </li>

              <pre className="overflow-x-auto rounded bg-slate-100 p-4 text-sm">
                <code>
                  {`import { Field, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

type ArticleProps = {
  fields: {
    title: Field<string>,
    description: Field<string>  
  };
}

const Article = (props: ArticleProps): JSX.Element => (
  <div>
    <Text field={props.fields.title} />
    <RichText field={props.fields.description} />
  </div>
);

export default Article;`}
                </code>
              </pre>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
