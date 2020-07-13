export const expandSection = (element, mark?: boolean) => {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // mark the section as "currently not collapsed"
  if (mark) {
    element.setAttribute('data-collapsed', 'false');
  }
};

export const collapseSection = (element, mark?: boolean) => {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // temporarily disable all css transitions
  const elementTransition = element.style.transition;
  element.style.transition = '';

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function () {
      element.style.height = 0 + 'px';
    });
  });

  // mark the section as "currently collapsed"
  if (mark) {
    element.setAttribute('data-collapsed', 'true');
  }
};

// document.querySelector('#toggle-button').addEventListener('click', function (e) {
//   var section = document.querySelector('.collapsible');
//   var isCollapsed = section.getAttribute('data-collapsed') === 'true';

//   if (isCollapsed) {
//     expandSection(section);
//     section.setAttribute('data-collapsed', 'false');
//   } else {
//     collapseSection(section);
//   }
// });

export default { collapseSection, expandSection };
