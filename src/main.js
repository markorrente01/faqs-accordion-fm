const accordions = document.querySelectorAll('.accordion-item');
document.addEventListener('DOMContentLoaded', ()=>{
    accordions.forEach(item=>{
        const header = item.querySelector('.accordion-item-header'),
            content = item.querySelector('.accordion-item-content');
        header.addEventListener('click', ()=>{
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = `${content.scrollHeight}px`;
            
            } else {
                content.style.maxHeight = '0';
            }
            accordions.forEach(others=>{
                if (others !== item && others.classList.contains('active')) {
                    others.querySelector('.accordion-item-content').style.maxHeight = '0';
                    others.classList.remove('active')
                } else {
                    
                }
            })
        })
    })
})