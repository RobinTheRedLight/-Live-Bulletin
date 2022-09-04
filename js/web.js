const dataLoad = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
}
const displayData = (objData) => {
    // console.log(objData.news_category);

    objData.news_category.forEach(element => {
        const ulSel = document.getElementById('ul-li');
        const creLi = document.createElement('li');
        creLi.classList.add('nav-item');
        creLi.innerHTML = `
        <a onclick="valId('${element.category_id}','${element.category_name}')" class="nav-link" href="#">${element.category_name}</a>
        `
        ulSel.appendChild(creLi);
    });

}
const valId = (idName, catName) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${idName}`)
        .then(res => res.json())
        .then(data => resultof(data.data, catName))

}
const resultof = (data, catName) => {
    const arrLen = data.length;
    const resSel = document.getElementById('result');
    resSel.innerText = `${arrLen} items found for category ${catName}`
    const inerBdy = document.getElementById('innerBody');
    inerBdy.innerHTML = ``;
    data.forEach(element => {
        console.log(element);
        const creDiv = document.createElement('div');
        creDiv.innerHTML = `<div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${element.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>`
        inerBdy.appendChild(creDiv);
    });
}
dataLoad();
