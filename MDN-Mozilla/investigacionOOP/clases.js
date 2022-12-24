console.log('Linkeado');
class Form {
  constructor(classes, form, labels, inputs, button) {
    this.classes = classes;
    this.form = form;
    this.label = labels;
    this.input = inputs;
    this.button = button;
  }

  setForm = () => {
    document.querySelector('div').appendChild(this.form);
    this.form.appendChild(this.label[0]);
    this.form.appendChild(this.input[0]);
    this.form.appendChild(this.label[1]);
    this.form.appendChild(this.input[1]);
    this.form.appendChild(this.button);
  };

  setAttributtes = () => {
    const setLabels = () => {
      const $allLabels = document.querySelectorAll('label');
      const addFor = () => {
        $allLabels[0].setAttribute('for', 'username');
        $allLabels[1].setAttribute('for', 'password');
      };
      addFor();
      const addInnerText = () => {
        $allLabels[0].innerText = 'Username';
        $allLabels[1].innerText = 'Password';
      };
      addInnerText();
      const addClasslist = () => {
        for (let label of $allLabels) {
          label.classList.add(this.classes.label);
        }
      };
      addClasslist();
    };
    setLabels();
    const setInputs = () => {
      const $allInputs = document.querySelectorAll('input');
      const setIds = () => {
        $allInputs[0].setAttribute('id', 'username');
        $allInputs[1].setAttribute('id', 'password');
        $allInputs[1].setAttribute('type', 'password');
      };
      setIds();
      const addClasslist = () => {
        for (let input of $allInputs) {
          //{"login": "login", "label": "input-label", "input": "input-login", "button": "form-btn"}
          input.classList.add(this.classes.input);
        }
      };
      addClasslist();
    };
    setInputs();
    const setButton = () => {
      let $button = document.querySelector('button');
      $button.setAttribute('id', 'login');
      $button.setAttribute('type', 'button');
      $button.innerText = 'Login';
      const addClasslist = () => {
        $button.classList.add(this.classes['button']);
      };
      addClasslist();
    };
    setButton();
  };
}

class Node {
  constructor(id) {
    this.id = document.querySelector(`#${id}`);
  }

  getNode = () => {
    return this.id;
  };
  getValue = () => {
    return this.id.value;
  };
}

class UserLoginEvent {
  constructor(username, password, button) {
    this.username = username;
    this.password = password;
    this.button = button;
  }

  getValuesForLogin = () => {
    this.button.getNode().addEventListener('click', (e) => {
      e.preventDefault();
      this.username.getValue();
      this.password.getValue();
      console.log(this.username.getValue(), this.password.getValue());
    });
  };
}
//Crear form -NO automatizado/escalable- a través de una clase
const formulario = new Form(
  {
    login: 'login',
    label: 'input-label',
    input: 'input-login',
    button: 'form-btn',
  },
  document.createElement('form'),
  [document.createElement('label'), document.createElement('label')],
  [document.createElement('input'), document.createElement('input')],
  document.createElement('button')
);

formulario.setForm();
formulario.setAttributtes();

//Crear nodos para capturar valores de los inputs y el btn
const $username = new Node('username');
const $password = new Node('password');
const $button = new Node('login');

//Ejecucion
const ejecutar = new UserLoginEvent(
  $username,
  $password,
  $button
).getValuesForLogin();

//Functional approach
// let $userName = new Node("username");
// let $userPass = new Node("password");
// let $btnLogin = new Node("login")

// $btnLogin.getNode().addEventListener("click", ()=> {
//     $userName.getValue();
//     $userPass.getValue();
//     console.log($userName.getValue(), $userPass.getValue());
// });
