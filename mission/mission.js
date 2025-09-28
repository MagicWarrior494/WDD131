selectElement = document.querySelector("select");

function changeTheme(){
if(selectElement.value === "dark") {
        document.body.classList.add("dark");
        document.querySelector("img").src = "res/byui-logo_dark.png";
    } else {
        document.body.classList.remove("dark");
        document.querySelector("img").src = "res/byui-logo_blue.webp";
    }
}

selectElement.addEventListener("change", changeTheme);