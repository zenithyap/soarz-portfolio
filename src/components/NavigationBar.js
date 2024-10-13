import Dropdown from "./Dropdown";

export default function NavigationBar() {
    return (
        <div className="flex flex-row justify-center absolute z-10 w-screen select-none font-sans font-semibold">
            <div className="flex gap-10 p-5">
                <Dropdown/>
                <div className="p-2 hover: cursor-pointer">
                    Education
                </div>
            </div>
        </div>
    );
};