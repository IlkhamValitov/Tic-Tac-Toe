window.onload = function () {

  //Основные переменные
  let field = document.querySelector('.field'); // Поле

  let level = document.querySelectorAll('.level'); // Уровень

  let cell = document.querySelectorAll('.cell'); // Ячейка

  // let cross = document.querySelectorAll('.cross'); // Крестик
  let cross = 'X';

  // let zero = document.querySelectorAll('.cross'); // Нолик
  let zero = 'O';

// Блок выбора начального знака
  let sign_buttons = document.querySelectorAll('.button'); // Кнопки для выбора
                                                                                        // знаков
  let selected_sign; // Хранит выбранный знак

  let o = 0; // Переменная счетчика цикла

  for (; o < sign_buttons.length; o++) {

    sign_buttons[o].onclick = function () { // При клике на кнопку выбранный знак сохраняется
                                                  // в предварительно объявленной переменной
      if (this.innerHTML === cross) {

        selected_sign = cross; // Присвоится знак 'X'

      }

      else {

        selected_sign = zero; // Присвоится хранит знак 'O'

      }

    }

  }
  //


  // Основной блок
  let i = 0; // Переменная счетчика цикла

  for (; i < cell.length; i++) {

    cell[i].onclick = function () { // Клик по ячейке отображает указанный знак

      if (selected_sign === cross && this.innerHTML !== cross && this.innerHTML !== zero) { // Анализ введенной информации
                                                              // для отображения подходящего знака

        this.innerHTML = cross; // При выборе крестика переменная с выбранным знаком присваивается в
                                // в качестве содержимого одной из 9-ти ячеек

        selected_sign = zero; // При клике по выбранной ячейке значение переменной с выбранным знаком меняется на
                              // противоположное

        if () {

        }

      }

      else if (selected_sign === zero && this.innerHTML !== cross && this.innerHTML !== zero) { // При выборе нолика он будет
                                                                                                // отображен в одной из ячеек,
                                                                                                // а также предварительно
                                                                                                // выполнится проверка на наличие
                                                                                                // ранее добавленного знака в
                                                                                                // ячейке
        this.innerHTML = zero;

        selected_sign = cross;


      }

      else {

        if (this.innerHTML === cross || this.innerHTML === zero) { // При повторном клике по непустой ячейке отобразится
                                                                   // соответствующее объявление

          alert('Поставьте знак в свободную ячейку');

        }

        else {

          alert('Выберите знак!'); // При попытке клика по одной из ячеек без предварительного выбора знака
                                   // высветится соответствующее требование
        }

      }

    }

  }
  //

}
