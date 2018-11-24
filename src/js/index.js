
function demo(){
    var name,batch,email,dob,phone,city,address,gender;
name = "username";
batch = "userbatch";
email = "useremail";
dob = "userdob";
phone = "usernum";
city = "karachi";
address = "useradress";
gender = "male";

var doc = new jsPDF();

//Heading
doc.setFontSize(36);
doc.text("User Details",50,25);

//Sub-Headings
doc.setFontSize(14);
doc.text("Username : ",10,50);
doc.text("Batch : ",10,60);
doc.text("Email : ",10,70);
doc.text("Phone : ",10,80);
doc.text("Gender : ",10,90);
doc.text("City : ",10,100);
doc.text("Address : ",10,110);

//User-Inputted Data
doc.text(name,80,50);
doc.text(batch,80,60);
doc.text(email,80,70);
doc.text(phone,80,80);
doc.text(gender,80,90);
doc.text(city,80,100);
doc.text(address,80,110);

doc.save('test.pdf');

}

demo();
/*

let generatePdf = () => {

    event.preventDefault();

    var doc = new jsPDF();
    let name,batch,email,dob,phone,city,address,gender;
    name = getValue("user-name");
    batch = getValue("batch-name");
    email = getValue("user-email");
    phone = getValue("user-phone");
    city = getValue("user-city");
    address = getValue("user-address");
    dob = getValue("dob");
    gender = "male";

    //Heading
    doc.setFontSize(48);
    doc.text("User Details",50,25);

    //Sub-Headings
    doc.setFontSize(18);
    doc.text("Username : ",10,50);
    doc.text("Batch : ",10,60);
    doc.text("Email : ",10,70);
    doc.text("Phone : ",10,80);
    doc.text("Gender : ",10,90);
    doc.text("City : ",10,100);
    doc.text("Address : ",10,110);

    //User-Inputted Data
    doc.text(name,80,50);
    doc.text(batch,80,60);
    doc.text(email,80,70);
    doc.text(phone,80,80);
    doc.text(gender,80,90);
    doc.text(city,80,100);
    doc.text(address,80,110);

    doc.save('user-data.pdf');

}

document.getElementsByTagName("form")[0].addEventListener('click',generatePdf);

let getValue = (id) => {
    return document.getElementById(id).value;
}
*/
$(document).ready(function(){
    $('.datepicker').datepicker();
    $('#textarea1');
    $('select').formSelect();
});