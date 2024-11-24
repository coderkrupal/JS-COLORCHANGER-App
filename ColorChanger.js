const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
 console.log(buttons);
 
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
             console.log(e.target);
             switch (e.target.id) {
              case 'grey':
                  body.style.backgroundColor = e.target.id;
                break;
             case 'black':
              body.style.backgroundColor=e.target.id;
               const h1 = document.querySelector('h1');
               h1.style.backgroundColor = "white";
              break;
              case 'blue':
               body.style.backgroundColor=e.target.id;
               break;
               case 'purple':
                body.style.backgroundColor = e.target.id;
                break;
                case 'green':
                  body.style.backgroundColor = e.target.id;
                  break;
              default:
                break;
             }
    })
  })