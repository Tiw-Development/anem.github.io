


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
        const haveRendezVous = data.haveRendezVous;

        if (havePreInscription && preInscriptionId) {
            const url2 = `https://ac-controle.anem.dz/AllocationChomage/api/PreInscription/GetPreInscription?Id=${preInscriptionId}`;
            const response2 = await axios.get(url2);
            const data2 = response2.data;

            const structureId = data2.structureId;
            if (structureId) {
                const url3 = `https://ac-controle.anem.dz/AllocationChomage/api/RendezVous/GetAvailableDates?StructureId=${structureId}&PreInscriptionId=${preInscriptionId}`;
                const response3 = await axios.get(url3);
                const data3 = response3.data;

                const availableDates = data3.dates || [];
                if (availableDates.length > 0) {
              
                    document.getElementById("message").textContent = `تم العثور على ${availableDates.length} مواعيد متاحة.`;
                    document.getElementById("notify").style.display = "block";
                } else {
                    document.getElementById("message").textContent = "لا توجد مواعيد متاحة.";
                    document.getElementById("notify").style.display = "block";
                    document.getElementById("NumWassit").value = "";
                    document.getElementById("natNumID").value = "";
                }
            } else {
                document.getElementById("message").textContent = "حدث مشكلة ما , حاول مرة اخرى !";
                document.getElementById("notify").style.display = "block";
            }
        } else {
            document.getElementById("message").textContent = "الرجاء إدخال معلومات صحيحة!";
            document.getElementById("notify").style.display = "block";
        }
    } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error);
        document.getElementById("message").textContent = "حدث خطأ في الاتصال بالخادم.";
        document.getElementById("notify").style.display = "block";
    }

    // إخفاء الإشعار بعد 5 ثوانٍ
    setTimeout(function() {
        document.getElementById("notify").style.display = "none";
    }, 5000);
});

