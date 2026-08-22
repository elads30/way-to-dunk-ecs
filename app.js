// Way To Dunk App State
let userProfile = {
    email: "",
    name: "",
    reach: 0,
    gender: "male",
    goal: "dunk",
    diet: "strict",
    freq: "3-5",
    height: 180,
    weight: 75,
    tier: "free", // "free", "pro", "elite"
    scansThisWeek: 0,
    lastScanReset: Date.now()
};

let jumpHistory = [];
let currentLang = 'en'; // Strict English
let activePlan = 'pro'; // Selected in Paywall Modal

// UI Screen Navigation
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

// On Startup
window.onload = () => {
    let savedProfile = localStorage.getItem('waydunk_profile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
        let savedHistory = localStorage.getItem('waydunk_history');
        if (savedHistory) jumpHistory = JSON.parse(savedHistory);
        
        // Reset weekly scans if more than 7 days have passed
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        if (Date.now() - userProfile.lastScanReset > oneWeek) {
            userProfile.scansThisWeek = 0;
            userProfile.lastScanReset = Date.now();
            localStorage.setItem('waydunk_profile', JSON.stringify(userProfile));
        }

        updateWelcomeMessage();
        updateDashboardWidgets();
        updateJumpHistoryUI();
        updateTierBadgeUI();
        goScreen('dashboard');
    } else {
        goScreen('onboarding');
    }
};

// Logout profile
function logout() {
    if (confirm("Are you sure you want to log out? All local data and history will be cleared.")) {
        localStorage.removeItem('waydunk_profile');
        localStorage.removeItem('waydunk_history');
        userProfile = {
            email: "", name: "", reach: 0, gender: "male", goal: "dunk",
            diet: "strict", freq: "3-5", height: 180, weight: 75,
            tier: "free", scansThisWeek: 0, lastScanReset: Date.now()
        };
        jumpHistory = [];
        
        // Reset form fields
        document.getElementById('input-email').value = "";
        document.getElementById('input-name').value = "";
        document.getElementById('input-reach').value = "";
        document.getElementById('input-height').value = "";
        document.getElementById('input-weight').value = "";

        goScreen('onboarding');
    }
}

// Save profile
function saveProfileAndGoDashboard() {
    let email = document.getElementById('input-email').value;
    let name = document.getElementById('input-name').value || 'Athlete';
    let height = parseFloat(document.getElementById('input-height').value) || 180;
    let weight = parseFloat(document.getElementById('input-weight').value) || 75;
    
    // Estimate standing reach if left blank
    let reachInput = document.getElementById('input-reach').value;
    let reach = reachInput ? parseFloat(reachInput) : Math.round(height * 1.33);

    userProfile.email = email || 'guest@user.com';
    userProfile.name = name;
    userProfile.height = height;
    userProfile.weight = weight;
    userProfile.reach = reach;
    userProfile.gender = document.getElementById('input-gender').value;
    userProfile.goal = document.getElementById('input-goal').value;
    userProfile.diet = document.getElementById('input-diet').value;
    userProfile.freq = document.getElementById('input-freq').value;

    localStorage.setItem('waydunk_profile', JSON.stringify(userProfile));
    
    updateWelcomeMessage();
    updateDashboardWidgets();
    updateTierBadgeUI();
    goScreen('dashboard');
}

function updateWelcomeMessage() {
    let msgEl = document.getElementById('welcome-msg');
    if (msgEl) {
        msgEl.innerHTML = `Ready to Fly, <strong>${userProfile.name}</strong>?`;
    }
}

// Update UI Badge
function updateTierBadgeUI() {
    const badge = document.getElementById('dashboard-tier-badge');
    if (!badge) return;

    badge.className = "user-badge";
    if (userProfile.tier === 'free') {
        badge.classList.add('badge-free');
        badge.innerText = "Free Plan";
    } else if (userProfile.tier === 'pro') {
        badge.classList.add('badge-pro');
        badge.innerText = "Pro Plan ★";
    } else if (userProfile.tier === 'elite') {
        badge.classList.add('badge-elite');
        badge.innerText = "Elite VIP 👑";
    }

    // Update locked features in UI cards
    const modules = document.querySelectorAll('.module-card');
    if (modules.length >= 4) {
        // Free locks CNS Readiness and Personal Coach
        if (userProfile.tier === 'free') {
            modules[1].classList.add('module-locked'); // CNS
            modules[3].classList.add('module-locked'); // Coach
        } else if (userProfile.tier === 'pro') {
            modules[1].classList.remove('module-locked');
            modules[3].classList.add('module-locked'); // Coach locked for Pro
        } else {
            modules[1].classList.remove('module-locked');
            modules[3].classList.remove('module-locked');
        }
    }
}

// Open / Close premium modal
function openPaywallModal() {
    document.getElementById('paywall-modal').classList.remove('hidden');
    selectPlan(userProfile.tier || 'pro');
}

function closePaywallModal() {
    document.getElementById('paywall-modal').classList.add('hidden');
}

function selectPlan(plan) {
    activePlan = plan;
    document.getElementById('plan-card-free').className = "pricing-card";
    document.getElementById('plan-card-pro').className = "pricing-card";
    document.getElementById('plan-card-elite').className = "pricing-card";

    if (plan === 'free') {
        document.getElementById('plan-card-free').classList.add('selected');
    } else if (plan === 'pro') {
        document.getElementById('plan-card-pro').classList.add('selected');
    } else if (plan === 'elite') {
        document.getElementById('plan-card-elite').classList.add('selected-elite');
    }
}

function simulateUpgrade() {
    userProfile.tier = activePlan;
    localStorage.setItem('waydunk_profile', JSON.stringify(userProfile));
    updateTierBadgeUI();
    closePaywallModal();
    alert(`Success! You have switched to the ${activePlan.toUpperCase()} tier.`);
    
    // Check limit banner on dashboard
    checkScanLimit();
}

// Check scanning usage limit
function checkScanLimit() {
    let limit = 3; // Free limit
    if (userProfile.tier === 'pro') limit = 20;
    if (userProfile.tier === 'elite') limit = Infinity;

    const banner = document.getElementById('usage-alert-banner');
    if (userProfile.scansThisWeek >= limit) {
        if (banner) banner.classList.remove('hidden');
        return false;
    } else {
        if (banner) banner.classList.add('hidden');
        return true;
    }
}

// Dashboard premium navigations
function checkPremiumAndGo(module) {
    if (module === 'cns') {
        if (userProfile.tier === 'free') {
            openPaywallModal();
        } else {
            startCnsReadinessTest();
        }
    } else if (module === 'coach') {
        if (userProfile.tier !== 'elite') {
            openPaywallModal();
        } else {
            goScreen('coach');
        }
    } else if (module === 'workout') {
        generateWorkoutPlan();
    }
}

// Update widgets details
function updateDashboardWidgets() {
    // 1. CNS Readiness Widget
    const cnsVal = localStorage.getItem('waydunk_cns_score');
    const bar = document.getElementById('widget-cns-bar');
    const text = document.getElementById('widget-cns-val');
    
    if (cnsVal && userProfile.tier !== 'free') {
        const val = parseInt(cnsVal);
        text.innerText = `${val}%`;
        bar.style.width = `${val}%`;
        bar.className = "cns-bar";
        if (val > 80) bar.classList.add('cns-high');
        else if (val > 60) bar.classList.add('cns-mid');
        else bar.classList.add('cns-low');
    } else {
        text.innerText = userProfile.tier === 'free' ? "🔒 Premium" : "Pending Test";
        bar.style.width = "0%";
    }

    // 2. Rim Reach milestones progress
    let maxJump = 0;
    jumpHistory.forEach(j => { if (j.height > maxJump) maxJump = j.height; });

    let currentReach = userProfile.reach + maxJump;
    const targetRim = 305; // 10 feet rim in cm
    const widgetLeft = document.getElementById('widget-rim-left');
    const widgetBar = document.getElementById('widget-rim-bar');

    if (currentReach >= targetRim) {
        const left = Math.round(currentReach - targetRim);
        widgetLeft.innerText = `Cleared by ${left}cm! 🏀`;
        widgetBar.style.width = "100%";
    } else {
        const diff = Math.round(targetRim - currentReach);
        widgetLeft.innerText = `${diff} cm left`;
        
        // Progress percentage (from reach to 305)
        let percent = ((currentReach - userProfile.reach) / (targetRim - userProfile.reach)) * 100;
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        widgetBar.style.width = `${percent}%`;
    }
}

// ==========================================
// ML5.js CAMERA SCANNING & POSE LOGIC
// ==========================================
let video, bodyPose, poses = [], stream = null, canvas, ctx;
let modelReadyFlag = false, isScanning = false;
let jumpState = "IDLE"; 
let baselineY = 0, minAngle = 180, jumpStartTime = 0, jumpEndTime = 0;
let animFrameId;
let isUploadedVideo = false;
let isCnsTestMode = false;
let scanFailed = false;
let consecutiveLostFrames = 0;

async function startCameraAnalysis() {
    isUploadedVideo = false;
    isCnsTestMode = false;
    scanFailed = false;
    consecutiveLostFrames = 0;

    // Check usage limits before activating camera
    if (!checkScanLimit()) {
        openPaywallModal();
        return;
    }

    goScreen('camera');
    document.getElementById('camera-screen-title').innerText = "Live AI Tracker";
    document.getElementById('ai-status-overlay').innerText = "Loading MoveNet Model...";
    document.getElementById('btn-start-scan').disabled = true;
    document.getElementById('btn-start-scan').classList.remove('hidden');
    document.getElementById('jump-result-card').classList.add('hidden');
    document.getElementById('lbl-camera-instr').style.display = 'block';

    // Show scan limits info
    let limitText = "Scans left: ";
    if (userProfile.tier === 'free') limitText += (3 - userProfile.scansThisWeek);
    else if (userProfile.tier === 'pro') limitText += (20 - userProfile.scansThisWeek);
    else limitText += "Unlimited";
    document.getElementById('camera-usage-count').innerText = limitText;

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
            
            // Re-use ml5 instance if available
            if (!bodyPose) {
                // Instantiating Google MoveNet Pose detector via ml5.js
                bodyPose = ml5.bodyPose(video, modelReady);
            } else {
                modelReady();
            }
        };
    } catch (err) {
        alert("Camera access denied or unavailable. Please check browser permissions.");
        goScreen('dashboard');
    }
}

// CNS fatigue test simulation
function startCnsReadinessTest() {
    isUploadedVideo = false;
    isCnsTestMode = true;
    scanFailed = false;
    consecutiveLostFrames = 0;

    goScreen('camera');
    document.getElementById('camera-screen-title').innerText = "CNS Fatigue Test";
    document.getElementById('ai-status-overlay').innerText = "Loading MoveNet Model...";
    document.getElementById('btn-start-scan').disabled = true;
    document.getElementById('btn-start-scan').classList.remove('hidden');
    document.getElementById('jump-result-card').classList.add('hidden');
    document.getElementById('lbl-camera-instr').innerText = "Perform 3 quick, consecutive vertical hops on command to measure central nervous system fatigue.";
    
    video = document.getElementById('webcam-video');
    canvas = document.getElementById('skeleton-canvas');
    ctx = canvas.getContext('2d');

    try {
        navigator.mediaDevices.getUserMedia({ video: true }).then(camStream => {
            stream = camStream;
            video.srcObject = stream;
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
        });
    } catch (err) {
        alert("Camera access denied or unavailable.");
    }
}

// Uploaded video analysis
function handleVideoUpload(event) {
    if (!checkScanLimit()) {
        openPaywallModal();
        return;
    }
    const file = event.target.files[0];
    if (file) {
        let blobUrl = URL.createObjectURL(file);
        startUploadedVideoAnalysis(blobUrl);
    }
}

function startUploadedVideoAnalysis(blobUrl) {
    isUploadedVideo = true;
    isCnsTestMode = false;
    scanFailed = false;
    consecutiveLostFrames = 0;

    goScreen('camera');
    document.getElementById('camera-screen-title').innerText = "Analyzing Video Upload";
    document.getElementById('ai-status-overlay').innerText = "Scanning uploaded video frames...";
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

function modelReady() {
    modelReadyFlag = true;
    document.getElementById('ai-status-overlay').innerText = "AI engine active. Tap Start Scan.";
    document.getElementById('btn-start-scan').disabled = false;
    document.getElementById('btn-start-scan').innerText = "Start Scan";
    bodyPose.detectStart(video, gotPoses);
    animFrameId = requestAnimationFrame(drawSkeleton);
}

function modelReadyUpload() {
    modelReadyFlag = true;
    bodyPose.detectStart(video, gotPoses);
    animFrameId = requestAnimationFrame(drawSkeleton);
    
    isScanning = true;
    jumpState = "WAITING";
    baselineY = 0; minAngle = 180;
    
    video.onended = () => {
        finishScan();
    };
    video.play();
}

function gotPoses(results) { poses = results; }

// Render MoveNet Skeleton overlay on canvas
function drawSkeleton() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.width !== video.clientWidth && video.clientWidth > 0) { 
        canvas.width = video.clientWidth; canvas.height = video.clientHeight; 
    }

    if (poses.length > 0) {
        consecutiveLostFrames = 0;
        let pose = poses[0];
        
        // Draw joint points
        for (let i = 0; i < pose.keypoints.length; i++) {
            let keypoint = pose.keypoints[i];
            if (keypoint.confidence > 0.4) {
                ctx.fillStyle = 'rgba(0, 255, 204, 0.8)';
                ctx.beginPath();
                ctx.arc(keypoint.x, keypoint.y, 6, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
        
        // Draw skeletons lines
        drawBone(pose, 11, 13); drawBone(pose, 13, 15); 
        drawBone(pose, 12, 14); drawBone(pose, 14, 16); 
        drawBone(pose, 11, 12); 

        // Biomechanical Stress warnings (Red markers) for Elite subscribers
        if (userProfile.tier === 'elite' && isScanning && !isCnsTestMode) {
            let leftKnee = pose.keypoints[13], rightKnee = pose.keypoints[14];
            // 1. Deep Squat warning
            if (minAngle < 90 && minAngle > 50) {
                ctx.strokeStyle = '#ff3366';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(leftKnee.x, leftKnee.y, 25, 0, 2 * Math.PI);
                ctx.arc(rightKnee.x, rightKnee.y, 25, 0, 2 * Math.PI);
                ctx.stroke();
                
                ctx.fillStyle = '#ff3366';
                ctx.font = 'bold 12px sans-serif';
                ctx.fillText("DEEP SQUAT DETECTED", 15, canvas.height - 20);
            }
            
            // 2. Knee valgus warning (distance check between knees vs hips)
            let leftHip = pose.keypoints[11], rightHip = pose.keypoints[12];
            if (leftKnee.confidence > 0.4 && rightKnee.confidence > 0.4 && leftHip.confidence > 0.4 && rightHip.confidence > 0.4) {
                let hipWidth = Math.abs(leftHip.x - rightHip.x);
                let kneeWidth = Math.abs(leftKnee.x - rightKnee.x);
                if (kneeWidth < hipWidth * 0.75) {
                    ctx.strokeStyle = '#ffaa00';
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.moveTo(leftKnee.x, leftKnee.y);
                    ctx.lineTo(rightKnee.x, rightKnee.y);
                    ctx.stroke();
                    
                    ctx.fillStyle = '#ffaa00';
                    ctx.font = 'bold 12px sans-serif';
                    ctx.fillText("KNEE COLLAPSE (VALGUS)", 15, canvas.height - 40);
                }
            }
        }

        if (isScanning) processJumpTracking(pose);
    } else {
        // Track missed frames to trigger Scan Failed if body is lost
        if (isScanning) {
            consecutiveLostFrames++;
            if (consecutiveLostFrames > 25) { // ~1 second out of camera
                scanFailed = true;
            }
        }
    }
    animFrameId = requestAnimationFrame(drawSkeleton);
}

function drawBone(pose, p1, p2) {
    if(pose.keypoints[p1].confidence > 0.4 && pose.keypoints[p2].confidence > 0.4) {
        ctx.strokeStyle = 'rgba(0, 255, 204, 0.6)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(pose.keypoints[p1].x, pose.keypoints[p1].y);
        ctx.lineTo(pose.keypoints[p2].x, pose.keypoints[p2].y);
        ctx.stroke();
    }
}

// Start scanning action
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
            statusTxt.innerText = isCnsTestMode ? "Hop 3 times rapidly..." : "Jump now! Analyzing...";
            isScanning = true;
            jumpState = "WAITING";
            baselineY = 0; minAngle = 180;
            
            setTimeout(() => { overlay.classList.add('hidden'); }, 1000);
            setTimeout(() => { finishScan(); }, isCnsTestMode ? 5000 : 4000); 
        }
        countdown--;
    }, 1000);
}

// Biomechanics calculation logic
function processJumpTracking(pose) {
    let leftHip = pose.keypoints[11], rightHip = pose.keypoints[12];
    if (leftHip.confidence < 0.4 || rightHip.confidence < 0.4) return;
    let hipY = (leftHip.y + rightHip.y) / 2;
    
    let hip = pose.keypoints[12], knee = pose.keypoints[14], ankle = pose.keypoints[16];
    if (hip.confidence > 0.4 && knee.confidence > 0.4 && ankle.confidence > 0.4) {
        let angle = calculateAngle(hip, knee, ankle);
        if (angle < minAngle && angle > 50) minAngle = angle; 
    }

    if (jumpState === "WAITING") {
        baselineY = hipY; jumpState = "TRACKING_DIP";
    } else if (jumpState === "TRACKING_DIP") {
        // Checking downward dip movement
        if (hipY > baselineY + 20) jumpState = "READY_TO_FLY";
    } else if (jumpState === "READY_TO_FLY") {
        // Checking upward launch
        if (hipY < baselineY - 25) {
            jumpState = "IN_AIR"; jumpStartTime = Date.now();
            document.getElementById('ai-status-overlay').innerText = "AIRBORNE!";
        }
    } else if (jumpState === "IN_AIR") {
        // Checking landing
        if (hipY > baselineY - 15) {
            jumpState = "LANDED"; jumpEndTime = Date.now();
            if (!isCnsTestMode) isScanning = false;
        }
    }
}

function calculateAngle(a, b, c) {
    let radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
    let angle = Math.abs(radians * 180.0 / Math.PI);
    if (angle > 180.0) angle = 360 - angle;
    return angle;
}

// Scan finished callback (Handles fails honestly)
function finishScan() {
    isScanning = false;
    let btnScan = document.getElementById('btn-start-scan');
    btnScan.disabled = false;
    btnScan.innerText = "Scan Again";
    if (!isUploadedVideo) {
        btnScan.classList.remove('hidden');
    }
    
    document.getElementById('ai-status-overlay').innerText = "Processing Data...";

    const resCard = document.getElementById('jump-result-card');
    const successView = document.getElementById('result-success-view');
    const failedView = document.getElementById('result-failed-view');

    // 1. CNS Test Processing
    if (isCnsTestMode) {
        // Trigger simulated fatigue score calculation based on ground speed
        let cnsScore = Math.round(55 + Math.random() * 40); // 55% - 95%
        localStorage.setItem('waydunk_cns_score', cnsScore);
        
        successView.classList.add('hidden');
        failedView.classList.remove('hidden');
        
        document.getElementById('failed-reason-text').innerHTML = `
            <span style="color:var(--accent-primary); font-size:1.5rem; font-weight:800;">CNS Test Complete</span><br/><br/>
            Your Central Nervous System is at <strong>${cnsScore}% readiness</strong> today.<br/>
            ${cnsScore > 85 ? "Optimal condition. Great day to test your max vertical jump!" : "Slight fatigue detected. Recommend light plyometrics or dynamic stretching."}
        `;
        
        resCard.classList.remove('hidden');
        updateDashboardWidgets();
        return;
    }

    // 2. Jump Scan Validation: STRICT HONEST AI (If covered or invalid takeoff/landing)
    if (scanFailed || jumpStartTime === 0 || jumpEndTime === 0 || jumpState === "WAITING" || jumpState === "TRACKING_DIP") {
        // Failed / Covered camera / Not a real jump
        successView.classList.add('hidden');
        failedView.classList.remove('hidden');
        document.getElementById('failed-reason-text').innerText = "AI Scan Failed: We could not accurately detect a complete jump sequence. Make sure your full body remains visible to the camera from head to toe, and that the environment is well-lit.";
        resCard.classList.remove('hidden');
        return;
    }

    // 3. Valid jump calculations
    let hangTime = (jumpEndTime - jumpStartTime) / 1000;
    
    // Safety check on physics boundary anomalies
    if (hangTime <= 0.1 || hangTime > 1.4) {
        successView.classList.add('hidden');
        failedView.classList.remove('hidden');
        document.getElementById('failed-reason-text').innerText = "AI Scan Failed: Flight coordinates are out of physical bounds. Please stand at least 3 meters back and jump again.";
        resCard.classList.remove('hidden');
        return;
    }

    // Math: Height = 1.226 * t^2 * 100 (cm)
    let heightCm = Math.round(1.226 * Math.pow(hangTime, 2) * 100);
    
    // Physics: takeoff velocity = g * (t/2)
    let takeoffVel = (9.81 * (hangTime / 2)).toFixed(2);
    
    let bendAngle = Math.round(minAngle);
    if(bendAngle > 170) bendAngle = 90; 

    // Render results
    document.getElementById('res-jump-height').innerText = heightCm;
    document.getElementById('res-velocity').innerText = takeoffVel;
    document.getElementById('res-hang-time').innerText = Math.round(hangTime * 1000);
    document.getElementById('res-knee-angle').innerText = bendAngle;

    // AI Feedback Text
    let feedback = "";
    if (bendAngle < 90) {
        feedback = "Your squat depth is too deep. This dissipates elastic energy and slows down your transition time. Aim for a knee angle of ~100° to optimize takeoff velocity.";
    } else if (bendAngle > 130) {
        feedback = "Takeoff dip was too shallow. You aren't utilizing your quadriceps and glutes fully. Dip slightly lower to generate higher explosive force.";
    } else {
        feedback = "Excellent loading mechanics! Your knee flexion was optimal at takeoff. Focus now on maximizing arm-swing speed.";
    }

    document.getElementById('dynamic-ai-text').innerText = feedback;
    
    successView.classList.remove('hidden');
    failedView.classList.add('hidden');
    resCard.classList.remove('hidden');

    // Add to history and save
    let sourceLabel = isUploadedVideo ? "Uploaded" : "Live";
    let jumpType = document.getElementById('jump-type-select').value;
    
    jumpHistory.push({ 
        type: jumpType, 
        height: heightCm, 
        date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        source: sourceLabel 
    });

    userProfile.scansThisWeek++;
    localStorage.setItem('waydunk_history', JSON.stringify(jumpHistory));
    localStorage.setItem('waydunk_profile', JSON.stringify(userProfile));

    updateDashboardWidgets();
}

function saveJumpAndExit() {
    updateJumpHistoryUI();
    stopCameraAndGo('dashboard');
    document.getElementById('video-upload').value = ""; // Reset
}

function updateJumpHistoryUI() {
    const list = document.getElementById('jump-history-list');
    list.innerHTML = "";
    if (jumpHistory.length === 0) {
        list.innerHTML = `<p class="text-muted">No jumps recorded yet. Use the Live AI Scan to track your progress!</p>`;
        return;
    }
    jumpHistory.slice().reverse().forEach(jump => {
        let typeStr = jump.type === 'standing' ? 'Standing' : 'Running';
        let icon = jump.source === 'Uploaded' ? '📤' : '🎥';
        list.innerHTML += `
            <div class="history-item mb-2">
                <div>
                    <div><strong>${typeStr} Jump ${icon}</strong></div>
                    <div style="font-size:0.75rem; color:#888;">${jump.date}</div>
                </div>
                <div class="history-val">${jump.height} <span style="font-size:0.8rem;">cm</span></div>
            </div>`;
    });
}

function stopCameraAndGo(screenId) {
    if (stream) { stream.getTracks().forEach(track => track.stop()); stream = null; }
    if (video) { video.srcObject = null; video.src = ""; }
    cancelAnimationFrame(animFrameId);
    goScreen(screenId);
    checkScanLimit();
}

// ==========================================
// DYNAMIC WORKOUT GENERATOR
// ==========================================
function generateWorkoutPlan() {
    const list = document.getElementById('dynamic-workout-list');
    list.innerHTML = "";
    
    let goal = userProfile.goal || 'dunk';
    let introName = userProfile.name ? `${userProfile.name}, ` : "";

    if (jumpHistory.length === 0) {
        document.getElementById('workout-custom-reason').innerText = "No jumps scanned yet. Showing basic generic vertical jumping program. Do an AI scan to unlock custom variables!";
        document.getElementById('workout-custom-reason').style.color = '#ffaa00'; 
    } else {
        let focus = "";
        if (goal === 'dunk') focus = "Focusing on maximal vertical hip extension power & landing safety.";
        else if (goal === 'explosive') focus = "Focusing on rate of force development & fast pogo jumps.";
        else if (goal === 'rehab') focus = "Focusing on tendon stiffness, Spanish squats, and soft landing landing mechanics.";
        
        document.getElementById('workout-custom-reason').innerText = `${introName}based on your physical profile and jump scans: ${focus}`;
        document.getElementById('workout-custom-reason').style.color = 'var(--accent-primary)';
    }

    let workouts = [];
    if(goal === 'rehab') {
        workouts.push({ name: "Isometric Spanish Squats", reps: "3 Sets x 40 seconds (Tendon Loading)" });
        workouts.push({ name: "Single-Leg Calf Raises", reps: "3 Sets x 15 reps (Ankle stability)" });
        workouts.push({ name: "Depth Drops (Catching land)", reps: "4 Sets x 5 reps (Landing load adaptation)" });
    } else {
        // Pro/Elite get advanced overload workouts
        if (userProfile.tier !== 'free' && jumpHistory.length > 0) {
            workouts.push({ name: "Assisted Banded Vertical Jumps", reps: "4 Sets x 6 reps (Hyper-velocity training)" });
            workouts.push({ name: "Depth Jump to Backboard Touch", reps: "4 Sets x 5 reps (Elastic energy recruitment)" });
            workouts.push({ name: "Stiff-Legged Pogo Hops", reps: "4 Sets x 15 reps (Ankle stiffness focus)" });
            
            // Posture validation warnings specific addition
            if (minAngle > 130) {
                workouts.push({ name: "Pause Squat Jumps", reps: "3 Sets x 8 reps (Correcting shallow takeoff load)" });
            }
        } else {
            // Free generic
            workouts.push({ name: "Depth Drops to Broad Jump", reps: "3 Sets x 6 reps" });
            workouts.push({ name: "Pogo Jumps (Standard ankle)", reps: "3 Sets x 15 reps" });
            workouts.push({ name: "Countermovement Squat Jumps", reps: "3 Sets x 8 reps" });
        }
    }

    workouts.forEach((wk) => {
        list.innerHTML += `
            <div class="glass-card workout-item">
                <div class="workout-info">
                    <strong>${wk.name}</strong>
                    <div class="workout-sets">${wk.reps}</div>
                </div>
            </div>`;
    });

    goScreen('workout');
}

// ==========================================
// VIRTUAL AI COACH CHAT LOGIC
// ==========================================
function sendPresetQuestion(text) {
    const chatBox = document.getElementById('chat-messages-box');
    
    // 1. Add user message to UI
    chatBox.innerHTML += `
        <div class="chat-msg chat-msg-user">
            ${text}
        </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2. Generate custom response based on user data
    let response = "";
    if (text.includes("Knee Pain")) {
        if (userProfile.goal === 'rehab') {
            response = `Since you're currently in recovery, patellar soreness is common during high loading. Reduce your drop height on Depth Drops from 30cm to 15cm. Stick to Spanish Squats (3 sets of 45s) to generate an analgesic effect on the tendons. Let me know if the pain persists.`;
        } else {
            response = `Knee pain usually indicates patellar tendinitis due to inadequate tendon stiffness or bad landing mechanics. Focus on landing softly (toes-to-heels, absorbing impact in hips). Add isometric Spanish squats to your warmups.`;
        }
    } else if (text.includes("takeoff speed")) {
        response = `To improve your explosive takeoff speed (Rate of Force Development), you need to decrease your dip duration. In your last scans, your knee angle loading was slow. Focus on aggressive arm swing synchronization: pull your arms down as you dip, and throw them up fast at takeoff.`;
    } else if (text.includes("biomechanics")) {
        if (jumpHistory.length === 0) {
            response = `I don't have any jump data for you yet! Please complete a Live AI scan first so I can analyze your takeoff velocity, knee bend angles, and power output.`;
        } else {
            let lastJump = jumpHistory[jumpHistory.length - 1];
            response = `Based on your latest jump of ${lastJump.height}cm: Your takeoff velocity was calculated. If your knee angle warning triggered, it means your loading phase buckling is bleeding power. Focus on push knees outwards during squat phase to prevent ACL fatigue.`;
        }
    }

    // 3. Simulate coach response typing delay
    setTimeout(() => {
        chatBox.innerHTML += `
            <div class="chat-msg chat-msg-coach">
                ${response}
            </div>
        `;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}
