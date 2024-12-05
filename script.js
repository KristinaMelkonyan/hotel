const backToTopButton = document.getElementById('backToTop');
const roomsContainer = document.querySelector('.rooms-container');
const bookingButtons = document.querySelectorAll('.btn-booking');


// Function to create and add a room card to the page
function createRoomCard(roomData) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'card');
    card.innerHTML = `
        <img src="${roomData.image}" class="card-img-top" alt="${roomData.title}">
        <div class="card-body">
            <h2 class="card-title">${roomData.title}</h2>
            <p class="card-text">${roomData.description}</p>
            <p class="card-text">Цена: ${roomData.price} руб/сутки</p>
            <button class="btn btn-primary btn-booking" data-bs-toggle="modal" data-bs-target="#bookingModal">Забронировать</button>
        </div>
    `;
    roomsContainer.appendChild(card);
}


// Sample room data (replace with your actual data)
const roomData = [
    { title: "Двухместный номер", description: "Просторный двухместный номер...", price: 2500, image: "https://i.pinimg.com/736x/56/f3/dc/56f3dc8d0ac3b991fa64787901ed759f.jpg" },
    { title: "Одноместный номер", description: "Уютный и комфортный одноместный номер...", price: 2000, image: "https://i.pinimg.com/564x/f0/ea/8a/f0ea8a5d6010a3b95cd210dfa453c74a.jpg" },
    // Add more room data here...
];


// Add room cards to the page
roomData.forEach(createRoomCard);


// Show/hide the back-to-top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Back-to-top button functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Room booking functionality
bookingButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        const roomType = card.querySelector('.card-title').textContent;
        document.getElementById('roomType').value = roomType;
    });
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const roomType = document.getElementById('roomType').value;
    const messageDiv = document.getElementById('bookingMessage');
    const message = `${name}, ваш номер ${roomType} успешно забронирован!`;
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    // Add your actual form submission logic here (e.g., AJAX request)
});

