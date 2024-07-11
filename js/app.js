window.onload = function () {

  //Основные переменные

  let field = document.querySelector('.field'); // Поле

  let level = document.querySelectorAll('.level'); // Уровень

  let cell = document.querySelectorAll('.cell'); // Ячейка

  let cell_p = document.querySelectorAll('.cell p'); // Параграф внутри ячейки

  let cross = '+';

  let zero = 'o';


// Блок выбора начального знака

  let sign_buttons = document.querySelectorAll('.button'); // Кнопки для выбора знаков
                                                                                        
  let selected_sign; // Хранит выбранный знак

  let o = 0; // Переменная счетчика цикла

  for (; o < sign_buttons.length; o++) {

    sign_buttons[o].onclick = function () { // При клике на кнопку выбранный знак сохраняется
                                            // в предварительно объявленной переменной
      if (this.innerHTML === cross) {

        selected_sign = cross; // Присвоится знак '+'

      }

      else {

        selected_sign = zero; // Присвоится хранит знак 'o'

      }

    }

  }
  

  // Основной блок, который отвечает за отображение знаков в ячейках при клике и сопутствующие этому действия

  let i = 0; // Переменная счетчика цикла

  for (; i < cell.length; i++) {

    cell[i].onclick = function () { // Клик по ячейке отображает указанный знак

      if (selected_sign === cross && this.children[0].classList.contains('show') === false && this.children[1].classList.contains('show') === false) {

          this.children[0].classList.add('show'); // При соответствующем выборе отобразится крестик

        selected_sign = zero; // При клике по выбранной ячейке значение переменной с выбранным знаком меняется на
                              // противоположное
    }
      
      else if (selected_sign === zero && this.children[0].classList.contains('show') === false && this.children[1].classList.contains('show') === false) {
                                                                                                // При выборе нолика он будет
                                                                                                // отображен в одной из ячеек,
                                                                                                // а также предварительно
                                                                                                // выполнится проверка на наличие
                                                                                                // ранее добавленного знака в
                                                                                                // ячейке
        
        this.children[1].classList.add('show'); // При соответствующем выборе отобразится нолик

        selected_sign = cross;

      }

      else {

          if (this.children[0].classList.contains('show') === true || this.children[1].classList.contains('show') === true) {
                                                                   // При повторном клике по непустой ячейке отобразится
                                                                   // соответствующее объявление

          alert('Поставьте знак в свободную ячейку');

          }

        else {

          alert('Выберите знак!'); // При попытке клика по одной из ячеек без предварительного выбора знака
                                   // высветится соответствующее требование
        }

      }

      // ПРОВЕРКА НАЛИЧИЯ ТРЕХ ОДИНАКОВЫХ ЗНАКОВ В РЯД
        
      // Данный блок выполняется после вставки знака в ячейку

      let y = 0; // Переменная счетчика цикла (горизонтальный перебор)

      let sign_num = 0; // Переменная счетчика ячеек в ряду

      let three_signs = ''; // Переменная для хранения трех знаков

      let display_sign; // Переменная для распознавания отображаемого знака

      for (; y <= cell.length; y++) { // Цикл для перебора ячеек по горизонтали
      
        if (sign_num === 3) { // Проверка достижения счетчиком предельного значения равного трем

          if (three_signs === '+++' || three_signs === 'ooo') { // Проверка на наличие трех одинаковых знаков подряд
                                                                
              cell[y - 1].children[display_sign].classList.add('red'); // Выделение трех одинаковых знаков в ряд красным цветом

              cell[y - 2].children[display_sign].classList.add('red');

              cell[y - 3].children[display_sign].classList.add('red');
            
            alert(`Победил ${this.children[display_sign].innerHTML}`); // Объявление победившего знака

          }

          three_signs = ''; // Обнуление переменной, хранящей содержимое ячеек в ряду

          sign_num = 0; // Обнуление счетчика ячеек в ряду

        }

        if (y != 9) {
          
          if (cell[y].children[0].classList.contains('show')) {

            three_signs += cell[y].children[0].innerHTML;

            display_sign = 0;

          }

          else if (cell[y].children[1].classList.contains('show')) {

            three_signs += cell[y].children[1].innerHTML;

            display_sign = 1;

          }
          
        }
        
        sign_num++; // После вычисления ячейки значение счетчика увеличивается

      }


      let z = 0; // Переменная счетчика цикла (вериткальный перебор)

      let second_sign_num = 0;

      let second_three_signs = '';

      let display_sign_1; // Переменная для распознавания отображаемого знака

      for (; z < cell.length;) { // Цикл для перебора ячеек по вертикали

          if (second_sign_num === 3) { // Проверка достижения счетчиком предельного значения равного трем
  
            if (second_three_signs === '+++' || second_three_signs === 'ooo') { // Проверка на наличие трех одинаковых знаков подряд
                                                                  
              cell[z + 5].children[display_sign_1].classList.add('red'); // Выделение трех одинаковых знаков в ряд красным цветом
              
              cell[z + 2].children[display_sign_1].classList.add('red');
              
              cell[z + (-1)].children[display_sign_1].classList.add('red');

              alert(`Победил ${this.children[display_sign_1].innerHTML}`); // Объявление победившего знака
              
            }
  
            second_three_signs = ''; // Обнуление переменной, хранящей содержимое ячеек в ряду
  
            second_sign_num = 0; // Обнуление счетчика ячеек в ряду

            if (z === 3) break; // По достижении счетчика цикла указанного значения цикл прерывается (ВЕРОЯТНО НУЖНО ПРЕРЫВАТЬ ПОСЛЕ ALERT)

          }
      
            if (cell[z].children[0].classList.contains('show')) {
  
              second_three_signs += cell[z].children[0].innerHTML;
  
              display_sign_1 = 0;

            }
  
            else if (cell[z].children[1].classList.contains('show')) {
  
              second_three_signs += cell[z].children[1].innerHTML;
  
              display_sign_1 = 1;

            }

          second_sign_num++; // После вычисления ячейки значение счетчика увеличивается

          if (second_sign_num === 3) {
            
            z -= 5;

          }

          else {
            
            z += 3;

          }

      }


        let x = 0; // Переменная счетчика цикла (перебор по диагонали)

        let third_sign_num = 0;

        let third_three_signs = '';

        let row_count = 1;

        let display_sign_2; // Переменная для распознавания отображаемого знака

        for (; x <= cell.length;) {

          if (third_sign_num === 3) { // Проверка достижения счетчиком предельного значения равного трем
  
            row_count++;

            if (third_three_signs === '+++' || third_three_signs === 'ooo') { // Проверка на наличие трех одинаковых знаков подряд
              
              if (row_count !== 3) {

                cell[x + 6].children[display_sign_2].classList.add('red'); // Выделение трех одинаковых знаков в ряд красным цветом
            
                cell[x + 2].children[display_sign_2].classList.add('red');
            
                cell[x + (-2)].children[display_sign_2].classList.add('red');
            
                alert(`Победил ${this.children[display_sign_2].innerHTML}`); // Объявление победившего знака

              }

              else {

                cell[x - 2].children[display_sign_2].classList.add('red'); // Выделение трех одинаковых знаков в ряд красным цветом
            
                cell[x - 4].children[display_sign_2].classList.add('red');

                cell[x - 6].children[display_sign_2].classList.add('red');

                alert(`Победил ${this.children[display_sign_2].innerHTML}`); // Объявление победившего знака

              }

            }

            third_three_signs = ''; // Обнуление переменной, хранящей содержимое ячеек в ряду

            third_sign_num = 0; // Обнуление счетчика ячеек в ряду

          }

          if (cell[x].children[0].classList.contains('show')) {
  
            third_three_signs += cell[x].children[0].innerHTML;

            display_sign_2 = 0;

          }

          else if (cell[x].children[1].classList.contains('show')) {

            third_three_signs += cell[x].children[1].innerHTML;

            display_sign_2 = 1;

          }

          if (x % 4 === 0 && x != 8 && row_count === 1) {

            x += 4;

          }

          else if (x === 8 && row_count != 3) {

            x = 2;

          }

          else if (row_count === 3) {

            break;

          }

          else {

            x += 2;

          }

        third_sign_num++;

        }

      //ПРОВЕРКА НАЛИЧИЯ ТРЕХ ОДИНАКОВЫХ ЗНАКОВ В РЯД

    }

  }

}
