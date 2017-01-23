var trunk = { 
    listItem1: 1, 
    subList: {    
        lalala: {        
            subSubListItem1: 1,
            subSubListItem2: 'green'
          },
        bababa: {         
            subSubList2Item1: 1,
            subSubList2Item2: 'green'
          },
        subListItem1: 'blue'
    }
  };


  function showProps(obj, path) {
    for(var key in obj){
      if (typeof obj [key] == 'object') {
        showProps(obj[key], (path ? (path + ' > ') : '') + key );
      } else
      if (obj[key] == 1) {
        console.log((path ? (path + ' > ') : '') + key );
      }
    }
  }

  showProps(trunk, "");
  
  // В логе есть конструкция на проверку path: (path ? (path + ' > ') : ''). Если path пуст, то остается пустое место, или если path заполнен, то добавляется ' > '. После этой проверки в любом случае добавляется key. 
