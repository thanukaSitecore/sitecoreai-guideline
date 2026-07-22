import ImgeCollapsible from "./imgeCollapsible";
export default function CreateDataSource() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            Map Data Source to Home Page (Content Editor)
          </span>
        </div>
        <div>
          <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
            <li>
              Click Home.
            </li>
            <li>
              Goto Presentation {'>'} Deatils {'>'} FINAL Layout {'>'} Select the layout (e.g. <span className="font-semibold">Default</span>) and click Edit.
            </li>
            <li>
              Controls {'>'} Add Rendering {'>'} Select the rendering (e.g. <span className="font-semibold">Article</span>) and click Add.        
            </li>
            <li>Edit {'>'} Set the Datasource and Placesholder (headless-main) for the rendering. 
                <div>
                <ImgeCollapsible
                  imgscr="/media/MapDataSource.jpg"
                  alttext="Home Data Source"
                />
              </div>
            </li>
            <li>Refresh your nextjs application which is running on localhost</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
