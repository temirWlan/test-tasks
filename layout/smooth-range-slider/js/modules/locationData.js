/*
https://itrack.ru/portfolio/website/
https://itrack.ru/portfolio/vnedrenie-crm/
https://itrack.ru/portfolio/website/filter/project_type-is-korporativnyy_sayt/apply/
https://itrack.ru/portfolio/vnedrenie-crm/filter/crm_project_type-is-amocrm/apply/
https://itrack.ru/portfolio/website/?PAGEN_1=2
https://itrack.ru/portfolio/vnedrenie-crm/?PAGEN_1=2
https://itrack.ru/portfolio/vnedrenie-crm/mobifitness/
https://itrack.ru/portfolio/website/miratorg/
	
	Необходимо при загрузке страницы заполнить массив с параметрами страницы:
Тип страницы (type) - index, filter, project, nextPage
Направление работы (direct) - website, crm
Параметры фильтра (filterParam) - строка между filter и apply
Проект (project) - код проекта из url

*/

/* ['index', 'filter', 'project', 'nextPage'] */

function determineType(str, option) {
  const arr = Object.entries(option);
  let type = '';
      
  for (let i = 0; i < arr.length; i++) {
    if (str.toLowerCase().match(/arr[i][1]/)) {
      type = arr[i][0];
    } else {
      type = 'index';
    }
  }
  
  return type;
}
const types = {
  filter: /filter/,
  project: /project/,
  nextPage: /pagen/
};

console.log(determineType('https://itrack.ru/portfolio/website/miratorg/filter', types));


function getCurrentLocationData() {
  const currentLocation = window.location.href;
  const types = {
    
  };
  const data = {
    
  };
}






export default function getCurrentLocationData() {
  const currentLocation = window.location.href;
}