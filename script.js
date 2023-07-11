document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var email = document.getElementById("email").value;
    var report = document.getElementById("report").value;
  
    // Display form data
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Weight:", weight);
    console.log("Email ID:", email);
    console.log("Report:", report);
  
    
  
    // Clear form fields
    document.getElementById("myForm").reset();
  });
  