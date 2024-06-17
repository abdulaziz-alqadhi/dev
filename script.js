document.getElementById("userForm")
.addEventListener("submit",function(event) {
    event.preventDefault();
    var formData = {
        name:
        document.getElementById("name").value,
        email:
        document.getElementById("email").value,
        age:
        document.getElementById("age").value
    };
    var xhr = new XMLHttpRequest;
    xhr.open('Post', '/submit', true); 
    xhr.setRequestHeader('Content-Type', 
        'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 &&
             xhr.status === 200) {
                alert('Data submitted successfully');
            }
        };
    xhr.send(JSON.stringify(formData));
});