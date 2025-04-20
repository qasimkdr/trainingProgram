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
    { className: "E5", branch: "CS", term: 2 },
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
      1: ["Maths", "Programming Basics", "Digital Logic", "Computer Fundamentals", "Intro to CS", "English", "Ethics"],
      2: ["OOP", "Data Structures", "Database Systems", "Discrete Math", "Communication Skills", "Tech Writing"],
      3: ["Web Dev", "Operating Systems", "Networking", "UI/UX", "Algorithms", "Professional Practices"],
      4: ["Software Engineering", "AI", "Cybersecurity", "Mobile App Dev", "Project Management"],
      5: ["Machine Learning", "Cloud Computing", "IoT", "Blockchain Basics", "DevOps", "Big Data"],
      6: ["Final Year Project", "Internship", "Entrepreneurship", "Portfolio Dev", "Research Methods"]
    },
  
    "Data Science": {
      1: ["Statistics", "Python", "Intro to DS", "Excel for DS", "English", "Ethics", "Data Ethics"],
      2: ["Linear Algebra", "Data Wrangling", "Data Viz", "SQL", "Data Communication", "Scripting"],
      3: ["Machine Learning", "Big Data", "Python Advanced", "Model Evaluation", "Probability", "Cloud Tools"],
      4: ["Deep Learning", "NLP", "Time Series", "Data Pipelines", "AI Ethics", "Analytics"],
      5: ["Capstone I", "Model Deployment", "Cloud DS", "Business Intelligence", "Data Strategy", "ML Ops"],
      6: ["Capstone II", "Internship", "Data Privacy", "Ethical Hacking for DS", "Presentation Skills"]
    },
  
    "IT": {
      1: ["Computer Basics", "Office Automation", "Networking Basics", "IT Math", "Intro to IT", "English", "Cyber Hygiene"],
      2: ["Web Dev", "Database", "IT Support", "Technical Support Tools", "UI/UX", "Scripting Basics"],
      3: ["System Admin", "Cloud", "Scripting", "OS Management", "Virtualization", "Email Server Config"],
      4: ["Security", "Server Management", "Project", "Firewall Setup", "Asset Management", "Linux Admin"],
      5: ["IT Auditing", "Disaster Recovery", "Risk Management", "Cloud Security", "DevOps for IT"],
      6: ["Final Project", "Internship", "IT Consultancy", "Portfolio Dev", "Communication Skills"]
    },
  
    "AI": {
      1: ["Maths for AI", "Intro to AI", "Python", "Ethics in AI", "English", "Statistics", "CS Fundamentals"],
      2: ["Neural Nets", "Data Prep", "Statistics", "Linear Algebra", "Python Advanced", "ML Fundamentals"],
      3: ["ML", "DL", "AI Ethics", "TensorFlow/PyTorch", "Model Optimization", "Data Handling"],
      4: ["CV", "NLP", "Robotics", "Reinforcement Learning", "AI in Healthcare", "Cloud AI Tools"],
      5: ["AI in Practice", "Cloud AI", "Edge AI", "Model Deployment", "Big Data for AI", "AI Startups"],
      6: ["AI Project", "Deployment", "AI Entrepreneurship", "Internship", "Research in AI", "AI in Society"]
    },
  
    "SD": {
      1: ["Math", "Higher Math", "Higher AI", "Soft Skills", "Design Thinking", "Programming Logic"],
      2: ["OOP", "UI/UX", "Algorithms", "Advanced Math", "Software Modeling", "Database Systems"],
      3: ["Web Dev", "Mobile Dev", "Version Control", "Agile Methods", "DSA", "Software Testing"],
      4: ["DevOps", "Cloud Deployment", "CI/CD", "Project Management", "Microservices", "Security in SD"],
      5: ["Software Architecture", "Performance Engineering", "Team Leadership", "Full-Stack Dev", "Product Management"],
      6: ["Capstone Project", "Internship", "Open Source Contribution", "Software Auditing", "Portfolio Dev"]
    }
  };



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
                    <th>1220-0100</th>
                    <th>0120-0200</th>
                    <th>0200-0240</th>
                </tr>`;

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let periodStartRow = 4;

    let usedCodes = new Set();
    let instructorsFound = [];

    for (let i = 0; i < days.length; i++) {
        let row = `<tr><td>${days[i]}</td>`;

        for (let j = 0; j < 10; j++) {
            let periodRow = periodStartRow + 5 + (i * 10) + j;
            let cellText = table.rows[periodRow]?.cells[classIndex]?.textContent.trim() || "—";
            row += `<td>${cellText}</td>`;

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
        }

        row += `</tr>`;
        printContent += row;
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
    for (let i = 4; i < table.rows.length; i++) {
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
    // Get the table and clicked cell index
    const table = cell.closest("table");
    const columnIndex = cell.cellIndex;

    // Get class name from row index 1 (second row) of the same column
    const classCell = table.rows[1].cells[columnIndex];
    const className = classCell.textContent.trim();

    // Proceed with the existing logic
    const classData = newClassData.find(cls => cls.className.trim().toLowerCase() === className.toLowerCase());

    if (!classData) {
        alert("Class not found in data.");
        return;
    }

    const { branch, term } = classData;
    const subjects = subjectsData[branch]?.[term];

    if (!subjects) {
        alert(`No subjects found for Branch: ${branch}, Term: ${term}`);
        return;
    }

    // Format subject list
    const subjectList = subjects.map((sub, idx) => `${idx + 1}. ${sub}`).join("\n");

    let classesName = document.querySelector(".classname");
    let branchesName = document.querySelector(".branchname");
    let terms = document.querySelector(".term");
    let termSubjects = document.querySelector(".subjects");

    classesName.textContent = `Class Name: ${className}`;
    branchesName.textContent = `Branch: ${branch}`;
    terms.textContent = `Term: ${term}`;
    termSubjects.textContent = `Subjects: ${subjectList}`;

    // alert(`📘 Class: ${classData.className}\n📚 Branch: ${branch}\n📅 Term: ${term}\n\nSubjects to Study:\n${subjectList}`);
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
    document.getElementById("autoAssignModal").style.display = "none";
    document.getElementById("modernInstructorOptions").innerHTML = "";
  }

  
  
  // Populate instructor checkboxes based on class selection
  function populateSubjectInstructorPairs() {
    const index = document.getElementById("modernClassSelect").value;
    if (!index) return;
  
    const { branch, term } = newClassData[index];
    const relevantSubjects = subjectsData[branch]?.[term] || [];
  
    const container = document.getElementById("subjectInstructorPairs");
    container.innerHTML = "";
  
    relevantSubjects.forEach(subject => {
      const subjectWrapper = document.createElement("div");
      subjectWrapper.className = "subject-pair";
  
      const subjectLabel = document.createElement("label");
      subjectLabel.textContent = `Instructor for ${subject}: `;
  
      const instructorSelect = document.createElement("select");
      instructorSelect.name = subject;
      instructorSelect.className = "subject-instructor-select";
  
      const defaultOption = document.createElement("option");
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.textContent = "Select Instructor";
      instructorSelect.appendChild(defaultOption);
  
      instructors.forEach((inst, idx) => {
        if (inst.subjects.includes(subject)) {
          const option = document.createElement("option");
          option.value = idx;
          option.textContent = `${inst.name} (${inst.code})`;
          instructorSelect.appendChild(option);
        }
      });
  
      subjectWrapper.appendChild(subjectLabel);
      subjectWrapper.appendChild(instructorSelect);
      container.appendChild(subjectWrapper);
    });
  }
  
  
  // Trigger auto-assignment after user selects instructors
  function startAutoAssignment() {
    const classIndex = document.getElementById("modernClassSelect").value;
    if (classIndex === null || classIndex === "") {
      alert("Please select a class first.");
      return;
    }
  
    const classInfo = newClassData[classIndex];
    const instructorSelects = document.querySelectorAll(".subject-instructor-select");
  
    const subjectInstructorMap = {};
    for (const select of instructorSelects) {
      const subject = select.name;
      const instructorIdx = select.value;
      if (!instructorIdx) {
        alert(`Please select an instructor for subject: ${subject}`);
        return;
      }
      subjectInstructorMap[subject] = instructors[instructorIdx];
    }
  
    assignPeriodsWithFixedMap(classInfo, subjectInstructorMap);
    closeAutoAssignModal();
  }

  function assignPeriodsWithFixedMap(classInfo, subjectInstructorMap) {
    const table = document.querySelector("table");
    const columnIndex = newClassData.findIndex(cls => cls.className === classInfo.className);
    if (columnIndex === -1) {
      alert("Class column not found in table.");
      return;
    }
  
    const { branch, term } = classInfo;
    const subjects = subjectsData[branch]?.[term] || [];
  
    const maxRowsPerDay = 11;
    const totalDays = 5;
    const startRow = 5;
    const subjectCount = subjects.length;
    let subjectIndex = 0;
  
    const totalPeriodRows = maxRowsPerDay * totalDays;
  
    for (let rowOffset = 0; rowOffset < totalPeriodRows; rowOffset++) {
      const globalRowIndex = startRow + rowOffset;
  
      // Skip invalid or break rows (e.g. lunch rows or out-of-bound)
      const row = table.rows[globalRowIndex];
      if (!row || row.cells[columnIndex + 1]?.hasAttribute("colspan")) continue;
  
      const day = Math.floor(rowOffset / maxRowsPerDay); // 0 to 4
      const dayName = getDayNameByIndex(day);
      const periodIndex = rowOffset % maxRowsPerDay;
  
      const cell = row.cells[columnIndex + 1];
      if (!cell) continue;
  
      const subject = subjects[subjectIndex % subjectCount];
      const instructor = subjectInstructorMap[subject];
      if (!instructor) continue;
  
      if (!instructor.assignedPeriods) instructor.assignedPeriods = {};
      if (!instructor.assignedPeriods[dayName]) {
        instructor.assignedPeriods[dayName] = new Set();
      }
  
      const alreadyAssignedInRow = isInstructorAlreadyInRow(row, instructor.code);
      const isPeriodAvailable = !instructor.assignedPeriods[dayName].has(periodIndex);
  
      if (
        instructor.weeklyLoad < instructor.maxLoad &&
        isPeriodAvailable &&
        !alreadyAssignedInRow
      ) {
        instructor.assignedPeriods[dayName].add(periodIndex);
        instructor.weeklyLoad++;
        cell.textContent = `${subject} - ${instructor.code}`;
      }
  
      subjectIndex++;
    }
  
    alert("Auto-assignment complete!");
  }
  

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
    