// Fake feature data
const features = [
    {
        id: 1,
        title: "New Contracts Landing Page",
        description: "Personalize your contracts list with the columns and filters you need",
        enabled: true,
        isNew: true,
        adoptionRate: 78,
        releaseDate: "2024-09-15",
        category: "Contracts"
    },
    {
        id: 2,
        title: "Enhanced Vendor Management",
        description: "Easily search, filter, and toggle between subscriber and vendor views",
        enabled: true,
        isNew: true,
        adoptionRate: 65,
        releaseDate: "2024-09-20",
        category: "Vendors"
    },
    {
        id: 3,
        title: "Advanced Reporting Dashboard",
        description: "Create custom reports with drag-and-drop widgets and real-time data",
        enabled: false,
        isNew: true,
        isHot: true,
        adoptionRate: 45,
        releaseDate: "2024-10-01",
        category: "Analytics"
    },
    {
        id: 4,
        title: "Mobile App Integration",
        description: "Access key features on-the-go with our new mobile companion app",
        enabled: false,
        isNew: true,
        countdown: true,
        launchDate: new Date("2024-10-25T09:00:00"),
        adoptionRate: 0,
        category: "Mobile"
    },
    {
        id: 5,
        title: "AI-Powered Insights",
        description: "Get intelligent recommendations based on your usage patterns",
        enabled: false,
        countdown: true,
        launchDate: new Date("2024-11-15T09:00:00"),
        adoptionRate: 0,
        category: "AI"
    }
];

// Current active button
let currentButton = null;
let currentMode = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeAllButtons();
    startCountdownTimers();
});

// Initialize all buttons with their specific modes
function initializeAllButtons() {
    const buttons = [
        { id: 'btn1', mode: 'basic' },
        { id: 'btn2', mode: 'release-notes' },
        { id: 'btn3', mode: 'confetti' },
        { id: 'btn4', mode: 'countdown' },
        { id: 'btn5', mode: 'badges' },
        { id: 'btn6', mode: 'roadmap' },
        { id: 'btn7', mode: 'metrics' },
        { id: 'btn8', mode: 'suggestions' },
        { id: 'btn9', mode: 'full' }
    ];
    
    buttons.forEach(btn => {
        const element = document.getElementById(btn.id);
        if (element) {
            element.addEventListener('click', function(e) {
                e.stopPropagation();
                openDropdownForButton(btn.id, btn.mode, element);
            });
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('featuresDropdown');
        if (!dropdown.contains(e.target) && currentButton) {
            closeDropdown();
        }
    });
}

// Open dropdown for specific button
function openDropdownForButton(buttonId, mode, buttonElement) {
    currentButton = buttonElement;
    currentMode = mode;
    
    const dropdown = document.getElementById('featuresDropdown');
    const rect = buttonElement.getBoundingClientRect();
    
    // Position dropdown below the button
    dropdown.style.position = 'absolute';
    dropdown.style.top = (rect.bottom + window.scrollY + 10) + 'px';
    dropdown.style.left = (rect.left + window.scrollX) + 'px';
    dropdown.style.right = 'auto';
    
    // Render content based on mode
    renderFeaturesForMode(mode);
    
    // Show/hide elements based on mode
    document.getElementById('releaseNotesLink').style.display = 
        (mode === 'release-notes' || mode === 'full') ? 'block' : 'none';
    document.getElementById('dropdownFooter').style.display = 
        (mode === 'suggestions' || mode === 'roadmap' || mode === 'full') ? 'flex' : 'none';
    
    dropdown.classList.add('show');
    buttonElement.classList.add('active');
}

// Close dropdown
function closeDropdown() {
    const dropdown = document.getElementById('featuresDropdown');
    dropdown.classList.remove('show');
    if (currentButton) {
        currentButton.classList.remove('active');
    }
    currentButton = null;
    currentMode = null;
}

// Render features based on mode
function renderFeaturesForMode(mode) {
    const featuresList = document.getElementById('featuresList');
    let featuresToShow = [...features];
    
    switch(mode) {
        case 'basic':
            featuresToShow = features.slice(0, 4);
            break;
        case 'confetti':
            featuresToShow = features.filter(f => !f.countdown).slice(0, 2);
            break;
        case 'countdown':
            featuresToShow = features.filter(f => f.countdown);
            break;
        case 'badges':
            featuresToShow = features;
            break;
        case 'metrics':
            featuresToShow = features.slice(0, 4);
            break;
        case 'full':
            featuresToShow = features;
            break;
        default:
            featuresToShow = features.slice(0, 4);
    }
    
    renderFeatures(featuresToShow, mode);
}

// Render features in the dropdown
function renderFeatures(featuresToShow = features, mode = 'full') {
    const featuresList = document.getElementById('featuresList');
    const showConfetti = (mode === 'confetti' || mode === 'full');
    const showMetrics = (mode === 'metrics' || mode === 'full');
    
    featuresList.innerHTML = featuresToShow.map(feature => `
        <div class="feature-item" data-feature-id="${feature.id}">
            <div class="feature-header">
                <div class="feature-title-wrapper">
                    <span class="feature-title">${feature.title}</span>
                    ${feature.isNew ? '<span class="new-badge">NEW</span>' : ''}
                    ${feature.isHot ? '<span class="hot-badge">🔥 HOT</span>' : ''}
                    ${feature.countdown ? '<span class="countdown-badge">⏰ Coming Soon</span>' : ''}
                </div>
                ${!feature.countdown ? `
                    <label class="toggle-switch">
                        <input type="checkbox" ${feature.enabled ? 'checked' : ''} 
                               onchange="toggleFeature(${feature.id}, this.checked)">
                        <span class="slider"></span>
                    </label>
                ` : ''}
            </div>
            <div class="feature-description">${feature.description}</div>
            ${feature.countdown ? `
                <div class="countdown-timer" id="countdown-${feature.id}">
                    <!-- Countdown will be inserted here -->
                </div>
            ` : `
                <div class="feature-footer">
                    <div class="feature-meta">
                        <div class="adoption-rate">
                            <span>📊 ${feature.adoptionRate}%</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${feature.adoptionRate}%"></div>
                            </div>
                        </div>
                        <span>📅 ${formatDate(feature.releaseDate)}</span>
                    </div>
                </div>
            `}
        </div>
    `).join('');
}


// Toggle feature on/off with confetti celebration
function toggleFeature(featureId, enabled) {
    const feature = features.find(f => f.id === featureId);
    if (feature) {
        feature.enabled = enabled;
        
        if (enabled) {
            // Trigger confetti celebration only for confetti and full modes
            if (currentMode === 'confetti' || currentMode === 'full') {
                triggerConfetti();
            }
            
            // Show a success message
            showNotification(`🎉 ${feature.title} is now enabled!`);
            
            // Simulate adoption rate increase
            setTimeout(() => {
                feature.adoptionRate = Math.min(100, feature.adoptionRate + Math.floor(Math.random() * 10) + 5);
                renderFeaturesForMode(currentMode);
            }, 1000);
        } else {
            showNotification(`${feature.title} has been disabled`);
        }
    }
}

// Confetti celebration effect
function triggerConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Create confetti from random positions
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);

    // Also trigger a big burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Show notification toast
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 4000;
        font-weight: 600;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Countdown timer logic
function startCountdownTimers() {
    const countdownFeatures = features.filter(f => f.countdown && f.launchDate);
    
    countdownFeatures.forEach(feature => {
        updateCountdown(feature);
    });
    
    // Update every second
    setInterval(() => {
        countdownFeatures.forEach(feature => {
            updateCountdown(feature);
        });
    }, 1000);
}

function updateCountdown(feature) {
    const countdownElement = document.getElementById(`countdown-${feature.id}`);
    if (!countdownElement) return;
    
    const now = new Date().getTime();
    const distance = feature.launchDate.getTime() - now;
    
    if (distance < 0) {
        countdownElement.innerHTML = '<span style="color: #2ecc71; font-weight: bold;">🚀 Available Now!</span>';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownElement.innerHTML = `
        <div style="display: flex; gap: 0.5rem;">
            ${days > 0 ? `
                <div class="countdown-unit">
                    <span class="countdown-value">${days}</span>
                    <span class="countdown-label">days</span>
                </div>
            ` : ''}
            <div class="countdown-unit">
                <span class="countdown-value">${hours.toString().padStart(2, '0')}</span>
                <span class="countdown-label">hrs</span>
            </div>
            <div class="countdown-unit">
                <span class="countdown-value">${minutes.toString().padStart(2, '0')}</span>
                <span class="countdown-label">min</span>
            </div>
            <div class="countdown-unit">
                <span class="countdown-value">${seconds.toString().padStart(2, '0')}</span>
                <span class="countdown-label">sec</span>
            </div>
        </div>
    `;
}


// Format date helper
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Modal functions
function showFeedbackModal() {
    document.getElementById('feedbackModal').classList.add('show');
}

function closeFeedbackModal() {
    document.getElementById('feedbackModal').classList.remove('show');
}

function submitFeatureRequest(event) {
    event.preventDefault();
    triggerConfetti();
    showNotification('🎯 Thank you! Your feature request has been submitted!');
    closeFeedbackModal();
    event.target.reset();
}


// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

