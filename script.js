fetch("http://cglglobal.dk/semester_2/pods/wordpress/wp-json/wp/v2/bike?_embed")
.then(initial => initial.json())
.then(callback);

function callback(data) {
    //JSON
    console.log(data);
    //loop through
    data.forEach(showPost);
}

function showPost(post){
    //template/cloning
    const template = document.querySelector("template#postTemplate").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = post.title.rendered;
    clone.querySelector(".model").textContent = post.model;
    clone.querySelector(".price").textContent = post.price;
    clone.querySelector(".colours").textContent = post.colours;
    clone.querySelector(".in_stock").textContent = post.in_stock;
//    clone.querySelector(".image").setAttribute("src",`http://cglglobal.dk/semester_2/pods`)
    clone.querySelector("img").setAttribute("src",post.image);
    //appending
    document.querySelector("main").appendChild(clone);
}
