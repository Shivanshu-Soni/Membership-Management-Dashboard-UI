// Initialize FullCalendar for the main event calendar


// // Initialize FullCalendar for the additional calendar
// document.addEventListener('DOMContentLoaded', function() {
//     var additionalCalendarEl = document.getElementById('additional-calendar');
//     var additionalCalendar = new FullCalendar.Calendar(additionalCalendarEl, {
//         initialView: 'dayGridMonth',
//         events: [
//             { title: 'Workshop', start: '2023-08-05' },
//             { title: 'Webinar', start: '2023-08-12' },
//             { title: 'Seminar', start: '2023-08-19' }
//         ]
//     });
//     additionalCalendar.render();
// });

// // Initialize Chart.js for various charts
// var ctxAttendance = document.getElementById('attendance-chart').getContext('2d');
// var attendanceChart = new Chart(ctxAttendance, {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'Monthly Attendance',
//             data: [10, 20, 30, 40, 50, 60, 70],
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//         }]
//     }
// });

var ctxPayment = document.getElementById('payment-chart').getContext('2d');
var paymentChart = new Chart(ctxPayment, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Payment Statistics',
            data: [100, 200, 300, 400],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});

// var ctxGrowth = document.getElementById('growth-chart').getContext('2d');
// var growthChart = new Chart(ctxGrowth, {
//     type: 'pie',
//     data: {
//         labels: ['New Members', 'Returning Members', 'Expired Members'],
//         datasets: [{
//             label: 'Membership Growth',
//             data: [30, 50, 20],
//             backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
//             borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
//             borderWidth: 1
//         }]
//     }
// });

// var ctxAdditionalGraph = document.getElementById('additional-graph').getContext('2d');
// var additionalGraph = new Chart(ctxAdditionalGraph, {
//     type: 'doughnut',
//     data: {
//         labels: ['Category 1', 'Category 2', 'Category 3'],
//         datasets: [{
//             label: 'Additional Graph',
//             data: [40, 30, 30],
//             backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)'],
//             borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
//             borderWidth: 1
//         }]
//     }
// });
