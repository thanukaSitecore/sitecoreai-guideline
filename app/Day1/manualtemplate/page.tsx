"use client"

import CreateSitecoreTemplate from "@/components/createSitecoreTemplate";
import CreateNextjsTemplate from "@/components/createNextjsTemplate";
import CreateDataSource from "@/components/MapDataSource";
import MapDataSource from "@/components/MapDataSource";


export default function manualtemplate() {
    return (
    <div>
             
        <CreateSitecoreTemplate />
        <CreateNextjsTemplate />
         <CreateDataSource />
              <MapDataSource />
    </div>);
}