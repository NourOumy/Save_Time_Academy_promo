// variables
let wrapper_elearning = document.querySelector(".wrapper_elearning");
let wrapper_module = document.querySelector(".wrapper_module");
let link_modules = document.querySelectorAll('#module');
let header_elearning = document.querySelector('.header_elearning')

// events 
link_modules.forEach(link_module => {
    link_module.addEventListener('click', function() {
        wrapper_elearning.classList.add('hidden');
        wrapper_module.classList.add('appear');
        // header_elearning.classList.add('module');
    });
});


