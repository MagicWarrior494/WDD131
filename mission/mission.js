selectElement = document.querySelector("select");

function changeTheme(){
if(selectElement.value === "dark") {
        document.body.classList.add("dark");
        document.querySelector("img").src = "res/byui-logo_dark.png";
        document.querySelector("img").alt = "Byui dark Logo";
    } else {
        document.body.classList.remove("dark");
        document.querySelector("img").src = "res/byui-logo_blue.webp";
        document.querySelector("img").alt = "Byui light Logo";
    }
}

selectElement.addEventListener("change", changeTheme);