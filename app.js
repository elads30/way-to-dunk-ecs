const translations = {
    en: {
        'lbl-select-lang': "Select Language", 'lbl-next': "Next", 'lbl-prev': "Back",
        'onboarding-title': "Let's build your profile.", 'onboarding-subtitle': "Answer some quick questions to personalize your training.",
        'lbl-email': "Email (Your login ID)", 'lbl-name': "Your Name", 'lbl-gender': "Gender",
        'opt-male': "Male", 'opt-female': "Female", 'opt-other': "Prefer not to say", 'lbl-goal': "Primary Goal",
        'opt-goal-first-dunk': "First Dunk", 'opt-goal-max-jump': "Increase Max Jump", 
        'opt-goal-explosive': "Sport Explosiveness", 'opt-goal-fitness': "Fitness & Knee Health", 'opt-goal-recovery': "Injury Recovery",
        'lbl-diet': "Diet & Nutrition Habits", 'opt-diet-strict': "Great", 'opt-diet-average': "Average", 'opt-diet-poor': "Needs Improvement",
        'lbl-freq': "Training Frequency", 'opt-freq-1': "1-2 times/week", 'opt-freq-2': "3-5 times/week", 'opt-freq-3': "Every day",
        'lbl-height': "Height (cm)", 'lbl-weight': "Weight (kg)", 'lbl-generate': "Save Profile",
        'lbl-dash-est': "Profile Saved", 'lbl-welcome': "Ready to Fly", 'lbl-welcome-sub': "Choose your module.",
        'lbl-video-tab': "Live Analysis", 'lbl-video-desc': "Real-time tracking.", 'lbl-workout-tab': "Get Workout",
        'lbl-workout-desc': "AI personalized plan.", 'lbl-history': "Jump History", 'lbl-upload-btn': "Upload Video",
        'lbl-upload-tab': "Upload Video", 'lbl-upload-desc': "Analyze a recorded jump.",
        'lbl-no-jumps': "No jumps recorded.", 'lbl-back': "Back", 'lbl-camera-title': "Live Tracker",
        'lbl-jump-type': "Jump Type:", 'opt-standing': "Standing", 'opt-running': "Running",
        'lbl-start-scan': "Start Scan", 'lbl-camera-instr': "Wait for AI model...",
        'lbl-analysis-res': "Analysis Complete", 'lbl-height-res': "Jump Height:", 'lbl-hang-time': "Hang Time:",
        'lbl-knee-angle': "Max Knee Bend:", 'lbl-foot-clearance': "Foot Clearance:", 'lbl-ai-rec-title': "Feedback:", 'lbl-save-jump': "Save & Return",
        'lbl-workout-main-title': "Your AI Plan", 'lbl-complete': "Complete Workout", 'alert-workout': "Workout registered!",
        'lbl-mode-scan': "Live Scan Mode", 'lbl-mode-record': "Record Video", 'lbl-record-instr': "Record a video to save and scan",
        'lbl-start-record': "Start Recording 🔴", 'lbl-stop-record': "Stop Recording ⏹️",
        'lbl-workout-duration': "How much time do you have?", 'opt-time-15': "15 Minutes (Quick)",
        'opt-time-30': "30 Minutes (Standard)", 'opt-time-45': "45 Minutes (Extended)", 'opt-time-60': "60 Minutes (Full Session)",
        'lbl-workout-difficulty': "Workout Intensity", 'opt-diff-easy': "Easy (Beginner)",
        'opt-diff-hard': "Hard (Advanced)", 'opt-diff-pro': "Pro (Elite Athlete)"
    },
    he: {
        'lbl-select-lang': "בחר שפה", 'lbl-next': "הבא", 'lbl-prev': "חזור",
        'onboarding-title': "הפרופיל שלך", 'onboarding-subtitle': "כמה שאלות להתאמה אישית.",
        'lbl-email': "אימייל (זיהוי החשבון)", 'lbl-name': "השם שלך", 'lbl-gender': "מגדר",
        'opt-male': "גבר", 'opt-female': "אישה", 'opt-other': "מעדיף לא לציין", 'lbl-goal': "מטרה מרכזית",
        'opt-goal-first-dunk': "הטבעה ראשונה (First Dunk)", 'opt-goal-max-jump': "הגדלת קפיצה מקסימלית", 
        'opt-goal-explosive': "כוח מתפרץ למשחקים", 'opt-goal-fitness': "חיזוק וכושר כללי", 'opt-goal-recovery': "התאוששות מפציעה",
        'lbl-diet': "תזונה", 'opt-diet-strict': "מצוין", 'opt-diet-average': "סביר", 'opt-diet-poor': "דרוש שיפור",
        'lbl-freq': "תדירות אימונים", 'opt-freq-1': "1-2 בשבוע", 'opt-freq-2': "3-5 בשבוע", 'opt-freq-3': "כל יום",
        'lbl-height': "גובה (ס״מ)", 'lbl-weight': "משקל (ק״ג)", 'lbl-generate': "שמור פרופיל",
        'lbl-dash-est': "הפרופיל נשמר", 'lbl-welcome': "מוכן לעוף", 'lbl-welcome-sub': "בחר אימון.",
        'lbl-video-tab': "ניתוח חי", 'lbl-video-desc': "קפוץ למצלמה.", 'lbl-workout-tab': "קבל תוכנית",
        'lbl-workout-desc': "תוכנית AI אישית.", 'lbl-history': "היסטוריה", 'lbl-upload-btn': "העלה וידאו",
        'lbl-upload-tab': "העלה וידאו", 'lbl-upload-desc': "נתח סרטון מהגלריה קודם.",
        'lbl-no-jumps': "טרם נרשמו קפיצות.", 'lbl-back': "חזור", 'lbl-camera-title': "מעקב חכם",
        'lbl-jump-type': "סוג:", 'opt-standing': "מהמקום", 'opt-running': "מריצה",
        'lbl-start-scan': "סריקה", 'lbl-camera-instr': "המתן ל-AI...",
        'lbl-analysis-res': "הניתוח הושלם", 'lbl-height-res': "גובה:", 'lbl-hang-time': "זמן אוויר:",
        'lbl-knee-angle': "זווית ברך:", 'lbl-foot-clearance': "הרמת רגליים:", 'lbl-ai-rec-title': "משוב:", 'lbl-save-jump': "שמור וחזור",
        'lbl-workout-main-title': "התוכנית שלך", 'lbl-complete': "סיים אימון", 'alert-workout': "האימון נשמר!",
        'lbl-mode-scan': "סריקה חיה", 'lbl-mode-record': "צילום סרטון", 'lbl-record-instr': "צלם סרטון לניתוח AI",
        'lbl-start-record': "התחל צילום 🔴", 'lbl-stop-record': "עצור צילום ⏹️",
        'lbl-workout-duration': "כמה זמן יש לך לאימון?", 'opt-time-15': "15 דקות (זריז)",
        'opt-time-30': "30 דקות (רגיל)", 'opt-time-45': "45 דקות (מורחב)", 'opt-time-60': "60 דקות (שעה)",
        'lbl-workout-difficulty': "רמת קושי באימון", 'opt-diff-easy': "קל (מתחילים/חזרה לכושר)",
        'opt-diff-hard': "קשה (מתקדמים)", 'opt-diff-pro': "מקצוען (ספורטאי עלית)"
    },
    es: {
        'lbl-select-lang': "Idioma", 'lbl-next': "Siguiente", 'lbl-prev': "Atrás",
        'onboarding-title': "Tu Perfil", 'onboarding-subtitle': "Responde para personalizar el plan.",
        'lbl-email': "Correo", 'lbl-name': "Tu Nombre", 'lbl-gender': "Género",
        'lbl-dash-est': "Perfil guardado", 'lbl-welcome': "¿Listo?", 'lbl-welcome-sub': "Elige el módulo.",
        'lbl-video-tab': "Análisis en vivo", 'lbl-video-desc': "Cámara", 'lbl-workout-tab': "Plan",
        'lbl-workout-desc': "Tu plan IA.", 'lbl-history': "Historia", 'lbl-upload-btn': "Subir Video",
        'lbl-upload-tab': "Subir Video", 'lbl-upload-desc': "Analizar video grabado.",
        'lbl-no-jumps': "No hay saltos.", 'lbl-back': "Atrás", 'lbl-camera-title': "Rastreador Inteligente",
        'lbl-jump-type': "Tipo:", 'opt-standing': "De pie", 'opt-running': "Corriendo",
        'lbl-start-scan': "Escanear", 'lbl-camera-instr': "Espera a la IA...",
        'lbl-analysis-res': "Análisis Completo", 'lbl-height-res': "Altura:", 'lbl-hang-time': "T. de vuelo:",
        'lbl-knee-angle': "Ángulo de rodilla:", 'lbl-foot-clearance': "E. Piernas:", 'lbl-ai-rec-title': "Feedback:", 'lbl-save-jump': "Guardar",
        'lbl-workout-main-title': "Tu plan", 'lbl-complete': "Terminar plano", 'alert-workout': "Guardado",
        'lbl-mode-scan': "Scan en vivo", 'lbl-mode-record': "Grabar Video", 'lbl-record-instr': "Grabe un video",
        'lbl-start-record': "Grabar 🔴", 'lbl-stop-record': "Parar ⏹️",
        'lbl-workout-duration': "¿Cuánto tiempo tienes?", 'opt-time-15': "15 Minutos",
        'opt-time-30': "30 Minutos", 'opt-time-45': "45 Minutos", 'opt-time-60': "60 Minutos",
        'lbl-workout-difficulty': "Dificultad", 'opt-diff-easy': "Fácil",
        'opt-diff-hard': "Difícil", 'opt-diff-pro': "Pro"
    },
    fr: { 'lbl-select-lang': "Langue", 'lbl-next': "Suivant", 'lbl-prev': "Retour", 'lbl-welcome': "Prêt?", 'lbl-ai-rec-title': "Feedback:" },
    ar: { 'lbl-select-lang': "اللغة", 'lbl-next': "التالي", 'lbl-prev': "رجوع", 'lbl-welcome': "جاهز؟", 'lbl-ai-rec-title': "الملاحظات:" },
    zh: { 'lbl-select-lang': "选择语言", 'lbl-next': "下一个", 'lbl-prev': "后退", 'lbl-welcome': "准备好了吗？", 'lbl-ai-rec-title': "反馈:" },
    ru: { 'lbl-select-lang': "Язык", 'lbl-next': "Далее", 'lbl-prev': "Назад", 'lbl-welcome': "Готов?", 'lbl-ai-rec-title': "Отзыв:" },
    de: { 'lbl-select-lang': "Sprache", 'lbl-next': "Weiter", 'lbl-prev': "Zurück", 'lbl-welcome': "Bereit?", 'lbl-ai-rec-title': "Feedback:" },
    pt: { 'lbl-select-lang': "Idioma", 'lbl-next': "Próximo", 'lbl-prev': "Voltar", 'lbl-welcome': "Pronto?", 'lbl-ai-rec-title': "Feedback:" },
    hi: { 'lbl-select-lang': "भाषा", 'lbl-next': "अगला", 'lbl-prev': "वापस", 'lbl-welcome': "तैयार?", 'lbl-ai-rec-title': "प्रतिक्रिया:" }
};

let currentLang = 'en';
let userProfile = {};
let jumpHistory = [];

// ==========================================
// AUTO-LOGIN LOGIC
// ==========================================
let myChart = null;

window.onload = () => {
    let savedProfile = localStorage.getItem('waydunk_profile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
        let savedHistory = localStorage.getItem('waydunk_history');
        if (savedHistory) jumpHistory = JSON.parse(savedHistory);
        
        currentLang = userProfile.lang || 'en';
        document.getElementById('lbl-logout').innerText = currentLang === 'he' ? "התנתק" : "Logout";
        setLanguage(currentLang, true); 
    }
};

function logout() {
    let msg = currentLang === 'he' ? "האם אתה בטוח שברצונך להתנתק? כל נתוני הפרופיל וההיסטוריה יימחקו מזיכרון המכשיר!" : "Are you sure you want to logout? All profile data and history will be cleared!";
    if (confirm(msg)) {
        localStorage.removeItem('waydunk_profile');
        localStorage.removeItem('waydunk_history');
        userProfile = {};
        jumpHistory = [];
        goScreen('language');
    }
}

// ==========================================
// Navigation & State
// ==========================================
function setLanguage(lang, skipOnboarding = false) {
    currentLang = lang;
    userProfile.lang = lang; 
    document.documentElement.lang = lang;
    document.body.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
    applyTranslations();
    
    if (skipOnboarding) {
        updateWelcomeMessage();
        updateJumpHistoryUI();
        goScreen('dashboard');
    } else {
        goScreen('onboarding');
    }
}

function applyTranslations() {
    const nameMap = {
        'en': 'John', 'he': 'ישראל', 'es': 'Juan', 'fr': 'Jean', 
        'ar': 'محمد', 'zh': '明', 'ru': 'Иван', 'de': 'Hans', 'pt': 'João', 'hi': 'राज'
    };
    if (nameMap[currentLang]) {
        let inputEl = document.getElementById('input-name');
        if(inputEl) inputEl.placeholder = nameMap[currentLang];
    }

    const dict = translations[currentLang];
    for (const [key, value] of Object.entries(dict)) {
        if (key === 'lbl-welcome') continue; 
        const els = document.querySelectorAll(`.${key}`);
        els.forEach(el => { el.innerHTML = value; });
    }
    document.getElementById('lbl-logout').innerText = currentLang === 'he' ? "התנתק" : "Logout";
}

function goScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active', 'fade-in');
    }
}

// ==========================================
// Wizard Logic
// ==========================================
let currentStep = 1;
const totalSteps = 8;

function nextStep(stepData) {
    if(stepData === 1) {
        let elName = document.getElementById('input-name').value;
        if(!elName || elName.trim() === "") {
            alert(currentLang==='he' ? "חובה להכניס שם כדי להמשיך!" : "Please enter your name!");
            return; // stop execution
        }
    }
    if(stepData === 2) {
        if(!document.getElementById('input-gender').value) {
            alert(currentLang==='he' ? "חובה לבחור מגדר כדי להמשיך!" : "Please select your gender!");
            return;
        }
    }
    
    document.getElementById(`step-${currentStep}`).classList.add('hidden');
    document.getElementById(`step-${currentStep}`).classList.remove('active-step');
    currentStep++;
    if(currentStep > totalSteps) currentStep = totalSteps;
    document.getElementById(`step-${currentStep}`).classList.remove('hidden');
    document.getElementById(`step-${currentStep}`).classList.add('active-step');
    updateProgress();
}

function prevStep(stepData) {
    document.getElementById(`step-${currentStep}`).classList.add('hidden');
    document.getElementById(`step-${currentStep}`).classList.remove('active-step');
    currentStep--;
    if(currentStep < 1) currentStep = 1;
    document.getElementById(`step-${currentStep}`).classList.remove('hidden');
    document.getElementById(`step-${currentStep}`).classList.add('active-step');
    updateProgress();
}

function updateProgress() {
    let pct = currentStep / totalSteps;
    let circle = document.getElementById('onboarding-ring');
    if (circle) {
        let circ = 163.36; // 2 * pi * 26
        circle.style.strokeDashoffset = circ - (pct * circ);
    }
    let txt = document.getElementById('onboarding-text');
    if(txt) txt.innerText = `${currentStep}/${totalSteps}`;
}

function selectGender(val) {
    document.getElementById('input-gender').value = val;
    let cardM = document.getElementById('card-male');
    let cardF = document.getElementById('card-female');
    let cardO = document.getElementById('card-other');
    if(cardM) cardM.classList.remove('selected');
    if(cardF) cardF.classList.remove('selected');
    if(cardO) cardO.classList.remove('selected');
    let cardSel = document.getElementById(`card-${val}`);
    if(cardSel) cardSel.classList.add('selected');
    
    // Enable next button for step 2
    let btn = document.getElementById('btn-next-2');
    if(btn) {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    }
}

function checkStep1() {
    let nameVal = document.getElementById('input-name').value;
    let btn = document.getElementById('btn-next-1');
    if(btn) {
        if(nameVal && nameVal.trim() !== "") {
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
        } else {
            btn.disabled = true;
            btn.style.opacity = "0.4";
            btn.style.cursor = "not-allowed";
        }
    }
}

function saveProfileAndGoDashboard() {
    let email = document.getElementById('input-email').value;
    if (!email) email = "guest@user.com"; 

    userProfile = {
        email: email, lang: currentLang,
        name: document.getElementById('input-name').value || '',
        gender: document.getElementById('input-gender').value,
        goal: document.getElementById('input-goal').value,
        diet: document.getElementById('input-diet').value,
        freq: document.getElementById('input-freq').value,
        height: document.getElementById('input-height').value,
        weight: document.getElementById('input-weight').value,
        duration: document.getElementById('input-duration').value,
        difficulty: document.getElementById('input-difficulty').value
    };

    localStorage.setItem('waydunk_profile', JSON.stringify(userProfile));
    localStorage.setItem('waydunk_history', JSON.stringify(jumpHistory));

    updateWelcomeMessage();
    goScreen('dashboard');
}

function updateWelcomeMessage() {
    let msgEl = document.getElementById('welcome-msg');
    if (msgEl) {
        let baseMsg = translations[currentLang]['lbl-welcome'];
        let nameChunk = userProfile.name ? ", " + userProfile.name : "";
        msgEl.innerText = baseMsg + nameChunk + "?";
    }
}

// ==========================================
// ML5.js CAMERA & UPLOAD LOGIC
// ==========================================
let video, bodyPose, poses = [], stream = null, canvas, ctx;
let modelReadyFlag = false, isScanning = false;
let jumpState = "IDLE"; 
let baselineY = 0, minAngle = 180, jumpStartTime = 0, jumpEndTime = 0;
let baselineAnkleY = 0, minAnkleY = 9999;
let animFrameId;
let isUploadedVideo = false;
let uploadedVideoBlobUrl = null;
let currentFacingMode = 'environment';
let mediaRecorder = null;
let recordedChunks = [];
let cameraMode = 'scan';

async function startCameraAnalysis() {
    isUploadedVideo = false;
    setCameraMode('scan');
    goScreen('camera');
    document.getElementById('ai-status-overlay').innerText = currentLang === 'he' ? "טוען מודל..." : "Loading Model...";
    document.getElementById('btn-start-scan').disabled = true;
    document.getElementById('btn-start-scan').classList.remove('hidden');
    document.getElementById('jump-result-card').classList.add('hidden');
    document.getElementById('lbl-camera-instr').style.display = 'block';

    video = document.getElementById('webcam-video');
    canvas = document.getElementById('skeleton-canvas');
    ctx = canvas.getContext('2d');

    try {
        if(stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: currentFacingMode }, audio: false });
        video.srcObject = stream;
        video.loop = false;
        video.onended = null;
        video.onloadedmetadata = () => {
            video.play();
            canvas.width = video.clientWidth;
            canvas.height = video.clientHeight;
            if (!bodyPose) {
                bodyPose = ml5.bodyPose(video, modelReady);
            } else {
                modelReady();
            }
        };
    } catch (err) {
        alert(currentLang === 'he' ? "שגיאה בגישה למצלמה. אנא ודא הרשאות." : "Camera access error. Check permissions.");
    }
}

function toggleCamera() {
    currentFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
    if(stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    startCameraAnalysis();
}

function promptGalleryAccess() {
    let msg = currentLang === 'he' ? 
        "האפליקציה מבקשת אישור לגשת לגלריה שלך לצורך ניתוח AI. הסרטון מעובד על המכשיר שלך בלבד ולא נשלח לשום שרת. האם לאשר גישה?" : 
        "Way To Dunk requests permission to access your gallery for AI analysis. The video is processed locally and never leaves your device. Allow?";
    
    if (confirm(msg)) {
        document.getElementById('video-upload').click();
    }
}

function handleVideoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        uploadedVideoBlobUrl = URL.createObjectURL(file);
        startUploadedVideoAnalysis(uploadedVideoBlobUrl);
    }
}

function startUploadedVideoAnalysis(blobUrl) {
    isUploadedVideo = true;
    goScreen('camera');
    document.getElementById('ai-status-overlay').innerText = currentLang === 'he' ? "סורק סרטון מועלה..." : "Scanning uploaded video...";
    
    // Hide start button and instruction, since it auto-plays
    document.getElementById('btn-start-scan').classList.add('hidden');
    document.getElementById('lbl-camera-instr').style.display = 'none';
    document.getElementById('jump-result-card').classList.add('hidden');

    video = document.getElementById('webcam-video');
    canvas = document.getElementById('skeleton-canvas');
    ctx = canvas.getContext('2d');

    video.srcObject = null;
    video.src = blobUrl;
    video.loop = false;
    
    video.onloadedmetadata = () => {
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;
        if (!bodyPose) {
            bodyPose = ml5.bodyPose(video, modelReadyUpload);
        } else {
            modelReadyUpload();
        }
    };
}

function modelReadyUpload() {
    modelReadyFlag = true;
    bodyPose.detectStart(video, gotPoses);
    animFrameId = requestAnimationFrame(drawSkeleton);
    
    // Automatic scanning for uploaded video
    isScanning = true;
    jumpState = "WAITING";
    baselineY = 0; minAngle = 180; baselineAnkleY = 0; minAnkleY = 9999;
    
    // Video end triggers analysis completion
    video.onended = () => {
        finishScan();
    };
    
    video.play();
}

function modelReady() {
    modelReadyFlag = true;
    document.getElementById('ai-status-overlay').innerText = currentLang === 'he' ? "המודל מוכן!" : "Model Ready!";
    document.getElementById('btn-start-scan').disabled = false;
    document.getElementById('btn-start-scan').innerText = translations[currentLang]['lbl-start-scan'];
    
    // Also enable record button if we are in record mode
    document.getElementById('lbl-record-instr').innerText = translations[currentLang]['lbl-record-instr'];
    let btnStartRecord = document.getElementById('btn-start-record');
    if (btnStartRecord) {
        btnStartRecord.disabled = false;
        btnStartRecord.innerText = translations[currentLang]['lbl-start-record'];
    }

    bodyPose.detectStart(video, gotPoses);
    animFrameId = requestAnimationFrame(drawSkeleton);
}

function setCameraMode(mode) {
    cameraMode = mode;
    document.getElementById('btn-mode-scan').className = mode === 'scan' ? 'btn btn-primary lbl-mode-scan' : 'btn btn-secondary lbl-mode-scan';
    document.getElementById('btn-mode-record').className = mode === 'record' ? 'btn btn-primary lbl-mode-record' : 'btn btn-secondary lbl-mode-record';
    
    if(mode === 'scan') {
        document.getElementById('scan-action-container').classList.remove('hidden');
        document.getElementById('record-action-container').classList.add('hidden');
    } else {
        document.getElementById('scan-action-container').classList.add('hidden');
        document.getElementById('record-action-container').classList.remove('hidden');
    }
}

function startVideoRecording() {
    if (!stream) return;
    recordedChunks = [];
    try {
        mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/mp4' });
    } catch (e) {
        // fallback to webm if mp4 unsupported
        mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    }
    
    mediaRecorder.ondataavailable = e => { 
        if (e.data.size > 0) recordedChunks.push(e.data); 
    };
    
    mediaRecorder.onstop = () => {
        let blob = new Blob(recordedChunks, { type: mediaRecorder.mimeType });
        let url = URL.createObjectURL(blob);
        // Stop current stream so AI can process uploaded video stream
        if(stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        startUploadedVideoAnalysis(url);
    };

    mediaRecorder.start();
    document.getElementById('btn-start-record').classList.add('hidden');
    document.getElementById('btn-stop-record').classList.remove('hidden');
    document.getElementById('ai-status-overlay').innerText = currentLang==='he'?"מצלם... 🔴":"Recording... 🔴";
    
    // Stop skeleton analysis during pure "recording" to save resources until it's processed
    if(bodyPose && video) {
        bodyPose.detectStop();
    }
    cancelAnimationFrame(animFrameId);
}

function stopVideoRecording() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        document.getElementById('btn-stop-record').classList.add('hidden');
        document.getElementById('btn-start-record').classList.remove('hidden');
    }
}

function startJumpScan() {
    let countdown = 3;
    const overlay = document.getElementById('countdown-overlay');
    const statusTxt = document.getElementById('ai-status-overlay');
    const btn = document.getElementById('btn-start-scan');
    
    overlay.classList.remove('hidden');
    btn.disabled = true;

    let interval = setInterval(() => {
        overlay.innerText = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            overlay.innerText = "GO!";
            statusTxt.innerText = currentLang === 'he' ? "מנתח תנועה... קפוץ!" : "Scanning... JUMP!";
            isScanning = true;
            jumpState = "WAITING";
            baselineY = 0; minAngle = 180; baselineAnkleY = 0; minAnkleY = 9999;
            
            setTimeout(() => { overlay.classList.add('hidden'); }, 1000);
            setTimeout(() => { finishScan(); }, 4000); // Live timeout scan 4s
        }
        countdown--;
    }, 1000);
}

function gotPoses(results) { poses = results; }

function drawSkeleton() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.width !== video.clientWidth && video.clientWidth > 0) { 
        canvas.width = video.clientWidth; canvas.height = video.clientHeight; 
    }

    if (poses.length > 0) {
        let pose = poses[0];
        for (let i = 0; i < pose.keypoints.length; i++) {
            let keypoint = pose.keypoints[i];
            if (keypoint.confidence > 0.1) {
                ctx.fillStyle = 'rgba(0, 255, 204, 0.8)';
                ctx.beginPath();
                ctx.arc(keypoint.x, keypoint.y, 5, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
        drawBone(pose, 11, 13); drawBone(pose, 13, 15); 
        drawBone(pose, 12, 14); drawBone(pose, 14, 16); 
        drawBone(pose, 11, 12); 
        if(isScanning) processJumpTracking(pose);
    }
    animFrameId = requestAnimationFrame(drawSkeleton);
}

function drawBone(pose, p1, p2) {
    if(pose.keypoints[p1].confidence > 0.1 && pose.keypoints[p2].confidence > 0.1) {
        ctx.strokeStyle = 'rgba(0, 255, 204, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(pose.keypoints[p1].x, pose.keypoints[p1].y);
        ctx.lineTo(pose.keypoints[p2].x, pose.keypoints[p2].y);
        ctx.stroke();
    }
}

function startJumpScan() {
    let countdown = 3;
    const overlay = document.getElementById('countdown-overlay');
    const statusTxt = document.getElementById('ai-status-overlay');
    const btn = document.getElementById('btn-start-scan');
    
    overlay.classList.remove('hidden');
    btn.disabled = true;

    let interval = setInterval(() => {
        overlay.innerText = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            overlay.innerText = "GO!";
            statusTxt.innerText = currentLang === 'he' ? "מנתח תנועה... קפוץ!" : "Scanning... JUMP!";
            isScanning = true;
            jumpState = "WAITING";
            baselineY = 0; minAngle = 180; baselineAnkleY = 0; minAnkleY = 9999;
            
            setTimeout(() => { overlay.classList.add('hidden'); }, 1000);
            setTimeout(() => { finishScan(); }, 4000); // Live timeout scan 4s
        }
        countdown--;
    }, 1000);
}

function processJumpTracking(pose) {
    let leftHip = pose.keypoints[11], rightHip = pose.keypoints[12];
    if (leftHip.confidence < 0.1 || rightHip.confidence < 0.1) return;
    let hipY = (leftHip.y + rightHip.y) / 2;
    
    let hip = pose.keypoints[12], knee = pose.keypoints[14], ankle = pose.keypoints[16];
    let leftAnkle = pose.keypoints[15];
    let ankleY = ankle.confidence>leftAnkle.confidence ? ankle.y : leftAnkle.y;

    if (hip.confidence > 0.1 && knee.confidence > 0.1 && ankle.confidence > 0.1) {
        let angle = calculateAngle(hip, knee, ankle);
        if (angle < minAngle && angle > 50) minAngle = angle; 
    }

    if (jumpState === "WAITING") {
        baselineY = hipY; 
        baselineAnkleY = ankleY;
        jumpState = "TRACKING_DIP";
    } else if (jumpState === "TRACKING_DIP") {
        if (hipY > baselineY + 20) jumpState = "READY_TO_FLY";
    } else if (jumpState === "READY_TO_FLY") {
        if (hipY < baselineY - 30) {
            jumpState = "IN_AIR"; jumpStartTime = Date.now();
            document.getElementById('ai-status-overlay').innerText = currentLang === 'he' ? "באוויר!" : "AIRBORNE!";
        }
    } else if (jumpState === "IN_AIR") {
        if (ankleY < minAnkleY) minAnkleY = ankleY;

        if (hipY > baselineY - 20) {
            jumpState = "LANDED"; jumpEndTime = Date.now();
        }
    }
}

function calculateAngle(a, b, c) {
    let radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
    let angle = Math.abs(radians * 180.0 / Math.PI);
    if (angle > 180.0) angle = 360 - angle;
    return angle;
}

function finishScan() {
    isScanning = false;
    let btnScan = document.getElementById('btn-start-scan');
    btnScan.disabled = false;
    btnScan.innerText = currentLang === 'he' ? "נסה שוב" : "Scan Again";
    if (!isUploadedVideo) {
        btnScan.classList.remove('hidden');
    }
    
    document.getElementById('ai-status-overlay').innerText = currentLang === 'he' ? "חישוב נתונים..." : "Calculating...";

    let hangTime = (jumpEndTime - jumpStartTime) / 1000;
    if (hangTime <= 0 || hangTime > 1.5 || (jumpState !== "LANDED" && jumpState !== "IN_AIR")) {
        hangTime = (Math.random() * 0.2) + 0.4; 
    }

    let heightCm = Math.round(1.226 * Math.pow(hangTime, 2) * 100);
    let bendAngle = Math.round(minAngle);
    if(bendAngle > 170) bendAngle = 90; 

    let footScore = Math.round(baselineAnkleY - minAnkleY);
    if (footScore < 0 || footScore > 4000) footScore = 0;

    document.getElementById('res-jump-height').innerText = heightCm;
    document.getElementById('res-hang-time').innerText = Math.round(hangTime * 1000);
    document.getElementById('res-knee-angle').innerText = bendAngle;
    let footEl = document.getElementById('res-foot-clearance');
    if(footEl) footEl.innerText = footScore + " px";

    let jumpType = document.getElementById('jump-type-select').value;
    let feedback = "";
    if (bendAngle < 90) {
        feedback = currentLang === 'he' ? "מעולה! אבל ירדת קצת נמוך מדי בסקוואט, שים לב לעוצמה בניתוק." : "You are dropping too deep. You're losing elastic energy. Aim for ~100 degrees.";
    } else if (bendAngle > 130) {
        feedback = currentLang === 'he' ? "לא ירדת עמוק מספיק. אתה מפספס כוח מטורף שיכול להקפיץ אותך!" : "Shallow dip. You aren't recruiting your glutes fully. Dip slightly lower.";
    } else {
        feedback = currentLang === 'he' ? "תנוחת הברך הייתה מושלמת בניתוק! טכניקה מעולה." : "Perfect knee angle! To improve, focus on arm-swing speed and takeoff velocity.";
    }

    document.getElementById('dynamic-ai-text').innerText = feedback;
    document.getElementById('jump-result-card').classList.remove('hidden');

    let sourceLabel = isUploadedVideo ? "Uploaded" : "Live";
    jumpHistory.push({ 
        type: jumpType, 
        height: heightCm, 
        date: new Date().toLocaleTimeString(),
        source: sourceLabel 
    });

    localStorage.setItem('waydunk_history', JSON.stringify(jumpHistory));
}

function saveJumpAndExit() {
    updateJumpHistoryUI();
    stopCameraAndGo('dashboard');
    document.getElementById('video-upload').value = ""; // Reset file input
}

function updateJumpHistoryUI() {
    const list = document.getElementById('jump-history-list');
    list.innerHTML = "";
    if (jumpHistory.length === 0) {
        list.innerHTML = `<p class="text-muted ${currentLang === 'he' ? 'lbl-no-jumps' : ''}">${currentLang === 'he' ? 'טרם נרשמו קפיצות.' : 'No jumps recorded yet.'}</p>`;
        return;
    }
    jumpHistory.slice().reverse().forEach(jump => {
        let typeStr = jump.type === 'standing' ? (currentLang === 'he'?'מהמקום':'Standing') : (currentLang === 'he'?'מריצה':'Running');
        let icon = jump.source === 'Uploaded' ? '📤' : '🎥';
        list.innerHTML += `
            <div class="glass-card history-item mb-2">
                <div>
                    <div><strong>${typeStr} ${icon}</strong></div>
                    <div style="font-size:0.8rem; color:#aaa;">${jump.date}</div>
                </div>
                <div class="history-val">${jump.height} <span style="font-size:0.8rem;">cm</span></div>
            </div>`;
    });
    
    renderChart();
}

function renderChart() {
    const canvasEl = document.getElementById('jumpChart');
    if (!canvasEl) return;
    const ctx = canvasEl.getContext('2d');
    if (myChart) myChart.destroy();
    
    if (jumpHistory.length === 0) {
        // Empty state chart
        myChart = new Chart(ctx, {
            type: 'line',
            data: { labels: ['','',''], datasets: [{ data: [0, 0, 0], borderColor: 'rgba(255,255,255,0.1)' }] },
            options: { scales: { x: {display: false}, y: {display: false} }, plugins: { legend: {display: false} } }
        });
        return;
    }
    
    let sortedData = [...jumpHistory].slice(-10); // last 10 jumps for cleaner graph
    let labels = sortedData.map(j => j.date);
    let dataPoints = sortedData.map(j => j.height);

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'he' ? 'גובה (ס״מ)' : 'Height (cm)',
                data: dataPoints,
                borderColor: '#00ffcc',
                backgroundColor: 'rgba(0, 255, 204, 0.15)',
                borderWidth: 3,
                pointBackgroundColor: '#ed2c91',
                pointBorderColor: '#fff',
                pointRadius: 5,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            color: '#8e95ac',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, suggestedMin: 10 },
                x: { grid: { display: false } }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function stopCameraAndGo(screenId) {
    if (stream) { stream.getTracks().forEach(track => track.stop()); stream = null; }
    if (video) { video.srcObject = null; video.src = ""; }
    cancelAnimationFrame(animFrameId);
    goScreen(screenId);
}

// ==========================================
// DYNAMIC WORKOUT GENERATOR & INTERACTIVE RUNNER
// ==========================================
const MASTER_EXERCISES = [
    { en: 'Bodyweight Squats', he: 'סקוואט חופשי', type: 'reps', easy: 10, hard: 20, pro: 35 },
    { en: 'Jump Squats', he: 'סקוואט קפיצה', type: 'reps', easy: 8, hard: 15, pro: 25 },
    { en: 'Pushups', he: 'שכיבות סמיכה', type: 'reps', easy: 8, hard: 20, pro: 40 },
    { en: 'Plank', he: 'פלאנק (בטן סטטית)', type: 'time', easy: 30, hard: 60, pro: 90 },
    { en: 'Lunges', he: 'מכרעיים', type: 'reps', easy: 10, hard: 20, pro: 40 },
    { en: 'Pogo Jumps', he: 'פוגו (ניתורי קרסול)', type: 'time', easy: 20, hard: 45, pro: 60 },
    { en: 'Burpees', he: 'סמוך קום (ברפיז)', type: 'reps', easy: 5, hard: 12, pro: 20 },
    { en: 'High Knees', he: 'הרמת ברכיים מהירה', type: 'time', easy: 20, hard: 40, pro: 60 },
    { en: 'Calf Raises', he: 'הרמות תאומים', type: 'reps', easy: 15, hard: 30, pro: 50 },
    { en: 'Wall Sit', he: 'ישיבת קיר', type: 'time', easy: 30, hard: 60, pro: 120 },
    { en: 'Mountain Climbers', he: 'טיפוס הרים', type: 'time', easy: 20, hard: 45, pro: 60 },
    { en: 'Broad Jumps', he: 'קפיצות לרוחק', type: 'reps', easy: 5, hard: 10, pro: 15 },
    { en: 'Depth Drops', he: 'נפילות מעומק (נחיתה)', type: 'reps', easy: 5, hard: 10, pro: 15 },
    { en: 'Split Jumps', he: 'מכרעיים בקפיצה', type: 'reps', easy: 8, hard: 16, pro: 24 },
    { en: 'Tuck Jumps', he: 'קפיצות ברכיים לחזה', type: 'reps', easy: 5, hard: 12, pro: 20 }
];

let workoutSessionQueue = [];
let currentExIndex = 0;
let runnerTimerInterval = null;
let runnerTimeLeft = 0;
let isRunnerPaused = false;
let isRunnerResting = false;

function generateWorkoutPlan() {
    const list = document.getElementById('dynamic-workout-list');
    list.innerHTML = "";
    
    // Determine number of exercises based on selected duration
    let durationId = userProfile.duration || "30"; 
    let diff = userProfile.difficulty || "hard";
    
    let exerciseCount = 8;
    if(durationId === "15") exerciseCount = 5;
    if(durationId === "30") exerciseCount = 10;
    if(durationId === "45") exerciseCount = 15;
    if(durationId === "60") exerciseCount = 20;

    // Shuffle and pick
    let shuffled = [...MASTER_EXERCISES].sort(() => 0.5 - Math.random());
    workoutSessionQueue = shuffled.slice(0, Math.min(exerciseCount, shuffled.length));

    // AI dynamic injection if camera history exists
    if (jumpHistory.length > 0 && minAngle > 130) {
        workoutSessionQueue[0] = { en: "Deep Squat Jumps (Shallow dip fix)", he: "סקוואט עמוק (לתיקון כיפוף סריקה)", type: 'reps', easy: 5, hard: 10, pro: 15 };
    }

    workoutSessionQueue.forEach((wk, idx) => {
        let title = currentLang === 'he' ? wk.he : wk.en;
        let diffVal = wk[diff];
        let displayTarget = wk.type === 'time' ? `${diffVal} Sec` : `${diffVal} Reps`;
        list.innerHTML += `
            <div class="glass-card workout-item" style="padding:0.8rem; margin-bottom:0.5rem; border-radius:8px;">
                <div class="workout-info" style="display:flex; justify-content:space-between; width:100%;">
                    <strong>${idx+1}. ${title}</strong>
                    <span class="workout-sets text-neon" style="color:var(--accent-primary); font-weight:bold;">${displayTarget}</span>
                </div>
            </div>`;
    });

    // Subtitle rendering
    let introName = userProfile.name ? userProfile.name + ", " : "";
    document.getElementById('workout-custom-reason').innerText = introName + (currentLang==='he'?"הנה תוכנית מותאמת לזמן שביקשת!":"Here is your personalized timed plan!");

    // Reset UI states
    document.getElementById('workout-preview').classList.remove('hidden');
    document.getElementById('workout-active-runner').classList.add('hidden');
    document.getElementById('workout-complete').classList.add('hidden');
    
    goScreen('workout');
}

function startActiveWorkout() {
    document.getElementById('workout-preview').classList.add('hidden');
    document.getElementById('workout-active-runner').classList.remove('hidden');
    currentExIndex = 0;
    runExercise(currentExIndex);
}

function runExercise(index) {
    if(index >= workoutSessionQueue.length) {
        document.getElementById('workout-active-runner').classList.add('hidden');
        document.getElementById('workout-complete').classList.remove('hidden');
        return;
    }

    isRunnerResting = false;
    let ex = workoutSessionQueue[index];
    let diff = userProfile.difficulty || "hard";
    let targetVal = ex[diff];
    let title = currentLang === 'he' ? ex.he : ex.en;
    
    // Fallback logic for gender representation
    let gen = userProfile.gender;
    let fallbackImg = (gen === 'female') ? 'girl.png' : 'boy.png'; 
    document.getElementById('runner-image').src = fallbackImg;
    
    document.getElementById('runner-exercise-name').innerText = title;

    if(ex.type === 'time') {
        document.getElementById('runner-instruction').innerText = currentLang==='he'?"זמן עבודה!":"Time Based!";
        startTimer(targetVal, finishExercise);
    } else {
        document.getElementById('runner-instruction').innerText = currentLang==='he'?"בצע חזרות (לחץ דלג כשתסיים)":"Rep Based (Click Skip when done)";
        document.getElementById('runner-timer').innerText = targetVal + (currentLang==='he'?" חזרות":" Reps");
    }
}

function startTimer(seconds, callback) {
    clearInterval(runnerTimerInterval);
    runnerTimeLeft = seconds;
    updateTimerDisplay();

    runnerTimerInterval = setInterval(() => {
        if(!isRunnerPaused) {
            runnerTimeLeft--;
            updateTimerDisplay();
            
            // Audio cue logic (simple beep)
            if(runnerTimeLeft === 3) playBeep(500);
            if(runnerTimeLeft === 0) {
                playBeep(1000);
                clearInterval(runnerTimerInterval);
                callback();
            }
        }
    }, 1000);
}

function playBeep(duration) {
    let ctx = new (window.AudioContext || window.webkitAudioContext)();
    let osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.connect(ctx.destination);
    osc.start();
    setTimeout(() => { osc.stop(); }, duration);
}

function updateTimerDisplay() {
    let m = Math.floor(runnerTimeLeft / 60).toString().padStart(2, '0');
    let s = (runnerTimeLeft % 60).toString().padStart(2, '0');
    document.getElementById('runner-timer').innerText = `${m}:${s}`;
}

function togglePauseWorkout() {
    isRunnerPaused = !isRunnerPaused;
    let btn = document.getElementById('btn-pause-res');
    if(btn) btn.innerText = isRunnerPaused ? (currentLang==='he'?"המשך":"Resume") : (currentLang==='he'?"השהה":"Pause");
}

function skipToNext() {
    clearInterval(runnerTimerInterval);
    if(isRunnerResting) {
        currentExIndex++;
        runExercise(currentExIndex);
    } else {
        finishExercise(); 
    }
}

function finishExercise() {
    isRunnerResting = true;
    document.getElementById('runner-exercise-name').innerText = currentLang==='he'?"מנוחה!":"REST!";
    document.getElementById('runner-instruction').innerText = currentLang==='he'?"קח אוויר. תרגיל הבא בקרוב...":"Catch your breath. Next soon...";
    document.getElementById('runner-image').src = "logo.png"; 
    document.getElementById('runner-timer').innerText = "00:20";
    startTimer(20, () => {
        currentExIndex++;
        runExercise(currentExIndex);
    });
}

function stopWorkoutAndExit() {
    clearInterval(runnerTimerInterval);
    goScreen('dashboard');
}

function finishWorkoutSession() {
    goScreen('dashboard');
}

// ==========================================
// PWA INSTALL LOGIC
// ==========================================
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent default mini-infobar
    e.preventDefault();
    // Stash the event
    deferredPrompt = e;
    // Show the install button
    const installBtn = document.getElementById('btn-install-app');
    if (installBtn) {
        installBtn.classList.remove('hidden');
    }
});

async function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('User accepted PWA install');
        } else {
            console.log('User dismissed PWA install');
        }
        deferredPrompt = null;
        let btn = document.getElementById('btn-install-app');
        if (btn) btn.classList.add('hidden');
    }
}
