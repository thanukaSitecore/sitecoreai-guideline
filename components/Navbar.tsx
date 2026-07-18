import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-blue-600 font-bold">
          Home
        </Link>

        {/* Dropdown Container */}
        <div className="group relative">
          <button className="hover:text-blue-600 flex items-center gap-1">
            Step
            <span className="text-xs">▼</span>
          </button>

          {/* Dropdown Menu - Hidden by default, shown on group-hover */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 shadow-xl rounded-md py-2 w-48">
            <Link
              href="/login"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Step 1
            </Link>
            <Link
              href="/services/mobile"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Mobile Apps
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
