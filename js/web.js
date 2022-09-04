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
        console.log(element);
        const creLi = document.createElement('li');
        creLi.classList.add('nav-item');
        creLi.innerHTML = `
        <a class="nav-link" href="#">${element.category_name}</a>
        `
        ulSel.append(creLi);
    });

}
dataLoad();