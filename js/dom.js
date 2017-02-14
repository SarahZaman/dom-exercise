/* global console */

/* TASK 1

Access HTML element with id tag-line.
Access all headings that belong to div with the class name bg-main-content.
Create the variable collect and assign it with content of tag-line.
Loop through the array of headings and append the content of each heading to variable collect
After the loop, use alert to print collect */

var head = document.getElementById("tag-line");
console.log(head);

var div = document.querySelector(".bg-main-content");
console.log(div);

var headings = div.querySelectorAll("h2");
console.log(headings);

var collect = "A Web Designer’s Site Launch Checklist\n----------------------------------------\n";
for (i = 0; i < headings.length; i += 1) {
    collect += headings[i].innerHTML + "\n";
}

alert(collect);

/* Task 2

Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.
Use property children to "scoop" in array all HTML elements that belong to that div.
Create the variable collect and assign it with content of heading that belongs to gotten array.
Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
After the loop, use alert to print collect */

var maincontent = document.querySelector(".bg-main-content");
console.log(maincontent);

var when_to_launch = maincontent.querySelectorAll(".box");
console.log(when_to_launch);




















