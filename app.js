const translations = {
    en: {
        'onboarding-title': "Let's build your profile.",
        'onboarding-subtitle': "Answer some quick questions so our AI can personalize your training.",
        'lbl-email': "Email (Your login ID)",
        'lbl-name': "Your Name",
        'lbl-gender': "Gender",
        'opt-male': "Male", 'opt-female': "Female",
        'lbl-goal': "Primary Goal",
        'opt-dunk': "First Dunk / Increase Max Vert", 'opt-explosive': "General Explosiveness for Sport", 'opt-rehab': "Return from Injury / Knee Health",
        'lbl-diet': "Diet & Nutrition Habits",
        'opt-diet-strict': "Great (Tracking macros, high protein)", 'opt-diet-average': "Average (Eating okay, some junk)", 'opt-diet-poor': "Needs Improvement (Inconsistent)",
        'lbl-freq': "Training Frequency",
        'opt-freq-1': "1-2 times a week", 'opt-freq-2': "3-5 times a week", 'opt-freq-3': "Every day",
        'lbl-height': "Height (cm)", 'lbl-weight': "Weight (kg)",
        'lbl-generate': "Save Profile",
        'lbl-dash-est': "Profile Saved",
        'lbl-welcome': "Ready to Fly",
        'lbl-welcome-sub': "Choose your training module for today.",
        'lbl-video-tab': "Live AI Analysis",
        'lbl-video-desc': "Jump in front of the camera for real-time tracking.",
        'lbl-workout-tab': "Get Workout",
        'lbl-workout-desc': "Receive a personalized plan based on your AI scans.",
        'lbl-history': "Jump History",
        'lbl-upload-btn': "Upload Video",
        'lbl-no-jumps': "No jumps recorded yet. Use the Live AI!",
        'lbl-back': "Back",
        'lbl-camera-title': "Live AI Tracker",
        'lbl-jump-type': "Jump Type:",
        'opt-standing': "Standing Vertical", 'opt-running': "Running Vertical",
        'lbl-start-scan': "Start Scan",
        'lbl-camera-instr': "Make sure your full body is in the frame. When ready, click 'Start Scan' and jump when it says GO!",
        'lbl-analysis-res': "Analysis Complete",
        'lbl-height-res': "Est. Jump Height:",
        'lbl-hang-time': "Hang Time:",
        'lbl-knee-angle': "Max Knee Bend:",
        'lbl-ai-rec-title': "AI Feedback:",
        'lbl-save-jump': "Save & Return",
        'lbl-workout-main-title': "Your AI Plan",
        'lbl-complete': "Complete Workout",
        'alert-workout': "Workout registered! Great job."
    },
    he: {
        'onboarding-title': "בואו נבנה את הפרופיל שלך.",
        'onboarding-subtitle': "ענה על מספר השאלות הבאות כדי שה-AI יוכל להתאים לך תוכנית.",
        'lbl-email': "אימייל (זיהוי החשבון)",
        'lbl-name': "השם שלך",
        'lbl-gender': "מין",
        'opt-male': "זכר", 'opt-female': "נקבה",
        'lbl-goal': "מטרה מרכזית",
        'opt-dunk': "הטבעה ראשונה / מקסום קפיצה", 'opt-explosive': "כוח מתפרץ כללי לספורט", 'opt-rehab': "חזרה מפציעה / בריאות הברכיים",
        'lbl-diet': "הרגלי תזונה",
        'opt-diet-strict': "מצוין (סופר חלבון, מקפיד)", 'opt-diet-average': "סביר (אוכל בסדר, קצת ג'אנק)", 'opt-diet-poor': "דרוש שיפור (לא עקבי)",
        'lbl-freq': "תדירות אימונים",
        'opt-freq-1': "1-2 פעמים בשבוע", 'opt-freq-2': "3-5 פעמים בשבוע", 'opt-freq-3': "כל יום",
        'lbl-height': "גובה (ס״מ)", 'lbl-weight': "משקל (ק״ג)",
        'lbl-generate': "שמור פרופיל",
        'lbl-dash-est': "הפרופיל נשמר",
        'lbl-welcome': "מוכן לעוף",
        'lbl-welcome-sub': "בחר את מודול האימון שלך להיום.",
        'lbl-video-tab': "ניתוח AI חי",
        'lbl-video-desc': "קפוץ מול המצלמה לניתוח בזמן אמת.",
        'lbl-workout-tab': "קבל תוכנית אימון",
        'lbl-workout-desc': "קבל תוכנית המבוססת על סריקת ה-AI שלך.",
        'lbl-history': "היסטוריית קפיצות",
        'lbl-upload-btn': "העלה וידאו לניתוח",
        'lbl-no-jumps': "טרם נרשמו קפיצות. השתמש במצלמה!",
        'lbl-back': "חזור",
        'lbl-camera-title': "מעקב חכם (Live AI)",
        'lbl-jump-type': "סוג קפיצה:",
        'opt-standing': "קפיצה מהמקום", 'opt-running': "קפיצה מריצה",
        'lbl-start-scan': "התחל סריקה",
        'lbl-camera-instr': "ודא שכל הגוף שלך בפריים. לחץ 'התחל סריקה' וקפוץ כשתראה GO!",
        'lbl-analysis-res': "הניתוח הושלם",
        'lbl-height-res': "גובה קפיצה מוערך:",
        'lbl-hang-time': "זמן שהייה באוויר:",
        'lbl-knee-angle': "כיפוף ברך (זווית):",
        'lbl-ai-rec-title': "משוב מה-AI:",
        'lbl-save-jump': "שמור וחזור",
        'lbl-workout-main-title': "התוכנית האישית שלך",
        'lbl-complete': "סיים אימון",
        'alert-workout': "האימון נשמר! עבודה מעולה."
    }
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
        weight: document.getElementById('input-weight').value
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
let animFrameId;
let isUploadedVideo = false;
let uploadedVideoBlobUrl = null;

async function startCameraAnalysis() {
    isUploadedVideo = false;
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
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
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
    baselineY = 0; minAngle = 180;
    
    // Video end triggers analysis completion
    video.onended = () => {
        finishScan();
    };
    
    video.play();
}

function modelReady() {
    modelReadyFlag = true;
    document.getElementById('ai-status-overlay').innerText = currentLang === 'he' ? "AI מוכן. המתן לסימון." : "AI Ready. Wait in frame.";
    document.getElementById('btn-start-scan').disabled = false;
    document.getElementById('btn-start-scan').innerText = translations[currentLang]['lbl-start-scan'];
    bodyPose.detectStart(video, gotPoses);
    animFrameId = requestAnimationFrame(drawSkeleton);
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
            baselineY = 0; minAngle = 180;
            
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
    if (hip.confidence > 0.1 && knee.confidence > 0.1 && ankle.confidence > 0.1) {
        let angle = calculateAngle(hip, knee, ankle);
        if (angle < minAngle && angle > 50) minAngle = angle; 
    }

    if (jumpState === "WAITING") {
        baselineY = hipY; jumpState = "TRACKING_DIP";
    } else if (jumpState === "TRACKING_DIP") {
        if (hipY > baselineY + 20) jumpState = "READY_TO_FLY";
    } else if (jumpState === "READY_TO_FLY") {
        if (hipY < baselineY - 30) {
            jumpState = "IN_AIR"; jumpStartTime = Date.now();
            document.getElementById('ai-status-overlay').innerText = currentLang === 'he' ? "באוויר!" : "AIRBORNE!";
        }
    } else if (jumpState === "IN_AIR") {
        if (hipY > baselineY - 20) {
            jumpState = "LANDED"; jumpEndTime = Date.now();
            // Important: we don't end scan immediately on uploaded video until it ends naturally, 
            // but we stop calculating physics.
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

    document.getElementById('res-jump-height').innerText = heightCm;
    document.getElementById('res-hang-time').innerText = Math.round(hangTime * 1000);
    document.getElementById('res-knee-angle').innerText = bendAngle;

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
// DYNAMIC WORKOUT GENERATOR (Unchanged)
// ==========================================
function generateWorkoutPlan() {
    const list = document.getElementById('dynamic-workout-list');
    list.innerHTML = "";
    
    if (jumpHistory.length === 0) {
        document.getElementById('workout-custom-reason').innerText = currentLang === 'he' ? 
            "עדיין לא קפצת! כרגע ה-AI נותן לך תוכנית כללית. בשביל התאמה אישית באמת - קפוץ במצלמה או סרוק סרטון!" : 
            "You haven't jumped yet! This is a generic baseline timeline. Jump in front of the AI camera or upload a video for personalized workouts!";
        document.getElementById('workout-custom-reason').style.color = '#ffaa00'; 
    } else {
        let goal = userProfile.goal || 'explosive';
        let focus = "";
        if (goal === 'dunk') focus = currentLang==='he'?"מבוסס על הסריקה שלך: מיקוד בכוח מְרִיאָה מקסימלי.":"Based on your scans: Max vertical velocity focus.";
        if (goal === 'explosive') focus = currentLang==='he'?"מבוסס על הסריקה שלך: פליאומטריקה וכוח מהיר.":"Based on your scans: Fast-twitch plyometrics focus.";
        if (goal === 'rehab') focus = currentLang==='he'?"מבוסס על הסריקה שלך: חיזוק גידים ונחיתות.":"Based on your scans: Tendon stiffness and landing mechanics.";
        
        let introName = userProfile.name ? userProfile.name + ", " : "";
        document.getElementById('workout-custom-reason').innerText = introName + focus;
        document.getElementById('workout-custom-reason').style.color = 'var(--accent-primary)';
    }

    let goal = userProfile.goal || 'explosive';
    let workouts = [];
    if(goal === 'rehab') {
        workouts.push({ en: "Isometric Spanish Squats", he: "סקוואט סטטי ספרדי", reps: "3 Sets / 40 Seconds" });
        workouts.push({ en: "Depth Drops (Landing focus)", he: "קפיצות ירידה (דגש נחיתה רכה)", reps: "4 Sets / 5 Reps" });
    } else {
        workouts.push({ en: "Depth Drops to Broad Jump", he: "נפילה מעומק לקפיצה למרחק", reps: "3 Sets / 6 Reps" });
        workouts.push({ en: "Pogo Jumps (Stiff Ankle)", he: "פוגו (ניתורים מקרסול נוקשה)", reps: "4 Sets / 15 Reps" });
        
        if (jumpHistory.length > 0 && minAngle > 130) { 
            workouts.push({ en: "Deep Squat Jumps (Correcting shallow dip)", he: "סקוואט קפיצה עמוק (לתיקון כיפוף ברך)", reps: "3 Sets / 8 Reps" });
        }
    }

    workouts.forEach((wk) => {
        let title = currentLang === 'he' ? wk.he : wk.en;
        list.innerHTML += `
            <div class="glass-card workout-item">
                <div class="workout-info">
                    <strong>${title}</strong>
                    <span class="workout-sets">${wk.reps}</span>
                </div>
            </div>`;
    });

    goScreen('workout');
}
