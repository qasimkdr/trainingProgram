const instructors = [
    { name: "Mr. Adeel", code: 101, subjects: ["AI", "Machine Learning", "Python", "TensorFlow/PyTorch", "Model Optimization"], maxLoad: 30, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Sara", code: 102, subjects: ["Data Wrangling", "Big Data", "SQL", "Data Ethics", "Cloud DS"], maxLoad: 28, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Haris", code: 103, subjects: ["Networking", "Cybersecurity", "Server Management", "Firewall Setup", "Linux Admin"], maxLoad: 27, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Dr. Sana", code: 104, subjects: ["Cloud Computing", "Cloud AI", "Cloud Deployment", "DevOps", "CI/CD", "Edge AI"], maxLoad: 30, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Zubair", code: 105, subjects: ["OOP", "Algorithms", "DSA", "Version Control", "Software Testing"], maxLoad: 26, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Rida", code: 106, subjects: ["UI/UX", "Mobile App Dev", "Agile Methods", "Soft Skills", "Presentation Skills"], maxLoad: 29, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Salman", code: 107, subjects: ["Python", "Python Advanced", "ML Fundamentals", "Model Deployment", "AI Startups"], maxLoad: 27, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Dr. Hina", code: 108, subjects: ["Statistics", "Maths", "Linear Algebra", "Advanced Math", "Probability"], maxLoad: 25, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Sabeen", code: 109, subjects: ["Intro to CS", "Computer Fundamentals", "Digital Logic", "IT Math", "Programming Basics"], maxLoad: 30, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Irfan", code: 110, subjects: ["Web Dev", "Mobile Dev", "Portfolio Dev", "Office Automation", "Database Systems"], maxLoad: 26, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Komal", code: 111, subjects: ["Ethics", "English", "Professional Practices", "Communication Skills", "Research Methods"], maxLoad: 27, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Dr. Junaid", code: 112, subjects: ["IT Support", "Technical Support Tools", "System Admin", "Virtualization", "Asset Management"], maxLoad: 29, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Kamran", code: 113, subjects: ["Robotics", "AI in Healthcare", "AI in Society", "AI Ethics", "AI Entrepreneurship"], maxLoad: 25, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Hoorain", code: 114, subjects: ["Cloud Tools", "Cloud Security", "Disaster Recovery", "Risk Management", "Project Management"], maxLoad: 28, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Dr. Yasir", code: 115, subjects: ["Intro to AI", "AI", "DL", "Reinforcement Learning", "AI Project", "Research in AI"], maxLoad: 30, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Noor", code: 116, subjects: ["Scripting Basics", "Scripting", "Data Handling", "Data Communication", "Data Pipelines"], maxLoad: 26, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Rehan", code: 117, subjects: ["Cloud", "Software Modeling", "Software Architecture", "Microservices", "Full-Stack Dev"], maxLoad: 27, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Dr. Mahnoor", code: 118, subjects: ["Entrepreneurship", "Business Intelligence", "Data Strategy", "Product Management", "Team Leadership"], maxLoad: 30, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Arham", code: 119, subjects: ["Intro to DS", "Excel for DS", "Data Viz", "Capstone I", "Capstone II"], maxLoad: 29, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Iqra", code: 120, subjects: ["Networking Basics", "CS Fundamentals", "Maths for AI", "IT Consultancy", "Open Source Contribution"], maxLoad: 28, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Danish", code: 121, subjects: ["Final Year Project", "Internship", "Final Project", "Capstone Project"], maxLoad: 25, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Mahira", code: 122, subjects: ["Programming Logic", "Design Thinking", "Software Engineering", "Software Auditing", "Security in SD"], maxLoad: 26, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Dr. Zeeshan", code: 123, subjects: ["Operating Systems", "OS Management", "Email Server Config", "Cloud Deployment", "Mobile Dev"], maxLoad: 27, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Mr. Fawad", code: 124, subjects: ["Cloud DS", "Big Data", "Cloud AI Tools", "Big Data for AI", "Analytics"], maxLoad: 30, weeklyLoad: 0, assignedPeriods: {} },
    { name: "Ms. Hina", code: 125, subjects: ["Neural Nets", "DL", "NLP", "Time Series", "CV"], maxLoad: 28, weeklyLoad: 0, assignedPeriods: {} }
  ];



  document.getElementById("printButton").addEventListener("click", function () {
  const newTab = window.open();
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Instructor Data</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #333; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        h2 { text-align: center; }
        button {
          margin: 20px 0;
          padding: 10px 15px;
          font-size: 16px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <h2>Instructor Weekly Load Summary</h2>
      <button onclick="window.print()">Print This Page</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Weekly Load</th>
          </tr>
        </thead>
        <tbody>
          ${instructors.map(i => `
            <tr>
              <td>${i.name}</td>
              <td>${i.code}</td>
              <td>${i.weeklyLoad}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </body>
    </html>
  `;

  newTab.document.write(htmlContent);
  newTab.document.close();
});

  
    

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let selectedClassToUpdate = null;

// Initialize assignedPeriods for each instructor
days.forEach(day => {
    instructors.forEach(instructor => {
        instructor.assignedPeriods[day] = new Set();
    });
});

const newClassData = [
    { className: "A1", branch: "CS", term: 1 },
    { className: "B2", branch: "IT", term: 1 },
    { className: "C3", branch: "AI", term: 1 },
    { className: "D4", branch: "Data Science", term: 1 },
    { className: "E5",  branch: "Data Science", term: 1 },
    { className: "F6", branch: "IT", term: 2 },
    { className: "G7", branch: "AI", term: 2 },
    { className: "H8", branch: "Data Science", term: 2 },
    { className: "I9", branch: "CS", term: 3 },
    { className: "J10", branch: "IT", term: 3 },
    { className: "K11", branch: "AI", term: 3 },
    { className: "L12", branch: "Data Science", term: 3 },
    { className: "M13", branch: "CS", term: 4 },
    { className: "N14", branch: "IT", term: 4 },
    { className: "O15", branch: "AI", term: 4 },
    { className: "P16", branch: "Data Science", term: 4 },
    { className: "Q17", branch: "CS", term: 5 },
    { className: "R18", branch: "IT", term: 5 },
    { className: "S19", branch: "AI", term: 5 },
    { className: "T20", branch: "Data Science", term: 5 },
    { className: "U21", branch: "CS", term: 6 },
    { className: "V22", branch: "IT", term: 6 },
    { className: "W23", branch: "AI", term: 6 },
    { className: "X24", branch: "Data Science", term: 6 }
];




// document.querySelector("table").addEventListener("click", function (e) {
//     const cell = e.target.closest("td");
//     if (!cell) return;

//     showClassDetailsFromCell(cell);
// });

//Function to assign class
// function openClassAssignModal(cell) {
//     selectedClassCell = cell;
//     document.getElementById("classAssignModal").classList.add("show");
//     loadClassOptions();
// }

// function closeClassAssignModal() {
//     document.getElementById("classAssignModal").classList.remove("show");
// }

// function loadClassOptions() {
//     const dropdown = document.getElementById("classDropdown");
//     dropdown.innerHTML = "";
//     newClassData.forEach(cls => {
//         const option = document.createElement("option");
//         option.value = cls.className;
//         option.text = `${cls.className} - ${cls.branch} (Term ${cls.term})`;
//         dropdown.appendChild(option);
//     });
// }

// function filterClassOptions() {
//     const input = document.getElementById("classSearchInput").value.toLowerCase();
//     const dropdown = document.getElementById("classDropdown");
//     dropdown.innerHTML = "";

//     newClassData
//         .filter(cls => cls.className.toLowerCase().includes(input))
//         .forEach(cls => {
//             const option = document.createElement("option");
//             option.value = cls.className;
//             option.text = `${cls.className} - ${cls.branch} (Term ${cls.term})`;
//             dropdown.appendChild(option);
//         });
// }

// function assignClassToCellly() {
//     const dropdown = document.getElementById("classDropdown");
//     const selectedValue = dropdown.value;
//     const selectedClass = newClassData.find(cls => cls.className === selectedValue);

//     if (selectedClassCell && selectedClass) {
//         // ✅ Overwrite the content, even if the cell already has something
//         selectedClassCell.innerText = `${selectedClass.className}`;

//         // Optional: add a data attribute to the cell if needed later
//         selectedClassCell.setAttribute("data-assigned-class", selectedClass.className);
//     }

//     closeClassAssignModal();
// }

let selectedClassCell = null;

function openClassAssignModal(cell) {
    selectedClassCell = cell;
    document.getElementById("classAssignModal").classList.add("show");
    loadClassOptions();
}

// let selectedClassName = null; // global variable to track class

// function openClassAssignModal(cell) {
//     selectedClassName = cell.textContent.trim(); // store clicked class name
//     // Show modal, load instructors, etc...
//     console.log("Selected class:", selectedClassName);
//     // Open your modal here
// }



function closeClassAssignModal() {
    document.getElementById("classAssignModal").classList.remove("show");
}

function loadClassOptions() {
    const dropdown = document.getElementById("classDropdown");
    dropdown.innerHTML = "";
    newClassData.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls.className;
        option.text = `${cls.className} - ${cls.branch} (Term ${cls.term})`;
        dropdown.appendChild(option);
    });
}

function filterClassOptions() {
    const input = document.getElementById("classSearchInput").value.toLowerCase();
    const dropdown = document.getElementById("classDropdown");
    dropdown.innerHTML = "";

    newClassData
        .filter(cls => cls.className.toLowerCase().includes(input))
        .forEach(cls => {
            const option = document.createElement("option");
            option.value = cls.className;
            option.text = `${cls.className} - ${cls.branch} (Term ${cls.term})`;
            dropdown.appendChild(option);
        });
}

function confirmClassAssignmentToCell() {
    const dropdown = document.getElementById("classDropdown");
    const selectedValue = dropdown.value;
    const selectedClass = newClassData.find(cls => cls.className === selectedValue);

    if (selectedClassCell && selectedClass) {
        // Assign class name to the selected cell
        selectedClassCell.innerText = selectedClass.className;

        // Optionally attach data to the cell for future reference
        selectedClassCell.setAttribute("data-assigned-class", selectedClass.className);
        selectedClassCell.setAttribute("data-branch", selectedClass.branch);
        selectedClassCell.setAttribute("data-term", selectedClass.term);
    }

    closeClassAssignModal();
}





const subjectsData = {
    "CS": {
        1: {
            subjects: [
                { name: "Math", totalPeriods: 110, remainingPeriods: 110 },
                { name: "Phy", totalPeriods: 44, remainingPeriods: 44 },
                { name: "Chem", totalPeriods: 44, remainingPeriods: 44 },
                { name: "BE", totalPeriods: 44, remainingPeriods: 44 },
                { name: "BEL", totalPeriods: 44, remainingPeriods: 44 },
                { name: "PHY/L", totalPeriods:121 , remainingPeriods: 121 },
                { name: "CHEM/L", totalPeriods: 132, remainingPeriods: 132 },
                 { name: "BEL/L", totalPeriods: 132, remainingPeriods: 132 },
                { name: "BE/L", totalPeriods: 88, remainingPeriods: 88 },
            ],
            totalTermPeriods: 294,
            remainingTermPeriods: 294
        },
        2: {
            subjects: [
                { name: "RT", totalPeriods: 44, remainingPeriods: 44 },
                { name: "DF", totalPeriods: 44, remainingPeriods: 44 },
                { name: "ST", totalPeriods: 44, remainingPeriods: 44 },
                { name: "BCS", totalPeriods: 44, remainingPeriods: 44 },
                { name: "TD", totalPeriods: 44, remainingPeriods:  44},
                { name: "OSP&PP", totalPeriods: 65, remainingPeriods: 65 },
                { name: "TE", totalPeriods: 44, remainingPeriods: 44 },
                { name: "PCC", totalPeriods: 20, remainingPeriods: 20 },
                { name: "MTPC", totalPeriods: 18, remainingPeriods: 18 },
                { name: "RT/L", totalPeriods: 88, remainingPeriods: 88 },
                { name: "DF/L", totalPeriods:132 , remainingPeriods:132  },
                { name: "TD/L", totalPeriods:88 , remainingPeriods:88  }
            
               
            ],
            totalTermPeriods: 210,
            remainingTermPeriods: 210
        },
        3: {
            subjects: [
                { name: "PST", totalPeriods: 44, remainingPeriods: 44 },
                { name: "ISL", totalPeriods: 44, remainingPeriods: 44 },
                { name: "CCN", totalPeriods: 44, remainingPeriods: 44 },
                { name: "MATH", totalPeriods: 88, remainingPeriods: 88 },
                { name: "PHY", totalPeriods: 44, remainingPeriods: 44},
                { name: "DT", totalPeriods: 44, remainingPeriods: 44 },
                { name: "CA", totalPeriods: 44, remainingPeriods: 44 },
                { name: "CCN/L", totalPeriods: 105, remainingPeriods: 105 },
                { name: "PHY/L", totalPeriods: 126, remainingPeriods: 126 },
                { name: "DT/L", totalPeriods: 132, remainingPeriods: 132 },
                { name: "CA/L", totalPeriods: 132, remainingPeriods: 132 },
        
            ],
            totalTermPeriods: 240,
            remainingTermPeriods: 240
        },
        4: {
            subjects: [
                { name: "EE", totalPeriods: 44, remainingPeriods: 44 },
                { name: "AI&CS", totalPeriods: 88, remainingPeriods: 88 },
                { name: "REQ", totalPeriods: 95, remainingPeriods: 95 },
                { name: "AEL", totalPeriods: 88, remainingPeriods: 88 },
                { name: "CLS", totalPeriods: 88, remainingPeriods: 88 },
                  { name: "EE/L", totalPeriods: 88, remainingPeriods: 88 },
                { name: "AI&CS/L", totalPeriods: 66, remainingPeriods: 66},
                { name: "REQ/L", totalPeriods: 88, remainingPeriods: 88 },
                { name: "AEL/L", totalPeriods: 88, remainingPeriods: 88 },
            
            ],
            totalTermPeriods: 225,
            remainingTermPeriods: 225
        },
        5: {
            subjects: [
                { name: "ILS", totalPeriods: 44, remainingPeriods: 44 },
                { name: "DT", totalPeriods: 44, remainingPeriods: 44 },
                { name: "SEQ", totalPeriods: 44, remainingPeriods: 44 },
                { name: "PCB", totalPeriods: 44, remainingPeriods: 44 },
                { name: "BM&IE", totalPeriods: 88, remainingPeriods: 88 },
                { name: "FCS", totalPeriods: 44, remainingPeriods: 44 },
                { name: "ILS/L", totalPeriods: 132, remainingPeriods: 132 },
                { name: "DT/L", totalPeriods: 132, remainingPeriods: 132 },
                { name: "SEQ/L", totalPeriods: 99, remainingPeriods: 99},
                { name: "PCB/L", totalPeriods: 132, remainingPeriods: 132 },
                { name: "FCS/L", totalPeriods: 44, remainingPeriods: 44 },
                
            ],
            totalTermPeriods: 300,
            remainingTermPeriods: 300
        },
        6: {
            subjects: [
                { name: "CIWS", totalPeriods: 44, remainingPeriods: 44 },
                { name: "PCB", totalPeriods: 44, remainingPeriods: 44 },
                { name: "O&A", totalPeriods: 132, remainingPeriods: 132 },
                { name: "EM", totalPeriods: 44, remainingPeriods: 44 },
                { name: "SM", totalPeriods: 88, remainingPeriods: 88 },
                 { name: "PROJ", totalPeriods: 187, remainingPeriods: 187 },
                { name: "CIWS/L", totalPeriods: 176, remainingPeriods: 176 },
                { name: "PCB/L", totalPeriods: 132, remainingPeriods: 132 },
                { name: "EM", totalPeriods: 44, remainingPeriods: 44 },
                
            ],
            totalTermPeriods: 300,
            remainingTermPeriods: 300
        }
    },
    "Data Science": {
        1: {
            subjects: [
                { name: "Statistics", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Python", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Intro to DS", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Excel for DS", totalPeriods: 42, remainingPeriods: 42 },
                { name: "English", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Ethics", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Data Ethics", totalPeriods: 42, remainingPeriods: 42 }
            ],
            totalTermPeriods: 294,
            remainingTermPeriods: 294
        },
        2: {
            subjects: [
                { name: "Linear Algebra", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Data Wrangling", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Data Viz", totalPeriods: 35, remainingPeriods: 35 },
                { name: "SQL", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Data Communication", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Scripting", totalPeriods: 35, remainingPeriods: 35 }
            ],
            totalTermPeriods: 210,
            remainingTermPeriods: 210
        },
        3: {
            subjects: [
                { name: "Machine Learning", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Big Data", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Python Advanced", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Model Evaluation", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Probability", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Cloud Tools", totalPeriods: 40, remainingPeriods: 40 }
            ],
            totalTermPeriods: 240,
            remainingTermPeriods: 240
        },
        4: {
            subjects: [
                { name: "Deep Learning", totalPeriods: 45, remainingPeriods: 45 },
                { name: "NLP", totalPeriods: 45, remainingPeriods: 45 },
                { name: "Time Series", totalPeriods: 45, remainingPeriods: 45 },
                { name: "Data Pipelines", totalPeriods: 45, remainingPeriods: 45 },
                { name: "AI Ethics", totalPeriods: 45, remainingPeriods: 45 },
                { name: "Analytics", totalPeriods: 45, remainingPeriods: 45 }
            ],
            totalTermPeriods: 270,
            remainingTermPeriods: 270
        },
        5: {
            subjects: [
                { name: "Capstone I", totalPeriods: 50, remainingPeriods: 50 },
                { name: "Model Deployment", totalPeriods: 50, remainingPeriods: 50 },
                { name: "Cloud DS", totalPeriods: 50, remainingPeriods: 50 },
                { name: "Business Intelligence", totalPeriods: 50, remainingPeriods: 50 },
                { name: "Data Strategy", totalPeriods: 50, remainingPeriods: 50 },
                { name: "ML Ops", totalPeriods: 50, remainingPeriods: 50 }
            ],
            totalTermPeriods: 300,
            remainingTermPeriods: 300
        },
        6: {
            subjects: [
                { name: "Capstone II", totalPeriods: 60, remainingPeriods: 60 },
                { name: "Internship", totalPeriods: 60, remainingPeriods: 60 },
                { name: "Data Privacy", totalPeriods: 60, remainingPeriods: 60 },
                { name: "Ethical Hacking for DS", totalPeriods: 60, remainingPeriods: 60 },
                { name: "Presentation Skills", totalPeriods: 60, remainingPeriods: 60 }
            ],
            totalTermPeriods: 300,
            remainingTermPeriods: 300
        }
    },
    // IT, AI, and SD branches follow the same pattern...
    "IT": {
        1: {
            subjects: [
                { name: "Computer Basics", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Office Automation", totalPeriods: 42, remainingPeriods: 42 },
                // ... other IT subjects
            ],
            totalTermPeriods: 294,
            remainingTermPeriods: 294
        },
        // ... other IT terms
    },
    "AI": {
        1: {
            subjects: [
                { name: "Maths for AI", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Intro to AI", totalPeriods: 42, remainingPeriods: 42 },
                // ... other AI subjects
            ],
            totalTermPeriods: 294,
            remainingTermPeriods: 294
        },
        // ... other AI terms
    },
    "SD": {
        1: {
            subjects: [
                { name: "Math", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Higher Math", totalPeriods: 42, remainingPeriods: 42 },
                // ... other SD subjects
            ],
            totalTermPeriods: 294,
            remainingTermPeriods: 294
        }
        // ... other SD terms
    }
};
const classProgressData = newClassData.map(cls => {
    const { branch, term } = cls;
    const branchData = subjectsData[branch];
    
    if (!branchData) {
        console.warn(`Branch '${branch}' not found in subjectsData`);
        return null;
    }
    
    const termData = branchData[term];
    if (!termData) {
        console.warn(`Term ${term} not found for branch '${branch}'`);
        return null;
    }
    
    return {
        className: cls.className,
        branch,
        term,
        subjects: termData.subjects,
        totalTermPeriods: termData.totalTermPeriods,
        remainingTermPeriods: termData.remainingTermPeriods,
        progressPercentage: (
            ((termData.totalTermPeriods - termData.remainingTermPeriods) / 
            termData.totalTermPeriods) * 100
        ).toFixed(2)
    };
}).filter(Boolean); // Remove null entries for invalid branches/terms

console.log(classProgressData);


//another clone of classes data for auto assignning and tracking report of subject periods
const classWiseSubjectsData = {};

newClassData.forEach(cls => {
    const { className, branch, term } = cls;
    const baseSubjects = subjectsData[branch]?.[term]?.subjects;

    if (!baseSubjects) {
        console.warn(`Missing subject data for Branch: ${branch}, Term: ${term}`);
        return;
    }

    classWiseSubjectsData[className] = baseSubjects.map(sub => ({
        name: sub.name,
        totalPeriods: sub.totalPeriods,
        remainingPeriods: sub.totalPeriods // start with fresh values for each class
    }));
});
const detailedClassProgressData = newClassData.map(cls => {
    const { className, branch, term } = cls;
    const subjectList = classWiseSubjectsData[className];

    if (!subjectList || subjectList.length === 0) {
        console.warn(`Subjects not found for class: ${className}`);
        return null;
    }

    const totalTermPeriods = subjectList.reduce((acc, sub) => acc + sub.totalPeriods, 0);
    const remainingTermPeriods = subjectList.reduce((acc, sub) => acc + sub.remainingPeriods, 0);

    return {
        className,
        branch,
        term,
        subjects: subjectList.map(sub => ({
            name: sub.name,
            total: sub.totalPeriods,
            remaining: sub.remainingPeriods,
            assigned: sub.totalPeriods - sub.remainingPeriods,
            progressPercent: (
                ((sub.totalPeriods - sub.remainingPeriods) / sub.totalPeriods) * 100
            ).toFixed(1)
        })),
        totalTermPeriods,
        remainingTermPeriods,
        overallProgressPercent: (
            ((totalTermPeriods - remainingTermPeriods) / totalTermPeriods) * 100
        ).toFixed(1)
    };
}).filter(Boolean); // Removes any null entries

function showClassProgressModal() {
    const container = document.getElementById("progressReportContent");
    if (!container) {
        alert("Progress container not found!");
        return;
    }

    // Clear old report
    container.innerHTML = "";

    for (const [className, subjects] of Object.entries(classWiseSubjectsData)) {
        const cls = newClassData.find(c => c.className === className);
        if (!cls) continue;

        const { branch, term } = cls;

        const totalPeriods = subjects.reduce((sum, s) => sum + s.totalPeriods, 0);
        const remainingPeriods = subjects.reduce((sum, s) => sum + s.remainingPeriods, 0);
        const percentage = ((totalPeriods - remainingPeriods) / totalPeriods * 100).toFixed(1);

        // Create a container div for each class
        const classDiv = document.createElement("div");
        classDiv.style.borderBottom = "1px solid #ccc";
        classDiv.style.padding = "15px 0";

        // Highlighted class title
        const title = document.createElement("h3");
        title.textContent = `📘 Class: ${className}`;
        title.style.color = "#2c3e50";
        title.style.marginBottom = "5px";

        const meta = document.createElement("p");
        meta.innerHTML = `<strong>📚 Branch:</strong> ${branch} &nbsp; | &nbsp; <strong>📅 Term:</strong> ${term} <br>
                          <strong>📈 Progress:</strong> ${percentage}% (${totalPeriods - remainingPeriods}/${totalPeriods})`;
        meta.style.marginBottom = "10px";

        const subjectList = document.createElement("ul");
        subjectList.style.paddingLeft = "20px";
        subjects.forEach(sub => {
            const li = document.createElement("li");
            const assigned = sub.totalPeriods - sub.remainingPeriods;
            const progress = ((assigned / sub.totalPeriods) * 100).toFixed(1);
            li.textContent = `${sub.name}: ${assigned}/${sub.totalPeriods} (${progress}%)`;
            subjectList.appendChild(li);
        });

        classDiv.appendChild(title);
        classDiv.appendChild(meta);
        classDiv.appendChild(subjectList);
        container.appendChild(classDiv);
    }

    document.getElementById("progressModal").style.display = "block";
}


function closeProgressModal() {
    document.getElementById("progressModal").style.display = "none";
}





// let selectedCell = null;
// let selectedDay = "";
// let selectedPeriodIndex = -1;




// // ========== GLOBAL VARIABLES ==========
// let clickedScheduleCell = null;

// // ========== CLASS ASSIGNMENT FUNCTIONS ==========
// function handleClassCellClick(cell) {
//     // Store the clicked cell reference
//     clickedScheduleCell = cell;
    
//     // Highlight the clicked cell
//     cell.style.backgroundColor = '#e6f7ff';
    
//     // Populate class dropdown
//     const classSelect = document.getElementById("classSelectDropdown");
//     classSelect.innerHTML = ""; // Clear previous options
    
//     // Add default empty option
//     const defaultOption = document.createElement("option");
//     defaultOption.value = "";
//     defaultOption.textContent = "-- Select Class --";
//     classSelect.appendChild(defaultOption);
    
//     // Add all classes as options
//     newClassData.forEach(cls => {
//         const option = document.createElement("option");
//         option.value = cls.className;
//         option.textContent = `${cls.className} (${cls.branch} - Term ${cls.term})`;
//         classSelect.appendChild(option);
//     });

//     // Show the modal
//     document.getElementById("classAssignModal").style.display = "block";
// }

// function assignClassToCell() {
//     try {
//         // Validate selected cell
//         if (!clickedScheduleCell) {
//             throw new Error("No cell selected. Please click a cell first.");
//         }
        
//         // Get selected class
//         const className = document.getElementById("classSelectDropdown").value;
//         if (!className) {
//             throw new Error("Please select a class from the dropdown.");
//         }
        
//         // Update cell content
//         clickedScheduleCell.textContent = className;
//         clickedScheduleCell.style.backgroundColor = ''; // Remove highlight
        
//         // Close modal and reset
//         document.getElementById("classAssignModal").style.display = "none";
//         clickedScheduleCell = null;
        
//     } catch (error) {
//         alert(error.message);
//         console.error("Assignment error:", error);
//     }
// }

// // ========== CLASS DETAILS FUNCTIONS ==========
// function showClassDetailsFromCell(cell) {
//     try {
//         // Find containing table
//         const table = cell.closest("table");
//         if (!table) throw new Error("Table not found.");
        
//         // Get column position
//         const columnIndex = cell.cellIndex;
        
//         // Get class name from header row (row 1)
//         const classNameCell = table.rows[1]?.cells[columnIndex];
//         if (!classNameCell) throw new Error("Class name cell not found.");
        
//         const className = classNameCell.textContent.trim();
//         if (!className) throw new Error("Class name is empty.");
        
//         // Find class in data
//         const classInfo = newClassData.find(cls => 
//             cls.className.trim().toLowerCase() === className.toLowerCase()
//         );
//         if (!classInfo) throw new Error(`Class "${className}" not found.`);
        
//         // Get subject data
//         const classSubjects = classWiseSubjectsData[className];
//         if (!classSubjects?.length) throw new Error(`No subjects found for ${className}.`);
        
//         // Update modal display
//         updateClassDetailsModal(classInfo, classSubjects);
        
//         // Show modal
//         document.getElementById("classDetailsModal").style.display = "block";
        
//     } catch (error) {
//         alert(error.message);
//         console.error("Class details error:", error);
//     }
// }

// function updateClassDetailsModal(classInfo, subjects) {
//     const { className, branch, term } = classInfo;
    
//     // Set basic info
//     document.getElementById("modalClassName").textContent = className;
//     document.getElementById("modalBranch").textContent = branch;
//     document.getElementById("modalTerm").textContent = term;
    
//     // Build subject list
//     const subjectList = document.getElementById("modalSubjects");
//     subjectList.innerHTML = "";
    
//     subjects.forEach(sub => {
//         const assigned = sub.totalPeriods - sub.remainingPeriods;
//         const progress = ((assigned / sub.totalPeriods) * 100).toFixed(1);
        
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <strong>${sub.name}:</strong> 
//             <span>${assigned}/${sub.totalPeriods} periods</span>
//             <progress value="${progress}" max="100"></progress>
//             <span>${progress}%</span>
//         `;
//         subjectList.appendChild(li);
//     });
// }

// // ========== MODAL CONTROL FUNCTIONS ==========
// function closeClassAssignModal() {
//     document.getElementById("classAssignModal").style.display = "none";
//     if (clickedScheduleCell) {
//         clickedScheduleCell.style.backgroundColor = ''; // Remove highlight
//         clickedScheduleCell = null;
//     }
// }

// function closeClassDetailsModal() {
//     document.getElementById("classDetailsModal").style.display = "none";
// }

// // ========== INITIALIZATION ==========
// document.addEventListener('DOMContentLoaded', function() {
//     // Event delegation for class cells
//     document.addEventListener('click', function(e) {
//         if (e.target.matches('td[onclick*="openClassAssignModal"]')) {
//             handleClassCellClick(e.target);
//         }
//         if (e.target.matches('td[onclick*="showClassDetailsFromCell"]')) {
//             showClassDetailsFromCell(e.target);
//         }
//     });
    
//     // Assign button event
//     document.getElementById("assignClassBtn").addEventListener('click', assignClassToCell);
// });



// Function to add a new column (Period)

function addColumn() {
    const table = document.getElementById("scheduleTable");
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let newCell = document.createElement("td");

        let hasColspan = false;

        for (let cell of row.cells) {
            if (cell.hasAttribute("colspan")) {
                let cellColspan = parseInt(cell.getAttribute("colspan"), 10);
                cell.setAttribute("colspan", cellColspan + 1);
                hasColspan = true;
                break;
            }
        }

        if (hasColspan) continue; // Skip row with colspan

        // ✅ Special logic based on row index
        if (i === 1) {
            // Row index 1: special class cell
            newCell.setAttribute("onclick", "openClassAssignModal(this)");
        } else if (i <= 5) {
            // Editable time slot rows
            newCell.setAttribute("contenteditable", "true");
        } else {
            // Instructor assignment rows
            newCell.setAttribute("onclick", `assignInstructor(this, '${days[(i - 6) % 5]}')`);
        }

        row.appendChild(newCell);
    }

    updateColspan(); // ✅ Keep headers in sync
}


function updateColspan() {
    const table = document.getElementById("scheduleTable");
    const headerRow = table.rows[0];
    let firstCell = headerRow.cells[0]; // The main header cell

    if (firstCell.hasAttribute("colspan")) {
        let currentColspan = parseInt(firstCell.getAttribute("colspan"), 10);
        firstCell.setAttribute("colspan", currentColspan + 1);
    }
}








// Function to remove the last column (Period) with error handling
function removeColumn() {
    const table = document.getElementById("scheduleTable");
    const rows = table.rows;

    if (rows[0].cells.length <= 2) { // Prevent removing all periods
        alert("You must have at least one period.");
        return;
    }

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let hasColspan = false;

        for (let cell of row.cells) {
            if (cell.hasAttribute("colspan")) {
                let cellColspan = parseInt(cell.getAttribute("colspan"), 10);
                if (cellColspan > 1) {
                    cell.setAttribute("colspan", cellColspan - 1); // 🔹 Decrease colspan
                }
                hasColspan = true;
                break;
            }
        }

        if (hasColspan) continue; // 🔹 Skip rows with colspan

        if (row.cells.length > 1) {
            row.removeChild(row.cells[row.cells.length - 1]); // 🔹 Remove last column cell
        }
    }

    updateColspan(-1); // 🔹 Decrease colspan when removing
}

// Function to adjust table headers dynamically
function adjustTableHeaders() {
    const headerRow = document.getElementById("scheduleTable").rows[0];
    let totalColumns = headerRow.cells.length - 1; // Exclude the first static column

    for (let th of headerRow.cells) {
        if (th.hasAttribute("colspan")) {
            th.setAttribute("colspan", totalColumns);
        }
    }
}

//function when assigning class
function enableClassHeaderClicks() {
    const table = document.querySelector("table");
    const classRow = table.rows[1]; // Row index 1

    if (!classRow) return;

    for (let col = 1; col < classRow.cells.length; col++) {
        classRow.cells[col].addEventListener("click", function () {
            const className = classRow.cells[col].textContent.trim();
            showClassDetails(className);
        });
    }
}
enableClassHeaderClicks();


// Open Modal on Click
// function assignInstructor(cell, day, periodIndex) {
//     selectedCell = cell;
//     selectedDay = day;
//     selectedPeriodIndex = periodIndex !== undefined ? periodIndex : Array.from(cell.parentNode.children).indexOf(cell);

//     document.getElementById("searchInstructor").value = "";
//     loadInstructors();

//     document.getElementById("modal").style.display = "block";
//     updateClassDetailsModal();
// }

// // Load Instructors in Dropdown
// function loadInstructors(filteredList = instructors) {
//     const instructorSelect = document.getElementById("instructorSelect");
//     instructorSelect.innerHTML = "";

//     filteredList.forEach(inst => {
//         if (inst.weeklyLoad < inst.maxLoad) {
//             const option = document.createElement("option");
//             option.value = inst.code;
//             option.textContent = `${inst.name} (${inst.weeklyLoad}/${inst.maxLoad})`;
//             instructorSelect.appendChild(option);
//         }
//     });

//     populateSubjects();
// }

// // Search Instructors
// function filterInstructors() {
//     const searchValue = document.getElementById("searchInstructor").value.toLowerCase();
//     const filteredList = instructors.filter(inst =>
//         inst.name.toLowerCase().includes(searchValue) || inst.code.toString().includes(searchValue)
//     );

//     loadInstructors(filteredList);
// }

// // Populate Subjects Based on Selected Instructor
// function populateSubjects() {
//     const selectedInstructorCode = parseInt(document.getElementById("instructorSelect").value);
//     const subjectSelect = document.getElementById("subjectSelect");
//     subjectSelect.innerHTML = "";

//     const instructor = instructors.find(inst => inst.code === selectedInstructorCode);
//     if (instructor) {
//         instructor.subjects.forEach(subject => {
//             const option = document.createElement("option");
//             option.value = subject;
//             option.textContent = subject;
//             subjectSelect.appendChild(option);
//         });
//     }
// }

// // Confirm Selection and Assign Instructor
// function confirmSelection() {
//     const selectedInstructorCode = parseInt(document.getElementById("instructorSelect").value);
//     const selectedSubject = document.getElementById("subjectSelect").value;
//     const instructor = instructors.find(inst => inst.code === selectedInstructorCode);

//     if (!instructor) {
//         alert("Please select a valid instructor.");
//         return;
//     }

//     // ✅ Check if instructor already assigned in the same row
//     const row = selectedCell.parentElement; // Get the row <tr>
//     const cells = Array.from(row.cells);
//     for (let cell of cells) {
//         if (cell !== selectedCell) {
//             const cellText = cell.textContent.trim();
//             if (cellText.includes(`- ${selectedInstructorCode}`)) {
//                 alert(`This instructor (code: ${selectedInstructorCode}) is already assigned in this slot.`);
//                 return;
//             }
//         }
//     }

//     // ✅ Unassign previous instructor if different
//     const existingData = selectedCell.textContent.trim();
//     if (existingData) {
//         const existingCode = parseInt(existingData.split(" - ")[1]); // Format: Subject - Code
//         if (existingCode !== selectedInstructorCode) {
//             const existingInstructor = instructors.find(inst => inst.code === existingCode);
//             if (existingInstructor) {
//                 existingInstructor.weeklyLoad = Math.max(0, existingInstructor.weeklyLoad - 1);
//                 if (existingInstructor.assignedPeriods[selectedDay]) {
//                     existingInstructor.assignedPeriods[selectedDay].delete(selectedPeriodIndex);
//                 }
//             }
//         }
//     }

//     // ✅ Initialize assignedPeriods for this day
//     if (!instructor.assignedPeriods[selectedDay]) {
//         instructor.assignedPeriods[selectedDay] = new Set();
//     }

//     // ✅ Assign new instructor
//     instructor.assignedPeriods[selectedDay].add(selectedPeriodIndex);
//     instructor.weeklyLoad++;
//     selectedCell.textContent = `${selectedSubject} - ${instructor.code}`;

//     closeModal();
// }







// Global variables
let selectedCell = null;
let selectedDay = null;
let selectedPeriodIndex = null;

// Main function to open the assignment modal
function assignInstructor(cell, day, periodIndex) {
    selectedCell = cell;
    selectedDay = day;
    selectedPeriodIndex = periodIndex !== undefined ? periodIndex : Array.from(cell.parentNode.children).indexOf(cell);

    // Clear search and load instructors
    document.getElementById("searchInstructor").value = "";
    loadInstructors();

    // Load class details
    loadClassDetails(cell);

    // Show modal
    document.getElementById("modal").style.display = "block";
}

// Load class information into modal
function loadClassDetails(cell) {
    try {
        const table = cell.closest("table");
        if (!table) throw new Error("Table not found");
        
        const columnIndex = cell.cellIndex;
        const classNameCell = table.rows[1]?.cells[columnIndex];
        if (!classNameCell) throw new Error("Class name cell not found");
        
        const className = classNameCell.textContent.trim();
        if (!className) throw new Error("Class name is empty");
        
        const classInfo = newClassData.find(cls => 
            cls.className.trim().toLowerCase() === className.toLowerCase()
        );
        if (!classInfo) throw new Error(`Class "${className}" not found`);
        
        const classSubjects = classWiseSubjectsData[className];
        if (!classSubjects?.length) throw new Error(`No subjects found for ${className}`);
        
        updateClassDetails(classInfo, classSubjects);
    } catch (error) {
        console.error("Error loading class details:", error);
        document.querySelector(".classname").textContent = "Class Name: Error loading data";
        document.querySelector(".branchname").textContent = "Branch: Error loading data";
        document.querySelector(".term").textContent = "Term: Error loading data";
        document.querySelector(".subjects").textContent = "Subjects: Error loading data";
    }
}

// Update class details display
function updateClassDetails(classInfo, subjects) {
    document.querySelector(".classname").textContent = `Class: ${classInfo.className}`;
    document.querySelector(".branchname").textContent = `Branch: ${classInfo.branch || 'N/A'}`;
    document.querySelector(".term").textContent = `Term: ${classInfo.term || 'N/A'}`;
    
    const subjectText = subjects.map(sub => 
        `${sub.name}: ${sub.totalPeriods - sub.remainingPeriods}/${sub.totalPeriods} periods`
    ).join('\n');
    
    document.querySelector(".subjects").textContent = `Subjects:\n${subjectText}`;
}

// Load instructors into dropdown
// function loadInstructors(filteredList = instructors) {
//     const instructorSelect = document.getElementById("instructorSelect");
//     instructorSelect.innerHTML = "";

//     filteredList.forEach(inst => {
//         if (inst.weeklyLoad < inst.maxLoad) {
//             const option = document.createElement("option");
//             option.value = inst.code;
//             option.textContent = `${inst.name} (${inst.weeklyLoad}/${inst.maxLoad})`;
//             instructorSelect.appendChild(option);
//         }
//     });

//     populateSubjects();
// }





function loadInstructors(filteredList = instructors) {
    const instructorSelect = document.getElementById("instructorSelect");
    instructorSelect.innerHTML = "";

    filteredList.forEach(inst => {
        const option = document.createElement("option");
        option.value = inst.code;
        option.textContent = `${inst.name} (${inst.weeklyLoad}/${inst.maxLoad})`;
        instructorSelect.appendChild(option);
    });

    populateSubjects();
}



// Filter instructors based on search
function filterInstructors() {
    const searchValue = document.getElementById("searchInstructor").value.toLowerCase();
    const filteredList = instructors.filter(inst =>
        inst.name.toLowerCase().includes(searchValue) || inst.code.toString().includes(searchValue)
    );
    loadInstructors(filteredList);
}

// Populate subjects for selected instructor
function populateSubjects() {
    const selectedInstructorCode = parseInt(document.getElementById("instructorSelect").value);
    const subjectSelect = document.getElementById("subjectSelect");
    subjectSelect.innerHTML = "";

    const instructor = instructors.find(inst => inst.code === selectedInstructorCode);
    if (instructor && instructor.subjects) {
        instructor.subjects.forEach(subject => {
            const option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
    }
}

// Confirm and process the assignment
// function confirmSelection() {
//     const selectedInstructorCode = parseInt(document.getElementById("instructorSelect").value);
//     const selectedSubject = document.getElementById("subjectSelect").value;
//     const instructor = instructors.find(inst => inst.code === selectedInstructorCode);

//     if (!instructor) {
//         alert("Please select a valid instructor.");
//         return;
//     }

//     // Check for existing assignment in same row
//     const row = selectedCell.parentElement;
//     const cells = Array.from(row.cells);
//     for (let cell of cells) {
//         if (cell !== selectedCell) {
//             const cellText = cell.textContent.trim();
//             if (cellText.includes(`- ${selectedInstructorCode}`)) {
//                 alert(`This instructor is already assigned in this time slot.`);
//                 return;
//             }
//         }
//     }

//     // Unassign previous instructor if different
//     const existingData = selectedCell.textContent.trim();
//     if (existingData) {
//         const match = existingData.match(/.+ - (\d+)/);
//         if (match) {
//             const existingCode = parseInt(match[1]);
//             if (existingCode !== selectedInstructorCode) {
//                 const existingInstructor = instructors.find(inst => inst.code === existingCode);
//                 if (existingInstructor) {
//                     existingInstructor.weeklyLoad = Math.max(0, existingInstructor.weeklyLoad - 1);
//                     if (existingInstructor.assignedPeriods[selectedDay]) {
//                         existingInstructor.assignedPeriods[selectedDay].delete(selectedPeriodIndex);
//                     }
//                 }
//             }
//         }
//     }

//     // Assign new instructor
//     if (!instructor.assignedPeriods[selectedDay]) {
//         instructor.assignedPeriods[selectedDay] = new Set();
//     }
//     instructor.assignedPeriods[selectedDay].add(selectedPeriodIndex);
//     instructor.weeklyLoad++;
    
//     // Update cell display
//     selectedCell.textContent = `${selectedSubject} - ${instructor.code}`;
//     selectedCell.setAttribute('data-instructor', instructor.code);
//     selectedCell.setAttribute('data-subject', selectedSubject);

//     closeModal();
// }


function confirmSelection() {
    const selectedInstructorCode = parseInt(document.getElementById("instructorSelect").value);
    const selectedSubject = document.getElementById("subjectSelect").value;
    const instructor = instructors.find(inst => inst.code === selectedInstructorCode);

    if (!instructor) {
        alert("Please select a valid instructor.");
        return;
    }

    const row = selectedCell.parentElement;
    const cells = Array.from(row.cells);
    for (let cell of cells) {
        if (cell !== selectedCell) {
            const cellText = cell.textContent.trim();
            if (cellText.includes(`- ${selectedInstructorCode}`)) {
                alert(`This instructor is already assigned in this time slot.`);
                return;
            }
        }
    }

    const table = selectedCell.closest("table");
    const columnIndex = selectedCell.cellIndex;
    const classNameCell = table.rows[1]?.cells[columnIndex];
    const className = classNameCell?.textContent.trim();

    if (!classWiseSubjectsData[className]) {
        alert("Class data not found in classWiseSubjectsData.");
    }

    const existingData = selectedCell.textContent.trim();
    const previousSubjectName = existingData.includes(" - ") ? existingData.split(" - ")[0].trim() : null;
    const previousInstructorCode = parseInt(selectedCell.getAttribute("data-instructor"));

    if (previousSubjectName && classWiseSubjectsData[className]) {
        const prevSub = classWiseSubjectsData[className].find(s => s.name === previousSubjectName);
        if (prevSub) {
            prevSub.remainingPeriods++;
        }

        const prevInstructor = instructors.find(inst => inst.code === previousInstructorCode);
        if (prevInstructor) {
            prevInstructor.weeklyLoad = Math.max(0, prevInstructor.weeklyLoad - 1);
            if (prevInstructor.assignedPeriods[selectedDay]) {
                prevInstructor.assignedPeriods[selectedDay].delete(selectedPeriodIndex);
            }
        }
    }

    let foundSubject = false;
    if (classWiseSubjectsData[className]) {
        const sub = classWiseSubjectsData[className].find(s => s.name === selectedSubject);
        if (sub) {
            if (sub.remainingPeriods > 0) {
                sub.remainingPeriods--;
            }
            foundSubject = true;
        }
    }

    if (!foundSubject) {
        alert("This class doesn't have this subject for the current term. It will still be assigned visually.");
    }

    if (!instructor.assignedPeriods[selectedDay]) {
        instructor.assignedPeriods[selectedDay] = new Set();
    }
    instructor.assignedPeriods[selectedDay].add(selectedPeriodIndex);

    instructor.weeklyLoad++;

    // 🔔 Check overload
    if (instructor.weeklyLoad > instructor.maxLoad) {
        alert(`⚠️ ${instructor.name} is now overloaded (${instructor.weeklyLoad}/${instructor.maxLoad}).`);
    }

    selectedCell.textContent = `${selectedSubject} - ${instructor.code}`;
    selectedCell.setAttribute("data-instructor", instructor.code);
    selectedCell.setAttribute("data-subject", selectedSubject);

    closeModal();
}



// Close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
    selectedCell = null;
    selectedDay = null;
    selectedPeriodIndex = null;
}



// Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}






//print button here
function showClassOptions() {
    let select = document.getElementById("classSelect");
    select.innerHTML = ""; // Clear previous options

    let table = document.getElementById("scheduleTable");
    let headers = table.rows[0].cells;

    for (let i = 1; i < headers.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = headers[i].textContent; // Get editable class name
        select.appendChild(option);
    }

    select.style.display = "inline";
    document.getElementById("printBtn").style.display = "inline";
}

function showClassOptions() {
    let select = document.getElementById("classSelect");
    select.innerHTML = ""; // Clear previous options

    let table = document.getElementById("scheduleTable");
    let classRow = table.rows[1].cells; // 🔹 Now selecting from the 2nd row

    for (let i = 1; i < classRow.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = classRow[i].textContent; // Get user-set class name
        select.appendChild(option);
    }

    select.style.display = "inline";
    document.getElementById("printBtn").style.display = "inline";
}

function showClassOptions() {
    let select = document.getElementById("classSelect");
    select.innerHTML = ""; // Clear previous options

    let table = document.getElementById("scheduleTable");
    let classRow = table.rows[1].cells; // 🔹 Fetch class names from the 2nd row

    for (let i = 1; i < classRow.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = classRow[i].textContent.trim(); // Get user-set class name
        select.appendChild(option);
    }

    select.style.display = "inline";
    document.getElementById("printBtn").style.display = "inline";
}



// function printSelectedClass() {
//     const select = document.getElementById("classSelect");
//     const classIndex = parseInt(select.value);

//     if (isNaN(classIndex) || classIndex < 1) {
//         alert("Please select a valid class!");
//         return;
//     }

//     const table = document.getElementById("scheduleTable");
//     const className = table.rows[1].cells[classIndex].textContent.trim();

//     const printWindow = window.open('', '_blank');
//     let printContent = `
//         <html>
//         <head>
//             <title>Print Schedule - ${className}</title>
//             <style>
//                 body { font-family: Arial, sans-serif; text-align: center; }
//                 table { border-collapse: collapse; width: 100%; margin-top: 20px; }
//                 th, td { border: 1px solid black; padding: 8px; text-align: center; }
//                 h2, h3 { margin-top: 40px; }
//                 @media print {
//                     @page { size: landscape; }
//                 }
//             </style>
//         </head>
//         <body>
//             <h2>${className} Class Schedule</h2>
//             <table>
//                 <tr>
//                     <th>Day</th>
//                     <th>0800-0840</th>
//                     <th>0840-0920</th>
//                     <th>0920-1000</th>
//                     <th>1000-1040</th>
//                     <th>1040-1100</th>
//                     <th>1100-1140</th>
//                     <th>1140-1220</th>
//                     <th>1220-1300</th>
//                     <th>1300-1330</th>
//                     <th>1330-1410</th>
//                     <th>1410-1450</th>
//                 </tr>`;

//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//     const periodsPerDay = 11;
//     let currentRow = 9;

//     const instructorMap = {}; // { 101: { name: "Mr. Adeel", subjects: Set() }, ... }

//     for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
//         const dayName = days[dayIndex];
//         let rowContent = `<tr><td>${dayName}</td>`;

//         for (let period = 0; period < periodsPerDay; period++) {
//             const row = table.rows[currentRow + period];
//             const cellText = row?.cells[classIndex]?.textContent.trim() || "—";
//             rowContent += `<td>${cellText}</td>`;

//             const match = cellText.match(/- *(\d+)/);
//             if (match) {
//                 const code = parseInt(match[1]);
//                 const instructor = instructors.find(inst => inst.code === code);
//                 if (instructor) {
//                     const subject = cellText.split('-')[0].trim();
//                     if (!instructorMap[code]) {
//                         instructorMap[code] = {
//                             name: instructor.name,
//                             subjects: new Set()
//                         };
//                     }
//                     instructorMap[code].subjects.add(subject);
//                 }
//             }
//         }

//         currentRow += periodsPerDay;
//         rowContent += `</tr>`;
//         printContent += rowContent;
//     }

//     printContent += `</table>`;

//     // ✅ Build instructor assignment table
//     const instructorEntries = Object.entries(instructorMap);
//     if (instructorEntries.length > 0) {
//         printContent += `
//             <h3>Instructor Assignment</h3>
//             <table>
//                 <tr>
//                     <th>S.No</th>
//                     <th>Instructor Name</th>
//                     <th>Subjects</th>
//                 </tr>`;

//         instructorEntries.forEach(([code, data], idx) => {
//             const subjectList = Array.from(data.subjects).join(", ");
//             printContent += `
//                 <tr>
//                     <td>${idx + 1}</td>
//                     <td>${data.name}</td>
//                     <td>${subjectList}</td>
//                 </tr>`;
//         });

//         printContent += `</table>`;
//     } else {
//         printContent += `<p style="color: red; margin-top: 30px;">⚠️ No instructors found for this class.</p>`;
//     }

//     printContent += `
//             <script>
//                 window.onload = function() {
//                     setTimeout(() => window.print(), 500);
//                 };
//             </script>
//         </body>
//         </html>`;

//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();
// }


// function printSelectedClass() {
//     const select = document.getElementById("classSelect");
//     const classIndex = parseInt(select.value);

//     if (isNaN(classIndex) || classIndex < 1) {
//         alert("Please select a valid class!");
//         return;
//     }

//     const table = document.getElementById("scheduleTable");
//     const className = table.rows[1].cells[classIndex].textContent.trim();

//     const printWindow = window.open('', '_blank');
//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//     const periodsPerDay = 11;
//     let currentRow = 5;

//     const weekdayTimings = [
//         "0800–0840", "0840–0920", "0920–1000", "1000–1040", "1040–1100",
//         "1100–1140", "1140–1220", "1220–1300", "1300–1330", "1330–1410", "1410–1450"
//     ];

//     const fridayTimings = [
//         "0800–0830", "0830–0900", "0900–0930", "0930–1000", "1000–1030",
//         "1030–1100", "1100–1130", "1130–1200", "1200–1230", "1230–1300", "1300–1330"
//     ];

//     const instructorMap = {};

//     // Build editable timing rows
//     const buildTimingRow = (timings, editableIdSuffix) => {
//         return `<tr><th>Day</th>` +
//             timings.map((time, i) => `<th contenteditable="true" id="time-${editableIdSuffix}-${i + 1}">${time}</th>`).join("") +
//             `</tr>`;
//     };

//     let printContent = `
//     <html>
//     <head>
//         <title>Print Schedule - ${className}</title>
//         <style>
//             body { font-family: Arial, sans-serif; text-align: center; }
//             table { border-collapse: collapse; width: 100%; margin-top: 20px; }
//             th, td { border: 1px solid black; padding: 8px; text-align: center; }
//             h2, h3 { margin-top: 40px; }
//             .footer { margin-top: 40px; font-size: 0.85em; color: #777; }
//             @media print {
//                 @page { size: landscape; }
//                 [contenteditable] { border: none !important; }
//             }
//         </style>
//     </head>
//     <body>
//         <h2>${className} Class Schedule</h2>
//         <table>
//             ${buildTimingRow(weekdayTimings, "top")}
//     `;

//     for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
//         const dayName = days[dayIndex];
//         let rowContent = `<tr><td>${dayName}</td>`;

//         for (let period = 0; period < periodsPerDay; period++) {
//             const row = table.rows[currentRow + period];
//             const cellText = row?.cells[classIndex]?.textContent.trim() || "—";
//             rowContent += `<td>${cellText}</td>`;

//             const match = cellText.match(/- *(\d+)/);
//             if (match) {
//                 const code = parseInt(match[1]);
//                 const instructor = instructors.find(inst => inst.code === code);
//                 if (instructor) {
//                     const subject = cellText.split('-')[0].trim();
//                     if (!instructorMap[code]) {
//                         instructorMap[code] = {
//                             name: instructor.name,
//                             subjects: new Set()
//                         };
//                     }
//                     instructorMap[code].subjects.add(subject);
//                 }
//             }
//         }

//         currentRow += periodsPerDay;
//         rowContent += `</tr>`;
//         printContent += rowContent;
//     }

//     printContent += `
//             ${buildTimingRow(fridayTimings, "bottom")}
//         </table>
//     `;

//     // Instructor Summary
//     const instructorEntries = Object.entries(instructorMap);
//     if (instructorEntries.length > 0) {
//         printContent += `
//         <h3>Instructor Assignment</h3>
//         <table>
//             <tr>
//                 <th>S.No</th>
//                 <th>Instructor Name</th>
//                 <th>Subjects</th>
//             </tr>`;

//         instructorEntries.forEach(([code, data], idx) => {
//             const subjectList = Array.from(data.subjects).join(", ");
//             printContent += `
//                 <tr>
//                     <td>${idx + 1}</td>
//                     <td>${data.name}</td>
//                     <td>${subjectList}</td>
//                 </tr>`;
//         });

//         printContent += `</table>`;
//     }

//     // Footer credit
//     printContent += `
//         <div class="footer">
//             This software is developed by Qasim.
//         </div>

//         <script>
//             window.onload = function() {
//                 setTimeout(() => window.print(), 500);
//             };
//         </script>
//     </body>
//     </html>`;

//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();
// }


function printSelectedClass() {
    const select = document.getElementById("classSelect");
    const classIndex = parseInt(select.value);

    if (isNaN(classIndex) || classIndex < 1) {
        alert("Please select a valid class!");
        return;
    }

    const table = document.getElementById("scheduleTable");
    const className = table.rows[1].cells[classIndex].textContent.trim();

    const printWindow = window.open('', '_blank');
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const periodsPerDay = 11;
    let currentRow = 9; // 🔁 updated start of period data

    const weekdayTimings = [
        "0800–0840", "0840–0920", "0920–1000", "1000–1040", "1040–1100",
        "1100–1140", "1140–1220", "1220–1300", "1300–1330", "1330–1410", "1410–1450"
    ];

    const fridayTimings = [
        "0800–0830", "0830–0900", "0900–0930", "0930–1000", "1000–1030",
        "1030–1100", "1100–1130", "1130–1200", "1200–1230", "1230–1300", "1300–1330"
    ];

    const instructorMap = {};

    const buildTimingRow = (timings, idSuffix) => {
        return `<tr><th>Day</th>` +
            timings.map((time, i) => `<th contenteditable="true" id="time-${idSuffix}-${i + 1}">${time}</th>`).join("") +
            `</tr>`;
    };

    let printContent = `
    <html>
    <head>
        <title>Print Schedule - ${className}</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; }
            table { border-collapse: collapse; width: 100%; margin-top: 20px; }
            th, td { border: 1px solid black; padding: 8px; text-align: center; }
            h2, h3 { margin-top: 40px; }
            .footer { margin-top: 40px; font-size: 0.85em; color: #777; }
            @media print {
                @page { size: landscape; }
                [contenteditable] { border: none !important; }
            }
        </style>
    </head>
    <body>
        <h2>${className} Class Schedule</h2>
        <table>
            ${buildTimingRow(weekdayTimings, "top")}
    `;

    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        const dayName = days[dayIndex];

        // Insert Friday timing row before Friday content
        if (dayName === "Friday") {
            printContent += buildTimingRow(fridayTimings, "friday");
        }

        let rowContent = `<tr><td>${dayName}</td>`;

        for (let period = 0; period < periodsPerDay; period++) {
            const row = table.rows[currentRow + period];
            const cellText = row?.cells[classIndex]?.textContent.trim() || "—";
            rowContent += `<td>${cellText}</td>`;

            const match = cellText.match(/- *(\d+)/);
            if (match) {
                const code = parseInt(match[1]);
                const instructor = instructors.find(inst => inst.code === code);
                if (instructor) {
                    const subject = cellText.split('-')[0].trim();
                    if (!instructorMap[code]) {
                        instructorMap[code] = {
                            name: instructor.name,
                            subjects: new Set()
                        };
                    }
                    instructorMap[code].subjects.add(subject);
                }
            }
        }

        currentRow += periodsPerDay;
        rowContent += `</tr>`;
        printContent += rowContent;
    }

    printContent += `</table>`;

    // Instructor Summary
    const instructorEntries = Object.entries(instructorMap);
    if (instructorEntries.length > 0) {
        printContent += `
        <h3>Instructor Assignment</h3>
        <table>
            <tr>
                <th>S.No</th>
                <th>Instructor Name</th>
                <th>Subjects</th>
            </tr>`;

        instructorEntries.forEach(([code, data], idx) => {
            const subjectList = Array.from(data.subjects).join(", ");
            printContent += `
                <tr>
                    <td>${idx + 1}</td>
                    <td>${data.name}</td>
                    <td>${subjectList}</td>
                </tr>`;
        });

        printContent += `</table>`;
    }

    // Footer credit
    printContent += `
        <div class="footer">
            This software is developed by Qasim.
        </div>

        <script>
            window.onload = function() {
                setTimeout(() => window.print(), 500);
            };
        </script>
    </body>
    </html>`;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
}






//print instructor table
// window.onload = function () {
//     let table = document.getElementById("scheduleTable");
//     let classHeaderRow = table.rows[1]; // ✅ Row 1 contains class names
//     let dropdown = document.getElementById("classSelect");

//     dropdown.innerHTML = ""; // Clear any existing options

//     // Start from index 1 to skip "Day" column
//     for (let i = 1; i < classHeaderRow.cells.length; i++) {
//         let cellText = classHeaderRow.cells[i].textContent.trim();
//         if (cellText !== "") {
//             let option = document.createElement("option");
//             option.value = i; // Save the column index
//             option.textContent = cellText; // Show class name
//             dropdown.appendChild(option);
//         }
//     }
// };

// function showInstructorOptions() {
//     let select = document.getElementById("classSelect");
//     select.innerHTML = ""; // Clear previous options

//     let table = document.getElementById("scheduleTable");
//     let classRow = table.rows[1].cells; // 🔹 Class names are on row 1

//     for (let i = 1; i < classRow.length; i++) {
//         let option = document.createElement("option");
//         option.value = i;
//         option.textContent = classRow[i].textContent.trim();
//         select.appendChild(option);
//     }

//     select.style.display = "inline";
//     document.getElementById("instructorPrintBtn").style.display = "inline";
// }


// 🖨️ Button function to print instructor table
// function printOnlyInstructorTable() {
//     let select = document.getElementById("classSelect");
//     let classIndex = parseInt(select.value);

//     if (isNaN(classIndex) || classIndex < 1) {
//         alert("Please select a valid class!");
//         return;
//     }

//     let table = document.getElementById("scheduleTable");
//     let className = table.rows[1].cells[classIndex].textContent.trim();

//     let usedCodes = new Set();
//     let instructorsFound = [];

//     // Loop through all rows starting from row 4 (first period row)
//     for (let i = 0; i < table.rows.length; i++) {
//         let cell = table.rows[i].cells[classIndex];
//         if (!cell) continue;

//         let cellText = cell.textContent.trim();

//         // Match code like "-73" in "Math-73"
//         let match = cellText.match(/-(\d+)/);
//         if (match) {
//             let code = match[1];
//             if (!usedCodes.has(code)) {
//                 usedCodes.add(code);

//                 let instructor = instructors.find(inst => inst.code === code);
//                 if (instructor) {
//                     instructorsFound.push({
//                         name: instructor.name,
//                         subject: cellText.split('-')[0].trim()
//                     });
//                 }
//             }
//         }
//     }

//     if (instructorsFound.length === 0) {
//         alert("No instructors found for this class.");
//         return;
//     }

//     // ✅ Now print only the instructor table
//     let printWindow = window.open('', '_blank');
//     let printContent = `
//         <html>
//         <head>
//             <title>Instructor Table - ${className}</title>
//             <style>
//                 body { font-family: Arial, sans-serif; text-align: center; }
//                 table { border-collapse: collapse; width: 60%; margin: 30px auto; }
//                 th, td { border: 1px solid black; padding: 8px; text-align: center; }
//                 h2 { margin-top: 30px; }
//             </style>
//         </head>
//         <body>
//             <h2>${className} - Instructor Assignment</h2>
//             <table>
//                 <tr>
//                     <th>S.No</th>
//                     <th>Instructor Name</th>
//                     <th>Subject</th>
//                 </tr>`;

//     instructorsFound.forEach((instructor, idx) => {
//         printContent += `
//             <tr>
//                 <td>${idx + 1}</td>
//                 <td>${instructor.name}</td>
//                 <td>${instructor.subject}</td>
//             </tr>`;
//     });

//     printContent += `</table>
//         <script>
//             window.onload = function () {
//                 setTimeout(() => {
//                     window.print();
//                 }, 500);
//             };
//         </script>
//         </body>
//         </html>`;

//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();
// }






//add custom class
newClassData = {}; // Existing structure

function openAddClassModal() {
    document.getElementById("addClassModal").style.display = "block";
}

function closeAddClassModal() {
    document.getElementById("addClassModal").style.display = "none";
}



// function addNewClass() {
//     const className = document.getElementById("newClassName").value.trim();
//     const branch = document.getElementById("newClassBranch").value;
//     const term = parseInt(document.getElementById("newClassTerm").value);

//     if (!className || !branch || isNaN(term)) {
//         alert("Please fill in all fields correctly.");
//         return;
//     }

//     // Check if class already exists
//     const alreadyExists = newClassData.some(cls => cls.className === className);
//     if (alreadyExists) {
//         alert("Class name already exists.");
//         return;
//     }

//     const newClass = { className, branch, term };
//     newClassData.push(newClass);
//     alert(`Class ${className} added successfully!`);

//     // Optionally: Clear form
//     document.getElementById("newClassName").value = "";
//     document.getElementById("newClassBranch").value = "";
//     document.getElementById("newClassTerm").value = "";

//     // Optionally: Update class UI or list
//     console.log(newClassData); // See the updated list
// }
function addNewClass() {
    const className = document.getElementById("newClassName").value.trim();
    const branch = document.getElementById("newClassBranch").value;
    const term = parseInt(document.getElementById("newClassTerm").value);

    if (!className || !branch || isNaN(term)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const alreadyExists = newClassData.some(cls => cls.className === className);
    if (alreadyExists) {
        alert("Class name already exists.");
        return;
    }

    const newClass = { className, branch, term };
    newClassData.push(newClass);

    // ✅ Always pull latest subject data
    const latestSubjects = subjectsData?.[branch]?.[term]?.subjects;
    if (!Array.isArray(latestSubjects)) {
        alert("No subjects found for this branch and term. Please add subjects first.");
        return;
    }

    classWiseSubjectsData[className] = latestSubjects.map(sub => ({
        name: sub.name,
        totalPeriods: sub.totalPeriods,
        remainingPeriods: sub.totalPeriods
    }));

    alert(`Class ${className} added successfully!`);

    document.getElementById("newClassName").value = "";
    document.getElementById("newClassBranch").value = "";
    document.getElementById("newClassTerm").value = "";

    closeAddClassModal();

    console.log("📚 Class added:", newClass);
    console.log("📘 Subjects assigned:", classWiseSubjectsData[className]);
}




function openAddClassModal() {
    document.getElementById("addClassModal").style.display = "flex";
}

function closeAddClassModal() {
    document.getElementById("addClassModal").style.display = "none";
}

// showClassDetailsFromCell
function showClassDetailsFromCell(cell) {
    const table = cell.closest("table");
    if (!table) {
        alert("Table not found.");
        return;
    }

    const columnIndex = cell.cellIndex;

    // Get class name from row index 1 (second row) at the same column
    const classNameCell = table.rows[1]?.cells[columnIndex];
    if (!classNameCell) {
        alert("Class name cell not found in row 1.");
        return;
    }

    const className = classNameCell.textContent.trim();
    if (!className) {
        alert("Class name is empty.");
        return;
    }

    const classInfo = newClassData.find(cls => cls.className.trim().toLowerCase() === className.toLowerCase());
    if (!classInfo) {
        alert(`Class "${className}" not found in class data.`);
        return;
    }

    const { branch, term } = classInfo;
    const classSubjects = classWiseSubjectsData[className];

    if (!classSubjects || !Array.isArray(classSubjects)) {
        alert(`No subject data found for class "${className}".`);
        return;
    }

    // Update modal content
    document.querySelector(".classname").textContent = `Class Name: ${className}`;
    document.querySelector(".branchname").textContent = `Branch: ${branch}`;
    document.querySelector(".term").textContent = `Term: ${term}`;

    // Format subject lines
    const subjectLines = classSubjects.map(sub => {
        const assigned = sub.totalPeriods - sub.remainingPeriods;
        const percent = ((assigned / sub.totalPeriods) * 100).toFixed(1);
        return `• ${sub.name}: ${assigned}/${sub.totalPeriods} (${percent}%)`;
    }).join("\n");

    document.querySelector(".subjects").textContent = `Subjects:\n${subjectLines}`;

    // Show modal
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "block";
    }
}



//Add new Instructor
function openTeacherForm() {
    document.getElementById("teacherFormModal").classList.add("show");
}

function closeTeacherForm() {
    document.getElementById("teacherFormModal").classList.remove("show");
}

function addNewInstructor() {
    const name = document.getElementById("teacherName").value.trim();
    const code = parseInt(document.getElementById("teacherCode").value.trim());
    const subjects = document.getElementById("teacherSubjects").value.trim().split(",").map(s => s.trim());
    const maxLoad = parseInt(document.getElementById("teacherMaxLoad").value.trim());

    if (!name || isNaN(code) || subjects.length === 0 || isNaN(maxLoad)) {
        alert("Please fill all fields correctly.");
        return;
    }

    const newInstructor = {
        name,
        code,
        subjects,
        maxLoad,
        weeklyLoad: 0,
        assignedPeriods: {}
    };

    instructors.push(newInstructor);
    alert("Instructor added successfully!");
    closeTeacherForm();

    // Optional: clear inputs
    document.getElementById("teacherName").value = "";
    document.getElementById("teacherCode").value = "";
    document.getElementById("teacherSubjects").value = "";
    document.getElementById("teacherMaxLoad").value = "";
}

//Backup and Restore

// function backupData() {
//     const clonedInstructors = instructors.map(inst => ({
//         ...inst,
//         assignedPeriods: Object.fromEntries(
//             Object.entries(inst.assignedPeriods).map(([day, set]) => [day, Array.from(set)])
//         )
//     }));

//     const backup = {
//         instructors: clonedInstructors,
//         newClassData,
//         tableHTML: document.getElementById("scheduleTable").innerHTML
//     };

//     const dataStr = JSON.stringify(backup, null, 2);
//     const blob = new Blob([dataStr], { type: "application/json" });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "timetable_backup.json";
//     a.click();
// }

// function backupData() {
//     // Clone instructors and convert Sets to Arrays
//     const clonedInstructors = instructors.map(inst => ({
//         ...inst,
//         assignedPeriods: Object.fromEntries(
//             Object.entries(inst.assignedPeriods || {}).map(([day, set]) => [day, Array.from(set)])
//         )
//     }));

//     // Clone subject progress per class
//     const clonedClassWiseSubjectsData = {};
//     for (const className in classWiseSubjectsData) {
//         clonedClassWiseSubjectsData[className] = classWiseSubjectsData[className].map(subject => ({
//             name: subject.name,
//             totalPeriods: subject.totalPeriods,
//             remainingPeriods: subject.remainingPeriods
//         }));
//     }

//     // Full backup structure
//     const backup = {
//         instructors: clonedInstructors,
//         newClassData,
//         classWiseSubjectsData: clonedClassWiseSubjectsData,
//         tableHTML: document.getElementById("scheduleTable").innerHTML
//     };

//     // Create and download JSON
//     const dataStr = JSON.stringify(backup, null, 2);
//     const blob = new Blob([dataStr], { type: "application/json" });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "timetable_backup.json";
//     a.click();
// }



function backupData() {
    // 1. Backup instructors (with Set to Array conversion)
    const clonedInstructors = instructors.map(inst => ({
        ...inst,
        assignedPeriods: Object.fromEntries(
            Object.entries(inst.assignedPeriods || {}).map(([day, set]) => [day, Array.from(set)])
        ),
        unavailablePeriods: inst.unavailablePeriods ? 
            Object.fromEntries(
                Object.entries(inst.unavailablePeriods).map(([day, set]) => [day, Array.from(set)])
            ) : {}
    }));

    // 2. Backup class-wise subjects with detailed progress
    const clonedClassWiseSubjectsData = {};
    for (const className in classWiseSubjectsData) {
        const classData = newClassData.find(c => c.className === className);
        clonedClassWiseSubjectsData[className] = {
            className,
            branch: classData?.branch || '',
            term: classData?.term || '',
            subjects: classWiseSubjectsData[className].map(subject => ({
                name: subject.name,
                totalPeriods: subject.totalPeriods,
                remainingPeriods: subject.remainingPeriods,
                assignedPeriods: subject.totalPeriods - subject.remainingPeriods,
                progressPercent: ((subject.totalPeriods - subject.remainingPeriods) / subject.totalPeriods * 100).toFixed(1)
            })),
            totalPeriods: classWiseSubjectsData[className].reduce((sum, s) => sum + s.totalPeriods, 0),
            remainingPeriods: classWiseSubjectsData[className].reduce((sum, s) => sum + s.remainingPeriods, 0)
        };
    }

    // 3. Backup timetable HTML
    const tableHTML = document.getElementById("scheduleTable").innerHTML;

    // 4. Create comprehensive backup object
    const backup = {
        timestamp: new Date().toISOString(),
        version: "1.0",
        data: {
            instructors: clonedInstructors,
            classes: newClassData.map(cls => ({
                className: cls.className,
                branch: cls.branch,
                term: cls.term,
                // Include any other class metadata you need
            })),
            subjects: clonedClassWiseSubjectsData,
            tableState: tableHTML
        },
        stats: {
            totalAssignedPeriods: Object.values(clonedClassWiseSubjectsData)
                .reduce((sum, cls) => sum + (cls.totalPeriods - cls.remainingPeriods), 0),
            totalPeriods: Object.values(clonedClassWiseSubjectsData)
                .reduce((sum, cls) => sum + cls.totalPeriods, 0)
        }
    };

    // 5. Create and trigger download
    const dataStr = JSON.stringify(backup, (key, value) => {
        if (value instanceof Set) {
            return Array.from(value); // Convert any remaining Sets to Arrays
        }
        return value;
    }, 2);

    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `timetable_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}



async function restoreBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = async event => {
            try {
                const backup = JSON.parse(event.target.result);
                
                // 1. Restore instructors (convert Arrays back to Sets)
                if (backup.data?.instructors) {
                    instructors = backup.data.instructors.map(inst => ({
                        ...inst,
                        assignedPeriods: Object.fromEntries(
                            Object.entries(inst.assignedPeriods || {}).map(([day, arr]) => [day, new Set(arr)])
                        ),
                        unavailablePeriods: inst.unavailablePeriods ? 
                            Object.fromEntries(
                                Object.entries(inst.unavailablePeriods).map(([day, arr]) => [day, new Set(arr)])
                            ) : {}
                    }));
                }

                // 2. Restore class-wise subjects with comprehensive data
                if (backup.data?.subjects) {
                    // Clear existing data
                    classWiseSubjectsData = {};
                    
                    // Rebuild from backup
                    for (const className in backup.data.subjects) {
                        const classSubjects = backup.data.subjects[className];
                        
                        // Validate the backup structure
                        if (classSubjects?.subjects && Array.isArray(classSubjects.subjects)) {
                            classWiseSubjectsData[className] = classSubjects.subjects.map(sub => ({
                                name: sub.name,
                                totalPeriods: sub.totalPeriods || 0,
                                remainingPeriods: sub.remainingPeriods || sub.totalPeriods || 0,
                                lastAssignedDay: sub.lastAssignedDay || -1,
                                assignedPeriods: sub.assignedPeriods || 0
                            }));
                        }
                    }
                }

                // 3. Restore newClassData if available
                if (backup.data?.classes) {
                    newClassData = backup.data.classes.map(cls => ({
                        ...cls,
                        // Add any additional class properties you need to restore
                    }));
                }

                // 4. Restore table state
                if (backup.data?.tableState) {
                    document.getElementById("scheduleTable").innerHTML = backup.data.tableState;
                    await rebindTableEvents(); // Wait for event rebinding
                }

                // 5. Update UI and show success message
                updateProgressData(); // Refresh any progress calculations
                showClassProgressModal(); // Update the progress modal if open
                
                alert(`✅ Backup restored successfully!\n📅 Date: ${backup.timestamp}\n📊 Periods assigned: ${backup.stats?.totalAssignedPeriods || 'N/A'}/${backup.stats?.totalPeriods || 'N/A'}`);
            } catch (error) {
                console.error("Restore error:", error);
                alert(`❌ Error restoring backup: ${error.message}`);
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// Helper function to update progress data after restore
function updateProgressData() {
    detailedClassProgressData = newClassData.map(cls => {
        const subjectList = classWiseSubjectsData[cls.className] || [];
        return {
            className: cls.className,
            branch: cls.branch,
            term: cls.term,
            subjects: subjectList.map(sub => ({
                name: sub.name,
                total: sub.totalPeriods,
                remaining: sub.remainingPeriods,
                assigned: sub.totalPeriods - sub.remainingPeriods,
                progressPercent: ((sub.totalPeriods - sub.remainingPeriods) / sub.totalPeriods * 100).toFixed(1)
            })),
            totalTermPeriods: subjectList.reduce((sum, s) => sum + s.totalPeriods, 0),
            remainingTermPeriods: subjectList.reduce((sum, s) => sum + s.remainingPeriods, 0)
        };
    }).filter(Boolean);
}

// Enhanced table event rebinding
async function rebindTableEvents() {
    const table = document.getElementById("scheduleTable");
    if (!table) return;

    // 1. Rebind period cells
    const rows = table.rows;
    for (let i = 6; i < rows.length; i++) {
        const dayIndex = i - 6;
        const dayName = getDayNameByIndex(dayIndex % 5); // Assuming 5-day week
        
        const cells = rows[i].cells;
        for (let j = 1; j < cells.length; j++) { // Start from 1 to skip time column
            const cell = cells[j];
            cell.onclick = () => assignInstructor(cell, dayName, j-1);
            
            // Add visual feedback for restored cells
            if (cell.textContent.trim()) {
                cell.style.backgroundColor = '#e6f7ff';
                setTimeout(() => cell.style.backgroundColor = '', 1000);
            }
        }
    }

    // 2. Rebind class header cells
    const classRow = table.rows[1];
    if (classRow) {
        for (let cell of classRow.cells) {
            if (cell.cellIndex > 0) { // Skip first header cell
                cell.onclick = () => openClassAssignModal(cell);
            }
        }
    }

    // 3. Rebind any other custom events
    // Add your additional event bindings here
}

// Helper function (make sure it exists)
function getDayNameByIndex(index) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return days[index];
}



function showClassSelectForUpdate() {
    const dropdown = document.getElementById("selectClassDropdown");
    dropdown.innerHTML = "";

    if (!newClassData || newClassData.length === 0) {
        alert("No class data available.");
        return;
    }

    newClassData.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls.className;
        option.textContent = cls.className;
        dropdown.appendChild(option);
    });

    document.getElementById("selectClassModal").style.display = "block";
}

function closeClassSelectModal() {
    document.getElementById("selectClassModal").style.display = "none";
}

function proceedToUpdate() {
    const selectedClassName = document.getElementById("selectClassDropdown").value;
    selectedClassToUpdate = newClassData.find(cls => cls.className === selectedClassName);

    if (!selectedClassToUpdate) {
        alert("Class not found.");
        return;
    }

    closeClassSelectModal();
    openUpdateClassModal();
}

function openUpdateClassModal() {
    const branchSelect = document.getElementById("updateBranchSelect");
    const termSelect = document.getElementById("updateTermSelect");
    const nameInput = document.getElementById("updateClassNameInput");

    // Clear old options
    branchSelect.innerHTML = "";
    termSelect.innerHTML = "";

    // Populate branch dropdown from subjectsData
    for (const branch in subjectsData) {
        const option = document.createElement("option");
        option.value = branch;
        option.textContent = branch;
        branchSelect.appendChild(option);
    }

    // Set current values
    branchSelect.value = selectedClassToUpdate.branch;
    nameInput.value = selectedClassToUpdate.className;

    // Populate term dropdown for selected branch
    populateTermDropdown(selectedClassToUpdate.branch);

    // Set term value
    termSelect.value = selectedClassToUpdate.term;

    // Show the modal
    document.getElementById("updateClassModal").style.display = "block";
}

function populateTermDropdown(branch) {
    const termSelect = document.getElementById("updateTermSelect");
    termSelect.innerHTML = "";

    const terms = Object.keys(subjectsData[branch]).filter(term => !isNaN(term));
    terms.forEach(term => {
        const option = document.createElement("option");
        option.value = term;
        option.textContent = `Term ${term}`;
        termSelect.appendChild(option);
    });
}

// function saveClassUpdate() {
//     if (!selectedClassToUpdate) {
//         alert("No class selected.");
//         return;
//     }

//     selectedClassToUpdate.className = document.getElementById("updateClassNameInput").value;
//     selectedClassToUpdate.branch = document.getElementById("updateBranchSelect").value;
//     selectedClassToUpdate.term = parseInt(document.getElementById("updateTermSelect").value);

//     alert("Class data updated successfully!");
//     closeUpdateClassModal();
// }
function saveClassUpdate() {
    if (!selectedClassToUpdate) {
        alert("No class selected.");
        return;
    }

    // Get updated values
    const newClassName = document.getElementById("updateClassNameInput").value;
    const newBranch = document.getElementById("updateBranchSelect").value;
    const newTerm = parseInt(document.getElementById("updateTermSelect").value);

    // Update the selected class object
    selectedClassToUpdate.className = newClassName;
    selectedClassToUpdate.branch = newBranch;
    selectedClassToUpdate.term = newTerm;

    // Clear the existing subject data from classWiseSubjectsData
    if (classWiseSubjectsData[selectedClassToUpdate.className]) {
        delete classWiseSubjectsData[selectedClassToUpdate.className];
    }

    // Fetch the new subjects from subjectsData
    const newSubjectsForClass = subjectsData?.[newBranch]?.[newTerm]?.subjects;

    if (Array.isArray(newSubjectsForClass)) {
        // Set both totalPeriods and remainingPeriods to the same value
        classWiseSubjectsData[newClassName] = newSubjectsForClass.map(subject => ({
            name: subject.name,
            totalPeriods: subject.totalPeriods,
            remainingPeriods: subject.totalPeriods
        }));
    } else {
        alert("No subjects found for selected branch and term.");
        return;
    }

    alert("Class data and subject periods updated successfully!");
    closeUpdateClassModal();
}


function closeUpdateClassModal() {
    document.getElementById("updateClassModal").style.display = "none";
}

//Delete Instructor

function openDeleteInstructorModal() {
    const dropdown = document.getElementById("instructorDeleteSelect");
    dropdown.innerHTML = "";

    instructors.forEach(inst => {
        const option = document.createElement("option");
        option.value = inst.code;
        option.textContent = `${inst.name} (${inst.code})`;
        dropdown.appendChild(option);
    });

    document.getElementById("deleteInstructorModal").style.display = "block";
}

function closeDeleteInstructorModal() {
    document.getElementById("deleteInstructorModal").style.display = "none";
}

function deleteSelectedInstructor() {
    const selectedCode = parseInt(document.getElementById("instructorDeleteSelect").value);
    const index = instructors.findIndex(inst => inst.code === selectedCode);

    if (index !== -1) {
        const removed = instructors.splice(index, 1)[0];
        alert(`Instructor "${removed.name}" removed.`);
    } else {
        alert("Instructor not found.");
    }

    closeDeleteInstructorModal();
}

//Auto assiging from here
function assignPeriodsToClass(classInfo, selectedInstructors) {
    const table = document.querySelector("table");
    const columnIndex = newClassData.findIndex(cls => cls.className === classInfo.className);
    if (columnIndex === -1) {
        alert("Class column not found in table.");
        return;
    }

    const { branch, term } = classInfo;
    const subjects = subjectsData[branch]?.[term] || [];

    let subjectIndex = 0;
    let instructorIndex = 0;
    let instructorAttempts = 0;

    const maxRowsPerDay = 11;
    const totalDays = 5;
    const startRow = 5;

    for (let day = 0; day < totalDays; day++) {
        for (let rowOffset = 0; rowOffset < maxRowsPerDay; rowOffset++) {
            const row = table.rows[startRow + day * (maxRowsPerDay + 1) + rowOffset];
            if (!row) continue;

            const cell = row.cells[columnIndex + 1]; // +1 because of day column on the left
            if (!cell || cell.hasAttribute("colspan")) continue;

            const subject = subjects[subjectIndex % subjects.length];

            // Try assigning current subject to a valid instructor
            let assigned = false;
            while (!assigned && instructorAttempts < selectedInstructors.length) {
                const instructor = selectedInstructors[instructorIndex % selectedInstructors.length];

                if (
                    instructor.subjects.includes(subject) &&
                    instructor.weeklyLoad < instructor.maxLoad &&
                    !isInstructorAlreadyInRow(row, instructor.code)
                ) {
                    // Assign instructor
                    const dayName = getDayNameByIndex(day);
                    if (!instructor.assignedPeriods[dayName]) {
                        instructor.assignedPeriods[dayName] = new Set();
                    }
                    instructor.assignedPeriods[dayName].add(rowOffset);
                    instructor.weeklyLoad++;

                    cell.textContent = `${subject} - ${instructor.code}`;
                    assigned = true;
                }

                instructorIndex++;
                instructorAttempts++;
            }

            subjectIndex++;
            instructorAttempts = 0; // reset for next subject
        }
    }

    alert("Auto-assignment complete!");
}

// Utility: convert day index (0–4) to string name
function getDayNameByIndex(index) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return days[index];
}

// Utility: check if instructor already exists in a row
function isInstructorAlreadyInRow(row, instructorCode) {
    for (let cell of row.cells) {
        if (cell.textContent.includes(`- ${instructorCode}`)) {
            return true;
        }
    }
    return false;
}
  

//Auto assign Periods
// Populate class dropdown on modal open
const unavailabilityMap = {}; // { instructorCode: Set of days }


function openAutoAssignModal() {
    const classDropdown = document.getElementById("modernClassSelect");
    classDropdown.innerHTML = `<option disabled selected>Select a class</option>`;
    
    newClassData.forEach((cls, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = cls.className;
      classDropdown.appendChild(option);
    });
  
    document.getElementById("subjectInstructorPairs").innerHTML = "";
    document.getElementById("autoAssignModal").style.display = "flex";
  }
  
  
  function closeAutoAssignModal() {
    try {
        // 1. Hide the modal - this is the most critical part
        const modal = document.getElementById("autoAssignModal");
        if (modal) {
            modal.style.display = "none";
        } else {
            console.warn("Auto Assign Modal element not found");
            return; // Exit early if modal doesn't exist
        }

        // 2. Reset all form fields safely
        const resetFields = [
            {id: "modernClassSelect", defaultValue: 0},
            {id: "unavailableInstructor", defaultValue: 0},
            {id: "unavailableDay", defaultValue: 0}
        ];

        resetFields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element && element.options) {
                element.selectedIndex = field.defaultValue;
            }
        });

        // 3. Clear dynamic content areas
        const clearElements = [
            "subjectInstructorPairs",
            "unavailabilityList"
        ];

        clearElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = "";
            }
        });

        console.log("Auto Assign Modal closed successfully");
    } catch (error) {
        console.error("Error closing Auto Assign Modal:", error);
        // Fallback - at least ensure the modal is hidden
        const modal = document.getElementById("autoAssignModal");
        if (modal) {
            modal.style.display = "none";
        }
    }
}
  
  
  // Populate instructor checkboxes based on class selection
 // Function to populate subject-instructor pairs when class is selected
function populateSubjectInstructorPairs() {
    const classIndex = document.getElementById("modernClassSelect").value;
    if (!classIndex) return;
    
    const classInfo = newClassData[classIndex];
    const pairsContainer = document.getElementById("subjectInstructorPairs");
    pairsContainer.innerHTML = '';
    
    // Get branch and term from classInfo
    const { branch, term } = classInfo;
    
    // Get subjects for this class from the new data structure
    const termData = subjectsData[branch]?.[term];
    if (!termData || !termData.subjects || termData.subjects.length === 0) {
        pairsContainer.innerHTML = '<p>No subjects found for this class</p>';
        return;
    }
    
    const subjects = termData.subjects;

    // Create dropdown for each subject
    subjects.forEach(subjectObj => {
        const subject = subjectObj.name; // Get subject name from object
        const pairDiv = document.createElement('div');
        pairDiv.className = 'subject-pair';
        
        const subjectLabel = document.createElement('label');
        subjectLabel.textContent = subject;
        
        const instructorSelect = document.createElement('select');
        instructorSelect.className = 'subject-instructor-select';
        instructorSelect.name = subject; // Store subject name as identifier
        
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = 'Select instructor';
        instructorSelect.appendChild(defaultOption);
        
        // Add instructor options who can teach this subject
        instructors.forEach((instructor, idx) => {
            if (instructor.subjects.includes(subject)) {
                const option = document.createElement('option');
                option.value = idx;
                option.textContent = `${instructor.name} (${instructor.code})`;
                instructorSelect.appendChild(option);
            }
        });
        
        pairDiv.appendChild(subjectLabel);
        pairDiv.appendChild(instructorSelect);
        pairsContainer.appendChild(pairDiv);
    });
    
    // Also populate the unavailable instructors dropdown
    populateUnavailableInstructorsDropdown();
}

// Function to populate unavailable instructors dropdown
function populateUnavailableInstructorsDropdown() {
    const dropdown = document.getElementById("unavailableInstructor");
    dropdown.innerHTML = '<option disabled selected>Select Instructor</option>';
    
    const classIndex = document.getElementById("modernClassSelect").value;
    if (!classIndex) return;
    
    const classInfo = newClassData[classIndex];
    const { branch, term } = classInfo;
    const termData = subjectsData[branch]?.[term];
    const subjects = termData?.subjects || [];
    
    // Get all instructors who teach any subject in this class
    const classInstructorCodes = new Set();
    subjects.forEach(subjectObj => {
        instructors.forEach((instructor, idx) => {
            if (instructor.subjects.includes(subjectObj.name)) {
                classInstructorCodes.add(instructor.code);
            }
        });
    });
    
    // Add to dropdown
    instructors.forEach(instructor => {
        if (classInstructorCodes.has(instructor.code)) {
            const option = document.createElement('option');
            option.value = instructor.code;
            option.textContent = `${instructor.name} (${instructor.code})`;
            dropdown.appendChild(option);
        }
    });
} 
  
  // Trigger auto-assignment after user selects instructors
// Global variables
const assignmentTracker = {};


// Main function to start assignment
function startAutoAssignment() {
    // 1. Verify class selection
    const classSelect = document.getElementById("modernClassSelect");
    if (!classSelect) {
        alert("Class selection element not found!");
        return;
    }
    
    const classIndex = classSelect.value;
    if (classIndex === null || classIndex === "" || classIndex === undefined) {
        alert("Please select a class first.");
        return;
    }
  
    // 2. Verify class data exists
    if (!newClassData || !newClassData[classIndex]) {
        alert("Class data not found!");
        return;
    }
  
    const classInfo = newClassData[classIndex];
    
    // 3. Verify instructor selections
    const instructorSelects = document.querySelectorAll(".subject-instructor-select");
    if (!instructorSelects || instructorSelects.length === 0) {
        alert("No subject instructor selects found!");
        return;
    }
  
    const subjectInstructorMap = {};
    let allInstructorsSelected = true;
    
    for (const select of instructorSelects) {
        const subject = select.name;
        const instructorIdx = select.value;
        
        if (!instructorIdx) {
            alert(`Please select an instructor for subject: ${subject}`);
            allInstructorsSelected = false;
            break;
        }
        
        // Verify instructor exists
        if (!instructors[instructorIdx]) {
            alert(`Invalid instructor selected for subject: ${subject}`);
            allInstructorsSelected = false;
            break;
        }
        
        subjectInstructorMap[subject] = instructors[instructorIdx];
    }
  
    if (!allInstructorsSelected) return;
    
    // 4. Verify table exists
    const table = document.querySelector("table");
    if (!table) {
        alert("Schedule table not found!");
        return;
    }
    
    // 5. Execute assignment
    try {
        assignPeriodsWithFixedMap(classInfo, subjectInstructorMap);
        closeAutoAssignModal();
    } catch (error) {
        console.error("Assignment error:", error);
        alert("An error occurred during assignment. See console for details.");
    }
}



// Core assignment function
function assignPeriodsWithFixedMap(classInfo, subjectInstructorMap) {
    const table = document.querySelector("table");
    const headerRow = table.rows[1]; // assuming second row is the class name header

    // ✅ Find actual column index from header
    let columnIndex = -1;
    for (let i = 1; i < headerRow.cells.length; i++) {
        const cellText = headerRow.cells[i].textContent.trim();
        if (cellText === classInfo.className) {
            columnIndex = i;
            break;
        }
    }

    if (columnIndex === -1) {
        alert(`Class column "${classInfo.className}" not found in table header.`);
        return;
    }

    const classSubjects = classWiseSubjectsData[classInfo.className];
    if (!classSubjects || !Array.isArray(classSubjects)) {
        alert("No subject data found for this class.");
        return;
    }

    const workingSubjects = classSubjects.map(subject => ({
        ...subject,
        lastAssignedDay: -1,
        assignedPeriods: 0
    }));

    const periodsPerDay = 11;
    const totalDays = 5;
    const skipRows = 5;
    const totalPeriods = periodsPerDay * totalDays;

    const assignmentStats = {
        totalAssigned: 0,
        instructors: {}
    };

    Object.values(subjectInstructorMap).forEach(instructor => {
        assignmentStats.instructors[instructor.code] = {
            name: instructor.name,
            assigned: 0,
            maxLoad: instructor.maxLoad
        };
        instructor.assignedPeriods = instructor.assignedPeriods || {};
        instructor.weeklyLoad = instructor.weeklyLoad || 0;
    });

    function getNextSubject() {
        return [...workingSubjects]
            .filter(s => s.remainingPeriods > 0)
            .sort((a, b) => {
                const diff = b.remainingPeriods - a.remainingPeriods;
                if (diff !== 0) return diff;
                return a.lastAssignedDay - b.lastAssignedDay;
            })[0];
    }

    let periodsAssignedToday = 0;
    let currentDay = 0;

    for (let i = skipRows; i < skipRows + totalPeriods; i++) {
        const row = table.rows[i];
        if (!row || !row.cells[columnIndex] || row.cells[columnIndex].hasAttribute("colspan")) continue;

        const dayName = getDayNameByIndex(currentDay);
        const periodInDay = periodsAssignedToday;
        const cell = row.cells[columnIndex];

        const subject = getNextSubject();
        if (!subject) break;

        const instructor = subjectInstructorMap[subject.name];
        if (!instructor) continue;

        instructor.assignedPeriods[dayName] = instructor.assignedPeriods[dayName] || new Set();

        const canAssignDouble = (
            periodsAssignedToday < periodsPerDay - 1 &&
            subject.remainingPeriods >= 2 &&
            instructor.weeklyLoad + 2 <= instructor.maxLoad &&
            !instructor.assignedPeriods[dayName].has(periodInDay) &&
            !instructor.assignedPeriods[dayName].has(periodInDay + 1) &&
            !instructor.unavailablePeriods?.[dayName]?.has(periodInDay) &&
            !instructor.unavailablePeriods?.[dayName]?.has(periodInDay + 1) &&
            !isInstructorAlreadyInRow(row, instructor.code) &&
            !isInstructorAlreadyInRow(table.rows[i + 1], instructor.code)
        );

        if (canAssignDouble && table.rows[i + 1]?.cells[columnIndex]) {
            instructor.assignedPeriods[dayName].add(periodInDay);
            instructor.assignedPeriods[dayName].add(periodInDay + 1);
            instructor.weeklyLoad += 2;

            cell.textContent = `${subject.name} - ${instructor.code}`;
            table.rows[i + 1].cells[columnIndex].textContent = `${subject.name} - ${instructor.code}`;

            subject.remainingPeriods -= 2;
            subject.assignedPeriods += 2;
            subject.lastAssignedDay = currentDay;

            assignmentStats.totalAssigned += 2;
            assignmentStats.instructors[instructor.code].assigned += 2;

            i++;
            periodsAssignedToday += 2;
            continue;
        }

        const canAssignSingle = (
            subject.remainingPeriods > 0 &&
            instructor.weeklyLoad < instructor.maxLoad &&
            !instructor.assignedPeriods[dayName].has(periodInDay) &&
            !instructor.unavailablePeriods?.[dayName]?.has(periodInDay) &&
            !isInstructorAlreadyInRow(row, instructor.code)
        );

        if (canAssignSingle) {
            instructor.assignedPeriods[dayName].add(periodInDay);
            instructor.weeklyLoad++;

            cell.textContent = `${subject.name} - ${instructor.code}`;
            subject.remainingPeriods--;
            subject.assignedPeriods++;
            subject.lastAssignedDay = currentDay;

            assignmentStats.totalAssigned++;
            assignmentStats.instructors[instructor.code].assigned++;
        }

        periodsAssignedToday++;
        if (periodsAssignedToday >= periodsPerDay) {
            currentDay++;
            periodsAssignedToday = 0;
        }
    }

    // Update original subject state
    classWiseSubjectsData[classInfo.className] = workingSubjects.map(s => ({
        name: s.name,
        totalPeriods: s.totalPeriods,
        remainingPeriods: s.remainingPeriods
    }));

    // Generate and display report
    const report = (() => {
        const totalTermPeriods = workingSubjects.reduce((sum, s) => sum + s.totalPeriods, 0);
        const remainingTermPeriods = workingSubjects.reduce((sum, s) => sum + s.remainingPeriods, 0);
        const progressPercentage = Math.round((totalTermPeriods - remainingTermPeriods) / totalTermPeriods * 100);

        let report = `📊 CLASS PROGRESS REPORT\n\n`;
        report += `🏫 Class: ${classInfo.className} (${classInfo.branch} - Term ${classInfo.term})\n`;
        report += `🔄 Total Periods Assigned: ${assignmentStats.totalAssigned}\n`;
        report += `📈 Term Completion: ${progressPercentage}%\n\n`;

        report += "📚 SUBJECT PROGRESS:\n";
        workingSubjects.forEach(sub => {
            const assigned = sub.totalPeriods - sub.remainingPeriods;
            const progress = Math.round((assigned / sub.totalPeriods) * 100);
            report += `• ${sub.name}: ${assigned}/${sub.totalPeriods} (${progress}%)\n`;
        });

        report += "\n👨‍🏫 INSTRUCTOR LOAD:\n";
        for (const [code, data] of Object.entries(assignmentStats.instructors)) {
            report += `• ${data.name} (${code}): ${data.assigned}/${data.maxLoad}\n`;
        }

        return report;
    })();

    console.log(report);
    setTimeout(() => alert(report), 100);
}




function getDayNameByIndex(index) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return days[index];
}

function closeAutoAssignModal() {
    const modal = document.getElementById("autoAssignModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Initialize the system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Make sure these are populated with your actual data
    // newClassData = [...];
    // instructors = {...};
    // subjectsData = {...};
    
    // Add event listeners or other initialization code here
});


//All classes progress can be preview through this function.
function getLiveClassProgress() {
    if (!classWiseSubjectsData || !newClassData) {
        console.warn("Missing classWiseSubjectsData or newClassData.");
        return [];
    }

    const progressData = newClassData.map(cls => {
        const { className, branch, term } = cls;
        const subjects = classWiseSubjectsData[className];

        if (!subjects) {
            console.warn(`No subject data found for class ${className}`);
            return null;
        }

        const totalTermPeriods = subjects.reduce((sum, sub) => sum + sub.totalPeriods, 0);
        const remainingTermPeriods = subjects.reduce((sum, sub) => sum + sub.remainingPeriods, 0);
        const progressPercentage = ((totalTermPeriods - remainingTermPeriods) / totalTermPeriods * 100).toFixed(1);

        return {
            className,
            branch,
            term,
            totalTermPeriods,
            remainingTermPeriods,
            progressPercentage,
            subjects: subjects.map(sub => ({
                name: sub.name,
                total: sub.totalPeriods,
                remaining: sub.remainingPeriods,
                assigned: sub.totalPeriods - sub.remainingPeriods,
                progress: Math.round((sub.totalPeriods - sub.remainingPeriods) / sub.totalPeriods * 100)
            }))
        };
    }).filter(Boolean); // remove null entries

    return progressData;
}

const allClassProgress = getLiveClassProgress();
console.table(allClassProgress); // for quick console overview

// OR loop through to build a detailed view:
allClassProgress.forEach(cls => {
    console.log(`📘 Class: ${cls.className}`);
    console.log(`📚 Branch: ${cls.branch} | Term: ${cls.term}`);
    console.log(`✅ Progress: ${cls.progressPercentage}%`);
    console.log("Subjects:");
    cls.subjects.forEach(sub => {
        console.log(`- ${sub.name}: ${sub.assigned}/${sub.total} (${sub.progress}%)`);
    });
    console.log("\n-----------------------------\n");
});





  function styleScheduleTable() {
    // 1. Add Bootstrap classes to all <td>
    document.querySelectorAll("td").forEach(td => {
      td.classList.add("text-center", "align-middle", "border", "p-2");
    });
  
    // 2. Style head cells (class names like B1, B2, etc.)
    document.querySelectorAll("thead td").forEach(td => {
      td.classList.add("bg-primary", "text-white", "fw-bold");
    });
  
    // 3. Subject-to-Instructor Map (optional, can expand as needed)
    const subjectInstructorMap = {
      "Math": "Sir Ali",
      "Physics": "Mr. Khan",
      "English": "Ms. Zoya",
      "Chemistry": "Dr. Asad",
      "Biology": "Miss Ayesha",
      "Computer": "Sir Bilal"
      // Add more as needed
    };
  
    // 4. Style subject cells in <tbody>
    document.querySelectorAll("tbody td").forEach(td => {
      const subject = td.textContent.trim();
  
      if (subject !== "") {
        const instructor = subjectInstructorMap[subject];
  
        td.innerHTML = instructor
          ? `<span class="badge bg-success" data-bs-toggle="tooltip" title="${instructor}">${subject}</span>`
          : `<span class="badge bg-info">${subject}</span>`;
      }
    });
  
    // 5. Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
  }
  window.onload = styleScheduleTable;
  // or call it manually after building your table dynamically
    



//   UI for assigning class
// let clickedScheduleCell = null;

function handleClassCellClick(cell) {
    clickedScheduleCell = cell;

    const classSelect = document.getElementById("classSelectDropdown");
    classSelect.innerHTML = ""; // Clear old options

    newClassData.forEach(cls => {
        const option = document.createElement("option");
        option.value = cls.className;
        option.textContent = cls.className;
        classSelect.appendChild(option);
    });

    document.getElementById("classAssignModal").style.display = "block";
}

function assignClassToCell() {
    if (!clickedScheduleCell) {
        alert("No cell selected.");
        return;
    }

    const className = document.getElementById("classSelectDropdown").value;
    if (!className) {
        alert("Please select a class.");
        return;
    }

    clickedScheduleCell.textContent = className;
    document.getElementById("classAssignModal").style.display = "none";
}




// const instructors = [
//   { name: "Mr. Adeel", code: 101, weeklyLoad: 0 },
//   { name: "Ms. Sara", code: 102, weeklyLoad: 0 },
//   { name: "Mr. Haris", code: 103, weeklyLoad: 0 },
//   { name: "Dr. Sana", code: 104, weeklyLoad: 0 },
//   { name: "Mr. Zubair", code: 105, weeklyLoad: 0 },
//   { name: "Ms. Rida", code: 106, weeklyLoad: 0 },
//   { name: "Mr. Salman", code: 107, weeklyLoad: 0 },
//   { name: "Dr. Hina", code: 108, weeklyLoad: 0 },
//   { name: "Ms. Sabeen", code: 109, weeklyLoad: 0 },
//   { name: "Mr. Irfan", code: 110, weeklyLoad: 0 },
//   { name: "Ms. Komal", code: 111, weeklyLoad: 0 },
//   { name: "Dr. Junaid", code: 112, weeklyLoad: 0 },
//   { name: "Mr. Kamran", code: 113, weeklyLoad: 0 },
//   { name: "Ms. Hoorain", code: 114, weeklyLoad: 0 },
//   { name: "Dr. Yasir", code: 115, weeklyLoad: 0 },
//   { name: "Ms. Noor", code: 116, weeklyLoad: 0 },
//   { name: "Mr. Rehan", code: 117, weeklyLoad: 0 },
//   { name: "Dr. Mahnoor", code: 118, weeklyLoad: 0 },
//   { name: "Mr. Arham", code: 119, weeklyLoad: 0 },
//   { name: "Ms. Iqra", code: 120, weeklyLoad: 0 },
//   { name: "Mr. Danish", code: 121, weeklyLoad: 0 },
//   { name: "Ms. Mahira", code: 122, weeklyLoad: 0 },
//   { name: "Dr. Zeeshan", code: 123, weeklyLoad: 0 },
//   { name: "Mr. Fawad", code: 124, weeklyLoad: 0 },
//   { name: "Ms. Hina", code: 125, weeklyLoad: 0 }
// ];









//Manually update subjects data of classes

// function populateClassEditDropdown() {
//     const select = document.getElementById("classEditSelect");
//     select.innerHTML = `<option value="">-- Choose Class --</option>`; // Clear

//     Object.keys(classWiseSubjectsData).forEach(className => {
//         const option = document.createElement("option");
//         option.value = className;
//         option.textContent = className;
//         select.appendChild(option);
//     });
// }

// function handleClassEditClick() {
//     const className = document.getElementById("classEditSelect").value;
//     if (!className) {
//         alert("Please select a class first.");
//         return;
//     }
//     openClassEditModal(className);
// }

// // Call once on page load
// populateClassEditDropdown();



// let currentClassEditing = null;

// function openClassEditModal(className) {
//     const classData = classWiseSubjectsData[className];
//     if (!classData) {
//         alert("No subject data found for this class.");
//         return;
//     }

//     currentClassEditing = className;
//     document.getElementById("classEditTitle").textContent = `Edit Subjects - ${className}`;

//     const container = document.getElementById("classSubjectList");
//     container.innerHTML = ""; // Clear previous

//     classData.forEach((subj, index) => {
//         const row = document.createElement("div");
//         row.innerHTML = `
//             <span>${subj.name}</span>
//             <span>Total: ${subj.totalPeriods}</span>
//             <label>Remaining: 
//                 <input type="number" min="0" value="${subj.remainingPeriods}" data-index="${index}">
//             </label>
//         `;
//         container.appendChild(row);
//     });

//     document.getElementById("classEditModal").style.display = "flex";
// }

// function closeClassEditModal() {
//     document.getElementById("classEditModal").style.display = "none";
//     currentClassEditing = null;
// }

// function saveClassSubjectEdits() {
//     const inputs = document.querySelectorAll('#classSubjectList input');
//     inputs.forEach(input => {
//         const index = parseInt(input.dataset.index);
//         const value = parseInt(input.value) || 0;
//         classWiseSubjectsData[currentClassEditing][index].remainingPeriods = value;
//     });

//     alert(`Changes saved for ${currentClassEditing}`);
//     closeClassEditModal();
// }







// let currentClassEditing = null;

// // 🔁 Populate dropdown AFTER data is ready
// function populateClassEditDropdown() {
//     const select = document.getElementById("classEditSelect");
//     if (!select) return;

//     select.innerHTML = `<option value="">-- Choose Class --</option>`;

//     const keys = Object.keys(classWiseSubjectsData);
//     if (keys.length === 0) {
//         console.warn("⚠️ classWiseSubjectsData is empty!");
//     }

//     keys.forEach(className => {
//         const option = document.createElement("option");
//         option.value = className;
//         option.textContent = className;
//         select.appendChild(option);
//     });
// }

// function handleClassEditClick() {
//     const className = document.getElementById("classEditSelect").value;
//     if (!className) {
//         alert("Please select a class first.");
//         return;
//     }
//     openClassEditModal(className);
// }

// function openClassEditModal(className) {
//     const classData = classWiseSubjectsData[className];
//     const classMeta = newClassData.find(c => c.className === className);

//     if (!classData || !classMeta) {
//         alert("Class or subject data not found!");
//         return;
//     }

//     currentClassEditing = className;

//     // Modal Title
//     const titleEl = document.getElementById("classEditTitle");
//     titleEl.innerHTML = `📘 <strong>${className}</strong> &nbsp; | &nbsp; 
//                          📚 <strong>${classMeta.branch}</strong> &nbsp; | &nbsp; 
//                          📅 Term <strong>${classMeta.term}</strong>`;

//     // Populate subject editor
//     const container = document.getElementById("classSubjectList");
//     container.innerHTML = "";

//     classData.forEach((subj, index) => {
//         const assigned = subj.totalPeriods - subj.remainingPeriods;
//         const progress = ((assigned / subj.totalPeriods) * 100).toFixed(1);

//         const row = document.createElement("div");
//         row.className = "subject-row";
//         row.innerHTML = `
//             <strong>${subj.name}</strong> &nbsp;
//             Total: ${subj.totalPeriods} &nbsp; | &nbsp;
//             Assigned: ${assigned} &nbsp; | &nbsp;
//             Progress: ${progress}% &nbsp;
//             <label>Remaining: 
//                 <input type="number" min="0" value="${subj.remainingPeriods}" data-index="${index}">
//             </label>
//         `;
//         container.appendChild(row);
//     });

//     document.getElementById("classEditModal").style.display = "flex";
// }

// function closeClassEditModal() {
//     document.getElementById("classEditModal").style.display = "none";
//     currentClassEditing = null;
// }

// function saveClassSubjectEdits() {
//     const inputs = document.querySelectorAll('#classSubjectList input');
//     inputs.forEach(input => {
//         const index = parseInt(input.dataset.index);
//         const value = parseInt(input.value) || 0;
//         classWiseSubjectsData[currentClassEditing][index].remainingPeriods = value;
//     });

//     alert(`Changes saved for ${currentClassEditing}`);
//     closeClassEditModal();
// }

// // 🚀 Populate dropdown AFTER page load and data is ready
// window.onload = function () {
//     populateClassEditDropdown();
// };





// let currentClassEditing = null;

// function populateClassEditDropdown() {
//   const select = document.getElementById("classEditSelect");
//   select.innerHTML = `<option value="">-- Choose Class --</option>`;

//   Object.keys(classWiseSubjectsData).forEach(className => {
//     const option = document.createElement("option");
//     option.value = className;
//     option.textContent = className;
//     select.appendChild(option);
//   });
// }

// function handleClassEditClick() {
//   const className = document.getElementById("classEditSelect").value;
//   if (!className) {
//     alert("Please select a class first.");
//     return;
//   }
//   openClassEditModal(className);
// }

// function openClassEditModal(className) {
//   const classData = classWiseSubjectsData[className];
//   const classMeta = newClassData.find(c => c.className === className);

//   if (!classData || !classMeta) {
//     alert("Class or subject data not found!");
//     return;
//   }

//   currentClassEditing = className;

//   const titleEl = document.getElementById("classEditTitle");
//   titleEl.innerHTML = `📘 <strong>${className}</strong> &nbsp; | &nbsp; 
//                        📚 <strong>${classMeta.branch}</strong> &nbsp; | &nbsp; 
//                        📅 Term <strong>${classMeta.term}</strong>`;

//   const container = document.getElementById("classSubjectList");
//   container.innerHTML = "";

//   classData.forEach((subj, index) => {
//     const assigned = subj.totalPeriods - subj.remainingPeriods;
//     const progress = ((assigned / subj.totalPeriods) * 100).toFixed(1);

//     const row = document.createElement("div");
//     row.className = "subject-row";
//     row.innerHTML = `
//       <strong>${subj.name}</strong> &nbsp;
//       Total: ${subj.totalPeriods} &nbsp; | &nbsp;
//       Assigned: ${assigned} &nbsp; | &nbsp;
//       Progress: ${progress}% &nbsp;
//       <label>Remaining: 
//         <input type="number" min="0" value="${subj.remainingPeriods}" data-index="${index}">
//       </label>
//     `;
//     container.appendChild(row);
//   });

//   document.getElementById("classEditModal").style.display = "flex";
// }

// function closeClassEditModal() {
//   document.getElementById("classEditModal").style.display = "none";
//   currentClassEditing = null;
// }

// function saveClassSubjectEdits() {
//   const inputs = document.querySelectorAll('#classSubjectList input');
//   inputs.forEach(input => {
//     const index = parseInt(input.dataset.index);
//     const value = parseInt(input.value) || 0;
//     classWiseSubjectsData[currentClassEditing][index].remainingPeriods = value;
//   });

//   alert(`Changes saved for ${currentClassEditing}`);
//   closeClassEditModal();
// }

// window.onload = populateClassEditDropdown;



// let currentClassProgressEdit = null;

// function openSubjectProgressModal(className) {
//     const subjectData = classWiseSubjectsData[className];
//     if (!subjectData) {
//         alert("No subject data found for this class.");
//         return;
//     }

//     currentClassProgressEdit = className;
//     document.getElementById("subjectEditProgressTitle").textContent = `Edit Subjects - ${className}`;

//     const container = document.getElementById("subjectEditProgressInputs");
//     container.innerHTML = "";

//     subjectData.forEach((subj, index) => {
//         const row = document.createElement("div");
//         row.style.marginBottom = "8px";

//         row.innerHTML = `
//             <strong>${subj.name}</strong><br>
//             Total Periods: ${subj.totalPeriods}<br>
//             Remaining: <input type="number" min="0" value="${subj.remainingPeriods}" data-index="${index}">
//         `;

//         container.appendChild(row);
//     });

//     document.getElementById("subjectEditProgressModal").style.display = "block";
// }

// function closeSubjectProgressModal() {
//     document.getElementById("subjectEditProgressModal").style.display = "none";
//     currentClassProgressEdit = null;
// }

// function saveSubjectProgressEdits() {
//     const inputs = document.querySelectorAll('#subjectEditProgressInputs input');
//     inputs.forEach(input => {
//         const index = parseInt(input.dataset.index);
//         const value = parseInt(input.value) || 0;
//         classWiseSubjectsData[currentClassProgressEdit][index].remainingPeriods = value;
//     });

//     alert(`Updated subject progress for ${currentClassProgressEdit}.`);
//     closeSubjectProgressModal();
//     showClassProgressModal(); // Refresh the UI
// }

// const editBtn = document.createElement("button");
// editBtn.textContent = "Edit Subjects";
// editBtn.onclick = () => openSubjectProgressModal(className);
// editBtn.style.marginTop = "10px";
// classDiv.appendChild(editBtn);
