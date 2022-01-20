
let addNote = () => {
    var inpTitle=document.getElementById('inpTitle');
    var inpDescription=document.getElementById('inpDescription');
    // if(inpTitle.value.length>=1){
    const noteBox=document.getElementById('noteBox');

//  creating note container
    const noteContainer=document.createElement('div');
    noteBox.appendChild(noteContainer)

    // creating note section
    const section=document.createElement('section');
    noteContainer.appendChild(section)

    // creating title
    const title=document.createElement('h4');
    let titleText=document.createTextNode(inpTitle.value)
    title.appendChild(titleText)
    section.appendChild(title)

    inpTitle.value="";

    // creating note description
    const description=document.createElement('p');
    let descriptionText=document.createTextNode(inpDescription.value)
    description.appendChild(descriptionText)
    section.appendChild( description)

    inpDescription.value="";



    // creating box for buttons
    const btnSection=document.createElement('section');
    noteContainer.appendChild(btnSection)

    // creating Del btn
    var delBtn=document.createElement('button');
    delBtn.setAttribute('onclick','delList(this)');
    delBtn.setAttribute('class','liBtn fas fa-trash-alt')

    btnSection.appendChild(delBtn)


    // creating Edit btn
    var editBtn=document.createElement('button');
    editBtn.setAttribute('onclick','editList(this)');
    editBtn.setAttribute('class','liBtn fas fa-edit')

    btnSection.appendChild(editBtn)
    console.log(noteBox)



}

let delAll = () =>{
    let noteBox=document.getElementById('noteBox');
    noteBox.innerHTML="";
}

let delList = e =>{

    e.parentNode.parentNode.remove();
}

let editList = e =>{
    let editTitle=prompt('title...');
    let editDescription=prompt('Description...');
    e.parentNode.previousSibling.firstChild.innerHTML=editTitle;
    e.parentNode.previousSibling.firstChild.nextSibling.innerHTML=editDescription;
    }