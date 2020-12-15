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
function matchByOption(str, optionObj) {
  return Object.entries(optionObj).filter(option => str.toLocaleLowerCase().match(option[1]))
}

function getCurrentLocationData() {
  // const currentLocation = window.location.href;
  const currentLocation = 'https://itrack.ru/portfolio/vnedrenie-crm/';
  const types = {
    filter: /filter/,
    project: /project/,
    nextPage: /pagen/
  };
  const directs = {
    website: /website/,
    crm: /crm/
  };
  const sliceOption = {
    from: 'filter/',
    to: '/apply'
  };
  const from = currentLocation.indexOf(sliceOption.from) + sliceOption.from.length,
        to = currentLocation.indexOf(sliceOption.to);


  const matchedType = matchByOption(currentLocation, types),
        matchedDirect = matchByOption(currentLocation, directs);
  let filterParam = '';

  const type = matchedType.length ? matchedType[0][0] : 'index',
        direct = matchedDirect[0][0];

  if (from !== -1 && to !== -1) {
    filterParam = currentLocation.slice(from, to)
  }

  return [type, direct, filterParam];
}

console.log(getCurrentLocationData());