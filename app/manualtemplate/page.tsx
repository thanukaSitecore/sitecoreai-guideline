"use client"
import CreateSite from "@/components/createsite";
import CreateSitecoreTemplate from "@/components/createSitecoreTemplate";
import CreateNextjsTemplate from "@/components/createNextjsTemplate";


export default function manualtemplate() {
    return (
    <div>
        <CreateSite />      
        <CreateSitecoreTemplate />
        <CreateNextjsTemplate />
    </div>);
}