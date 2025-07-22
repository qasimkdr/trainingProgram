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



document.querySelector("table").addEventListener("click", function (e) {
    const cell = e.target.closest("td");
    if (!cell) return;

    showClassDetailsFromCell(cell);
});

//Function to assign class
function openClassAssignModal(cell) {
    selectedClassCell = cell;
    document.getElementById("classAssignModal").classList.add("show");
    loadClassOptions();
}

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

function assignClassToCell() {
    const dropdown = document.getElementById("classDropdown");
    const selectedValue = dropdown.value;
    const selectedClass = newClassData.find(cls => cls.className === selectedValue);

    if (selectedClassCell && selectedClass) {
        // ✅ Overwrite the content, even if the cell already has something
        selectedClassCell.innerText = `${selectedClass.className}`;

        // Optional: add a data attribute to the cell if needed later
        selectedClassCell.setAttribute("data-assigned-class", selectedClass.className);
    }

    closeClassAssignModal();
}



const subjectsData = {
    "CS": {
        1: {
            subjects: [
                { name: "Maths", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Programming Basics", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Digital Logic", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Computer Fundamentals", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Intro to CS", totalPeriods: 42, remainingPeriods: 42 },
                { name: "English", totalPeriods: 42, remainingPeriods: 42 },
                { name: "Ethics", totalPeriods: 42, remainingPeriods: 42 }
            ],
            totalTermPeriods: 294,
            remainingTermPeriods: 294
        },
        2: {
            subjects: [
                { name: "OOP", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Data Structures", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Database Systems", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Discrete Math", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Communication Skills", totalPeriods: 35, remainingPeriods: 35 },
                { name: "Tech Writing", totalPeriods: 35, remainingPeriods: 35 }
            ],
            totalTermPeriods: 210,
            remainingTermPeriods: 210
        },
        3: {
            subjects: [
                { name: "Web Dev", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Operating Systems", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Networking", totalPeriods: 40, remainingPeriods: 40 },
                { name: "UI/UX", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Algorithms", totalPeriods: 40, remainingPeriods: 40 },
                { name: "Professional Practices", totalPeriods: 40, remainingPeriods: 40 }
            ],
            totalTermPeriods: 240,
            remainingTermPeriods: 240
        },
        4: {
            subjects: [
                { name: "Software Engineering", totalPeriods: 45, remainingPeriods: 45 },
                { name: "AI", totalPeriods: 45, remainingPeriods: 45 },
                { name: "Cybersecurity", totalPeriods: 45, remainingPeriods: 45 },
                { name: "Mobile App Dev", totalPeriods: 45, remainingPeriods: 45 },
                { name: "Project Management", totalPeriods: 45, remainingPeriods: 45 }
            ],
            totalTermPeriods: 225,
            remainingTermPeriods: 225
        },
        5: {
            subjects: [
                { name: "Machine Learning", totalPeriods: 50, remainingPeriods: 50 },
                { name: "Cloud Computing", totalPeriods: 50, remainingPeriods: 50 },
                { name: "IoT", totalPeriods: 50, remainingPeriods: 50 },
                { name: "Blockchain Basics", totalPeriods: 50, remainingPeriods: 50 },
                { name: "DevOps", totalPeriods: 50, remainingPeriods: 50 },
                { name: "Big Data", totalPeriods: 50, remainingPeriods: 50 }
            ],
            totalTermPeriods: 300,
            remainingTermPeriods: 300
        },
        6: {
            subjects: [
                { name: "Final Year Project", totalPeriods: 60, remainingPeriods: 60 },
                { name: "Internship", totalPeriods: 60, remainingPeriods: 60 },
                { name: "Entrepreneurship", totalPeriods: 60, remainingPeriods: 60 },
                { name: "Portfolio Dev", totalPeriods: 60, remainingPeriods: 60 },
                { name: "Research Methods", totalPeriods: 60, remainingPeriods: 60 }
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


let selectedCell = null;
let selectedDay = "";
let selectedPeriodIndex = -1;


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
function assignInstructor(cell, day, periodIndex) {
    selectedCell = cell;
    selectedDay = day;
    selectedPeriodIndex = periodIndex !== undefined ? periodIndex : Array.from(cell.parentNode.children).indexOf(cell);

    document.getElementById("searchInstructor").value = "";
    loadInstructors();
    document.getElementById("modal").style.display = "block";
}

// Load Instructors in Dropdown
function loadInstructors(filteredList = instructors) {
    const instructorSelect = document.getElementById("instructorSelect");
    instructorSelect.innerHTML = "";

    filteredList.forEach(inst => {
        if (inst.weeklyLoad < inst.maxLoad) {
            const option = document.createElement("option");
            option.value = inst.code;
            option.textContent = `${inst.name} (${inst.weeklyLoad}/${inst.maxLoad})`;
            instructorSelect.appendChild(option);
        }
    });

    populateSubjects();
}

// Search Instructors
function filterInstructors() {
    const searchValue = document.getElementById("searchInstructor").value.toLowerCase();
    const filteredList = instructors.filter(inst =>
        inst.name.toLowerCase().includes(searchValue) || inst.code.toString().includes(searchValue)
    );

    loadInstructors(filteredList);
}

// Populate Subjects Based on Selected Instructor
function populateSubjects() {
    const selectedInstructorCode = parseInt(document.getElementById("instructorSelect").value);
    const subjectSelect = document.getElementById("subjectSelect");
    subjectSelect.innerHTML = "";

    const instructor = instructors.find(inst => inst.code === selectedInstructorCode);
    if (instructor) {
        instructor.subjects.forEach(subject => {
            const option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
    }
}

// Confirm Selection and Assign Instructor
function confirmSelection() {
    const selectedInstructorCode = parseInt(document.getElementById("instructorSelect").value);
    const selectedSubject = document.getElementById("subjectSelect").value;
    const instructor = instructors.find(inst => inst.code === selectedInstructorCode);

    if (!instructor) {
        alert("Please select a valid instructor.");
        return;
    }

    // ✅ Check if instructor already assigned in the same row
    const row = selectedCell.parentElement; // Get the row <tr>
    const cells = Array.from(row.cells);
    for (let cell of cells) {
        if (cell !== selectedCell) {
            const cellText = cell.textContent.trim();
            if (cellText.includes(`- ${selectedInstructorCode}`)) {
                alert(`This instructor (code: ${selectedInstructorCode}) is already assigned in this slot.`);
                return;
            }
        }
    }

    // ✅ Unassign previous instructor if different
    const existingData = selectedCell.textContent.trim();
    if (existingData) {
        const existingCode = parseInt(existingData.split(" - ")[1]); // Format: Subject - Code
        if (existingCode !== selectedInstructorCode) {
            const existingInstructor = instructors.find(inst => inst.code === existingCode);
            if (existingInstructor) {
                existingInstructor.weeklyLoad = Math.max(0, existingInstructor.weeklyLoad - 1);
                if (existingInstructor.assignedPeriods[selectedDay]) {
                    existingInstructor.assignedPeriods[selectedDay].delete(selectedPeriodIndex);
                }
            }
        }
    }

    // ✅ Initialize assignedPeriods for this day
    if (!instructor.assignedPeriods[selectedDay]) {
        instructor.assignedPeriods[selectedDay] = new Set();
    }

    // ✅ Assign new instructor
    instructor.assignedPeriods[selectedDay].add(selectedPeriodIndex);
    instructor.weeklyLoad++;
    selectedCell.textContent = `${selectedSubject} - ${instructor.code}`;

    closeModal();
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

//print by class
function printSelectedClass() {
    let select = document.getElementById("classSelect");
    let classIndex = parseInt(select.value);

    if (isNaN(classIndex) || classIndex < 1) {
        alert("Please select a valid class!");
        return;
    }

    let table = document.getElementById("scheduleTable");
    let className = table.rows[1].cells[classIndex].textContent.trim();

    let printWindow = window.open('', '_blank');
    let printContent = `
        <html>
        <head>
            <title>Print Schedule - ${className}</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                table { border-collapse: collapse; width: 100%; margin-top: 20px; }
                th, td { border: 1px solid black; padding: 8px; text-align: center; }
                h2, h3 { margin-top: 40px; }
            </style>
        </head>
        <body>
            <h2>${className} Class Schedule</h2>
            <table>
                <tr>
                    <th>Day</th>
                    <th>0800-0840</th>
                    <th>0840-0920</th>
                    <th>0920-1000</th>
                    <th>1000-1040</th>
                    <th>1040-1100</th>
                    <th>1100-1140</th>
                    <th>1140-1220</th>
                    <th>1220-1300</th>
                    <th>1300-1330</th>
                    <th>1330-1410</th>
                    <th>1410-1450</th>
                </tr>`;

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let periodsPerDay = 11;
    let currentRow = 9; // Start from first period row (adjust this if needed)

    let usedCodes = new Set();
    let instructorsFound = [];

    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        let dayName = days[dayIndex];
        let rowContent = `<tr><td>${dayName}</td>`;

        for (let period = 0; period < periodsPerDay; period++) {
            let cellText = table.rows[currentRow]?.cells[classIndex]?.textContent.trim() || "—";
            rowContent += `<td>${cellText}</td>`;

            // Check for teacher code (e.g., Math-73)
            let match = cellText.match(/-(\d+)/);
            if (match) {
                let code = match[1];
                if (!usedCodes.has(code)) {
                    usedCodes.add(code);
                    let instructor = instructors.find(inst => inst.code === code);
                    if (instructor) {
                        instructorsFound.push({
                            name: instructor.name,
                            subject: cellText.split('-')[0].trim()
                        });
                    }
                }
            }
            currentRow++; // Move to next row for next period
        }

        rowContent += `</tr>`;
        printContent += rowContent;
    }

    printContent += `</table>`;

    // Instructor Info Table
    if (instructorsFound.length > 0) {
        printContent += `
            <h3>Instructor Assignment</h3>
            <table>
                <tr>
                    <th>S.No</th>
                    <th>Instructor Name</th>
                    <th>Subject</th>
                </tr>`;

        instructorsFound.forEach((instructor, idx) => {
            printContent += `
                <tr>
                    <td>${idx + 1}</td>
                    <td>${instructor.name}</td>
                    <td>${instructor.subject}</td>
                </tr>`;
        });

        printContent += `</table>`;
    }

    printContent += `
            <script>
                window.onload = function() {
                    setTimeout(() => {
                        window.print();
                    }, 500);
                };
            </script>
        </body>
        </html>`;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
}


//print instructor table
window.onload = function () {
    let table = document.getElementById("scheduleTable");
    let classHeaderRow = table.rows[1]; // ✅ Row 1 contains class names
    let dropdown = document.getElementById("classSelect");

    dropdown.innerHTML = ""; // Clear any existing options

    // Start from index 1 to skip "Day" column
    for (let i = 1; i < classHeaderRow.cells.length; i++) {
        let cellText = classHeaderRow.cells[i].textContent.trim();
        if (cellText !== "") {
            let option = document.createElement("option");
            option.value = i; // Save the column index
            option.textContent = cellText; // Show class name
            dropdown.appendChild(option);
        }
    }
};

function showInstructorOptions() {
    let select = document.getElementById("classSelect");
    select.innerHTML = ""; // Clear previous options

    let table = document.getElementById("scheduleTable");
    let classRow = table.rows[1].cells; // 🔹 Class names are on row 1

    for (let i = 1; i < classRow.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = classRow[i].textContent.trim();
        select.appendChild(option);
    }

    select.style.display = "inline";
    document.getElementById("instructorPrintBtn").style.display = "inline";
}


// 🖨️ Button function to print instructor table
function printOnlyInstructorTable() {
    let select = document.getElementById("classSelect");
    let classIndex = parseInt(select.value);

    if (isNaN(classIndex) || classIndex < 1) {
        alert("Please select a valid class!");
        return;
    }

    let table = document.getElementById("scheduleTable");
    let className = table.rows[1].cells[classIndex].textContent.trim();

    let usedCodes = new Set();
    let instructorsFound = [];

    // Loop through all rows starting from row 4 (first period row)
    for (let i = 0; i < table.rows.length; i++) {
        let cell = table.rows[i].cells[classIndex];
        if (!cell) continue;

        let cellText = cell.textContent.trim();

        // Match code like "-73" in "Math-73"
        let match = cellText.match(/-(\d+)/);
        if (match) {
            let code = match[1];
            if (!usedCodes.has(code)) {
                usedCodes.add(code);

                let instructor = instructors.find(inst => inst.code === code);
                if (instructor) {
                    instructorsFound.push({
                        name: instructor.name,
                        subject: cellText.split('-')[0].trim()
                    });
                }
            }
        }
    }

    if (instructorsFound.length === 0) {
        alert("No instructors found for this class.");
        return;
    }

    // ✅ Now print only the instructor table
    let printWindow = window.open('', '_blank');
    let printContent = `
        <html>
        <head>
            <title>Instructor Table - ${className}</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                table { border-collapse: collapse; width: 60%; margin: 30px auto; }
                th, td { border: 1px solid black; padding: 8px; text-align: center; }
                h2 { margin-top: 30px; }
            </style>
        </head>
        <body>
            <h2>${className} - Instructor Assignment</h2>
            <table>
                <tr>
                    <th>S.No</th>
                    <th>Instructor Name</th>
                    <th>Subject</th>
                </tr>`;

    instructorsFound.forEach((instructor, idx) => {
        printContent += `
            <tr>
                <td>${idx + 1}</td>
                <td>${instructor.name}</td>
                <td>${instructor.subject}</td>
            </tr>`;
    });

    printContent += `</table>
        <script>
            window.onload = function () {
                setTimeout(() => {
                    window.print();
                }, 500);
            };
        </script>
        </body>
        </html>`;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
}




//add custom class
newClassData = {}; // Existing structure

function openAddClassModal() {
    document.getElementById("addClassModal").style.display = "block";
}

function closeAddClassModal() {
    document.getElementById("addClassModal").style.display = "none";
}



function addNewClass() {
    const className = document.getElementById("newClassName").value.trim();
    const branch = document.getElementById("newClassBranch").value;
    const term = parseInt(document.getElementById("newClassTerm").value);

    if (!className || !branch || isNaN(term)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Check if class already exists
    const alreadyExists = newClassData.some(cls => cls.className === className);
    if (alreadyExists) {
        alert("Class name already exists.");
        return;
    }

    const newClass = { className, branch, term };
    newClassData.push(newClass);
    alert(`Class ${className} added successfully!`);

    // Optionally: Clear form
    document.getElementById("newClassName").value = "";
    document.getElementById("newClassBranch").value = "";
    document.getElementById("newClassTerm").value = "";

    // Optionally: Update class UI or list
    console.log(newClassData); // See the updated list
}

const classInfo = newClassData[className]; // { branch: "CS", term: 2 }
const subjects = subjectsData[classInfo.branch][classInfo.term];

function toggleAddClassForm() {
    const section = document.getElementById("addClassSection");
    const button = document.getElementById("toggleAddClassBtn");

    if (section.style.display === "none") {
        section.style.display = "block";
        button.textContent = "Hide";
    } else {
        section.style.display = "none";
        button.textContent = "Add Class";
    }
}

function openAddClassModal() {
    document.getElementById("addClassModal").style.display = "flex";
}

function closeAddClassModal() {
    document.getElementById("addClassModal").style.display = "none";
}
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

function backupData() {
    const clonedInstructors = instructors.map(inst => ({
        ...inst,
        assignedPeriods: Object.fromEntries(
            Object.entries(inst.assignedPeriods).map(([day, set]) => [day, Array.from(set)])
        )
    }));

    const backup = {
        instructors: clonedInstructors,
        newClassData,
        tableHTML: document.getElementById("scheduleTable").innerHTML
    };

    const dataStr = JSON.stringify(backup, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "timetable_backup.json";
    a.click();
}

function restoreData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);

            // ✅ Reset and update instructors
            if (Array.isArray(data.instructors)) {
                instructors.length = 0; // Clear existing array
                data.instructors.forEach(inst => {
                    // Convert assignedPeriods arrays back to Sets
                    const updatedPeriods = {};
                    for (const day in inst.assignedPeriods) {
                        updatedPeriods[day] = new Set(inst.assignedPeriods[day]);
                    }
                    instructors.push({
                        ...inst,
                        assignedPeriods: updatedPeriods
                    });
                });
            }

            // ✅ Reset and update newClassData
            if (Array.isArray(data.newClassData)) {
                newClassData.length = 0;
                newClassData.push(...data.newClassData);
            }

            // ✅ Restore table HTML
            if (typeof data.tableHTML === "string") {
                document.getElementById("scheduleTable").innerHTML = data.tableHTML;
            }

            // ✅ Rebind cell events
            rebindTableEvents();

            alert("Restore complete.");
        } catch (err) {
            console.error(err);
            alert("Invalid backup file.");
        }
    };
    reader.readAsText(file);
}



function rebindTableEvents() {
    const rows = document.getElementById("scheduleTable").rows;
    for (let i = 6; i < rows.length; i++) {
        const day = days[i - 6]; // Make sure 'days' array exists
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            cell.onclick = () => assignInstructor(cell, day, j);
        }
    }

    // Rebind class assign modal row (if applicable)
    const classRow = document.getElementById("scheduleTable").rows[1];
    if (classRow) {
        for (let cell of classRow.cells) {
            cell.onclick = () => openClassAssignModal(cell);
        }
    }
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

function saveClassUpdate() {
    if (!selectedClassToUpdate) {
        alert("No class selected.");
        return;
    }

    selectedClassToUpdate.className = document.getElementById("updateClassNameInput").value;
    selectedClassToUpdate.branch = document.getElementById("updateBranchSelect").value;
    selectedClassToUpdate.term = parseInt(document.getElementById("updateTermSelect").value);

    alert("Class data updated successfully!");
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
    const columnIndex = newClassData.findIndex(cls => cls.className === classInfo.className);
    if (columnIndex === -1) {
        alert("Class column not found in table.");
        return;
    }

    const { branch, term } = classInfo;
    const termData = subjectsData[branch]?.[term];
    
    if (!termData || !termData.subjects || !Array.isArray(termData.subjects)) {
        alert("No valid subject data found for this class.");
        return;
    }

    // Create working copy of subjects with current remaining periods
    const workingSubjects = termData.subjects.map(subject => ({
        ...subject,
        remainingPeriods: subject.remainingPeriods, // Use current remaining periods
        lastAssignedDay: -1,
        assignedPeriods: 0 // Track newly assigned periods
    }));

    const periodsPerDay = 11;
    const totalDays = 5;
    const skipRows = 5;
    const totalPeriods = periodsPerDay * totalDays;

    // Initialize tracking
    const assignmentStats = {
        totalAssigned: 0,
        subjects: {},
        instructors: {},
        days: {}
    };

    // Initialize instructor tracking
    Object.values(subjectInstructorMap).forEach(instructor => {
        assignmentStats.instructors[instructor.code] = {
            name: instructor.name,
            assigned: 0,
            maxLoad: instructor.maxLoad
        };
        instructor.assignedPeriods = instructor.assignedPeriods || {};
    });

    // Intelligent subject rotation
    function getNextSubject() {
        return [...workingSubjects]
            .sort((a, b) => {
                const remainingDiff = b.remainingPeriods - a.remainingPeriods;
                if (remainingDiff !== 0) return remainingDiff;
                return a.lastAssignedDay - b.lastAssignedDay;
            })[0];
    }

    let periodsAssignedToday = 0;
    let currentDay = 0;
    
    for (let i = skipRows; i < skipRows + totalPeriods; i++) {
        const row = table.rows[i];
        if (!row || !row.cells[columnIndex + 1] || row.cells[columnIndex + 1].hasAttribute("colspan")) {
            continue;
        }

        const dayName = getDayNameByIndex(currentDay);
        const periodInDay = periodsAssignedToday;
        const cell = row.cells[columnIndex + 1];

        // Get next subject needing periods
        const subject = getNextSubject();
        if (subject.remainingPeriods <= 0) continue;

        const instructor = subjectInstructorMap[subject.name];
        if (!instructor) continue;

        instructor.assignedPeriods[dayName] = instructor.assignedPeriods[dayName] || new Set();

        // Try to assign 2-period block
        if (periodsAssignedToday < periodsPerDay - 1 && 
            subject.remainingPeriods >= 2 && 
            i + 1 < table.rows.length) {
            
            const nextRow = table.rows[i + 1];
            if (nextRow && nextRow.cells[columnIndex + 1] && !nextRow.cells[columnIndex + 1].hasAttribute("colspan")) {
                
                const canAssignPair = (
                    instructor.weeklyLoad + 2 <= instructor.maxLoad &&
                    !instructor.assignedPeriods[dayName].has(periodInDay) &&
                    !instructor.assignedPeriods[dayName].has(periodInDay + 1) &&
                    !instructor.unavailablePeriods?.[dayName]?.has(periodInDay) &&
                    !instructor.unavailablePeriods?.[dayName]?.has(periodInDay + 1) &&
                    !isInstructorAlreadyInRow(row, instructor.code) &&
                    !isInstructorAlreadyInRow(nextRow, instructor.code)
                );

                if (canAssignPair) {
                    instructor.assignedPeriods[dayName].add(periodInDay);
                    instructor.assignedPeriods[dayName].add(periodInDay + 1);
                    instructor.weeklyLoad += 2;
                    
                    cell.textContent = `${subject.name} - ${instructor.code}`;
                    nextRow.cells[columnIndex + 1].textContent = `${subject.name} - ${instructor.code}`;
                    
                    // Update tracking
                    assignmentStats.totalAssigned += 2;
                    subject.remainingPeriods -= 2;
                    subject.assignedPeriods += 2;
                    subject.lastAssignedDay = currentDay;
                    assignmentStats.instructors[instructor.code].assigned += 2;
                    
                    i++;
                    periodsAssignedToday += 2;
                    continue;
                }
            }
        }

        // Assign single period
        const canAssignSingle = (
            instructor.weeklyLoad < instructor.maxLoad &&
            !instructor.assignedPeriods[dayName].has(periodInDay) &&
            !instructor.unavailablePeriods?.[dayName]?.has(periodInDay) &&
            !isInstructorAlreadyInRow(row, instructor.code)
        );

        if (canAssignSingle) {
            instructor.assignedPeriods[dayName].add(periodInDay);
            instructor.weeklyLoad++;
            cell.textContent = `${subject.name} - ${instructor.code}`;
            
            assignmentStats.totalAssigned++;
            subject.remainingPeriods--;
            subject.assignedPeriods++;
            subject.lastAssignedDay = currentDay;
            assignmentStats.instructors[instructor.code].assigned++;
        }

        periodsAssignedToday++;
        
        if (periodsAssignedToday >= periodsPerDay) {
            currentDay++;
            periodsAssignedToday = 0;
        }
    }

    // Update original subjectsData with new remaining periods
    workingSubjects.forEach(workingSubject => {
        const originalSubject = termData.subjects.find(s => s.name === workingSubject.name);
        if (originalSubject) {
            originalSubject.remainingPeriods = workingSubject.remainingPeriods;
        }
    });

    // Update term progress
    termData.remainingTermPeriods = workingSubjects.reduce(
        (sum, subject) => sum + subject.remainingPeriods, 
        0
    );

    // Generate report with progress percentages
    function generateReport() {
        let report = "📊 CLASS PROGRESS REPORT\n\n";
        report += `🏫 Class: ${classInfo.className} (${branch} - Term ${term})\n`;
        report += `🔄 Total Periods Assigned: ${assignmentStats.totalAssigned}\n`;
        report += `📈 Term Completion: ${Math.round(
            (termData.totalTermPeriods - termData.remainingTermPeriods) / 
            termData.totalTermPeriods * 100
        )}%\n\n`;
        
        report += "📚 SUBJECT PROGRESS:\n";
        workingSubjects.forEach(subject => {
            const progress = Math.round(
                (subject.assignedPeriods / 
                (subject.assignedPeriods + subject.remainingPeriods)) * 100
            );
            report += `• ${subject.name}: ${subject.assignedPeriods}/${subject.totalPeriods} (${progress}%)\n`;
        });
        
        report += "\n👨‍🏫 INSTRUCTOR LOAD:\n";
        for (const [code, data] of Object.entries(assignmentStats.instructors)) {
            report += `• ${data.name} (${code}): ${data.assigned}/${data.maxLoad}\n`;
        }
        
        return report;
    }

    const report = generateReport();
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
    