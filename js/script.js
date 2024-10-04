const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}


$(document).ready(function() {
    $('#example').DataTable({
        paging: true, // Enable pagination
        searching:true, // Disable search box
        info: false, // Disable showing "Showing X to Y of Z entries"
        lengthChange: false, // Disable show entries dropdown
        language: {
            
        }

    
    });

    $('#UserList').DataTable({
        paging: true,
        searching: true,

    })


});

// $('#calendar').fullCalendar({
//     initialView: 'dayGridMonth', // Initial view when calendar loads
//     events: [
//         {
//             title: 'Event 1',
//             start: '2024-06-01' // Example start date
//         },
//         {
//             title: 'Event 2',
//             start: '2024-06-15' // Example start date
//         }
//         // Add more events as needed
//     ]
// });
