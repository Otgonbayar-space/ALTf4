const addbtn = document.getElementById("addbtn");

const  addbtnfunc = () => {
    const titleElement = document.getElementById("title");
    const contentElement = document.getElementById("content");
    const ListElement = document.getElementById("posts");
    


    const title = titleElement.value;
    const content = contentElement.value;


    ListElement.innerHTML = `<li><h3>${title}</h3><p>${content}</p></li>`;

};

addbtn.addEventListener("click", addbtnfunc);