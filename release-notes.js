// Fake Jira-style release data
const releases = [
    {
        version: "2.4.0",
        date: "October 15, 2024",
        title: "Mobile Experience & AI Features",
        description: "Introducing mobile app integration and AI-powered insights to help you work smarter",
        isLatest: true,
        changes: {
            features: [
                { text: "Mobile App Integration with push notifications", jira: "OG-1234" },
                { text: "AI-Powered Insights engine for usage analytics", jira: "OG-1235" },
                { text: "Real-time collaboration in document editing", jira: "OG-1236" }
            ],
            improvements: [
                { text: "Enhanced search with fuzzy matching and filters", jira: "OG-1240" },
                { text: "Performance optimization reducing load time by 40%", jira: "OG-1241" }
            ],
            fixes: [
                { text: "Fixed issue with date picker in Safari browser", jira: "OG-1245" },
                { text: "Resolved memory leak in dashboard widgets", jira: "OG-1246" }
            ]
        },
        contributors: ["JD", "SM", "AK", "LR"]
    },
    {
        version: "2.3.0",
        date: "October 1, 2024",
        title: "Advanced Reporting & Analytics",
        description: "Create custom reports with our new drag-and-drop dashboard builder",
        isMajor: true,
        changes: {
            features: [
                { text: "Advanced Reporting Dashboard with customizable widgets", jira: "OG-1200" },
                { text: "Export reports to PDF, Excel, and PowerPoint", jira: "OG-1201" },
                { text: "Scheduled report delivery via email", jira: "OG-1202" },
                { text: "Interactive charts with drill-down capabilities", jira: "OG-1203" }
            ],
            improvements: [
                { text: "Improved data refresh performance by 60%", jira: "OG-1210" },
                { text: "Added keyboard shortcuts for common actions", jira: "OG-1211" }
            ],
            fixes: [
                { text: "Fixed chart rendering on high-DPI displays", jira: "OG-1215" },
                { text: "Resolved timezone issues in date calculations", jira: "OG-1216" }
            ]
        },
        contributors: ["RM", "TC", "NK"]
    },
    {
        version: "2.2.0",
        date: "September 20, 2024",
        title: "Vendor Management Enhancements",
        description: "Streamlined vendor workflows with new filtering and view options",
        changes: {
            features: [
                { text: "Enhanced Vendor Management with subscriber/vendor toggle", jira: "OG-1150" },
                { text: "Advanced filtering by vendor category and status", jira: "OG-1151" },
                { text: "Bulk actions for vendor records", jira: "OG-1152" }
            ],
            improvements: [
                { text: "Redesigned vendor detail page with better organization", jira: "OG-1160" },
                { text: "Added vendor performance metrics", jira: "OG-1161" }
            ],
            fixes: [
                { text: "Fixed vendor search not returning partial matches", jira: "OG-1165" },
                { text: "Corrected vendor contact information display", jira: "OG-1166" }
            ]
        },
        contributors: ["JD", "PW", "MH"]
    },
    {
        version: "2.1.0",
        date: "September 15, 2024",
        title: "Contracts Landing Page Redesign",
        description: "New personalized contracts view with customizable columns and filters",
        isMajor: true,
        changes: {
            features: [
                { text: "New Contracts Landing Page with customizable columns", jira: "OG-1100" },
                { text: "Save custom filter presets for quick access", jira: "OG-1101" },
                { text: "Contract timeline visualization", jira: "OG-1102" }
            ],
            improvements: [
                { text: "Improved contract search with autocomplete", jira: "OG-1110" },
                { text: "Enhanced pagination for large contract lists", jira: "OG-1111" }
            ],
            fixes: [
                { text: "Fixed sorting by contract end date", jira: "OG-1115" },
                { text: "Resolved column resize not persisting", jira: "OG-1116" }
            ]
        },
        contributors: ["SM", "AK", "DL"]
    },
    {
        version: "2.0.1",
        date: "September 1, 2024",
        title: "Bug Fixes & Performance",
        description: "Critical bug fixes and performance improvements",
        changes: {
            improvements: [
                { text: "Database query optimization for faster page loads", jira: "OG-1050" },
                { text: "Reduced bundle size by 25%", jira: "OG-1051" }
            ],
            fixes: [
                { text: "Fixed authentication token expiration issues", jira: "OG-1055" },
                { text: "Resolved PDF generation timeout errors", jira: "OG-1056" },
                { text: "Fixed responsive layout issues on tablet devices", jira: "OG-1057" },
                { text: "Corrected data export for international characters", jira: "OG-1058" }
            ]
        },
        contributors: ["TC", "RM"]
    },
    {
        version: "2.0.0",
        date: "August 15, 2024",
        title: "Major Platform Update",
        description: "Complete redesign with modern UI and improved user experience",
        isMajor: true,
        changes: {
            features: [
                { text: "Complete UI/UX redesign with modern look and feel", jira: "OG-1000" },
                { text: "New navigation structure for better discoverability", jira: "OG-1001" },
                { text: "Dark mode support across all modules", jira: "OG-1002" },
                { text: "Accessibility improvements (WCAG 2.1 AA compliant)", jira: "OG-1003" }
            ],
            improvements: [
                { text: "Upgraded to latest React framework", jira: "OG-1010" },
                { text: "Implemented design system for consistency", jira: "OG-1011" },
                { text: "Added comprehensive error handling", jira: "OG-1012" }
            ],
            fixes: [
                { text: "Resolved various cross-browser compatibility issues", jira: "OG-1015" }
            ]
        },
        contributors: ["JD", "SM", "AK", "LR", "TC"]
    }
];

let currentFilter = 'all';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderReleases();
});

// Render all releases
function renderReleases() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = releases.map((release, index) => {
        const hasFeatures = release.changes.features && release.changes.features.length > 0;
        const hasImprovements = release.changes.improvements && release.changes.improvements.length > 0;
        const hasFixes = release.changes.fixes && release.changes.fixes.length > 0;
        
        return `
            <div class="release-entry" data-categories="${getCategoriesString(release.changes)}">
                <div class="timeline-marker">
                    ${release.isLatest ? '🌟' : release.isMajor ? '🚀' : '📦'}
                </div>
                <div class="release-card">
                    <div class="release-header">
                        <div class="release-version">
                            <span class="version-number">v${release.version}</span>
                            ${release.isLatest ? '<span class="version-badge latest">Latest</span>' : ''}
                            ${release.isMajor ? '<span class="version-badge major">Major</span>' : ''}
                        </div>
                        <div class="release-date">📅 ${release.date}</div>
                    </div>
                    
                    <h2 class="release-title">${release.title}</h2>
                    <p class="release-description">${release.description}</p>
                    
                    <div class="changes-list">
                        ${hasFeatures ? `
                            <div class="change-category">
                                <div class="category-title">
                                    <span class="category-icon">✨</span>
                                    New Features
                                </div>
                                <ul class="change-items">
                                    ${release.changes.features.map(item => `
                                        <li class="change-item">
                                            ${item.text}
                                            <span class="jira-tag" onclick="openJira('${item.jira}')">${item.jira}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        
                        ${hasImprovements ? `
                            <div class="change-category">
                                <div class="category-title">
                                    <span class="category-icon">⚡</span>
                                    Improvements
                                </div>
                                <ul class="change-items">
                                    ${release.changes.improvements.map(item => `
                                        <li class="change-item">
                                            ${item.text}
                                            <span class="jira-tag" onclick="openJira('${item.jira}')">${item.jira}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        
                        ${hasFixes ? `
                            <div class="change-category">
                                <div class="category-title">
                                    <span class="category-icon">🐛</span>
                                    Bug Fixes
                                </div>
                                <ul class="change-items">
                                    ${release.changes.fixes.map(item => `
                                        <li class="change-item">
                                            ${item.text}
                                            <span class="jira-tag" onclick="openJira('${item.jira}')">${item.jira}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="release-footer">
                        <div class="contributors">
                            <span class="contributors-label">Contributors:</span>
                            <div class="contributor-avatars">
                                ${release.contributors.map(contributor => `
                                    <div class="contributor-avatar" title="${getContributorName(contributor)}">
                                        ${contributor}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="release-actions">
                            <button class="action-btn" onclick="shareRelease('${release.version}')">
                                📤 Share
                            </button>
                            <button class="action-btn" onclick="downloadRelease('${release.version}')">
                                📥 Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Get categories string for filtering
function getCategoriesString(changes) {
    const categories = [];
    if (changes.features && changes.features.length > 0) categories.push('features');
    if (changes.improvements && changes.improvements.length > 0) categories.push('improvements');
    if (changes.fixes && changes.fixes.length > 0) categories.push('fixes');
    return categories.join(',');
}

// Filter releases
function filterBy(category) {
    currentFilter = category;
    
    // Update button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide releases
    document.querySelectorAll('.release-entry').forEach(entry => {
        const categories = entry.dataset.categories;
        if (category === 'all' || categories.includes(category)) {
            entry.classList.remove('hidden');
        } else {
            entry.classList.add('hidden');
        }
    });
}

// Search releases
function searchReleases() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    document.querySelectorAll('.release-entry').forEach(entry => {
        const text = entry.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            entry.classList.remove('hidden');
        } else {
            entry.classList.add('hidden');
        }
    });
}

// Open Jira ticket (simulated)
function openJira(ticketId) {
    alert(`Opening Jira ticket ${ticketId}...\n\nIn a real implementation, this would open:\nhttps://your-company.atlassian.net/browse/${ticketId}`);
}

// Get full contributor name
function getContributorName(initials) {
    const names = {
        'JD': 'John Doe',
        'SM': 'Sarah Martinez',
        'AK': 'Alex Kumar',
        'LR': 'Lisa Rodriguez',
        'RM': 'Robert Miller',
        'TC': 'Tom Chen',
        'NK': 'Nina Kapoor',
        'PW': 'Paul Williams',
        'MH': 'Maria Hernandez',
        'DL': 'David Lee'
    };
    return names[initials] || initials;
}

// Share release
function shareRelease(version) {
    const url = `${window.location.href}#v${version}`;
    
    // Copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showNotification(`✅ Release v${version} link copied to clipboard!`);
        });
    } else {
        showNotification(`📋 Share link: ${url}`);
    }
}

// Download release notes
function downloadRelease(version) {
    showNotification(`📥 Downloading release notes for v${version}...`);
    // In a real implementation, this would generate a PDF or markdown file
}

// Show notification
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

// Add CSS animations
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

