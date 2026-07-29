"use client";
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
            Day 01
            <span className="text-xs">▼</span>
          </button>

          {/* Dropdown Menu - Hidden by default, shown on group-hover */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 shadow-xl rounded-md py-2 w-48">
            <Link
              href="/Day1/login"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Step 1 : Login and Setup
            </Link>
            <Link
              href="/Day1/createTemplate"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Step 2 : Setup Local Environment
            </Link>
              <Link
              href="/Day1/manualtemplate"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Step 3 : Create Site and Template
            </Link>
            
            <Link
              href="/Day1/DataTemplateExercise"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Step 4 : Data Template Exercise
            </Link>
          </div>
        </div>
        <div className="group relative">
          <button className="hover:text-blue-600 flex items-center gap-1">
            Day 02
            <span className="text-xs">▼</span>
          </button>

          {/* Dropdown Menu - Hidden by default, shown on group-hover */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 shadow-xl rounded-md py-2 w-48">
            
            <Link
              href="/Day2/PageBuild"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Step 1 : Page Builder
            </Link>
             <Link
              href="/Day2/Forms"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Step 2 : Web Hooks and Forms
            </Link>

            <Link href="/Day2/Vercel" className="block px-4 py-2 hover:bg-gray-100">
              Step 3 : Vercel Deployment
            </Link>
            <Link href="/Day2/Day2Exercise" className="block px-4 py-2 hover:bg-gray-100">
              Step 4 : Day 2 Exercise
            </Link>           
            <Link
              href="/Day2/GraphQL"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Step 5 : GraphQL
            </Link>            
          </div>
        </div>
        <div className="group relative">
          <button className="hover:text-blue-600 flex items-center gap-1">
            Bonus
            <span className="text-xs">▼</span>
          </button>

          {/* Dropdown Menu - Hidden by default, shown on group-hover */}
          <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 shadow-xl rounded-md py-2 w-48">
                        
            <Link
              href="/Day2/Workflow"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Workflow
            </Link>                       
          </div>
        </div>
      </div>
    </nav>
  );
}
