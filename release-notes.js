// Real OpenGov Procurement release data
const releases = [
    {
        version: "June 2025",
        date: "June 2025",
        title: "Contract Audit & Spend Tracking",
        description: "Enhanced audit logging and API integrations for contract management",
        isLatest: true,
        changes: {
            features: [
                { text: "Contract Record Audit Log Improvements - Several updates to clean up the audit log formatting and include additional events, now storing status updates including deletion events for related assembled contract documents", jira: "PROC-2501" },
                { text: "Integrate Contract Spend Data - Track contract spend programmatically using our public API to automate bringing spend data to OpenGov", jira: "PROC-2502" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["PS", "ENG"]
    },
    {
        version: "May 2025",
        date: "May 2025",
        title: "Workflow & Template Enhancements",
        description: "Major updates to contract workflows, templating, and vendor integrations",
        isMajor: true,
        changes: {
            features: [
                { text: "Close Out Project Reasons - Closing out projects now displays reasons clearly, with filtering and viewing based on close out reason", jira: "PROC-2401" },
                { text: "Contract Record Audit History - Full read-only history of changes for contract records", jira: "PROC-2402" },
                { text: "Sign an External Agreement - Follow esignature and contract approval process for external agreements with vendors", jira: "PROC-2403" },
                { text: "Templated Pricing Tables - Create default pricing table setups in solicitation templates", jira: "PROC-2404" },
                { text: "Customizing Request Workflow (Mid Request) - Dynamically add approvers, confirmations, or notifications directly into in-progress workflows using On-the-Fly Approver feature", jira: "PROC-2405" },
                { text: "Triage-Based Reviewer in Workflow Sequence - Assign next step in workflow dynamically using triage-based reviewer assignment", jira: "PROC-2406" },
                { text: "Pavilion Search Integration in Requisitions - Easily discover cooperative contracts using Pavilion Search embedded in Request Form", jira: "PROC-2407" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["PS", "ENG", "PM"]
    },
    {
        version: "April 2025",
        date: "April 2025",
        title: "Document Management Updates",
        description: "Bulk upload capabilities for contract documents",
        changes: {
            features: [
                { text: "Bulk upload for contract documents - Drag and drop multiple documents into a contract record for easy file management", jira: "PROC-2301" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["ENG"]
    },
    {
        version: "March 2025",
        date: "March 2025",
        title: "Contract Visibility & Pricing Enhancements",
        description: "Improved internal controls and flexible pricing options",
        changes: {
            features: [
                { text: "Contract visibility for internal users - Set contracts to be visible for all users in your agency via toggle in site settings", jira: "PROC-2201" },
                { text: "Percentage Column in Pricing Table - Now accepts both Discount and Markup options, with markup adding to unit cost", jira: "PROC-2202" }
            ],
            improvements: [
                { text: "Several bug fixes and usability enhancements", jira: "PROC-2210" }
            ],
            fixes: []
        },
        contributors: ["PS", "ENG"]
    },
    {
        version: "February 2025",
        date: "February 2025",
        title: "E-Signature & Contract Packet Compiler",
        description: "Major enhancements to contract authoring and execution process",
        isMajor: true,
        changes: {
            features: [
                { text: "E-signature and contract packet compiler - Automatically compile exhibits into contract packet and route all documents for electronic signature entirely through OpenGov", jira: "PROC-2101" }
            ],
            improvements: [
                { text: "End-to-end contract packet execution process with no additional e-signature provider needed", jira: "PROC-2110" }
            ],
            fixes: []
        },
        contributors: ["PS", "ENG", "PM"]
    },
    {
        version: "January 2025",
        date: "January 2025",
        title: "Records Retention & Audit Log Expansion",
        description: "Enhanced retention management and public audit capabilities",
        changes: {
            features: [
                { text: "Records retention enhancements - Updated language, enhanced filtering table for contracts with renewals, ability to export deletion history", jira: "PROC-2001" },
                { text: "Contract Public Audit Log Expansion - Now shows both when something was made public and when it's removed from public domain", jira: "PROC-2002" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["ENG", "PS"]
    },
    {
        version: "December 31, 2024",
        date: "December 31, 2024",
        title: "Vendor Evaluation Reminders",
        description: "Configurable annual evaluation notification system",
        changes: {
            features: [
                { text: "Toggle for annual evaluation reminders - Configurable notification system for vendor evaluations that auto-updates each year", jira: "PROC-1901" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["PS"]
    },
    {
        version: "December 1, 2024",
        date: "December 1, 2024",
        title: "Security & Notification Controls",
        description: "Enhanced security and flexible vendor notification options",
        changes: {
            features: [
                { text: "Remove Vendor Link and Contract Amount from Public Contracts Portal - Enhanced security by removing vendor hyperlink, contact info, and contract dollar amount from public portal", jira: "PROC-1801" },
                { text: "Disable Vendor Notifications When Solicitation Is Posted - Intentional switch in Posting Options to control vendor notifications", jira: "PROC-1802" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["ENG", "SEC"]
    },
    {
        version: "November 15, 2024",
        date: "November 15, 2024",
        title: "Navigation & AI-Powered Discovery",
        description: "Major UI updates and AI-powered vendor discovery features",
        isMajor: true,
        changes: {
            features: [
                { text: "Updated Navigation Bar - New top navigation bar harmonized with other OpenGov products", jira: "PROC-1701" },
                { text: "Vendor Public Portal - Optional new tab in public site mirroring internal vendor management view", jira: "PROC-1702" },
                { text: "New Signature Tab in Contracts - Simple and powerful editor for creating signature pages with automation", jira: "PROC-1703" },
                { text: "Enhanced Formatting Options for Contracts - Configure text sections with flexible title and numbering options", jira: "PROC-1704" },
                { text: "Discover Vendors with AI - AI-powered supplier recommendations based on solicitation details with direct links to supplier websites", jira: "PROC-1705" }
            ],
            improvements: [
                { text: "Data Read API - Three new datasets available: Contracts with Spend, Contract Documents, and Solicitations", jira: "PROC-1710" }
            ],
            fixes: []
        },
        contributors: ["ENG", "AI", "PM"]
    },
    {
        version: "November 1, 2024",
        date: "November 1, 2024",
        title: "Terminology & Workflow Updates",
        description: "Updated contract terminology and exception workflow capabilities",
        changes: {
            features: [
                { text: "Request Management Exception/Determination Workflows - Requests can now be assigned to Exception Workflows (Sole Source, Emergency, Cooperative)", jira: "PROC-1601" }
            ],
            improvements: [
                { text: "Update contract labels to 'cooperative' - Replaced 'piggyback' with 'cooperative' and clarified language differentiating acquisition method", jira: "PROC-1610" },
                { text: "Clarify language about contract permissions - Updated language across Procurement to clarify how permissions apply to documents vs records", jira: "PROC-1611" }
            ],
            fixes: []
        },
        contributors: ["PS", "ENG"]
    },
    {
        version: "October 1, 2024",
        date: "October 1, 2024",
        title: "Contract Management Enhancements",
        description: "Vendor evaluations, category codes, and contract attachments improvements",
        changes: {
            features: [
                { text: "Send notification reminders to provide vendor evaluations - Auto-populate notifications to create annual vendor evaluation", jira: "PROC-1501" },
                { text: "Rename attachments on contract record - Ability to rename contract document attachments that are part of the contract record", jira: "PROC-1502" }
            ],
            improvements: [
                { text: "Automatically save changes when you select category codes - Auto-save category code selections", jira: "PROC-1510" },
                { text: "Introduction variables usable in Shared Sections - Build customized introduction as shared section with all intro variables available", jira: "PROC-1511" }
            ],
            fixes: []
        },
        contributors: ["PS", "ENG"]
    },
    {
        version: "September 1, 2024",
        date: "September 1, 2024",
        title: "Document Export & Tag Management",
        description: "Enhanced section export capabilities and tag management tools",
        changes: {
            features: [
                { text: "Preview or Download Current Section - New options for previewing or downloading individual solicitation and contract document sections", jira: "PROC-1401" },
                { text: "Export Tags - Admins can now create CSV export for each tag type in Tags Management area", jira: "PROC-1402" }
            ],
            improvements: [
                { text: "Upload more than 5 pricing tables at once - Increased limit from 5 to 20 pricing tables in Excel/CSV upload", jira: "PROC-1410" }
            ],
            fixes: []
        },
        contributors: ["ENG", "PS"]
    },
    {
        version: "August 15, 2024",
        date: "August 15, 2024",
        title: "Supplier Network & Permissions",
        description: "Location-based vendor notifications and new vendor management permissions",
        isMajor: true,
        changes: {
            features: [
                { text: "Expanded Access to Supplier Network with Location-Based Vendor Notifications - Select one or more locations to notify non-subscribed vendors in OpenGov supplier network", jira: "PROC-1301" },
                { text: "New Vendor Management Permission - Distinct Vendor Management permission grants access without full system admin rights", jira: "PROC-1302" },
                { text: "Contracts Data Read API - New data read API provides external programmatic access to Contracts list", jira: "PROC-1303" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["ENG", "PS", "API"]
    },
    {
        version: "July 1, 2024",
        date: "July 1, 2024",
        title: "Vendor Contacts & Contract Attachments",
        description: "Enhanced vendor profile information and contract document management",
        changes: {
            features: [
                { text: "Include Vendor Contacts in Vendor Profile - View all registered vendor contacts with name, title, phone, and email with copy button", jira: "PROC-1201" },
                { text: "Improved handling of attachments within contract document - Add and reorder additional attachments to contract document", jira: "PROC-1202" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["PS", "ENG"]
    },
    {
        version: "June 1, 2024",
        date: "June 1, 2024",
        title: "Retention Filtering & Response Reports",
        description: "Enhanced filtering and automated vendor response reporting",
        changes: {
            features: [
                { text: "Filter Solicitation Projects and Contracts by Records Retention Policy - New filter option for Retention Policy in projects and contracts lists", jira: "PROC-1101" },
                { text: "Response Document Report - Simplified email delivery of all vendor responses to single solicitation", jira: "PROC-1102" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["PS"]
    },
    {
        version: "May 1, 2024",
        date: "May 1, 2024",
        title: "Vendor-Submitted Contract Documents",
        description: "Vendors can now submit documents directly to contract records",
        changes: {
            features: [
                { text: "Vendor-Submitted Contract Documents - Awarded vendors can submit documents directly against contracts in vendor portal with agency review and approval workflow", jira: "PROC-1001" }
            ],
            improvements: [],
            fixes: []
        },
        contributors: ["PS", "ENG"]
    },
    {
        version: "April 1, 2024",
        date: "April 1, 2024",
        title: "Pavilion Integration & Contract Fields",
        description: "Deepened Pavilion integration and expanded contract tracking capabilities",
        isMajor: true,
        changes: {
            features: [
                { text: "Public Contract Sync to Pavilion - OpenGov public contracts automatically shared with Pavilion with real-time updates", jira: "PROC-901" },
                { text: "New Contract Record Fields - Summary, Contains Piggyback Language, Acquired via Cooperative, Bid Protest, Contract Claim, Funding Source (all with CSV export and filtering)", jira: "PROC-902" },
                { text: "Award Note - Add brief award note visible internally and in public bid results, included in evaluation and award emails", jira: "PROC-903" },
                { text: "Vendor RSVP Notifications - Email notifications sent when vendors register or remove RSVP for timeline events", jira: "PROC-904" },
                { text: "Share a Section Across Solicitation and Contract Documents - New shared section type for list items or text areas usable in both document types", jira: "PROC-905" }
            ],
            improvements: [
                { text: "Department Filters for Dashboard - Global editors and contract admins can filter by department", jira: "PROC-910" }
            ],
            fixes: []
        },
        contributors: ["ENG", "PS", "PM"]
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

