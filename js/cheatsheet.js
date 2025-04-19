

//used array of object three object inside html css js and thier atterbiutes
const cheatSheets = {
    html: [
      {
        category: "HTML Basics",
        items: [
          { tag: "<!DOCTYPE html>", usage: "Defines HTML5 document" },
          { tag: "<html>", usage: "Root of HTML document" },
          { tag: "<head>", usage: "Container for metadata" },
          { tag: "<title>", usage: "Sets browser tab title" },
          { tag: "<body>", usage: "Main content of HTML page" }
        ]
      },
      {
        category: "Text",
        items: [
          { tag: "<h1> to <h6>", usage: "Headings" },
          { tag: "<p>", usage: "Paragraph" },
          { tag: "<strong>", usage: "Bold text" },
          { tag: "<em>", usage: "Italic text" }
        ]
      }
    ],
    css: [
      {
        category: "Selectors",
        items: [
          { tag: "element", usage: "Targets HTML elements" },
          { tag: "#id", usage: "Targets ID" },
          { tag: ".class", usage: "Targets class" },
          { tag: "*", usage: "Wildcard selector" }
        ]
      },
      {
        category: "Properties",
        items: [
          { tag: "color", usage: "Text color" },
          { tag: "background-color", usage: "Background color" },
          { tag: "margin", usage: "Outer spacing" },
          { tag: "padding", usage: "Inner spacing" }
        ]
      }
    ],
    js: [
      {
        category: "Basics",
        items: [
          { tag: "let, const, var", usage: "Variable declaration" },
          { tag: "function()", usage: "Define function" },
          { tag: "if / else", usage: "Conditional statement" },
          { tag: "for / while", usage: "Loops" }
        ]
      },
      {
        category: "DOM",
        items: [
          { tag: "document.getElementById()", usage: "Select element by ID" },
          { tag: "addEventListener()", usage: "Attach event handler" },
          { tag: "innerText / innerHTML", usage: "Get or set content" }
        ]
      }
    ]
  };
  
  //accessing the elements inside html
  const sheetContainer = document.getElementById("cheatsheet-container");
  const title = document.getElementById("main-title");
  const menuItems = document.querySelectorAll(".menu-item");

  // rendering data inside the elemenets 
  function renderCheatSheet(type) {
    sheetContainer.innerHTML = "";
    title.textContent = `${type.toUpperCase()} Cheat Sheet`;
  
    cheatSheets[type].forEach(section => {
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "category";
      sectionDiv.innerHTML = `<h2>${section.category}</h2>`;
  
      section.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cheat-item";
        itemDiv.innerHTML = `
          <strong>${item.usage}</strong>
          <code class="code">${item.tag}</code>
        `;
        sectionDiv.appendChild(itemDiv);
      });
  
      sheetContainer.appendChild(sectionDiv);
    });
  }
  

  //changing cheatsheet based on menu on sidebar
  menuItems.forEach(menu => {
    menu.addEventListener("click", () => {
      const type = menu.getAttribute("data-type");
      renderCheatSheet(type);
    });
  });
  

  renderCheatSheet("html");
  