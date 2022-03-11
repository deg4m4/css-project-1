var gmx = document.getElementsByClassName("gmx")

for (const b of gmx) {

    b.style.height = b.getBoundingClientRect().width + "px";

    b.addEventListener("mousemove", (e) => {

        var x = e.clientX - b.getBoundingClientRect().x;
        var y = e.clientY - b.getBoundingClientRect().y;

        b.children[0].style.opacity = 1;

        b.children[0].style.top = y + "px";
        b.children[0].style.left = x + "px";

    })

    b.addEventListener("mouseout", () => {
        b.children[0].style.opacity = 0;
    })

}

document.body.onscroll = (e) => {
    console.log(123);
    if (document.documentElement.scrollTop > 200) {
        document.body.classList.add("a-body")
    } else {
        document.body.classList.remove("a-body")
    }
}

document.getElementsByClassName("bx-menu")[0].onclick = () => {
    document.getElementsByClassName("menu-con")[0].classList.toggle("show")
}
