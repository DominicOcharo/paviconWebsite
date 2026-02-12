/**
 * Pavicon Group - Services Data
 * Extracted from Company Profile PDF
 * Contains all service information for dynamic service details pages
 */

const servicesData = {
    'telecommunications': {
        id: 'telecommunications',
        title: 'Telecommunications Solutions',
        shortTitle: 'Telecommunications',
        heroImage: 'assets/img/services-hero/telecommunications.jpg',
        detailImage: 'assets/img/services-detail/telecommunications-detail.jpg',
        icon: 'assets/img/icon/services_icon1.png',
        description: 'We have extensive experience in telecommunication towers construction and maintenance. We provide turnkey solutions, including site acquisition, tower design and construction. Our vast experience in BTS maintenance both passive and active enable us to support our customers in providing uninterrupted communication networks.',

        subServices: [
            {
                title: 'BTS Roll-Out & Maintenance',
                icon: 'fas fa-broadcast-tower',
                description: 'Comprehensive Base Transceiver Station construction and maintenance services.',
                features: [
                    'Turnkey Telecom Site Construction',
                    'RF and Transmission Network Planning and Design',
                    'Drive Test & Network Optimization',
                    'Installation, Testing & Commissioning of all Telecom equipment',
                    'In-building solution for wireless networks',
                    'Optical Transmission systems installation and commissioning'
                ]
            },
            {
                title: 'Fibre Deployment',
                icon: 'fas fa-network-wired',
                description: 'End-to-end fibre optic network deployment solutions.',
                features: [
                    'Fibre management software solution - Planning & Design',
                    'Administration Documentation',
                    'Site Acquisition - Third Party management',
                    'Right of Use Acquisition',
                    'Permit Acquisition',
                    'Turnkey FTTx Network Construction FTTH',
                    'Customer onboarding',
                    'Fibre network optimization',
                    'FTTH Customer support'
                ]
            },
            {
                title: 'Fibre Network Maintenance',
                icon: 'fas fa-tools',
                description: 'Expert maintenance services for backbone and distribution networks.',
                features: [
                    'Network patrol',
                    'Permanent fixes',
                    'Network rehabilitation',
                    'Route clearing',
                    'Third-party engagement',
                    'Fault restoration',
                    'Core provisioning',
                    'Core troubleshooting',
                    'Signal optimization'
                ],
                additionalInfo: 'With the aid of fibre monitoring software (Cable Scout) and hardware (ONMSI Remote Fibre Testing System) we are able to provide our customers with network up-time that enhance their clients\' QoS (Quality of Service).'
            }
        ],

        projectBriefs: [
            {
                title: 'Fibre Network Construction',
                scope: [
                    'Network Planning & Design',
                    'Demographic Survey',
                    'Right of Access Acquisition',
                    'Customer onboarding',
                    'Customer Support & Network Maintenance'
                ],
                clients: ['Safaricom PLC', 'Safaricom ET', 'MTN Uganda', 'ICTA'],
                sitesBuilt: 'Over 1000km of Network and 30,000 Homes connected',
                regions: ['Kenya', 'Uganda', 'Ethiopia', 'South Sudan']
            },
            {
                title: 'BTS Construction',
                scope: [
                    'SAQ (Site Acquisition)',
                    'Design',
                    'Civil & Structural Works',
                    'Electrical installation',
                    'Solar & DC installation'
                ],
                clients: ['Safaricom PLC', 'ATC Kenya', 'ATC Uganda', 'Safaricom ET', 'MTN Uganda'],
                sitesBuilt: 'Over 200 Green Field & Rooftop sites',
                regions: ['Kenya', 'Uganda', 'Ethiopia', 'South Sudan']
            }
        ]
    },

    'it-services': {
        id: 'it-services',
        title: 'Information Technology (IT) Services',
        shortTitle: 'IT Services',
        heroImage: 'assets/img/services-hero/it-services.jpg',
        detailImage: 'assets/img/services-detail/it-services-detail.jpg',
        icon: 'assets/img/icon/services_icon1.png',
        description: 'Pavicon is a trusted partner in unlocking the true potential of technology for organizations and businesses. In today\'s fast-paced and highly competitive world, staying ahead of the curve demands harnessing the power of information technology (IT) effectively. Our comprehensive range of IT services and solutions is tailored to meet your unique business needs, empowering your digital transformation journey like never before.',

        subServices: [
            {
                title: 'Network Solutions',
                icon: 'fas fa-project-diagram',
                description: 'State-of-the-art network infrastructure solutions built on simplicity, security, openness, and scale.',
                features: [
                    'High-performance network infrastructure design',
                    'Network architecture using best-of-breed products',
                    'Simplified network economics and experience',
                    'Security-focused implementations',
                    'Scalable solutions for growth'
                ]
            },
            {
                title: 'Collaboration Solutions',
                icon: 'fas fa-users',
                description: 'Comprehensive tools and technologies for seamless communication and teamwork.',
                features: [
                    'Seamless communication platforms',
                    'Information sharing systems',
                    'Team collaboration tools',
                    'Productivity enhancement solutions',
                    'Collaborative work environment setup'
                ]
            },
            {
                title: 'Unified Communication',
                icon: 'fas fa-comments',
                description: 'Complex unified communications solutions integrating multiple channels.',
                features: [
                    'Voice integration',
                    'Video conferencing',
                    'Messaging platforms',
                    'Web collaboration applications',
                    'AV Solutions for green communication'
                ]
            },
            {
                title: 'ICT Infrastructure',
                icon: 'fas fa-server',
                description: 'Complete infrastructure solutions for modern businesses.',
                features: [
                    'Cabling solutions',
                    'Data centre infrastructure',
                    'Wireless connectivity',
                    'Portable facilities solutions',
                    'Intelligent green buildings design',
                    'Turnkey data centres'
                ]
            },
            {
                title: 'Security Systems',
                icon: 'fas fa-shield-alt',
                description: 'Converged security services for comprehensive protection.',
                features: [
                    'Logical and physical network security',
                    'Physical access control',
                    'Surveillance systems',
                    'Visitor management',
                    'Network monitoring and management tools'
                ]
            },
            {
                title: 'End Use Products',
                icon: 'fas fa-laptop',
                description: 'Comprehensive tools for enhanced teamwork and productivity.',
                features: [
                    'Communication tools',
                    'Cooperation platforms',
                    'Information sharing software',
                    'Team productivity software',
                    'Collaboration services'
                ]
            }
        ]
    },

    'civil-works': {
        id: 'civil-works',
        title: 'Civil Engineering & Infrastructure Works',
        shortTitle: 'Civil Works',
        heroImage: 'assets/img/services-hero/civil-works.jpg',
        detailImage: 'assets/img/services-detail/civil-works-detail.jpg',
        icon: 'assets/img/icon/services_icon1.png',
        description: 'Pavicon Group undertakes comprehensive building construction projects across residential, commercial, institutional, and industrial sectors. Our approach covers the full project lifecycle—from site preparation and structural works to finishes and commissioning—ensuring durability, compliance, and value for money.',

        subServices: [
            {
                title: 'Road Construction & Maintenance',
                icon: 'fas fa-road',
                description: 'Expert road construction services complying with all licensing authority standards.',
                features: [
                    'Road Construction & Rehabilitation',
                    'Pavement & Asphalt Works',
                    'Bridge & Culvert Construction',
                    'Building new roads to modern standards',
                    'Upgrading existing roads',
                    'Durable road surfaces for long-term performance'
                ],
                additionalInfo: 'Our civil team at Pavicon is highly experienced and trained in road construction that comply to all set standards by all the licensing authorities. The team has participated in several training sessions to improve skills and confidence levels.'
            },
            {
                title: 'Building Construction & Rehabilitation',
                icon: 'fas fa-building',
                description: 'Full-lifecycle building construction across multiple sectors.',
                features: [
                    'Apartment developments',
                    'Office buildings',
                    'Educational institutions',
                    'Healthcare facilities',
                    'Public buildings',
                    'Site preparation and structural works',
                    'Finishes and commissioning',
                    'Strict quality control',
                    'Disciplined execution'
                ]
            },
            {
                title: 'Drainage Solutions',
                icon: 'fas fa-water',
                description: 'Comprehensive drainage solutions to prevent flooding and improve infrastructure.',
                features: [
                    'Stormwater Drainage Systems',
                    'Construction of culverts, drains, and retention ponds',
                    'Sewerage Systems',
                    'Underground drainage networks',
                    'Flood Control Measures',
                    'Flood mitigation strategies'
                ]
            }
        ],

        projectBriefs: [
            {
                title: 'Civil Works & Road Construction',
                scope: [
                    'Infrastructure development & Improvement',
                    'Road Construction',
                    'Building Works',
                    'Bridge Construction & Maintenance',
                    'Water & Sanitation Projects'
                ],
                clients: ['KURA', 'REREC', 'KENHA', 'Action Against Hunger', 'KeRRA'],
                sitesBuilt: 'Over 50Km of roads built, 5 Buildings',
                regions: ['Kenya', 'Uganda', 'South Sudan', 'Ethiopia', 'Malawi']
            }
        ]
    },

    'power-energy': {
        id: 'power-energy',
        title: 'Power & Renewable Energy',
        shortTitle: 'Power & Energy',
        heroImage: 'assets/img/services-hero/power-energy.jpg',
        detailImage: 'assets/img/services-detail/power-energy-detail.jpg',
        icon: 'assets/img/icon/services_icon1.png',
        description: 'Building strong structures. Powering them with smart technology. Pavicon Group delivers infrastructure built for today and ready for tomorrow.',

        subServices: [
            {
                title: 'Renewable Energy',
                icon: 'fas fa-solar-panel',
                description: 'Comprehensive renewable energy solutions for sustainable power.',
                features: [
                    'Solar Power systems design & construction',
                    'Hybrid Power Systems (Genset, wind, and solar)',
                    'Energy Audit & Assessments',
                    'Installation, Testing & Commissioning',
                    'Maintenance services'
                ]
            },
            {
                title: 'Electrical Works',
                icon: 'fas fa-bolt',
                description: 'Expert electrical engineering with over 10 years of experience.',
                features: [
                    'All types of electrical works',
                    'Electrical Grid design & construction',
                    'Regulatory compliance',
                    'Commercial electrical installations',
                    'Industrial electrical systems'
                ]
            },
            {
                title: 'Power Infrastructure',
                icon: 'fas fa-plug',
                description: 'Turnkey solutions for power infrastructure projects.',
                features: [
                    'HV (High Voltage) transmission networks',
                    'LV (Low Voltage) distribution lines',
                    'Design and supply',
                    'Installation services',
                    'Maintenance programs'
                ]
            }
        ],

        projectBriefs: [
            {
                title: 'Electrical Works & Renewable Energy',
                scope: [
                    'Solar Power systems design & construction',
                    'Energy Audit & Assessments',
                    'Civil & Structural Works',
                    'Electrical Grid design & construction',
                    'Regulatory compliance'
                ],
                clients: ['Safaricom PLC', 'ATC Kenya', 'ATC Uganda', 'Safaricom ET', 'MTN Uganda', 'Nexus Green'],
                sitesBuilt: 'Over 600 Solar Sites',
                regions: ['Kenya', 'Uganda', 'Ethiopia', 'South Sudan']
            }
        ]
    },

    'stadium-sports': {
        id: 'stadium-sports',
        title: 'Stadium & Sports Facility Construction',
        shortTitle: 'Stadium Construction',
        heroImage: 'assets/img/services-hero/stadium-sports.jpg',
        detailImage: 'assets/img/services-detail/stadium-sports-detail.jpg',
        icon: 'assets/img/icon/services_icon1.png',
        description: 'Pavicon Kenya Limited has developed a strong focus on the construction and upgrading of stadiums and sports facilities, recognizing the growing demand for modern sports infrastructure in Kenya and the region.',

        subServices: [
            {
                title: 'Stadium Construction',
                icon: 'fas fa-futbol',
                description: 'Complete stadium construction and upgrading services.',
                features: [
                    'Structural works',
                    'Spectator seating installation',
                    'Athlete facilities',
                    'Walkways and parking',
                    'Lighting systems',
                    'Drainage solutions',
                    'Artificial turf installation',
                    'Modern sports surfaces'
                ],
                additionalInfo: 'Stadium projects require a unique combination of engineering expertise, safety planning, and operational awareness. Our approach addresses the full spectrum of requirements to deliver functional, safe, and iconic venues capable of hosting large audiences and high-profile events.'
            },
            {
                title: 'Sports Facility Features',
                icon: 'fas fa-trophy',
                description: 'Comprehensive sports facility solutions.',
                features: [
                    'Durability and structural integrity',
                    'Crowd safety compliance',
                    'Visibility optimization',
                    'Accessibility standards',
                    'Public safety compliance',
                    'Sporting standards adherence',
                    'Long-term performance focus'
                ]
            }
        ]
    },

    'water-works': {
        id: 'water-works',
        title: 'Water Works',
        shortTitle: 'Water Works',
        heroImage: 'assets/img/services-hero/water-works.jpg',
        detailImage: 'assets/img/services-detail/water-works-detail.jpg',
        icon: 'assets/img/icon/services_icon1.png',
        description: 'Pavicon Group specializes in the design, construction, and maintenance of water infrastructure to ensure reliable water distribution and environmental sustainability.',

        subServices: [
            {
                title: 'Water Supply Systems',
                icon: 'fas fa-tint',
                description: 'Reliable water distribution infrastructure.',
                features: [
                    'Pipeline installation',
                    'Reservoir construction',
                    'Pumping stations',
                    'Water distribution networks',
                    'Reliable water supply solutions'
                ]
            },
            {
                title: 'Wastewater Treatment',
                icon: 'fas fa-recycle',
                description: 'Modern sewage treatment for environmental sustainability.',
                features: [
                    'Sewage treatment plants',
                    'Drainage solutions',
                    'Environmental sustainability focus',
                    'Modern treatment technologies',
                    'Compliance with environmental standards'
                ]
            },
            {
                title: 'Irrigation Systems',
                icon: 'fas fa-seedling',
                description: 'Efficient irrigation networks for agricultural productivity.',
                features: [
                    'Irrigation network implementation',
                    'Agricultural productivity support',
                    'Efficient water management',
                    'Solar-powered irrigation',
                    'Intake structures',
                    'Transmission mains',
                    'Elevated reservoirs'
                ]
            }
        ],

        projectBriefs: [
            {
                title: 'Irrigation Projects',
                scope: [
                    'Intake structure at the water source',
                    'Submersible pump powered by solar energy & hybrid inverter',
                    'Transmission main from pump to reservoir',
                    'Pump station with Elevated Reservoir',
                    'Solar Power System',
                    'On-farm irrigation system'
                ],
                clients: ['NEXUS GREEN'],
                sitesBuilt: '9 irrigation projects completed and handed over in first half of 2024',
                regions: ['Uganda']
            }
        ]
    },

    'road-works': {
        id: 'road-works',
        title: 'Road Works',
        shortTitle: 'Road Works',
        heroImage: 'assets/img/services-hero/road-works.jpg',
        detailImage: 'assets/img/services-detail/road-works-detail.jpg',
        icon: 'assets/img/icon/services_icon1.png',
        description: 'Pavicon Group delivers high-quality road construction services tailored to enhance connectivity and transportation efficiency.',

        subServices: [
            {
                title: 'Road Construction & Rehabilitation',
                icon: 'fas fa-road',
                description: 'Building and upgrading roads to modern standards.',
                features: [
                    'New road construction',
                    'Upgrading existing roads',
                    'Modern standard compliance',
                    'Quality materials and workmanship',
                    'Durable infrastructure'
                ]
            },
            {
                title: 'Pavement & Asphalt Works',
                icon: 'fas fa-layer-group',
                description: 'Durable road surfaces for long-term performance.',
                features: [
                    'Asphalt laying',
                    'Pavement construction',
                    'Surface treatment',
                    'Long-term durability',
                    'Quality assurance'
                ]
            },
            {
                title: 'Bridge & Culvert Construction',
                icon: 'fas fa-archway',
                description: 'Safe and reliable crossing structures.',
                features: [
                    'Bridge construction',
                    'Culvert installation',
                    'Structural engineering',
                    'Safety compliance',
                    'Enhanced road networks'
                ]
            }
        ],

        projectBriefs: [
            {
                title: 'Civil Works & Road Construction',
                scope: [
                    'Infrastructure development & Improvement',
                    'Road Construction',
                    'Building Works',
                    'Bridge Construction & Maintenance',
                    'Water & Sanitation Projects'
                ],
                clients: ['KURA', 'REREC', 'KENHA', 'Action Against Hunger', 'KeRRA'],
                sitesBuilt: 'Over 50Km of roads built, 5 Buildings',
                regions: ['Kenya', 'Uganda', 'South Sudan', 'Ethiopia', 'Malawi']
            }
        ]
    },

    'drainage-solutions': {
        id: 'drainage-solutions',
        title: 'Drainage Solutions',
        shortTitle: 'Drainage',
        heroImage: 'assets/img/services-hero/drainage-solutions.jpg',
        detailImage: 'assets/img/services-detail/drainage-solutions-detail.jpg',
        icon: 'assets/img/icon/services_icon1.png',
        description: 'Comprehensive drainage solutions designed to manage water flow effectively, prevent flooding, and ensure the longevity of infrastructure projects. Pavicon Group employs advanced engineering techniques to deliver sustainable drainage systems.',

        subServices: [
            {
                title: 'Stormwater Management',
                icon: 'fas fa-cloud-rain',
                description: 'Systems designed to efficiently manage surface water runoff.',
                features: [
                    'Stormwater Drainage Systems',
                    'Retention ponds construction',
                    'Culvert installation',
                    'Surface water management',
                    'Flood risk assessment'
                ]
            },
            {
                title: 'Sewerage Systems',
                icon: 'fas fa-water',
                description: 'Design and construction of efficient sewerage networks.',
                features: [
                    'Sewer line installation',
                    'Manhole construction',
                    'Waste water management',
                    'System upgrades',
                    'Maintenance services'
                ]
            },
            {
                title: 'Flood Control',
                icon: 'fas fa-shield-alt',
                description: 'Strategic measures to protect infrastructure and communities from flooding.',
                features: [
                    'Flood mitigation strategies',
                    'Embankment construction',
                    'Drainage channel rehabilitation',
                    'Emergency flood response planning'
                ]
            }
        ],

        portfolio: {
            clients: ['KURA', 'KeRRA', 'Municipalities'],
            sitesBuilt: 'Multiple drainage projects completed across the region',
            regions: ['Kenya', 'Uganda', 'South Sudan']
        }
    }
};

// Helper function to get service by ID
function getServiceById(serviceId) {
    return servicesData[serviceId] || null;
}

// Helper function to get all service IDs
function getAllServiceIds() {
    return Object.keys(servicesData);
}

// Helper function to get all services
function getAllServices() {
    return Object.values(servicesData);
}
