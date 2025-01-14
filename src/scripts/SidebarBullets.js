
   // Change is-active class on sidebar nav bassed on click:
   const sidebarBullets = document.querySelectorAll('a.sidebar-bullet');
    
   const resetCurrentActiveIndicator = () => {
   const activeIndicator = document.querySelector(".is-active");
     activeIndicator.classList.remove("is-active");
   };
   
   sidebarBullets.forEach((indicator) => {
     indicator.addEventListener('click', function () {
       resetCurrentActiveIndicator();
       this.classList.add('is-active');
     });
   });



// Change is-active class on sidebar nav bassed on view of sections:
const sections = document.querySelectorAll("section");

const onSectionLeavesViewport = (section) => {
 const observer = new IntersectionObserver(
   (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         resetCurrentActiveIndicator();
         const element = entry.target;
         const indicator = document.querySelector(`a[href='#${element.id}']`);
         indicator.classList.add("is-active");
         return;
       }
     });
   },
   {
     root: null,
     rootMargin: "0px",
     threshold: 0.75
   }
 );
 observer.observe(section);
};

sections.forEach(onSectionLeavesViewport);