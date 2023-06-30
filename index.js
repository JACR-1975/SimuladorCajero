let cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

let selectedAccount = null;

function login() {
    let accountIndex = parseInt(document.getElementById("cuentaSelect").value);
    let password = document.getElementById("passwordInput").value;

    if (password === "1234") {
      selectedAccount = cuentas[accountIndex];
      showTransactionForm();
    } else {
      alert("Contraseña incorrecta. Inténtalo nuevamente.");
    }
}


function showTransactionForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("transactionForm").style.display = "block";
}

function showResult(message) {
    document.getElementById("resultText").textContent = message;
    document.getElementById("result").style.display = "block";
}

function checkBalance() {
    let balance = selectedAccount.saldo;
    showResult("Saldo actual: $" + balance);
}

function deposit() {
    let amount = parseFloat(prompt("Ingrese el monto a ingresar:"));

    if (isNaN(amount) || amount <= 0) {
      alert("Por favor, ingresa un monto válido.");
      return;
    }

    let newBalance = selectedAccount.saldo + amount;

    if (newBalance > 990) {
      alert("El saldo no puede ser mayor a $990.");
      return;
    }

    selectedAccount.saldo = newBalance;
    showResult("Monto ingresado: $" + amount + "\nNuevo saldo: $" + newBalance);
}

function withdraw() {
    let amount = parseFloat(prompt("Ingrese el monto a retirar:"));

    if (isNaN(amount) || amount <= 0) {
      alert("Por favor, ingresa un monto válido.");
      return;
    }

    let newBalance = selectedAccount.saldo - amount;

    if (newBalance < 10) {
      alert("El saldo no puede ser menor a $10.");
      return;
    }

    selectedAccount.saldo = newBalance;
    showResult("Monto retirado: $" + amount + "\nNuevo saldo: $" + newBalance);
}

function logout() {
    selectedAccount = null;
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("transactionForm").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("passwordInput").value = "";
}

    document.getElementById("loginButton").addEventListener("click", login);
    document.getElementById("balanceButton").addEventListener("click", checkBalance);
    document.getElementById("depositButton").addEventListener("click", deposit);
    document.getElementById("withdrawButton").addEventListener("click", withdraw);
    document.getElementById("logoutButton").addEventListener("click", logout);
