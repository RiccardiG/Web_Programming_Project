var newCommandForm = document.forms.nouveauSupporterF;

function add(){
    
    let name = document.selectElementById("supporterID");
    console.log(name);
    let pourquoi = document.forms.nouveauSupporterF.motivationID;
    let mail = document.forms.nouveauSupporterF.mailID;

    const boxItem = document.createElement('tr');
    const nameTD = document.createElement('td');
    const pourquoiTD = document.createElement('td');
    const mailTD = document.createElement('td');

    nameTD.textContent = name;
    pourquoiTD.textContent = pourquoi;
    mailTD.textContent = mail;

    console.log(name);

    boxItem.append(nameTD, pourquoiTD, mailTD);

    const tableau = document.querySelector('.datatable tbody')
    tableau.appendChild(boxItem);

}