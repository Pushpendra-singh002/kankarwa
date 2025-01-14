// State-like behavior for selected options and images
let selectedOption = 'grandView';
let selectedImage = './image/grandView1.jpg';

// Function to switch options (Room Selection / Grand View)
function selectOption(option) {
  selectedOption = option;

  if (selectedOption === 'grandView') {
    document.getElementById('grandViewOptions').style.display = 'block';
    document.getElementById('roomOptions').style.display = 'none';
  } else {
    document.getElementById('grandViewOptions').style.display = 'none';
    document.getElementById('roomOptions').style.display = 'block';
  }
}

// Function to change the displayed image
function changeImage(imagePath) {
  selectedImage = imagePath;
  document.getElementById('roomImage').src = selectedImage;
}

// Call this function on page load to set the initial state
selectOption('grandView');



document.getElementById('reservation-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Reservation submitted!');
});
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}


    document.getElementById("reservation-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Collect form data
        var formData = {
            user_name: document.getElementById("user_name").value,
            address: document.getElementById("address").value,
            country: document.getElementById("country").value,
            user_email: document.getElementById("user_email").value,
            mobile: document.getElementById("mobile").value,
            messages: document.getElementById("messages").value,
            checkInDate: document.getElementById("checkInDate").value,
            checkOutDate: document.getElementById("checkOutDate").value,
            adults: document.getElementById("adults").value,
            children: document.getElementById("children").value,
            deluxeSuite: document.getElementById("deluxeSuite").value,
            deluxeRooms: document.getElementById("deluxeRooms").value,
            partialLakeRooms: document.getElementById("partialLakeRooms").value
        };

        // Send email using EmailJS
        emailjs.send("service_33imtoq", "template_nnezsux", formData)
        .then(function(response) {
            alert("Reservation request sent successfully!");
            document.getElementById("reservation-form").reset(); // Reset form
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS Error:", error);
        });
    });


