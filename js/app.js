let navbarLink = document.querySelector("#navbar__list");
let section = document.querySelectorAll("section");
let secLength = section.length;

createNewSec();
createNavbar();

function createNewSec() {

    const sec = document.createElement("section");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    const hdTxt = document.createTextNode("Section 4");
    const txt = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
    const txt2 = document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");

    h2.appendChild(hdTxt);
    p.appendChild(txt);
    p2.appendChild(txt2);
    div.classList.add("landing__container");
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p2);
    sec.appendChild(div);
    document.getElementsByTagName("main")[0].appendChild(sec);
    sec.setAttribute("id", "section4");
    sec.setAttribute("data-nav", "Section 4");

    section = document.querySelectorAll("section");
    secLength = section.length;
}

function createNavbar() {

    section.forEach((elem, i) => {

        let infoAtr = elem.getAttribute("data-nav");
        let list = document.createElement("li");
        list.innerHTML = `<a class = "navbar__menu menu__link" href="#section${i+1}" id="secNav${i+1}">${infoAtr}</a>`;
        navbarLink.appendChild(list);
    });
}

document.addEventListener("scroll", () => {

    let posArr = [];
    for (let i = 0; i < secLength; i++) {
        let navSec = document.getElementsByTagName("h2")[i];
        let pos = navSec.getBoundingClientRect().top;
        posArr.push(pos);
    }

    let firstPos = posArr.findIndex(ele => ele > 0);
    firstPos += 1;
    for (let i = 1; i < secLength + 1; i++) {

        if (i === firstPos) {
            document.getElementById(`secNav${i}`).classList.add("highlighted");
        } else {
            document.getElementById(`secNav${i}`).classList.remove("highlighted");
        }
    }
});












