# ARRAYS

## BASICO DE LOS ARRAYS
### Crear un array
```JS
let arreglo = ["Contenido", "del", "arreglo", 4]

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

### ¿Cómo se accese a un dato de un array?
```JS
let primero = arreglo[0]
// Contenido

let ultimo = arreglo[arreglo.length - 1]
// 4
```

## MÉTODOS DE LOS ARRAYS


### Método constructor
El constructor Array se usa para crear nuevos arreglos

```JS
let arreglo = new Array()

console.log(arreglo)
// []
```

---

### Método at()
Permite buscar un elemento del arreglo en la posición indicada
```JS
numeros.at(0)
// 1

arreglo.at(2)
// arreglo
```

---

### Método concat()
Permite unir arreglos y devuelve uno nuevo
```JS
numeros.concat(arreglo)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Contenido', 'del', 'arreglo', 4 ]
```

---

### Método copyWithin()
Permite copiar una parte del arreglo y pegarla desde cierto indice en adelante
```JS
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.copyWithin(0, 2)
// [ 3, 4, 5, 6, 7, 8, 9, 10, 9, 10 ]
```
Basicamente desde el indice 2 (que sería el numero 3) en adelante, se copia y se reemplazan todos esos datos desde el inidice 0

---

### Método entries()
Este método permite devolver pares de índice y valor del arreglo
```JS
let numeros = ["cero", "uno", "dos", "tres"]

let pares = numeros.entries()

// El resultado es un iterador, por lo que su contenido no se ve directamente, para ver directamente el resultado de .entries() se puede hacer de la siguiente manera

for (let elemento of numeros.entries()) {
    console.log(elemento)
}

// [ 0, 'cero' ]
// [ 1, 'uno' ]
// [ 2, 'dos' ]
// [ 3, 'tres' ]
```

---

### Método every()
Valida si todos los elementos cumplen con una condición dada. Devuelve un booleano

```JS
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.every(num => num > 0)
// true
```

---

### Método fill()
Sobrescribe los elementos del arreglo

```JS
let numeros = [2, 3, 4, 5]
numeros.fill(true)
// [ true, true, true, true ]
```

---

### Método filter()
Devuelve un arreglo que contiene los elementos que cumplen con cierta condición

```JS
numeros = [9, 11, 13, 4, 21, 3, 10]
numeros.filter(num => num >= 10)
// [ 11, 13, 21, 10 ]
```

---

### Método find()
Devuelve el primer elemento del arreglo que cumple con cierta condición

```JS
let numeros = [2, 3, 4, 5, 6, 7, 8]

numeros.find(num => num >=5)
// 5
```

---

### Método findIndex()
Devuelve el inidice del primer elemento del arreglo que cumple con cierta condición

```JS
let numeros = [2, 3, 4, 5, 6, 7, 8]

numeros.findIndex(num => num >=5)
// 3
```

---

### Método findLast()
Devuelve el ultimo elemento del arreglo que cumple con cierta condición

```JS
let numeros = [2, 3, 4, 5, 6, 7, 8, 1]

numeros.findLast(num => num >=5)
// 8
```

---

### Método findLastIndex()
Devuelve el inidice del ultimo elemento del arreglo que cumple con cierta condición

```JS
let numeros = [2, 3, 4, 5, 6, 7, 8, 1]

numeros.findLastIndex(num => num >=5)
// 6
```

---

### Método flat()
Quita corchetes de un arreglo en ciertos niveles, lo "aplana"

```JS
let arreglo = [1, [2, [3, 4]]];

arreglo.flat();
// [1, 2, [3, 4]]

arreglo.flat(2)
// [ 1, 2, 3, 4 ]
```

---

### Método flatMap()
Realiza un map al arreglo y posteriormente lo aplana en un nivel

```JS
let arreglo = [2, 4, 6]

arreglo.flatMap(num => [num, num * 2])
// [ 2, 4, 4, 8, 6, 12 ]
```

Si solo fuera un map() el resultado sería así:
```JS
[ [ 2, 4 ], [ 4, 8 ], [ 6, 12 ] ]
```

---

### Método forEach()
Ejecuta una función a cada uno de los elementos del arreglo

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.forEach(num => console.log(num **2))
// 1
// 4
// 9
// 16
// 25
```

---

### Método includes()
Valida si el arreglo contiene cierto elemento

```JS
let numeros1 = [1, 2, 3]
let numeros2 = [4, 5, 6]

numeros1.includes(3)
// true

numeros2.includes(3)
// false
```

---

### Método indexOf()
Devuelve el índice del valor especificado

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.indexOf(2)
// 1
```

---

### Método join()
Une los elementos del array como un string y cada elemento se separa con el valor indicado en el parametro

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.join(", ")
// '1, 2, 3, 4, 5'
```

---

### Método keys()
Devuelve el índices de las posiciones del arreglo, mas no los valores

```JS
let frutas = ["manzana", "pera", "mango"];

for (let indice of frutas.keys()) {
  console.log(indice);
}

// 0
// 1
// 2
```

---

### Método lastIndexOf()
Devuelve el indice de el ultimo valor proporcionado

```JS
let numeros = [2, 3, 4, 5, 2, 7, 2]

numeros.lastIndexOf(2)
// 6
```

---

### Método map() 
Aplica una función a cada uno de los elementos del arreglo y devuelve un arreglo nuevo

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.map(num => num ** 2)
// [ 1, 4, 9, 16, 25 ]
```

---

### Método pop()
Elimina el último elemento del arreglo y lo retorna

```JS
let numeros = [1, 2, 3, 4, 5]

eliminado = numeros.pop()
// numeros = [1, 2, 3, 4]

console.log(eliminado)
// 5
```

---

### Método push()
Agrega un elemento nuevo al final del arreglo

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.push(6)
// [1,2,3,4,5,6]
```

---

### Método reduce()
Recorre el arreglo de izquierda a derecha, acumulando un resultado en base a una función y al final devuelve un unico valor

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.reduce((acumulador, num) => acumulador + num, 0);
// 15
```

---

### Método reduceRight()
Recorre el arreglo de derecha a izquierda, acumulando un resultado en base a una función y al final devuelve un unico valor

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.reduceRight((acumulador, num) => acumulador + num, 0);
// 15
```


---

### Método reverse()
Invierte el arreglo

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.reverse()
// [ 5, 4, 3, 2, 1 ]
```

---

### Método shift()
Elimina el primer elemento del arreglo y lo retorna

```JS
let numeros = [1, 2, 3, 4, 5]

eliminado = numeros.shift()
// numeros = [2, 3, 4, 5]

console.log(eliminado)
// 1
```

---

### Método slice()
Copia una parte del arreglo y devuelve un nuevo arreglo con dicha parte

```JS
let numeros = [10, 20, 30, 40, 50];

let resultado = numeros.slice(1, 4);

console.log(resultado);
// [ 20, 30, 40 ]
```

---

### Método some()
Valida si al menos uno de los elementos del arreglo cumple con cierta condición

```JS
let numeros = [1, 2, 3, 4, 5, 15]

numeros.some(num => num > 10)
// true
```

---

### Método sort()
Es un método para ordenar un arreglo y las condiciones del ordenamiento se colocan en el parametro

```JS
let numeros = [10, 2, 5];

numeros.sort((a, b) => a - b);
// Se compara el elemento a con el b y si la resta de estos da negativo, va primero a y luego b

// Para ordenar desendientemente sería .sort((a, b) => b - a)

console.log(numeros);
// [ 2, 5, 10 ]
```

---

### Método splice()
Selecciona un pedazo del arreglo y elimina el resto

```JS
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.splice(2,5)
// [ 3, 4, 5, 6, 7 ]
```

---

### Método toLocaleString()
Convierte el arreglo en un string según la configuración regional

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.toLocaleString();
// "1,2,3,4,5"

let numero = 1234567.89;

console.log(numero.toLocaleString());
// En Colombia sería: 1.234.567,89
// En EEUU sería: 1,234,567.89
```

---

### Método toString()
Método para convertir el arreglo en un string

```JS
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.toString(".")
// '1,2,3,4,5,6,7,8,9'
```

---

### Método unshift()
Agrega un elemento nuevo al inicio del arreglo

```JS
let numeros = [1, 2, 3, 4, 5]

numeros.unshift(0)
// [0,1,2,3,4,5]
```

---

### Método values()
Devuelve un iterador con los valores de cada elemento del arreglo

```JS
let numeros = [1, 2, 3];

for (let num of numeros.values()) {
  console.log(num);
}
// 1
// 2
// 3
```