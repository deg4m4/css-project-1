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