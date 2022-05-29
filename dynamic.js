var newCommandForm = document.forms.nouveauSupporterF;

function add(){
    let supporter = document.forms.nouveauSupporterF.supporterId.value;
    let motivation = document.forms.nouveauSupporterF.motivationId.value;

    const boxItem = document.createElement('tr');
    const supporterTD = document.createElement('td');
    const motivationTD = document.createElement('td');

    supporterTD.textContent = supporter;
    motivationTD.textContent = motivation;

    /*if (!document.nouveauSupporterF.catégorie.checkValidity() || !document.nouveauSupporterF.start.checkValidity() || !document.nouveauSupporterF.task.checkValidity()){
        return console.log("error");
    }*/

    boxItem.append(supporterTD,motivationTD);

    const tableau = document.querySelector('.datatable tbody')
    tableau.appendChild(boxItem);
}