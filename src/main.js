document.addEventListener('DOMContentLoaded', ()=>{
    const accordionItemHeader = document.querySelectorAll('.accordion-item-header');
    const accordions = document.querySelectorAll('.accordion-item')
    function toggleAccordion(item) {
        item.classList.toggle('active')
        const content = item.querySelector('.accordion-item-content');
        const header = item.querySelector('.accordion-item-header');
        // condition to handle toggling of active class and content reveal
        if (item.classList.contains('active')) {
            content.style.maxHeight = `${content.scrollHeight}px`;
            header.setAttribute('aria-expanded', 'true');
        } else {
            content.style.maxHeight = '0';
            header.setAttribute('aria-expanded', 'false');        
        }
        // close every other open accordion when another is clicked to open
        accordions.forEach(otherItem=>{
            if(otherItem !== item && otherItem.classList.contains('active')){
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-item-content').style.maxHeight = '0';
                otherItem.querySelector('.accordion-item-header').setAttribute('aria-expanded', 'false');
            }
        })
    }
    // add the event listeners via loop
    accordions.forEach((item, index)=>{
        // create unique names using the index for the attr values for 'aria-controls'
        const contentId = `content-${index}`;
        const header = item.querySelector('.accordion-item-header');
            header.setAttribute('aria-controls', contentId);
            header.addEventListener('click', ()=>{
                toggleAccordion(item)
            })
            header.addEventListener('keydown', (e)=>{
                switch (e.key) {
                    case 'Enter':
                    case ' ': // on keydown spaceBar
                        // prevent default scroll down when spaceBar key is pressed
                        e.preventDefault();
                        toggleAccordion(item)
                        break;

                    case 'ArrowDown':
                        e.preventDefault();
                        if (index < accordionItemHeader.length - 1) {
                            accordionItemHeader[index + 1].focus()
                        } else {
                            accordionItemHeader[0].focus()
                        }
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        if (index > 0) {
                            // if index is greater than 0 then navigate one step backward
                            accordionItemHeader[index - 1].focus();
                        } else {
                            // navigate to the beginning
                            accordionItemHeader[accordionItemHeader.length-1].focus();
                        }
                    break;
                }
            })
    })
})