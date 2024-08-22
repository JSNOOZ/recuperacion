//Crear cajas con estilos
function createBoxes() {
    const numberOfBoxes = parseInt(prompt("¿Cuántas cajas deseas crear?"));
    const container = document.getElementById('boxContainer');
    container.innerHTML = '';
    if (numberOfBoxes < 8) {
        container.style.color = '#f3c623';
        container.style.backgroundColor = '#10375c';
        container.style.display = 'block';
        container.style.flexDirection = 'column';
        for (let i = 0; i < numberOfBoxes; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = `Caja ${i + 1}`;
            container.appendChild(box);
        }
    } else {
        container.style.color = '#10375c';
        container.style.backgroundColor = '#f3c623';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        for (let i = 0; i < numberOfBoxes; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            box.textContent = `Caja ${i + 1}`;
            container.appendChild(box);
        }
    }
}

//Voto por sección
function submitVote() {
    const section = document.getElementById('section').value;
    let result;
    switch (section) {
        case 'norte':
            result = 'Has votado por la sección Norte.';
            break;
        case 'sur':
            result = 'Has votado por la sección Sur.';
            break;
        case 'centro':
            result = 'Has votado por la sección Centro.';
            break;
        default:
            result = 'Sección no válida.';
    }
    document.getElementById('voteResult').textContent = result;
}

//Sumar números positivos
function sumPositiveNumbers() {
    let sum = 0;
    let number;
    do {
        number = parseFloat(prompt("Introduce un número positivo (0 o negativo para terminar):"));
        if (number > 0) {
            sum += number;
        }
    } while (number > 0);
    document.getElementById('sumResult').textContent = `La suma total es: ${sum}`;
}

//Cálculos con if-else y case
function performCalculations() {
    //Ordenar 3 números
    const num1 = parseFloat(prompt("Introduce el primer número:"));
    const num2 = parseFloat(prompt("Introduce el segundo número:"));
    const num3 = parseFloat(prompt("Introduce el tercer número:"));
    const numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a);
    document.getElementById('calculationResult').innerHTML = 
        `Números ordenados de mayor a menor: ${numbers.join(', ')}`;

    //Calcular importe neto
    const bruto = parseFloat(prompt("Introduce el importe bruto:"));
    const neto = bruto > 15000 ? bruto * 0.84 : bruto * 0.90;
    document.getElementById('calculationResult').innerHTML += 
        `<br>Importe neto después de impuestos: ${neto}`;

    //Calcular sueldo con aumento
    const years = parseInt(prompt("¿Cuántos años lleva en la empresa?"));
    const annualSalary = 40000;
    let finalSalary;
    if (years > 10) {
        finalSalary = annualSalary * 1.10;
    } else if (years > 5) {
        finalSalary = annualSalary * 1.07;
    } else if (years > 3) {
        finalSalary = annualSalary * 1.05;
    } else {
        finalSalary = annualSalary * 1.03;
    }
    document.getElementById('calculationResult').innerHTML += 
        `<br>Sueldo final con aumento: ${finalSalary}`;
}

//While y For
function sumOddNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i += 2) {
        sum += i;
    }
    document.getElementById('whileForResult').textContent = `Suma de impares del 1 al 100: ${sum}`;
}

function printAsterisks() {
    const count = parseInt(prompt("¿Cuántos asteriscos quieres mostrar?"));
    document.getElementById('whileForResult').textContent = '*'.repeat(count);
}

function printMultiplicationTables() {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `<strong>Tabla del ${i}:</strong><br>`;
        for (let j = 1; j <= 10; j++) {
            result += `${i} x ${j} = ${i * j}<br>`;
        }
        result += '<br>';
    }
    document.getElementById('whileForResult').innerHTML = result;
}

//arreglos
function arrayOperations() {
    let arr = [1, 2, 3, 4, 5];
    let result = '';

    arr.pop();
    result += `Después de pop: ${arr.join(', ')}<br>`;

    arr.shift();
    result += `Después de shift: ${arr.join(', ')}<br>`;

    arr.push(6);
    result += `Después de push: ${arr.join(', ')}<br>`;

    arr.unshift(0);
    result += `Después de unshift: ${arr.join(', ')}<br>`;

    arr.splice(2, 1, 7);
    result += `Después de splice: ${arr.join(', ')}<br>`;

    delete arr[1];
    result += `Después de delete: ${arr.join(', ')}<br>`;

    arr.reverse();
    result += `Después de reverse: ${arr.join(', ')}<br>`;

    arr.sort((a, b) => a - b);
    result += `Después de sort: ${arr.join(', ')}<br>`;

    const arr2 = [8, 9, 10];
    const concatenatedArr = arr.concat(arr2);
    result += `Después de concat: ${concatenatedArr.join(', ')}<br>`;

    result += `Después de join: ${arr.join(' - ')}<br>`;
    result += `Longitud del arreglo: ${arr.length}<br>`;

    document.getElementById('arrayResult').innerHTML = result;
}

//formulario
function toggleForm(action) {
    const formContainer = document.getElementById('formContainer');
    if (action === 'show') {
        formContainer.classList.remove('hidden');
    } else if (action === 'hide') {
        formContainer.classList.add('hidden');
    }
}