// get buttons from html
var addItemButton = document.querySelector('button.addNewStudent');
var sortAscButton = document.querySelector('button.sortAscButton');
var sortDescButton = document.querySelector('button.sortDescButton');

// get input to add new student
var addNewStudentInput = document.querySelector('.addNewStudentInput');

// get hide row and student list
var row = document.querySelector('.d-none');
var list = document.querySelector('tbody.student-list');

// add event listener to buttons
addItemButton.addEventListener('click', addNewStudentFunction);
sortAscButton.addEventListener('click', sortAscFunction);
sortDescButton.addEventListener('click', sortDescFunction);

// var elements table
var table, rows, switching, i, x, y, shouldSwitch;
table = document.getElementById("myTable");

function sortAscFunction() {
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
                shouldSwitch = true;
            break;
            }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function sortDescFunction(){
    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
                shouldSwitch = true;
            break;
            }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function addNewStudentFunction(e){
    if( addNewStudentInput.value.length == 0) {
        addNewStudentInput.classList.add("is-invalid");
    } else {
        
        var tr = document.createElement('tr');
        tr.innerHTML =  
        "<td>" + addNewStudentInput.value + "</td>" +
        "<td>" + "</td>" +
        "<td>" + "</td>" +
        "<td>" + 
        "<button class='btn btn-primary btn-danger btn-buyed' onclick='deleteStudent(event)'>X</button>" + 
        "</td>";
        row.classList.add('d-block');
        var appendedItem = list.appendChild(tr);
        
        addNewStudentInput.classList.remove("is-invalid");
        addNewStudentInput.value = '';
        
    }
    e.preventDefault();
}

function deleteStudent(){
  console.log(event.target.parentElement.parentElement);
  var studentToBeRemoved = event.target.parentElement.parentElement;
  list.removeChild(studentToBeRemoved);
}