function save() {
    // getting the elements
    var activityNameElem = document.getElementById('activity');
    var priorityElem = document.getElementById('priority');
    var dateElem = document.getElementById('date');
    var listElem = document.getElementById('list');

    // extracting the values from the elemnts
    let activity = activityNameElem.value;
    let priority = priorityElem.value;
    let date = dateElem.value;

    var itemString = date + ': ' + activity + ' (' + priority + ')';
    //var itemString2 = `${date}: ${activity} (${priority})`;

    newItemElem = document.createElement('li');
    newItemElem.textContent = itemString;


    listElem.appendChild(newItemElem);
}