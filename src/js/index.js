
const getValue = (id) => {
    return document.getElementById(id).value;
}

let setFormValuesToNull = () => {

    elems = document.getElementsByTagName("input");
    for(let j=0 ; j<elems.length ; j++){
        elems[j].value = null;
    }
    document.getElementsByTagName("textarea")[0].value = null;

}


let generatePdf = () => {

    event.preventDefault();

    let userData = {
        name : getValue("user-name"),
        batch : getValue("batch-name"),
        email : getValue("user-email"),
        dob : getValue("dob"),
        phone : getValue("user-phone"),
        location : getValue("user-city"),
        address : getValue("user-address"),
        gender : document.getElementsByTagName("select")[0].selectedOptions[0].value
    }

    
    let xOriginForHeadings = 10, xOriginForData = 80 , i , yOrigin = 50;

    var doc = new jsPDF();
    
    //Heading
    doc.setFontSize(36);
    doc.text("User Details",50,25);

    //Sub-Headings or Data
    doc.setFontSize(14);
    
    for(i=0 ; i<Object.entries(userData).length ; i++){

        doc.text(`${Object.entries(userData)[i][0].toUpperCase()} : `,xOriginForHeadings,yOrigin);
        doc.text(`${Object.entries(userData)[i][1].toUpperCase()}`,xOriginForData,yOrigin);

        yOrigin+=10;

    }
    
    try{
        doc.save('user-data.pdf');
        alert('Hurray! Your pdf is being downloaded....');
        setFormValuesToNull();        
    }
    catch(e){
        alert('Error occured! while saving pdf '+e.message);
    }

    
}


$(document).ready(function(){
    $('.datepicker').datepicker();
    $('#textarea1');
    $('select').formSelect();
});

document.getElementsByTagName("form")[0].addEventListener('submit',generatePdf);
