var newCommandForm = document.forms.nouveauSupporterF;

function add(){

    let name = document.forms.nouveauSupporterF.supporterId.value;
    let pourquoi = document.forms.nouveauSupporterF.motivationId.value;
    let email = document.forms.nouveauSupporterF.mailId.value;

    const boxItem = document.createElement('tr');
    const nameTD = document.createElement('td');
    const pourquoiTD = document.createElement('td');
    const emailTD = document.createElement('td');

    nameTD.textContent = name;
    pourquoiTD.textContent = pourquoi;
    emailTD.textContent = email;

    boxItem.append(nameTD, pourquoiTD, emailTD);

    const tableau = document.querySelector('.datatable tbody')
    tableau.appendChild(boxItem);

}