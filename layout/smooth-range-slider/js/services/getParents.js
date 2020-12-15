export default function getParents(elem, parentSelector) {
  if (!parentSelector) {
    parentSelector = document;
  }
  
  const parents = [];
  const p = elem.parentNode;
  
  while(p !== parentSelector) {
    const o = p;
    parents.push(o);
    p = o.parentNode;
  }
  
  parents.push(parentSelector);
  return parents;
}