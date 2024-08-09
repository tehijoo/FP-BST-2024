const products = [
  {
    id: 1,
    company: "TechSpark",
    new: true,
    featured: true,
    position: "Senior Backend Developer",
    role: "Backend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["Python", "Django", "Flask"],
    tools: ["AWS", "Docker"]
  },
  {
    "id": 2,
    "company": "DataWeave",
    "new": true,
    "featured": true,
    "position": "Data Scientist",
    "role": "Data",
    "level": "Midweight",
    "postedAt": "3d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python", "R"],
    "tools": ["Pandas", "Scikit-learn"]
  },
  {
    "id": 3,
    "company": "CodeBreakers",
    "new": false,
    "featured": true,
    "position": "DevOps Engineer",
    "role": "DevOps",
    "level": "Senior",
    "postedAt": "5d ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["Python", "Bash"],
    "tools": ["AWS", "Kubernetes", "Docker"]
  },
  {
    "id": 4,
    "company": "NetConnect",
    "new": true,
    "featured": false,
    "position": "Network Engineer",
    "role": "Network",
    "level": "Midweight",
    "postedAt": "2d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": [],
    "tools": ["Cisco Networking", "Firewall"]
  },
  {
    "id": 5,
    "company": "CyberShield",
    "new": false,
    "featured": false,
    "position": "Cybersecurity Analyst",
    "role": "Security",
    "level": "Junior",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Python"],
    "tools": ["Splunk", "SIEM"]
  },
  {
    "id": 6,
    "company": "MobileFirst",
    "new": false,
    "featured": true,
    "position": "Android Developer",
    "role": "Mobile",
    "level": "Midweight",
    "postedAt": "2w ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Java", "Kotlin"],
    "tools": ["Android Studio"]
  },
  {
    "id": 7,
    "company": "Cloud9",
    "new": true,
    "featured": false,
    "position": "Cloud Architect",
    "role": "Cloud",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["Python", "YAML"],
    "tools": ["AWS", "Azure", "GCP"]
  },
  {
    "id": 8,
    "company": "DatabaseMasters",
    "new": false,
    "featured": false,
    "position": "Database Administrator",
    "role": "Database",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["SQL"],
    "tools": ["Oracle", "MySQL", "PostgreSQL"]
  },
  {
    "id": 9,
    "company": "GameDev",
    "new": false,
    "featured": true,
    "position": "Game Developer",
    "role": "Game Development",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["C#", "C++"],
    "tools": ["Unity", "Unreal Engine"]
  },
  {
    "id": 10,
    "company": "AI Innovations",
    "new": true,
    "featured": false,
    "position": "Machine Learning Engineer",
    "role": "AI/ML",
    "level": "Senior",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["TensorFlow", "PyTorch"]
  },
  {
    "id": 11,
    "company": "SecureTech",
    "new": true,
    "featured": true,
    "position": "Security Engineer",
    "role": "Security",
    "level": "Midweight",
    "postedAt": "2d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["Python", "Go"],
    "tools": ["AWS Security", "Penetration Testing"]
  },
  {
    "id": 12,
    "company": "Data Insights",
    "new": false,
    "featured": false,
    "position": "Data Analyst",
    "role": "Data",
    "level": "Junior",
    "postedAt": "1w ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["SQL", "Python"],
    "tools": ["Excel", "Tableau"]
  },
  {
    "id": 13,
    "company": "Web Wizards",
    "new": false,
    "featured": true,
    "position": "Full Stack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "Worldwide",
    "languages": ["JavaScript", "React", "Node.js"],
    "tools": ["MongoDB", "Express"]
  },
  {
    "id": 14,
    "company": "AppCrafters",
    "new": true,
    "featured": false,
    "position": "iOS Developer",
    "role": "Mobile",
    "level": "Junior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Swift"],
    "tools": ["Xcode", "SwiftUI"]
  },
  {
    "id": 15,
    "company": "Tech Solutions",
    "new": false,
    "featured": false,
    "position": "IT Support Specialist",
    "role": "IT Support",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": [],
    "tools": ["Helpdesk", "Troubleshooting"]
  },
  {
    "id": 16,
    "company": "Code Ninjas",
    "new": true,
    "featured": true,
    "position": "Software Engineer",
    "role": "Backend",
    "level": "Senior",
    "postedAt": "2d ago",
    "contract": "Full Time",
    "location": "Remote",
    "languages": ["Java", "Spring Boot"],
    "tools": ["AWS", "Microservices"]
  },
  {
    "id": 17,
    "company": "Data Miners",
    "new": false,
    "featured": false,
    "position": "Data Engineer",
    "role": "Data",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["Python", "Scala"],
    "tools": ["Spark", "Hadoop"]
  },
  {
    "id": 18,
    "company": "CyberOps",
    "new": false,
    "featured": true,
    "position": "Security Analyst",
    "role": "Security",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Python"],
    "tools": ["SIEM", "Vulnerability Scanning"]
  },
  {
    "id": 19,
    "company": "MobileMakers",
    "new": true,
    "featured": false,
    "position": "React Native Developer",
    "role": "Mobile",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["JavaScript", "TypeScript"],
    "tools": ["React Native"]
  },
  {
    "id": 20,
    "company": "Cloud Architects",
    "new": false,
    "featured": false,
    "position": "Cloud Engineer",
    "role": "Cloud",
    "level": "Senior",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["Python", "Terraform"],
    "tools": ["AWS", "Azure"]
  },
  {
    "id": 21,
    "company": "DB Solutions",
    "new": false,
    "featured": true,
    "position": "SQL Developer",
    "role": "Database",
    "level": "Midweight",
    "postedAt": "2d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["SQL"],
    "tools": ["SQL Server", "MySQL"]
  },
  {
    "id": 22,
    "company": "Pixel Pushers",
    "new": true,
    "featured": false,
    "position": "Unity Developer",
    "role": "Game Development",
    "level": "Junior",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["C#"],
    "tools": ["Unity"]
  },
  {
    "id": 23,
    "company": "AI Research",
    "new": false,
    "featured": false,
    "position": "Research Scientist",
    "role": "AI/ML",
    "level": "Senior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["TensorFlow", "PyTorch", "Deep Learning"]
  },
  {
    "id": 24,
    "company": "SecureWorld",
    "new": true,
    "featured": true,
    "position": "Penetration Tester",
    "role": "Security",
    "level": "Midweight",
    "postedAt": "2d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["Python"],
    "tools": ["Kali Linux", "Metasploit"]
  },
  {
    "id": 25,
    "company": "Data Insights Pro",
    "new": false,
    "featured": false,
    "position": "Business Intelligence Analyst",
    "role": "Data",
    "level": "Junior",
    "postedAt": "1w ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["SQL"],
    "tools": ["Power BI", "Tableau"]
  },
  {
    "id": 26,
    "company": "WebDev Masters",
    "new": false,
    "featured": true,
    "position": "Frontend Developer",
    "role": "Frontend",
    "level": "Midweight",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "Worldwide",
    "languages": ["JavaScript", "React", "HTML", "CSS"],
    "tools": []
  },
  {
    "id": 27,
    "company": "AppStudio",
    "new": true,
    "featured": false,
    "position": "Flutter Developer",
    "role": "Mobile",
    "level": "Junior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Dart"],
    "tools": ["Flutter"]
  },
  {
    "id": 28,
    "company": "Tech Support",
    "new": false,
    "featured": false,
    "position": "Help Desk Technician",
    "role": "IT Support",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": [],
    "tools": ["Remote Desktop", "Ticketing System"]
  },
  {
    "id": 29,
    "company": "CodeCrafters",
    "new": true,
    "featured": true,
    "position": "Java Developer",
    "role": "Backend",
    "level": "Senior",
    "postedAt": "2d ago",
    "contract": "Full Time",
    "location": "Remote",
    "languages": ["Java"],
    "tools": ["Spring", "Hibernate"]
  },
  {
    "id": 30,
    "company": "Data Analyzers",
    "new": false,
    "featured": false,
    "position": "BI Developer",
    "role": "Data",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["SQL"],
    "tools": ["Power BI", "SSRS"]
  },
  {
    "id": 31,
    "company": "Cyber Defenders",
    "new": false,
    "featured": true,
    "position": "SOC Analyst",
    "role": "Security",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": [],
    "tools": ["SIEM", "Security Monitoring"]
  },
  {
    "id": 32,
    "company": "MobileDev",
    "new": true,
    "featured": false,
    "position": "Swift Developer",
    "role": "Mobile",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Swift"],
    "tools": ["iOS SDK"]
  },
  {
    "id": 33,
    "company": "Cloud Solutions",
    "new": false,
    "featured": false,
    "position": "AWS Solutions Architect",
    "role": "Cloud",
    "level": "Senior",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["Python"],
    "tools": ["AWS", "CloudFormation"]
  },
  {
    "id": 34,
    "company": "Data Pros",
    "new": false,
    "featured": true,
    "position": "Database Developer",
    "role": "Database",
    "level": "Midweight",
    "postedAt": "2d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["SQL", "PL/SQL"],
    "tools": ["Oracle"]
  },
  {
    "id": 35,
    "company": "GameDev Studio",
    "new": true,
    "featured": false,
    "position": "Unreal Engine Developer",
    "role": "Game Development",
    "level": "Junior",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["C++"],
    "tools": ["Unreal Engine"]
  },
  {
    "id": 36,
    "company": "AI Experts",
    "new": false,
    "featured": false,
    "position": "NLP Engineer",
    "role": "AI/ML",
    "level": "Senior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["NLP", "Deep Learning"]
  },
  {
    "id": 37,
    "company": "Cybersecurity Inc.",
    "new": true,
    "featured": true,
    "position": "Security Analyst",
    "role": "Security",
    "level": "Midweight",
    "postedAt": "2d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["Python"],
    "tools": ["Security Auditing", "Risk Assessment"]
  },
  {
    "id": 38,
    "company": "Data Analytics",
    "new": false,
    "featured": false,
    "position": "Data Visualization Specialist",
    "role": "Data",
    "level": "Junior",
    "postedAt": "1w ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["Tableau", "D3.js"]
  },
  {
    "id": 39,
    "company": "WebDev Solutions",
    "new": false,
    "featured": true,
    "position": "Backend Developer",
    "role": "Backend",
    "level": "Midweight",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "Worldwide",
    "languages": ["Python", "Flask"],
    "tools": ["PostgreSQL"]
  },
  {
    "id": 40,
    "company": "App Innovators",
    "new": true,
    "featured": false,
    "position": "Android Engineer",
    "role": "Mobile",
    "level": "Junior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Kotlin"],
    "tools": ["Android Studio", "Jetpack Compose"]
  },
  {
    "id": 41,
    "company": "Tech Gurus",
    "new": false,
    "featured": false,
    "position": "System Administrator",
    "role": "IT Support",
    "level": "Midweight",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["Bash"],
    "tools": ["Linux", "Windows Server"]
  },
  {
    "id": 42,
    "company": "Code Masters",
    "new": true,
    "featured": true,
    "position": "Python Developer",
    "role": "Backend",
    "level": "Senior",
    "postedAt": "2d ago",
    "contract": "Full Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["Django", "Flask", "AWS"]
  },
  {
    "id": 43,
    "company": "Data Wizards",
    "new": false,
    "featured": false,
    "position": "Data Scientist",
    "role": "Data",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["Python", "R"],
    "tools": ["Machine Learning", "Deep Learning"]
  },
  {
    "id": 44,
    "company": "Cyber Guardians",
    "new": false,
    "featured": true,
    "position": "Security Engineer",
    "role": "Security",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Python", "Go"],
    "tools": ["Cloud Security"]
  },
  {
    "id": 45,
    "company": "Mobile Pioneers",
    "new": true,
    "featured": false,
    "position": "iOS Developer",
    "role": "Mobile",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Swift"],
    "tools": ["SwiftUI", "Combine"]
  },
  {
    "id": 46,
    "company": "Cloud Innovators",
    "new": false,
    "featured": false,
    "position": "Azure Cloud Engineer",
    "role": "Cloud",
    "level": "Senior",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["PowerShell", "ARM Templates"],
    "tools": ["Azure"]
  },
  {
    "id": 47,
    "company": "Database Experts",
    "new": false,
    "featured": true,
    "position": "PostgreSQL DBA",
    "role": "Database",
    "level": "Midweight",
    "postedAt": "2d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["SQL"],
    "tools": ["PostgreSQL"]
  },
  {
    "id": 48,
    "company": "GameDev Legends",
    "new": true,
    "featured": false,
    "position": "Game Developer",
    "role": "Game Development",
    "level": "Junior",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["C#", "Unity"],
    "tools": []
  },
  {
    "id": 49,
    "company": "AI Masters",
    "new": false,
    "featured": false,
    "position": "Computer Vision Engineer",
    "role": "AI/ML",
    "level": "Senior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["OpenCV", "TensorFlow"]
  },
  {
    "id": 50,
    "company": "Cybersecurity Pros",
    "new": true,
    "featured": true,
    "position": "Ethical Hacker",
    "role": "Security",
    "level": "Midweight",
    "postedAt": "2d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["Python"],
    "tools": ["Penetration Testing", "Vulnerability Assessment"]
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

// Update the heading based on the number of jobs
if (products.length == 1) {
  jobsHeading.innerHTML = `${products.length} Job`;
} else {
  jobsHeading.innerHTML = `${products.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  products.forEach((product) => {
    if (
      product.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.company.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let title = document.createElement("h3");
      title.innerHTML = `${product.company} - ${product.position}`;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = `
        <p><strong>Role:</strong> ${product.role}</p>
        <p><strong>Level:</strong> ${product.level}</p>
        <p><strong>Contract:</strong> ${product.contract}</p>
        <p><strong>Location:</strong> ${product.location}</p>
        <p><strong>Languages:</strong> ${product.languages.join(", ")}</p>
        <p><strong>Tools:</strong> ${product.tools.join(", ")}</p>
      `;
      details.classList.add("details");

      let postedAt = document.createElement("span");
      postedAt.classList.add("posted-at");
      postedAt.innerHTML = `${product.postedAt}`;

      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(postedAt);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createJobListingCards();
});
