# DIFERENCIAS ENTRES LAS FUNCIONES REGULARES Y FUNCIONES DE FLECHA

## SINTAXIS

La primera diferencia notable es la sintaxis que manejan los dos tipos de funciones, siendo la función regular la que cuenta con la sintaxis mas conocida, y la de flecha una un poco menos conocida. Dichas sintaxis son las siguientes:

* ### Funciones Regulares:

    ```md
    function multiply(num1, num2) {
        const result = num1 * num2
        return result
    }
    ```

* ### Funciones de Flecha:

    ```md
    const multiply = (num1, num2) => {
        const result = num1 * num2
        return result
    }
    ```


## EL RETURN

La funcion de flecha puede ser mas corta que la regular, debido a que si en caso de que el retorno conforme todo el cuerpo de la función, se puede simplificar de tal manera que no es necesario colocarlo, lo cual permite que tengamos algo mas corto como esto:

#### Una función así:
```md
const multiply = (num1, num2) => {
    return num1 * num2
}
```

#### pasa a ser así:

```md
const multiply = (num1 * num2) => num1 * num2
```

## NO ARGUMENTOS EN FUNCIÓN DE FLECHA

Una función regular puede hacer referencia a los argumentos el objeto en el cual fue invocada, de la siguiente manera:

```md
function print() {
    console.log(arguments)
}

print("hello", 400, false)
```

El resultado esperado sería:

```md
{
   '0': 'hello',
   '1': 400,
   '2': false
}
```

En el caso de las funciones de flecha, esta variable local de argumentos no existe, es por esto que al realizar el mismo llamadado, sale error.

```md
const print() => {
    console.log(arguments)
}

print("hello", 400, false)
```

El resultado esperado sería:

```md
// Uncaught ReferenceError: arguments is not defined
```

## VINCULADOR THIS
En las funciones regulares es creada una variable _this_ la cual hace referencia al objeto que la llama, por ejemplo:

```md
const obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    console.log(this)
  }
}

obj.print()

// {
//   name: 'deeecode',
//   age: 200,
//   print: [Function: print]
// }
```

Esto no pasa en las funciones de flecha las cuales no crea automaticamente una variable _this_, como resultado cualquier referencia a _this_ apuntará a lo que el _this_ haya sido definido antes de que la función haya sido creada.

```md
const obj = {
  name: 'deeecode',
  age: 200,
  print: () => {
    console.log(this)
  }
}

obj.print()
// Window
```

##
## **Fuente utilizada:**

_https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/_