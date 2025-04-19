
  // arraylist resume
const resumeData = [
    {
      section: "Education",
      content: [
        "High School: Hakim Naseer Khesraw Balkhi High School (2015)",
        "BCS: Maiwand University (2021)",
        "Currently Studying: Bow Valley College"
      ]
    },
    {
      section: "Work Experience",
      content: [
        "Android Developer at Smart Eyes - 1 year"
      ]
    },
    {
      section: "Programming Languages",
      content: [
        "Java", "JavaScript", "C++", "Kotlin", "Dart"
      ]
    },
    {
      section: "Development Skills",
      content: [
        "Web Development", "Mobile App Development"
      ]
    },
    {
      section: "Technologies & Tools",
      content: [
        "React Native", "Express.js", "Node.js",
        "SQL", "MySQL", "Firebase",
        "NetBeans", "Android Studio"
      ]
    }
  ];
  
  //accessing dive resume table 
  const resumeContainer = document.getElementById("resume-table");
  
  //creating new table
  let table = document.createElement("table");

  //using foreach to fetch data from reusme array in item
  resumeData.forEach((item) => {
    let row = document.createElement("tr");
  
    let th = document.createElement("th");
    th.textContent = item.section;
    row.appendChild(th);
  
    let td = document.createElement("td");
      //after creating td inside td making a ul and mapping throw all item.content storing them into skils and showing it into li tag
    td.innerHTML = `<ul>${item.content.map(skill => `<li>${skill}</li>`).join("")}</ul>`;
    row.appendChild(td);
  
    table.appendChild(row);
  });
  
  resumeContainer.appendChild(table);
  

