"use client"
import SetupRepository from "@/components/setupRepository";
import EnvironmentVariables from "@/components/environmentVariables";
import CreateSite from "@/components/createsite";
export default function CreateTemplate() {
    return (
    <div>
        <SetupRepository />
        <EnvironmentVariables />
<CreateSite /> 
    </div>);
}