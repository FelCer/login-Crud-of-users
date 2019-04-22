window.onload = function () {

    const button = document.getElementById("regresar");

    var add = document.getElementById("add");
    add.style.display = 'none';

    var drop = document.getElementById("drop");
    drop.style.display = 'none';

    var edit = document.getElementById("edit");
    edit.style.display = 'none';

    const buttons = document.getElementById("buttons");
    buttons.style.display = 'block';

    const buttonsDos = document.getElementById("buttonsDos");
    buttonsDos.style.display = 'block';

    button.onclick = function () {
        window.location = "index.html";
    };

    const addUSerButton = document.getElementById("agregar");
    addUSerButton.onclick = function () {
        addUSer();
    };
    data();
    //dropUSer();
}
function data() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            let tbody = document.querySelector('#tbody');
            tbody.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                tbody.innerHTML += `
                        <tr>
                        <td id='name'>${data[i]['name']}</td>
                        <td id='password'>${data[i]['value']}</td>
                        <td id='id'>${data[i]['id']}</td>
                        <td><img onclick="editUser('${data[i]['name']}',${data[i]['value']},${data[i]['id']})" src="assets/lapiz.png" alt=""></td>
                        <td><img onclick="dropUSer('${data[i]['name']}',${data[i]['id']})" src="assets/basura.png" alt=""></td>
                    </tr>`;
            }
        }
    }
    xhr.open("GET", "./php/queryUsers.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}
function addUSer() {

    add.style.display = 'block';
    tableUser.style.display = 'none';

    buttons.style.display = 'none';
    buttonsDos.style.display = 'none';

    const Add = document.getElementById("addUSer");
    Add.onclick = function () {
        okAddUser();
    };

    const buttonCacel = document.getElementById("cancel");
    buttonCacel.onclick = function () {
        add.style.display = 'none';
        tableUser.style.display = 'block';
        buttons.style.display = 'block';
        buttonsDos.style.display = 'block';
    };
}
function okAddUser() {
    buttons.style.display = 'none';
    buttonsDos.style.display = 'none';
    let userInput = document.getElementById("user").value;
    let passwordInput = document.getElementById("passwordR").value;
    if (userInput == '' || passwordInput == '' || userInput == undefined || passwordInput == undefined) {
        alertify.error("Faltan campos por llenar.");
    } else {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alertify.success('El usuario fue creado correctamente');
                data();
                add.style.display = 'none';
                tableUser.style.display = 'block';
                buttons.style.display = 'block';
                buttonsDos.style.display = 'block';
                document.getElementById("user").value = '';
                document.getElementById("passwordR").value = '';
            }
        }
        xhr.open("POST", "./php/insertUser.php", false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("name=" + userInput + "&password=" + passwordInput);
    }
}

function dropUSer(name, id) {
    add.style.display = 'none';
    tableUser.style.display = 'none';
    drop.style.display = 'block';
    buttons.style.display = 'none';
    buttonsDos.style.display = 'none';

    let labelDrop = document.querySelector('#labelDrop');
    labelDrop.innerHTML = `Esta seguro de eliminar al usuario ${name} ?`;
    const buttonDropUser = document.getElementById("buttonDropUser");
    buttonDropUser.onclick = function () {
        okDropUser(id);
    };
    const dropCancel = document.getElementById("dropCancel");
    dropCancel.onclick = function () {
        add.style.display = 'none';
        tableUser.style.display = 'block';
        drop.style.display = 'none';
        buttons.style.display = 'block';
        buttonsDos.style.display = 'block';
    };
}
function okDropUser(id) {
    console.log(id);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alertify.success('El usuario fue eliminado correctamente');
            data();
            add.style.display = 'none';
            tableUser.style.display = 'block';
            drop.style.display = 'none';
            buttons.style.display = 'block';
            buttonsDos.style.display = 'block';
        }
    }
    xhr.open("POST", "./php/deleteUser.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id);
}

function editUser(name, value, id) {
    edit.style.display = 'block';
    tableUser.style.display = 'none';
    drop.style.display = 'none';
    buttons.style.display = 'none';
    buttonsDos.style.display = 'none';

    document.getElementById("editUser").value = name;
    document.getElementById("editPassword").value = value;


    const editUSer = document.getElementById("editUSer");
    editUSer.onclick = function () {
        okEditUser(id);
    };
    const editCancel = document.getElementById("editCancel");
    editCancel.onclick = function () {
        edit.style.display = 'none';
        tableUser.style.display = 'block';
        drop.style.display = 'none';
        buttons.style.display = 'block';
        buttonsDos.style.display = 'block';
    };
}
function okEditUser(id) {
    let nameEdit = document.getElementById("editUser").value;
    let valueEdit = document.getElementById("editPassword").value;
    if (nameEdit==''||valueEdit==''||nameEdit==undefined||valueEdit==undefined) {
        alertify.error("Faltan campos por llenar.");
    } else {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alertify.success('El usuario fue editado correctamente');
                data();
                add.style.display = 'none';
                tableUser.style.display = 'block';
                drop.style.display = 'none';
                edit.style.display = 'none';
                buttons.style.display = 'block';
                buttonsDos.style.display = 'block';
            }
        }
        xhr.open("POST", "./php/updateUser.php", false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("name=" + nameEdit + "&password=" + valueEdit + "&id=" + id);
    }
}