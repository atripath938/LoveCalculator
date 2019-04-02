function setUserType(numberOfVisits) {

    switch (numberOfVisits) {

        case 0:
            localStorage.setItem("visitCounts", "0");
            setPageAsPerCounts();
            break;
        case 1:
            localStorage.setItem("visitCounts", "1");
            setPageAsPerCounts();
            break;
        case 3:
            localStorage.setItem("visitCounts", "3");
            setPageAsPerCounts();
            break;
        case 7:
            localStorage.setItem("visitCounts", "7");
            setPageAsPerCounts();
            break;
        case 11:
            localStorage.setItem("visitCounts", "11");
            setPageAsPerCounts();
            break;

    }

    document.getElementById("DisplayVisit").innerHTML =
        "&nbsp&nbsp&nbspVisit count set to: " + localStorage.getItem("visitCounts");

}

function setPageAsPerCounts() {

    let numberOfVisits = localStorage.getItem("visitCounts");

    switch (numberOfVisits) {

        case "0":
            CoachHis();
            document.getElementById("exposeAdv").style.visibility = "hidden";
            document.getElementById("PopOver").style.visibility = "hidden";
            document.getElementById("MoreInfoBTN").style.visibility = "hidden";
            document.getElementById("SettingsBTN").style.visibility = "hidden";
            document.getElementById("wizardButton").style.visibility = "visible";
            document.getElementById("DefaultValuesBTN").style.visibility = "hidden";
            document.getElementById("FeaturedContent").style.visibility = "hidden";
            document.getElementById("ProgressBar").style.visibility = "hidden";
            document.getElementById("nextStep").style.visibility = "hidden";
            break;
        case "1":
            document.getElementById("exposeAdv").style.visibility = "visible";
            document.getElementById("PopOver").style.visibility = "hidden";
            document.getElementById("MoreInfoBTN").style.visibility = "hidden";
            document.getElementById("SettingsBTN").style.visibility = "hidden";
            document.getElementById("wizardButton").style.visibility = "visible";
            document.getElementById("DefaultValuesBTN").style.visibility = "hidden";
            document.getElementById("FeaturedContent").style.visibility = "hidden";
            document.getElementById("ProgressBar").style.visibility = "hidden";
            document.getElementById("nextStep").style.visibility = "hidden";
            break;
        case "3":
            document.getElementById("MoreInfoBTN").style.visibility = "visible";
            document.getElementById("exposeAdv").style.visibility = "visible";
            document.getElementById("wizardButton").style.visibility = "hidden";
            document.getElementById("SettingsBTN").style.visibility = "hidden";
            document.getElementById("maleName").title = "";
            document.getElementById("femaleName").title = "";
            document.getElementById("PopOver").style.visibility = "visible";
            document.getElementById("DefaultValuesBTN").style.visibility = "visible";
            document.getElementById("FeaturedContent").style.visibility = "hidden";
            document.getElementById("ProgressBar").style.visibility = "visible";
            document.getElementById("nextStep").style.visibility = "visible";
            break;
        // case "7":
        //     document.getElementById("MoreInfoBTN").style.visibility = "visible";
        //     document.getElementById("exposeAdv").style.visibility = "visible";
        //     document.getElementById("wizardButton").style.visibility = "hidden";
        //     document.getElementById("SettingsBTN").style.visibility = "hidden";
        //     document.getElementById("PopOver").style.visibility = "visible";
        //     document.getElementById("DefaultValuesBTN").style.visibility = "visible";
        //     document.getElementById("FeaturedContent").style.visibility = "hidden";
        //     document.getElementById("ProgressBar").style.visibility = "visible";
        //     document.getElementById("nextStep").style.visibility = "hidden";
        //     break;
        case "11":
            document.getElementById("MoreInfoBTN").style.visibility = "visible";
            document.getElementById("exposeAdv").style.visibility = "visible";
            document.getElementById("wizardButton").style.visibility = "hidden";
            document.getElementById("SettingsBTN").style.visibility = "visible";
            document.getElementById("PopOver").style.visibility = "visible";
            document.getElementById("maleName").title = "";
            document.getElementById("femaleName").title = "";
            document.getElementById("DefaultValuesBTN").style.visibility = "visible";
            document.getElementById("FeaturedContent").style.visibility = "visible";
            document.getElementById("ProgressBar").style.visibility = "visible";
            document.getElementById("nextStep").style.visibility = "visible";
            break;

    }

}

function CalculateResult() {

    let hisName = document.getElementById("maleName").value;
    let herName = document.getElementById("femaleName").value;

    let hisDOB = document.getElementById("hisdob").value;
    let herDOB = document.getElementById("herdob").value;

    let percentage = 0;

    if (hisName !== "" && herName !== "" &&
        ((document.getElementById("NameOnly").checked ||
            document.getElementById("BothValues").checked) ||
            (!document.getElementById("NameOnly").checked &&
                !document.getElementById("BothValues").checked &&
                !document.getElementById("DOBOnly").checked))) {

        hisName = hisName.toLowerCase();
        herName = herName.toLowerCase();

        let hisNameArr = hisName.split("");
        let match = 0;
        let doneWith = "";

        for (let i = 0; i < hisNameArr.length; i++) {

            if (herName.includes(hisNameArr[i]) && !doneWith.includes(hisNameArr[i])) {

                match += hisName.split(hisNameArr[i]).length + herName.split(hisNameArr[i]).length - 2;
                doneWith += hisNameArr[i];

            }

        }

        percentage = match / (hisName.length + herName.length);

        percentage *= 100;

    }

    if (hisDOB !== "" && herDOB !== "" &&
        ((document.getElementById("DOBOnly").checked ||
            document.getElementById("BothValues").checked) ||
            (!document.getElementById("NameOnly").checked &&
                !document.getElementById("BothValues").checked &&
                !document.getElementById("DOBOnly").checked))) {

        let hisdobArr = hisDOB.split("");
        let herdobArr = herDOB.split("");

        let ageSum = 0;

        for (let i = 0; i < hisdobArr.length; i++)
            ageSum += Number(hisdobArr[i]) + Number(herdobArr[i]);

        if (ageSum > 100)
            ageSum = 100;

        if (percentage !== 0)
            percentage = ((percentage) + ageSum) / 2;

        else
            percentage = ageSum;

    }

    if (!isNaN(percentage)) {
        document.getElementById("results").innerHTML = "Your match percentage is: " + percentage.toFixed(3);
        document.getElementById("nextStep").innerHTML = "You could get a different perspective by visiting:" +
            " https://www.calculator.net/love-calculator.html";
    }

    resetFields();

    document.getElementById("CalcCoach").style.visibility = "hidden";

}

function ExposeAdv() {

    if (document.getElementById("exposeAdv").innerText == "Use DOB") {

        document.getElementsByClassName("Advanced")[0].style.visibility = "visible";
        document.getElementsByClassName("Advanced")[1].style.visibility = "visible";
        document.getElementById("exposeAdv").innerText = "Hide DOB";

    } else {

        document.getElementsByClassName("Advanced")[0].style.visibility = "hidden";
        document.getElementsByClassName("Advanced")[1].style.visibility = "hidden";
        document.getElementById("exposeAdv").innerText = "Use DOB";

    }

}

function resetFields() {

    document.getElementById("maleName").value = "";
    document.getElementById("femaleName").value = "";
    document.getElementById("hisdob").value = "";
    document.getElementById("herdob").value = "";

}

function ShowHelp() {

    alert("Enter the Guy's name in the first text box and gal's name in the second text box.");

}

function Settings() {

    document.getElementById("setting").style.visibility = "visible";

}

function SimpleCalc() {

    document.getElementById("maleName").style.visibility = "hidden";
    document.getElementById("femaleName").style.visibility = "hidden";
    document.getElementById("exposeAdv").style.visibility = "hidden";
    document.getElementById("SimpleOptions").style.visibility = "visible";
    document.getElementById("FirstDOB").style.visibility = "hidden";
    document.getElementById("SecondDOB").style.visibility = "hidden";

}

function CalculateSimple() {

    let his = document.getElementById("hisAge").value;
    let her = document.getElementById("herAge").value;

    let hisArr = his.split("");
    let herArr = her.split("");

    let ageSum = 0;

    for (let i = 0; i < hisArr.length; i++)
        ageSum += Number(hisArr[i]) + Number(herArr[i]);

    if (ageSum > 100)
        ageSum = 100;

    document.getElementById("results").innerHTML = "Your match percentage is: " + ageSum;

}

function CoachHis() {

    document.getElementById("hisCoach").style.visibility = "visible";

}

function initializeCounter() {

    if (localStorage.getItem("visitCounts") === null) {

        localStorage.setItem("visitCounts", "0");
        localStorage.setItem("MaleNames", "");
        localStorage.setItem("FemaleNames", "");

    } else {

        let count = parseInt(localStorage.getItem("visitCounts"));
        count++;
        localStorage.setItem("visitCounts", count + "");

    }

    setPageAsPerCounts();

}

function CoachHer() {

    if (localStorage.getItem("visitCounts") == "0") {
        document.getElementById("hisCoach").style.visibility = "hidden";
        document.getElementById("herCoach").style.visibility = "visible";
    }

}

function CoachCalc() {

    if (localStorage.getItem("visitCounts") == "0") {
        document.getElementById("herCoach").style.visibility = "hidden";
        document.getElementById("CalcCoach").style.visibility = "visible";
    }

}

function ExposeDetails() {

    document.getElementById("MoreInfoTXT").style.visibility = "visible";

}

function enterDefaultValues() {

    document.getElementById("maleName").value = "Fname Lname";
    document.getElementById("femaleName").value = "Fname Lname";

}

function ProgressBar() {

    let hisNameVisibility = window.getComputedStyle(document.getElementById("maleName"));

    let val = [0, 0, 0, 0];

    if (hisNameVisibility.visibility !== 'hidden') {
        let hisName = document.getElementById("maleName").value;
        let herName = document.getElementById("femaleName").value;

        if (hisName !== "")
            val[0] = 1;
        if (herName !== "")
            val[1] = 1;

        document.getElementById("ProgressBar").max = "2";
        let sum = val[0] + val[1] + val[2] + val[3];
        document.getElementById("ProgressBar").value = sum + "";

    }

    let hisdobVisibility = window.getComputedStyle(document.getElementById("hisdob"));
    if (hisdobVisibility.visibility !== "hidden") {

        let hisDOB = document.getElementById("hisdob").value;
        let herDOB = document.getElementById("herdob").value;

        if (hisDOB !== "")
            val[2] = 1;
        if (herDOB !== "")
            val[3] = 1;

        document.getElementById("ProgressBar").max = "4";
        let sum = val[0] + val[1] + val[2] + val[3];
        document.getElementById("ProgressBar").value = sum + "";

    }
}