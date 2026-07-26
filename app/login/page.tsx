"use client";
import CreateNewProject from "@/components/createNewProject";
import ConfigurEditingHost from "@/components/ConfigurEditingHost";
import ReviewAndDeploy from "@/components/reviewAndDeploy";
import ImgCarousel from "@/components/imgCarousel";

const slides = [
  { src: "/Media/loginscreen.jpg", alt: "Login screen" },
  { src: "/Media/HomeScreen.jpg", alt: "Home screen" },
];

export default function LoginPage() {

  return (
    <main style={{ padding: "2rem" }}>
      <div className="grid rounded-lg grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 bg-white shadow-sm p-4">
        <div className="p-4  ">
          <div className="mt-6">
            <span className="text-2xl font-bold">
              1: Log in with credentials
            </span>
          </div>
          <div>
            <span>
              Log in through the{" "}
              <a
                href="https://portal.sitecorecloud.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Sitecore Cloud Portal
              </a>{" "}
              using your organizational credentials.
            </span>
          </div>
          <div className="mt-6">
            <span className="text-2xl font-bold mt-2">Optional</span>
          </div>
          <div>
            <span>
              No account yet?
              <a
                href="https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/join-a-sitecore-cloud-portal-organization.html#sign-up-for-a-sitecore-cloud-portal-account"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Sign up
              </a>{" "}
              for one to continue to Sitecore Cloud Portal.
            </span>
          </div>
          <div className="mt-6">
            <span className="text-2xl font-bold pt-1">
              Choose your instance
            </span>
          </div>
          <div>
            <span>
              If you have more that one instance, choose the one you want to
              work on.
            </span>
          </div>
          <div className="mt-6">
            <span className="text-2xl font-bold pt-1">
              Navigate the workspace
            </span>
          </div>
          <div>
            <span>
             Navigate to your workspace.
            </span>
          </div>
        </div>

        <div className="w-full lg:sticky lg:top-10">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <ImgCarousel slides={slides} />
          </div>
        </div>
      </div>

      <CreateNewProject />
      <ConfigurEditingHost />
      <ReviewAndDeploy />
    </main>
  );
}
