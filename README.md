Задача:

Существует дерево, описанное объектом (JavaScript), значения которого могут быть строками, числами, массивами и такими же вложенными объектами. Нужно найти все значения с числом 1 и вывести полные пути до них (составить цепочку ключей от корня дерева до конечной ветви с искомым значением).

Пример.

На входе объект:

    var trunk = {    
        listItem1: 1,
        subList: {
            subSubList: {
                subSubListItem1: 1,
                subSubListItem2: 'green'
            },
            subListItem1: 'blue'
            }
    }; 

---------------------------------------------------
Для данного примера на выход отправляются 2 строки:

"listItem1"

"subList > subSubList > subSubListItem1"
