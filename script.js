const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


let arr = [first, second, third, fourth, fifth, sixth]

for (let i = 0; i < arr.length; i++) {
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    img.src = 'img-mobile/img-placeholder2.png'
    img.alt = 'Image placeholder'
    figure.appendChild(img)
    let div = document.createElement('div')
    div.innerHTML= ('<h3>Profesional Art <br />Printing Data</h3> <p> A daily selection of privately <br /> personalized reads; no accounts or <br /> sign-ups required. has been the <br /> industry\'s standard </p>')
    let span = document.createElement('span')
    span.innerHTML= ('<button>html</button><button>bootstrap</button><button>Ruby</button>')
    let button = document.createElement('button')
    button.textContent = 'See Project'
    button.className = 'see-more'

    arr[i].appendChild(figure)
    arr[i].appendChild(div)
    arr[i].appendChild(span)    
    arr[i].appendChild(button)
}

let arr2 = [one, two, three, four, five, six]

for (let i = 0; i < arr2.length; i++) {
    let figure = document.createElement('figure')
    let img = document.createElement('img')
    img.alt = 'Image placeholder'
    figure.appendChild(img)
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML= ('<button>html</button><button>bootstrap</button><button>Ruby</button>')

    if (i === 0) {
      img.src = 'img-desktop/img-placeholder1.png'
      let button = document.createElement('button')
      button.textContent = 'See Project'
      button.className = 'see-desktop'
      arr2[i].appendChild(figure)
      arr2[i].appendChild(button)
      continue
    }

    else if (i === 1) {
        img.src = 'img-desktop/img-placeholder2.png'
        div.innerHTML= ('<h3>Profesional Art <br />Printing Data More</h3> <p> A daily selection of privately personalized <br /> reads; no accounts or sign-ups required. <br /> has been the industry\'s standard </p>')
    }
      
    else if (i === 2 || i === 3) {
      img.src = 'img-desktop/img-placeholder3.png'
      div.innerHTML= ('<h3>Data Dashboard <br />Healthcare</h3> <p> A daily selection of privately personalized <br /> reads; no accounts or sign-ups required. <br /> has been the industry\'s standard </p>')
    }
    
    else if (i === 4 || i === 5) {
      img.src = 'img-desktop/img-placeholder4.png'
      div.innerHTML= ('<h3><br />Website Portfolio</h3> <p> A daily selection of privately personalized <br /> reads; no accounts or sign-ups required. <br /> has been the industry\'s standard </p>')
    }

    arr2[i].appendChild(figure)
    arr2[i].appendChild(div)
    arr2[i].appendChild(span)    
}


let body = document.querySelector('body')
let object = document.querySelectorAll('.see-more') 
for (const open of object) {
    open.addEventListener('click', () => {
        let popup = document.createElement('div')
        popup.id = "pop-up"
        popup.innerHTML = `
        <span class="my-body">
            <h3>Multi Post Stories</h3>
            <img class="close" src="img-mobile/Icon - Cancel.png" alt="" />
          </span>
          <span class="items">
            <button>html</button>
            <button>Bootstrap</button>
            <button>Ruby on Rails</button>
          </span>
          <img class="img-holder" src="img-mobile/Snapshoot Portfolio.png" alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essent
          </p>
          <span>
            <a href="https://amexabee.github.io/"
              ><button>
                See Live <i class="fa fa-arrow-right"></i> </button
            ></a>
            <a href="https://github.com/amexabee/My-Portfolio"
              ><button>See Source <i class="fa fa-github"></i></button
            ></a>
          </span>
        `;

        body.appendChild(popup)
        let object = document.querySelectorAll('.close')
        for (const close of object) {
            close.addEventListener('click', () => {
                body.removeChild(popup)
            }
        )}
    })
}

let object2 = document.querySelectorAll('.see-desktop') 
for (const open of object2) {
    open.addEventListener('click', () => {
        let popup = document.createElement('div')
        popup.id = "popup-desktop"
        popup.innerHTML = `
        <span class="my-body-desktop">
        <h3>Keeping track of hundreds of components website</h3>
        <img class="close" src="img-desktop/Icon - Cancel.png" alt="" />
      </span>
      <span class="items">
        <button>html</button>
        <button>Bootstrap</button>
        <button>Ruby on Rails</button>
      </span>
      <div class="holder">
        <img class="img-holder" src="img-desktop/Snapshoot Portfolio.png" alt="" />
        <div class="text-logo">
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the <br />
            industry's standard dummy text ever since the 1500s, <br />
            when an unknown printer took a galley of type and <br />
            scrambled it 1960s with the releaLorem Ipsum is simply <br />
            dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum has been the industry's standard dummy <br />
            text ever since the 1500s, when an unknown printer <br />
            took a galley of type and scrambled it 1960s with the <br />
            releax map lapora verita.
          </p>
          <span>
            <a href="https://amexabee.github.io/"
              ><button>See Live <i class="fa fa-arrow-right"></i></button
            ></a>
            <a href="https://github.com/amexabee/My-Portfolio"
              ><button>See Source <i class="fa fa-github"></i></button
            ></a>
          </span>
        </div>
      </div>

        `;

        body.appendChild(popup)
        let object = document.querySelectorAll('.close')
        for (const close of object) {
            close.addEventListener('click', () => {
                body.removeChild(popup)
            }
        )}
    })
}

function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^A-Z<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";



form.addEventListener("submit", function (event) {
	event.preventDefault();

	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
  let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
  let firstNameValid = hasValue(form.elements["first-name"], NAME_REQUIRED);
  let lastNameValid = hasValue(form.elements["last-name"], NAME_REQUIRED);

  if (((firstNameValid && lastNameValid) || (nameValid)) && emailValid) { 
    alert("The form was submitted.");      
    form.submit();
  }
});

