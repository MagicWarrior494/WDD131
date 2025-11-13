function AddEventListenertoAdd() {
    document.getElementById("add").addEventListener("click", function(event) {
        let participantCount = document.getElementsByClassName("participants")[0].querySelectorAll("section").length + 1;;
        console.log(participantCount);
        let newParticipant = participantTemplate(participantCount);
        console.log(newParticipant);
        document.getElementById("add").insertAdjacentHTML("beforebegin", newParticipant);
    });
}

document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault();
        console.log("submit");
        
        let participantCount = document.getElementsByClassName("participants")[0].querySelectorAll("section").length + 1;
        let summary = document.getElementById("summary");

        const name = document.getElementById("adult_name").value;
        let fees = 0;
        for (let i = 1; i < participantCount; i++) {
            fees += document.getElementById("fee" + i).valueAsNumber;
        }
        let p = document.createElement("p");
        p.innerText = 'Thank you ' + name + ' for registering. You have registered ' + (participantCount - 1) + ' participants and owe ' + fees +  ' in Fees.';

        summary.appendChild(p);

        document.getElementsByTagName("form")[0].style.display = "none";
});


function participantTemplate(count) {
    let template = document.getElementsByClassName("participant1")[0].outerHTML;
    template = template.replaceAll("participant1", "participant" + count);
    template = template.replaceAll("Participant 1", "Participant " + count);
    template = template.replaceAll("fname1", "fname" + count);
    template = template.replaceAll("activity1", "activity" + count);
    template = template.replaceAll("fee1", "fee" + count);
    template = template.replaceAll("date1", "date" + count);
    console.log(template);
    return template;
} 


AddEventListenertoAdd();