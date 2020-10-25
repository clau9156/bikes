fetch("http://cglglobal.dk/semester_2/pods/wordpress/wp-json/wp/v2/posts")
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
    clone.querySelector(".brand").textContent = post.brand;
    clone.querySelector(".model").textContent = post.model;
    clone.querySelector(".price").textContent = post.price;
    clone.querySelector(".colours").textContent = post.colours;
    clone.querySelector(".in_stock").textContent = post.in_stock;
//    clone.querySelector(".content").innerHTML = post.content.rendered;
    //appending
    document.querySelector("main").appendChild(clone);
}
