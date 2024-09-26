<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>فحص مواعيد</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
    <div class="page-border">
        <div class="switch-container">
            <label class="switch">
                <input type="checkbox" id="theme-toggle">
                <span class="slider">
                    <i class="fa-solid fa-sun icon"></i>
                    <i class="fa-solid fa-moon icon"></i>
                </span>
            </label>
        </div>
    </div>
    <div class="login-container">
       
        <div class="loginFormCont">
            <div class="login-border">
                <h2>التسجيل</h2>
            </div>
            <form id="loginForm">
                <div class="input-group">
                    <label for="NumWassit">رقم بطاقة طالب العمل</label>
                    <input type="text" id="NumWassit" name="NumWassit" placeholder="رقم بطاقة طالب العمل" required>
                </div>
                <div class="input-group">
                    <label for="natNumID">رقم التعريف الوطني / رقم بطاقة التعريف</label>
                    <input type="text" id="natNumID" name="natNumID" placeholder="رقم التعريف الوطني / رقم بطاقة التعريف" required>
                </div>
                <div id="notify-login">
                    <p id="message-login"></p>
                </div>
                <button class="envoyebtn" type="submit">إرسـال</button>
            </form>
        </div>
    </div>
    

    <div class="info-container" style="display:none;">
        <div class="info-border">
          <h2>معلوماتك</h2>
        </div>
        <div id="notify-checked">
            <p id="message-checked"></p>
        </div>
        <div class="info-table-border">
        <table class="info-table">
            <tbody class="info-table-body">
              <tr>
                <td>اللقب </td>
                <td id="displayNom"></td>
              </tr>
              <tr>
                <td>الاسم </td>
                <td id="displayPrenom"></td>
              </tr>
              <tr>
                <td>رقم بطاقة طالب العمل</td>
                <td id="displayNatNumID"></td>
              </tr>
              <tr>
                <td>المقابلة مبرمجة على مستوى وكالة	</td>
                <td id="displayAgence"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="notify-info">
            <p id="message-info"></p>
        </div>
        <div id="notify-info-info">
            <p id="message-info-info" style="margin-block-end: -0.6em;"></p>
        </div>
        <button class="checkRend">ابدا البحث</button>
        <button class="HideInfo">إخفاء معلوماتي</button>
        <button class="logout">تسجيل الخروج</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
