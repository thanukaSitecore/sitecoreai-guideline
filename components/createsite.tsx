"use client";
import Image from "next/image";
import ImgeCollapsible from "@/components/imgeCollapsible";

export default function CreateSite() {
  return (
    <div className="mt-3">
      <div className="p-10 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="text-2xl font-bold">Create a site</div>
        <div className="mt-2">
          In Channels, you create a site from an existing site template by using
          the Create site flow or by duplicating an existing site, and adapting
          its content as needed.
        </div>
        <ul className="list-decimal list-inside mt-2">
          <li>In Channels, in the upper-right corner, click Create site.</li>
          <li>
            By default, the Create site dialog shows all the templates available
            to you to create a site.
            <div>
              <Image
                src="/Media/newchannels.jpg"
                alt="Set up project"
                width={800}
                height={300}
                className="w-full h-auto rounded-md border border-gray-600"
              />
            </div>
          </li>
          <li>
            For this exercise, we selected the
            <p className="font-bold"> &quot;Start from Scratch&quot; </p>{" "}
            option.
          </li>
          <li>Enter a name, and optionally a description for the website.</li>
          <li>
            <div>If you're creating a site from within an existing collection, ignore this step.</div>
            <ul>
              <li>
                In the Collection field, do one of the following:
                <ul className="list-circle list-inside">
                  <li>
                    Use the drop-down list to select an existing site
                    collection. To prevent inheritance issues in Sitecore AI,
                    all sites within a collection must use the same site
                    template. As a consequence, the existing collection list
                    only displays collections whose sites are based on the
                    chosen template.
                  </li>
                  <li>
                    Enter a name for a new collection and click Create [name of
                    collection].
                  </li>
                  <li>
                    <div className="relative w-full aspect-[3/1] rounded-md border border-gray-600 overflow-hidden">
                      <Image
                        src="/Media/CreateCollection.png"
                        alt="Set up project"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>To enable languages for your website, click the Languages field, then select all the languages you want</li>
          <li>Select the default language you want to use for your website.</li>
          <li>Click Create A progress indicator shows you when the process is complete. After the new site is created, it is shown in the chosen collection.</li>
        </ul>
        <div>
          <ImgeCollapsible imgscr="/Media/channelsData.jpg" alttext="Set up project" />
        </div>
      </div>{" "}
    </div>
  );
}
