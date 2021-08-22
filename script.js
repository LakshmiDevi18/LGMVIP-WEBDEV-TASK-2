let box = document.getElementById('box');

let api = async()=>{
    let re = await fetch("https://reqres.in/api/users?page=1");
    let file = await re.json();
    let info = file.data.map((element)=>{
        return `<li>
                    <div class="img"><img src="${element.avatar}" alt=""></div>  
                    <h2>${element.first_name} ${element.last_name}</h2>
                                    
                </li>`
    }).join('');
    box.innerHTML = info;
}

let navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click',()=>{
    box.innerHTML = `<h2 class='load'>Loading......</h2>`;
    setTimeout(() => {
        api()
    }, 5000);
})