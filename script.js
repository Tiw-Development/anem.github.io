const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = document.querySelector('.icon');
const info = document.querySelector('.info-container');
const login = document.querySelector('.login-container');
const rows = document.querySelectorAll('.info-table tr');


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    info.classList.add('container-dark');
    login.classList.add('container-dark');
    themeToggle.checked = true;
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    
    rows.forEach(row => {
    
        const firstCell = row.querySelector('td:first-child');
        const lastCell = row.querySelector('td:last-child');
        if (firstCell && lastCell) {
            firstCell.style = 'background-color: rgb(60 139 117 / 42%); color: #ffffffc7'; 
            lastCell.style = 'background-color: rgb(28 28 28); color: #ffffffc7'; 
        }
    });
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        info.classList.add('container-dark');
        login.classList.add('container-dark');

    rows.forEach(row => {
    
        const firstCell = row.querySelector('td:first-child');
        const lastCell = row.querySelector('td:last-child');
        if (firstCell && lastCell) {
            firstCell.style = 'background-color: rgb(60 139 117 / 42%); color: #ffffffc7'; 
            lastCell.style = 'background-color: rgb(28 28 28); color: #ffffffc7'; 
        }
    });
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        login.classList.add('container-dark');
    } else {
        body.classList.remove('dark-mode');
        info.classList.remove('container-dark');
        login.classList.remove('container-dark');


        rows.forEach(row => {
    
            const firstCell = row.querySelector('td:first-child');
            const lastCell = row.querySelector('td:last-child');
            if (firstCell && lastCell) {
                firstCell.style = 'background-color: #dbdbdb; color: #519985'; 
                lastCell.style = 'background-color: #fff; color: #0a0a0ac7'; 
            }
        });
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

function checkSession() {
    const storedNumWassit = localStorage.getItem('NumWassit');
    const storedNatNumID = localStorage.getItem('natNumID');

    if (storedNumWassit && storedNatNumID) {

        document.querySelector('.info-container').style.display = 'block';
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById("displayNom").textContent = localStorage.getItem('Nom');
        document.getElementById("displayPrenom").textContent = localStorage.getItem('Prenom');
        document.getElementById("displayNatNumID").textContent = storedNumWassit;
        document.getElementById("displayAgence").textContent = localStorage.getItem('Agence');
    }
}


checkSession();

async function checkRendeVous() {
    const storedStructureid = localStorage.getItem('structureIdStored');
    const storedPreInscriptionId = localStorage.getItem('preInscriptionIdStored');

    const Url_dates = `https://ac-controle.anem.dz/AllocationChomage/api/RendezVous/GetAvailableDates?StructureId=${storedStructureid}&PreInscriptionId=${storedPreInscriptionId}`;
    
    try {
        const response = await axios.get(Url_dates);
        const Data = response.data;

        
        if (Data && Data.dates) {
            const availableDates = Data.dates || [];
            if (availableDates.length > 0) {
                document.getElementById("message-checked").textContent = `تم العثور على 📅 ${availableDates.length} مواعيد متاحة ☑️ `;
                document.getElementById("displayAgence").style = "background-color: #3cff1847; color: rgba(255, 255, 255, 0.78)";
                document.getElementById("notify-checked").style.display = "block";
            } else {
                document.getElementById("message-info").textContent = "لا توجد مواعيد متاحة.";
                document.getElementById("notify-info").style.display = "block";
                document.getElementById("displayAgence").style = "background-color: #ff00003d; color: rgba(255, 255, 255, 0.78)";
            }
        } else {
            document.getElementById("message-info").textContent = "لا توجد بيانات متاحة.";
            document.getElementById("notify-info").style.display = "block";
            document.getElementById("displayAgence").style = "background-color: #ff00003d; color: rgba(255, 255, 255, 0.78)";
        }
    } catch (error) {
        console.error("حدث خطأ أثناء جلب المواعيد:", error);
        document.getElementById("message-info").textContent = "حدث خطأ في الاتصال بالخادم.";
        document.getElementById("notify-info").style.display = "block";
    }
}


document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    var NumWassit = document.getElementById("NumWassit").value;
    var natNumID = document.getElementById("natNumID").value;

    const url = `https://ac-controle.anem.dz/AllocationChomage/api/validateCandidate/query?wassitNumber=${NumWassit}&identityDocNumber=${natNumID}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        const preInscriptionId = data.preInscriptionId;
        const havePreInscription = data.havePreInscription;

        if (havePreInscription && preInscriptionId) {
            const url2 = `https://ac-controle.anem.dz/AllocationChomage/api/PreInscription/GetPreInscription?Id=${preInscriptionId}`;
            const response2 = await axios.get(url2);
            const data2 = response2.data;
            const Nom = data2.nomDemandeurAr;
            const Prenom = data2.prenomDemandeurAr;
            const Agence = data2.structureAr;

           
            localStorage.setItem('NumWassit', NumWassit);
            localStorage.setItem('natNumID', natNumID);
            localStorage.setItem('Nom', Nom);
            localStorage.setItem('Prenom', Prenom);
            localStorage.setItem('Agence', Agence);

            
            document.querySelector('.info-container').style.display = 'block';
            document.querySelector('.login-container').style.display = 'none';
            document.getElementById("displayNom").textContent = Nom;
            document.getElementById("displayPrenom").textContent = Prenom;
            document.getElementById("displayNatNumID").textContent = NumWassit;
            document.getElementById("displayAgence").textContent = Agence;

            const structureId = data2.structureId;
            if (structureId) {
                const url3 = `https://ac-controle.anem.dz/AllocationChomage/api/RendezVous/GetAvailableDates?StructureId=${structureId}&PreInscriptionId=${preInscriptionId}`;
                const response3 = await axios.get(url3);
                const data3 = response3.data;
                localStorage.setItem('structureIdStored', structureId);
                localStorage.setItem('preInscriptionIdStored', preInscriptionId);
                const availableDates = data3.dates || [];
                if (availableDates.length > 0) {
                    document.getElementById("message-info").textContent = `تم العثور على ${availableDates.length} مواعيد متاحة.`;
                    document.getElementById("notify-info").style.display = "block";
                } else {
                    document.getElementById("message-info").textContent = "لا توجد مواعيد متاحة.";
                    document.getElementById("notify-info").style.display = "block";
                }
            } else {
                document.getElementById("message-login").textContent = "حدث مشكلة ما , حاول مرة اخرى !";
                document.getElementById("notify-login").style.display = "block";
                localStorage.clear();
                document.querySelector('.info-container').style.display = 'none';
                document.querySelector('.login-container').style.display = 'block';
            }
        } else {
            document.getElementById("message-login").textContent = "الرجاء إدخال معلومات صحيحة!";
            document.getElementById("notify-login").style.display = "block";
        }
    } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
        document.getElementById("message-login").textContent = "حدث خطأ في الاتصال بالخادم.";
        document.getElementById("notify-login").style.display = "block";
    }

    setTimeout(function() {
        document.getElementById("notify-login").style.display = "none";
    }, 8000);
});


let infoVisible = true; 
let searching  = true;
let intervalId; 
let countdownInterval;
let searchCount = 0;
let countdown = 20; 

function updateCountdown() {
    document.getElementById("message-info-info").innerHTML = `الوقت المتبقي للبحث ${countdown} ثانية<br>تم البحث عن المواعيد ${searchCount} مرة`;
    document.getElementById("notify-info-info").style.display = "block";
    countdown--;

    if (countdown < 0) {
        countdown = 20;
        searchCount++;
        document.getElementById("message-info-info").innerHTML = `الوقت المتبقي للبحث ${countdown} ثانية <br>تم البحث عن المواعيد ${searchCount} مرة`;
        document.getElementById("notify-info-info").style.display = "block";
        checkRendeVous();
    }
}

document.querySelector('.HideInfo').addEventListener('click', function() {
    if (infoVisible) {

        document.getElementById("displayNom").textContent = "مخفي";
        document.getElementById("displayPrenom").textContent = "مخفي";
        document.getElementById("displayNatNumID").textContent = "مخفي";
        document.querySelector('.HideInfo').textContent = 'إظهار معلوماتي';
        document.querySelector('.HideInfo').style = 'background-color: rgb(205 42 42)';
    } else {

        document.getElementById("displayNom").textContent = localStorage.getItem('Nom');
        document.getElementById("displayPrenom").textContent = localStorage.getItem('Prenom');
        document.getElementById("displayNatNumID").textContent = localStorage.getItem('NumWassit');
        document.querySelector('.HideInfo').textContent = 'إخفاء معلوماتي';
        document.querySelector('.HideInfo').style = 'background-color: #0c38b5de';
    }


    infoVisible = !infoVisible;
});


document.querySelector('.logout').addEventListener('click', function() {
    localStorage.clear();
    document.querySelector('.info-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.querySelector('.checkRend').addEventListener('click', function() {
    if (searching) {
        document.querySelector('.checkRend').textContent = 'اوقف البحث عن مواعيد';
        document.querySelector('.checkRend').style = 'background-color: rgb(205 42 42)';
        intervalId = setInterval(checkRendeVous, 20000);
        countdownInterval = setInterval(updateCountdown, 1000);

    } else {
        clearInterval(intervalId);
        clearInterval(countdownInterval);
        document.querySelector('.checkRend').textContent = 'ابدا البحث عن مواعيد';
        document.querySelector('.checkRend').style = 'background-color: rgb(34 179 65)';
        document.getElementById("notify-info").style.display = "none";
        countdown = 20; 
        searchCount = 0
        document.getElementById("message-info-info").innerHTML = `الوقت المتبقي للبحث ${countdown} ثانية <br>تم البحث عن المواعيد ${searchCount} مرة`;
    }

    searching  = !searching ;
});


checkSession();
