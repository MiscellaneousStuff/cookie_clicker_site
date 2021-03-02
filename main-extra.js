const $ = id => { return document.getElementById(id) };

let possibleTabs = ["main", "info", "store"];
let possibleTabIds = {"main": "sectionLeft", "info": "sectionMiddle", "store": "sectionRight"};
let activeTab = "main";

const mainExtraInit = () => {
    $("page-tabs__tab_main").addEventListener("click", () => {
        handleTabSwitch("main");
    });

    $("page-tabs__tab_info").addEventListener("click", () => {
        handleTabSwitch("info");
    });

    $("page-tabs__tab_store").addEventListener("click", () => {
        handleTabSwitch("store");
    });

    // DEBUG: Display store first
    handleTabSwitch("store");
}

const handleTabSwitch = tab => {
    if (tab != activeTab) {
        // Firstly make the target tab visible
        $(possibleTabIds[tab]).classList.add("section--visibility-visible");
        $(possibleTabIds[tab]).classList.remove("section--visibility-hidden");

        // Make the remaining tabs invisible
        let remainingTabs = [...possibleTabs].filter(t => t != tab);
        remainingTabs.forEach(tab => {
            $(possibleTabIds[tab]).classList.remove("section--visibility-visible");
            $(possibleTabIds[tab]).classList.add("section--visibility-hidden");
        });
        activeTab = tab;
    }
}