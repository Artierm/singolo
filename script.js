const clickMenuHover = () => {
    document.querySelector('.menu-bar').addEventListener("click", (event) => {
        if (event.target.classList.contains('button')) {
            document.querySelectorAll('.button').forEach(elem => {
                elem.classList.remove("hoverMenuselected");
            })
            event.target.classList.add("hoverMenuselected");
        }
    })
}

const clickPhoneMenuHover = () => {
    document.querySelector('.menu-bar_phone').addEventListener("click", (event) => {
        if (event.target.classList.contains('button_phone')) {
            document.querySelectorAll('.button_phone').forEach(elem => {
                elem.classList.remove("hoverMenuselected");
            

            })
        }
            event.target.classList.add("hoverMenuselected");
    
           document.querySelector('.phone_menu').classList.remove('displayFlex');
           document.querySelector('.phone_menu').classList.add('displayNone');
           document.querySelector('.singolo').classList.remove('singolo_left');
           document.querySelector('.phone_menu_button').classList.remove('phone_menu_rotate');
           
        
    })
}


const scrollMenuHover = () => {
    window.addEventListener("scroll", () => {
        let Scrolling = window.scrollY;
        if (Scrolling <= 600) {
            document.querySelector('.button').classList.remove('hoverMenuselected');
            document.querySelector('.menu-bar').children[0].children[0].classList.add('hoverMenuselected');
        }
        else document.querySelector('.menu-bar').children[0].children[0].classList.remove('hoverMenuselected');


        if (Scrolling >= 600 && Scrolling <= 1100) {
            document.querySelector('.button').classList.remove('hoverMenuselected');
            document.querySelector('.menu-bar').children[1].children[0].classList.add('hoverMenuselected');
        }
        else document.querySelector('.menu-bar').children[1].children[0].classList.remove('hoverMenuselected');

        if (Scrolling >= 1100 && Scrolling <= 1970) {
            document.querySelector('.button').classList.remove('hoverMenuselected');
            document.querySelector('.menu-bar').children[2].children[0].classList.add('hoverMenuselected');
        }
        else document.querySelector('.menu-bar').children[2].children[0].classList.remove('hoverMenuselected');

        if (Scrolling >= 1970 && Scrolling <= 2700) {
            document.querySelector('.button').classList.remove('hoverMenuselected');
            document.querySelector('.menu-bar').children[3].children[0].classList.add('hoverMenuselected');
        }
        else document.querySelector('.menu-bar').children[3].children[0].classList.remove('hoverMenuselected');

        if (Scrolling >= 2700) {
            document.querySelector('.button').classList.remove('hoverMenuselected');
            document.querySelector('.menu-bar').children[4].children[0].classList.add('hoverMenuselected');
        }
        else document.querySelector('.menu-bar').children[4].children[0].classList.remove('hoverMenuselected');
    })

}


const clickArtHover = () => {
    document.querySelector('.nav-bar').addEventListener("click", (event) => {
        if (event.target.classList.contains('buttonArt') && !event.target.classList.contains('clickArtborderSelected')) {
            document.querySelectorAll('.buttonArt').forEach(elem => {
                elem.classList.remove("clickArtborderSelected");
            });
            event.target.classList.add("clickArtborderSelected");
            let scrollpicture = document.querySelector("#artGrid > img:nth-child(1)");
            let pictureclone = scrollpicture.cloneNode();
            document.querySelector("#artGrid").appendChild(pictureclone);
            scrollpicture.remove();
        }
    })
}


const clickPicture = () => {
    document.querySelector('.artGrid').addEventListener("click", (event) => {
        if (event.target.classList.contains('picture')) {
            if (!event.target.classList.contains('onPicture')) {
                document.querySelectorAll('img').forEach(elem => elem.classList.remove('onPicture'));
                event.target.classList.add('onPicture');
            }
            else {
                document.querySelectorAll('img').forEach(elem => elem.classList.remove('onPicture'));
            }
        }
    })

}

const keyOut = () => {
    document.querySelectorAll('.chev').forEach((key => {
        key.addEventListener('mouseout', (event) => {
            event.target.closest('.key').classList.remove('keyOver');
        })
    }))
}

const keyHover = () => {
    document.querySelectorAll('.chev').forEach((key => {
        key.addEventListener('mouseover', (event) => {
            event.target.closest('.key').classList.add('keyOver');
        })
    }))
}


const Slider = () => {
    document.querySelectorAll('.chev').forEach(key => {
        key.addEventListener('click', () => {
            if (event.target.closest('.slider').classList.contains('backgroundImageFirst')) {
                event.target.closest('.wrapper').children[2].classList.add('displayNone');
                event.target.closest('.slider').classList.add('backgroundImageSecond');
                event.target.closest('.slider').classList.remove('backgroundImageFirst');
                event.target.closest('.slider').children[0].classList.add('borderBottomsecond');
                event.target.closest('.slider').children[0].classList.remove('borderBottomfirst');
            }
            else {
                event.target.closest('.wrapper').children[2].classList.remove('displayNone');
                event.target.closest('.slider').classList.remove('backgroundImageSecond');
                event.target.closest('.slider').classList.add('backgroundImageFirst');
                event.target.closest('.slider').children[0].classList.remove('borderBottomsecond');
                event.target.closest('.slider').children[0].classList.add('borderBottomfirst');
                document.querySelector('.slider').classList.add('phoneMove');
            }
        })
    })
}

const ScreenWork = () => {
    document.querySelectorAll(".phnbtn").forEach(phone => phone.addEventListener('click', (event) => {

        if (event.target.nextElementSibling.children[0].children[0].classList.contains('displayNone')) {
            event.target.nextElementSibling.children[0].children[0].classList.remove('displayNone');
        }
        else {
            event.target.nextElementSibling.children[0].children[0].classList.add('displayNone');
        }
    })
    )
}

const FirstClick = () => {
    document.querySelector('.button').click();
    document.querySelector('.buttonArt').classList.add('clickArtborderSelected');

}

const ScreenClickVer = () => {
    document.querySelectorAll('#screenV').forEach(elem => elem.addEventListener("mouseover", (event) => {
        if (!event.target.classList.contains('displayOnHorizontal')) {
            event.target.classList.add('displayOnHorizontal');
        }
        else {
            event.target.classList.remove('displayOnHorizontal');
        }
    }))
}


const ScreenClickHor = () => {
    document.querySelectorAll('#screenH').forEach(elem => elem.addEventListener("mouseover", (event) => {
        if (!event.target.classList.contains('displayOnVertical')) {
            event.target.classList.add('displayOnVertical');
        }
        else {
            event.target.classList.remove('displayOnVertical');
        }
    }))
}

const SubmitForm = () => {
    document.querySelector('.submit').addEventListener("click", (event) => {
        if (document.querySelector('.form_space').checkValidity()) {
            event.preventDefault();
            let form = document.forms.my;
            let elemSubject = form.elements.formSubject;
            if (elemSubject.value != "") {
                document.querySelector('.textSubject').innerText = `Тема:${elemSubject.value}`;
            }
            let elemTextArea = form.elements.textarea;
            if (elemTextArea.value != "") {
                document.querySelector('.textDescribe').innerText = `Описание:${elemTextArea.value}`;
            }
            document.querySelector('#modal').style.display = "block";
            document.querySelector('#modal-content').style.display = "block";
        }
    })
}


const clickModalBtn = () => {
    document.querySelector('#formOk').addEventListener("click", () => {
        event.preventDefault();
        document.querySelector('.form_space').reset();
        document.querySelector('#modal').style.display = "none";
        document.querySelector('#modal-content').style.display = "none";
    })
}

const clickMobile = () => {

    document.querySelector(".btn").addEventListener("click", (event) => {
        event.preventDefault();
        if (document.querySelector('.phone_menu').classList.contains('displayNone')) {
            document.querySelector('.phone_menu_button').classList.add('phone_menu_rotate')
            document.querySelector('.phone_menu').classList.add('displayFlex');
            document.querySelector('.phone_menu').classList.remove('displayNone');
            document.querySelector('.singolo').classList.add('singolo_left');
            
        }
        else {
            document.querySelector('.phone_menu').classList.remove('displayFlex');
            document.querySelector('.phone_menu_button').classList.remove('phone_menu_rotate')
            document.querySelector('.singolo').classList.remove('singolo_left');
            document.querySelector('.phone_menu').classList.add('displayNone');
           
        }   
})
}



const SingoloDom = () => {
    clickMenuHover();
    clickArtHover();
    clickPicture();
    keyHover();
    keyOut();
    Slider();
    ScreenWork();
    ScreenClickVer();
    ScreenClickHor();
    FirstClick();
    SubmitForm();
    clickModalBtn();
    //scrollMenuHover();
    clickMobile();
    clickPhoneMenuHover();
    //blurPhone();
}

SingoloDom();





const Hrefs = document.querySelectorAll('a[href*="#"]');
for (let Href of Hrefs) {

    Href.addEventListener("click", (event) => {
        event.preventDefault();
        const hrefId = Href.getAttribute('href');
        document.querySelector('' + hrefId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
                    
        })
}


window.addEventListener("scroll", onScroll)
function onScroll (event){ 
    let curPos =  window.scrollY;
   
    let style = parseInt(window.getComputedStyle(document.querySelector('header')).height);


    document.querySelectorAll('.id').forEach((el)=>{
    if(el.offsetTop <= curPos + style && (el.offsetTop + el.offsetHeight) > curPos)
    {
        document.querySelectorAll('.menu-bar a').forEach(a=>{
            a.classList.remove('hoverMenuselected') 
            console.log(el.getAttribute('id'))
            if(el.getAttribute('id') === a.getAttribute('href').substring(1))
            a.classList.add('hoverMenuselected')
        
        }
        )

        
        document.querySelectorAll('.menu-bar_phone a').forEach(a=>{
            a.classList.remove('hoverMenuselected') 
            console.log(el.getAttribute('id'))
            if(el.getAttribute('id') === a.getAttribute('href').substring(1))
            a.classList.add('hoverMenuselected')
        
        }
        )

}
    })  
}









