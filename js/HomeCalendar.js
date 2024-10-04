const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const daysElement = document.querySelector('.dates');
const monthYearElement = document.querySelector('.month-year');

let date = new Date();
let selectedDate = new Date();

function renderCalendar() {
    daysElement.innerHTML = '';
    monthYearElement.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysElement.appendChild(emptyDiv);
    }

    for (let i = 1; i <= lastDate; i++) {
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.textContent = i;
        dateDiv.onclick = () => selectDate(dateDiv, i);
        if (
            selectedDate.getDate() === i && 
            selectedDate.getMonth() === date.getMonth() && 
            selectedDate.getFullYear() === date.getFullYear()
        ) {
            dateDiv.classList.add('selected');
        }
        daysElement.appendChild(dateDiv);
    }
}

function selectDate(element, day) {
    if (selectedDate) {
        const prevSelected = document.querySelector('.date.selected');
        if (prevSelected) {
            prevSelected.classList.remove('selected');
        }
    }
    element.classList.add('selected');
    selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
}

function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}

renderCalendar();
