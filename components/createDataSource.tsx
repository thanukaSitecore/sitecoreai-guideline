import ImgeCollapsible from "./imgeCollapsible";
export default function CreateDataSource() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="mt-2">
          <span className="text-2xl font-bold">
            Create Data Source in Sitecore (Content Editor)
          </span>
        </div>
        <div>
          <ul className="list-decimal list-inside mt-2 space-y-2 text-slate-700">
            <li>
              Go to{" "}
              <code>/sitecore/content/Your Tenant/Your Site/Home/Data</code>.
            </li>
            <li>
              Insert your Template (e.g.{" "}
              <span className="font-semibold">Article</span>)
            </li>
            <li>
              Please fill in the fields as you wish.
              <div>
                <ImgeCollapsible
                  imgscr="/media/HomeDataSource.jpg"
                  alttext="Home Data Source"
                />
              </div>
            </li>
            <li>Save the data.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
