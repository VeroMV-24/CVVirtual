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

const birthDate = new Date("1996-02-03"); 

  function calculateAge(birthday) {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }

document.getElementById("age").textContent = calculateAge(birthDate);

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

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

function parseMonthYear(str) {
  const meses = {
    enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
    julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
  };

  str = str.toLowerCase().trim();

  if (str.includes("presente")) {
    return new Date();
  }

  const partes = str.split(" ");
  const mes = meses[partes[0]];
  const año = parseInt(partes[1]);

  return new Date(año, mes);
}

const skillsBlocks = document.querySelectorAll('.skills_data');
const rangeStart = new Date(2019, 0); // enero 2019
const rangeEnd = new Date(); // hoy

skillsBlocks.forEach(block => {
  const startEl = block.querySelector('.skills_dateStart');
  const endEl = block.querySelector('.skills_dateEnd');
  const barEl = block.querySelector('.skills_percentage');

  const startDate = parseMonthYear(startEl.textContent);
  const endDate = parseMonthYear(endEl.textContent);

  const totalMs = rangeEnd - rangeStart;
  const coveredMs = endDate - startDate;
  const percentage = (coveredMs / totalMs) * 100;

  barEl.style.width = `${percentage}%`;
});