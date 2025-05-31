const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link =>
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  })
);

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        });
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        });
        tab.classList.add('qualification_active')
    });
});

const monthNames = {
    "enero": 0, "febrero": 1, "marzo": 2, "abril": 3,
    "mayo": 4, "junio": 5, "julio": 6, "agosto": 7,
    "septiembre": 8, "octubre": 9, "noviembre": 10, "diciembre": 11
  };

function parseDate(str) {
    if (str.toLowerCase() === "presente") return new Date();
    const [mes, año] = str.toLowerCase().split(" ");
    return new Date(parseInt(año), monthNames[mes]);
}

function calculateYearsExperience(workArray){
  let dateOld = new Date();
  let dateNew = new Date(0);

  workArray.forEach(({fecha}) => {
    const [startStr, endStr] = fecha.toLowerCase().split(" - ");
    const dateStart = parseDate(startStr);
    const dateEnd = endStr === "presente" ? new Date() : parseDate(endStr);

    if (dateStart < dateOld) dateOld = dateStart;
    if (dateEnd > dateNew) dateNew = dateEnd;
  });
  const differenceMonths = (dateNew.getFullYear() - dateOld.getFullYear()) * 12 + (dateNew.getMonth() - dateOld.getMonth());
  const roundenYears = differenceMonths / 12;

  const yearsExperience = Math.floor(roundenYears);
  return yearsExperience;
}

const rangeStart = new Date(2019, 0); // Enero 2019
const rangeEnd = new Date(); // Hoy

function calculateSkillLevel(startDateStr, endDateStr) {
  const start = parseDate(startDateStr);
  const end = endDateStr.toLowerCase() === "presente" ? rangeEnd : parseDate(endDateStr);

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = totalMonths / 12;

  const maxMonths = (rangeEnd.getFullYear() - rangeStart.getFullYear()) * 12 + (rangeEnd.getMonth() - rangeStart.getMonth());
  const maxYears = maxMonths / 12;

  const level = Math.min(Math.round((years / maxYears) * 100), 100);
  
  const fullYears = Math.floor(years);
  const remainingMonths = Math.round((years - fullYears) * 12);
  const formattedDuration = `${fullYears} año${fullYears !== 1 ? 's' : ''}${remainingMonths > 0 ? ` y ${remainingMonths} mes${remainingMonths !== 1 ? 'es' : ''}` : ''}`;

  return { level, years, formattedDuration };
}

var infoCV = {
  nombre:"Verónica de Jesús Mendoza Vidal",
  birthDate: new Date("1996-02-03"),
  skillsData: [
    {
      title: "Lenguajes de Programación y Tecnologias",
      skills: [
        {
          name: "HTML",
          startDate: "Septiembre 2020",
          endDate: "Presente"
        },
        {
          name: "CSS",
          startDate: "Septiembre 2020",
          endDate: "Presente"
        },
        {
          name: "JavaScript",
          startDate: "Septiembre 2020",
          endDate: "Presente"
        },
        {
          name: "C#",
          startDate: "Septiembre 2020",
          endDate: "Octubre 2021"
        },
        {
          name: ".Net Core",
          startDate: "Septiembre 2020",
          endDate: "Octubre 2021"
        },
        {
          name: ".Net Framework",
          startDate: "Septiembre 2020",
          endDate: "Octubre 2021"
        },
        {
          name: "Inyeccion de dependencias",
          startDate: "Septiembre 2024",
          endDate: "Presente"
        },
        {
          name: "Swagger",
          startDate: "Septiembre 2024",
          endDate: "Presente"
        },
        {
          name: "jQuery",
          startDate: "Septiembre 2024",
          endDate: "Presente"
        }
      ]
    },
    {
      title: "Bases de datos",
      skills: [
        {
          name: "SQL Server",
          startDate: "Septiembre 2020",
          endDate: "Septiembre 2024"
        },
        {
          name: "MySQL",
          startDate: "Septiembre 2020",
          endDate: "Septiembre 2024"
        },
        {
          name: "Oracle",
          startDate: "Septiembre 2020",
          endDate: "Septiembre 2024"
        }
      ]
    },
    {
      title: "Otras habilidades",
      skills: [
        {
          name: "Git",
          startDate: "Septiembre 2020",
          endDate: "Octubre 2021"
        },
        {
          name: "Bootstrap",
          startDate: "Septiembre 2020",
          endDate: "Octubre 2021"
        },
        {
          name: "Docker",
          startDate: "Septiembre 2020",
          endDate: "Octubre 2021"
        },
        {
          name: "SAP BusinessObjects",
          startDate: "Octubre 2021",
          endDate: "Septiembre 2024"
        },
        {
          name: "Toad",
          startDate: "Octubre 2021",
          endDate: "Septiembre 2024"
        },
        {
          name: "PowerCenter",
          startDate: "Octubre 2021",
          endDate: "Septiembre 2024"
        },
        {
          name: "Programacion Orientada a Objetos",
          startDate: "Septiembre 2020",
          endDate: "Presente"
        },
        {
          name: "SCRUM",
          startDate: "Septiembre 2020",
          endDate: "Septiembre 2024"
        }
      ]
    },
  ],
  work:[
    {
      titulo: "Ingeniero de datos",
      institucion: "SuKarne",
      fecha: "Octubre 2021 - Septiembre 2024"
    },
    {
      titulo: "Desarrollador Junior",
      institucion: "Heladísimo",
      fecha: "Septiembre 2020 - Octubre 2021"
    }
  ],
  education:[
    {
      titulo: "Ingeniería en Sistemas Computacionales",
      institucion: "Instituto Tecnologico de Mérida",
      fecha: "Agosto 2016 - Diciembre 2020"
    }
  ],
  projects:[
    {
      titulo: "CV Virtual",
      imagen: "images/CVweb.png",
      descripcion: "Es una pagina web construida desde FrontEnd donde se muestra en tiempo real todo lo relacionado a mis habilidades y formacion academica. Para hacer esta página se usaron las siguientes tecnologías: HTML, CSS, JavaScrip",
      link: "https://github.com/VeroMV-24/CVVirtual"
    }
  ]
};

function calculateAge(birthday) {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
}

function fillSkills(sectionId, skillsData) {
  const skillsContainer = document.getElementById(sectionId);
  if (!skillsContainer) return;

  skillsData.forEach((group, index) => {
    const skillsContent = document.createElement("div");
    skillsContent.className = `skills_content ${index === 0 ? 'skills_open' : 'skills_close'}`;

    let icon = "uil-plus-circle";
    if (group.title.toLowerCase().includes("programación")) icon = "uil-brackets-curly";
    else if (group.title.toLowerCase().includes("base")) icon = "uil-database";

    skillsContent.innerHTML = `
      <div class="skills_header">
        <i class="uil ${icon} skills_icon"></i>
        <div>
          <h1 class="skills_title">${group.title}</h1>
        </div>
        <i class="uil uil-angle-down skills_arrow"></i>
      </div>
      <div class="skills_list grid">
        ${group.skills.map(skill => {
          const { level, formattedDuration } = calculateSkillLevel(skill.startDate, skill.endDate);

          return `
            <div class="skills_data">
              <div class="skills_titles">
                <h3 class="skills_name">${skill.name}</h3>
                <div class="skills_date">
                  <span class="skills_dateStart">${skill.startDate}</span>
                  <span class="guion">-</span>
                  <span class="skills_dateEnd">${skill.endDate}</span>
                  <span class="skills_duration">(${formattedDuration})</span>
                </div>
              </div>
              <div class="skills_bar">
                <span class="skills_percentage" style="width: ${level}%"></span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    skillsContainer.appendChild(skillsContent);
  });
}

function fillQualifications(sectionId, dataQualification){
  const container_qualification = document.getElementById(sectionId);

  if (!container_qualification) return;

  dataQualification.forEach((item, index) => {
    const isLastItem = index === dataQualification.length - 1;
    const posicion = index % 2 ===0 ? "left" : "right";

    const div = document.createElement("div");
    div.classList.add("qualification_data", posicion);

    div.innerHTML = `
      ${posicion === "right" ? '<div></div>' : `
        <div>
          <h3 class="qualification_title">${item.titulo}</h3>
          <span class="qualification_subtitle">${item.institucion}</span>
          <div class="qualification_calendar">
              <i class="uil uil-calendar-alt qualification_icon"></i>
              ${item.fecha}
          </div>
        </div>
      `}
      <div>
          <span class="qualification_rounder"></span>
          ${!isLastItem ? '<span class="qualification_line"></span>' : ''}
      </div>
      ${posicion === "right" ? `
        <div>
          <h3 class="qualification_title">${item.titulo}</h3>
          <span class="qualification_subtitle">${item.institucion}</span>
          <div class="qualification_calendar">
              <i class="uil uil-calendar-alt qualification_icon"></i>
              ${item.fecha}
          </div>
        </div>
      ` : '<div></div>'}
    `;

    container_qualification.appendChild(div);
  });
}

function fillInformation(){

  const spnAge = document.getElementById("age");
  spnAge.innerText = calculateAge(infoCV.birthDate);

  const yearsExperience = calculateYearsExperience(infoCV.work);
  document.querySelector(".about_info-title").textContent = `${yearsExperience}`;

  fillSkills("skillsContainer", infoCV.skillsData);

  const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')
    
  function toggleSkills(){
      let itemClass = this.parentNode.className

      if(itemClass === 'skills_content skills_close'){
          this.parentNode.className = 'skills_content skills_open'
      }else {
          this.parentNode.className = 'skills_content skills_close'
      }
  }

  skillsHeader.forEach((el) =>{
      el.addEventListener('click', toggleSkills)
  })

  fillQualifications("work", infoCV.work);
  fillQualifications("education", infoCV.education);

  const container_projects = document.getElementById("projectsContainer");
  infoCV.projects.forEach(project => {
    const card_projects = document.createElement("div");
    card_projects.classList.add("project_card");

    card_projects.innerHTML = `
    <img src="${project.imagen}" alt="${project.titulo}" class="project_img">
    <div class="project_info">
        <h3 class="project_title">${project.titulo}</h3>
        <p>${project.descripcion}</p>
        <a href="${project.link}" target="_blank" class="project_link">Ver en GitHub</a>
    </div>
    `;
    container_projects.appendChild(card_projects);
  });
  
}

fillInformation();