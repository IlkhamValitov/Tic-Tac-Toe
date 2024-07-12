window.onload = function() {

    // main variables

    let cell = document.querySelectorAll('.cell'); // cell

    let substrate = document.querySelector('.substrate'); // anti-click backing

    let cross = '+'; // cross sign

    let zero = 'o';  // zero sign

    let selected_sign; // stores the selected character


    function showSubstrate() {  // function to show background to avoid unwanted clicks

        substrate.classList.add('show_substrate');
                    
        setTimeout(askQuestion, 2000);

        return;

    }

    
    function askQuestion() { // asked after finishing the game

        if (confirm('Желаете сыграть еще?')) {

            clearData();

            return;

        }
        
        else {

            clearData();

            return;

        }

    }


    function clearData() { // function to clear data after one of the players wins

        for(let cell_count = 0; cell_count < cell.length; cell_count++) {

            for(let sign_count = 0; sign_count < cell[0].children.length; sign_count++) {

                cell[cell_count].children[sign_count].classList.remove('show');

                cell[cell_count].children[sign_count].classList.remove('red');

            }
            
        }

        selected_sign = '';

        substrate.classList.remove('show_substrate');

        return;

    }


    selectSign();

    insertSign();


    // selection of initial character

    function selectSign() { 

        let sign_buttons = document.querySelectorAll('.button'); // buttons for selecting characters

        let o = 0; // loop counter variable

        for (; o < sign_buttons.length; o++) {

            sign_buttons[o].onclick = function () { // when you click on the button, the selected 
                                                    // character is stored in a previously declared variable
                if (this.innerHTML === cross) {

                    selected_sign = cross; // a '+' sign will be assigned

                }

                else {

                    selected_sign = zero; // assigned stores the sign 'o'

                }

            }

        }

    }


    function insertSign() {
        
        let i = 0; // loop counter variable

        for (; i < cell.length; i++) {

            cell[i].onclick = function () { // clicking on a cell displays the specified sign
               
                if (selected_sign === cross && this.children[0].classList.contains('show') === false && this.children[1].classList.contains('show') === false) {

                    this.children[0].classList.add('show'); // if selected, a cross will be displayed

                    selected_sign = zero; // when you click on the selected cell, the value of the 
                                          // variable with the selected sign changes to the opposite one

                    checkSign();
                    
                }
      
                else if (selected_sign === zero && this.children[0].classList.contains('show') === false && this.children[1].classList.contains('show') === false) {
                                                                                                // when you select a zero, it will be displayed
                                                                                                // in one of the cells, and a check will 
                                                                                                // also be made to check for the presence
                                                                                                // of the previously added sign in the cell
        
                    this.children[1].classList.add('show'); // if selected, a zero will be displayed

                    selected_sign = cross;

                    checkSign();

                }

                else {

                    if (this.children[0].classList.contains('show') === true || this.children[1].classList.contains('show') === true) {
                                                                   // when you click on a non-empty cell again,
                                                                   // the corresponding ad will be displayed

                        alert('Поставьте знак в свободную ячейку');

                    }

                    else {

                        alert('Выберите знак!'); // If you try to click on one of the cells
                                                 // without first selecting a sign,
                                                 // the corresponding requirement will be displayed
                    }

                }

            }

        }

    }


    function checkSign() {

        // first loop

        let y = 0; // loop counter variable (horizontal iteration)

        let sign_num = 0; // variable for counting cells in a row

        let three_signs = ''; // variable to store three characters

        let display_sign; // variable to recognize the displayed character

        for (; y <= cell.length; y++) { // loop to iterate through cells horizontally
      
            if (sign_num === 3) { // checking whether the counter has reached the limit value of three

                if (three_signs === '+++' || three_signs === 'ooo') { // checking for the presence of three identical characters in a row
                                                                
                    cell[y - 1].children[display_sign].classList.add('red'); // highlighting three identical characters in a row in red

                    cell[y - 2].children[display_sign].classList.add('red');

                    cell[y - 3].children[display_sign].classList.add('red');
            
                    alert(`Победил ${cell[y - 1].children[display_sign].innerHTML}`); // announcement of the winning sign

                    showSubstrate();

                    break;

                }

                else {

                    three_signs = ''; // resetting a variable that stores the contents of cells in a row to zero

                    sign_num = 0; // resetting the cell counter in a row to zero

                }

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
        
            sign_num++; // after the cell is calculated, the counter value is incremented

        }


        // second loop

        let z = 0; // loop counter variable (vertical iteration)

        let second_sign_num = 0;

        let second_three_signs = '';

        let display_sign_1; // variable to recognize the displayed character

        for (; z < cell.length;) { // loop to iterate through cells vertically

            if (second_sign_num === 3) { // checking whether the counter has reached the limit value of three
  
                if (second_three_signs === '+++' || second_three_signs === 'ooo') { // checking for the presence of three identical characters in a row
                                            
                    cell[z + 5].children[display_sign_1].classList.add('red'); // highlighting three identical characters in a row in red
              
                    cell[z + 2].children[display_sign_1].classList.add('red');
              
                    cell[z + (-1)].children[display_sign_1].classList.add('red');

                    alert(`Победил ${cell[z + 5].children[display_sign_1].innerHTML}`); // announcement of the winning sign
                    
                    showSubstrate();

                    break;
              
                }
  
                else {

                    second_three_signs = ''; // resetting a variable that stores the contents of cells in a row to zero
  
                    second_sign_num = 0; // Resetting the cell counter in a row to zero
                }
          
            }
      
            if (cell[z].children[0].classList.contains('show')) {
  
                second_three_signs += cell[z].children[0].innerHTML;
  
                display_sign_1 = 0;

            }
  
            else if (cell[z].children[1].classList.contains('show')) {
  
                second_three_signs += cell[z].children[1].innerHTML;
  
                display_sign_1 = 1;

            }

            second_sign_num++; // after the cell is calculated, the counter value is incremented

            if (second_sign_num === 3) {
            
                z -= 5;

            }

            else {
            
                z += 3;

            }

        }


        // third loop

        let x = 0; // loop counter variable (diagonal iteration)

        let third_sign_num = 0;

        let third_three_signs = '';

        let row_count = 1;

        let display_sign_2; // variable to recognize the displayed character

        for (; x <= cell.length;) {

            if (third_sign_num === 3) { // checking whether the counter has reached the limit value of three
  
                row_count++;

                if (third_three_signs === '+++' || third_three_signs === 'ooo') { // checking for the presence of three identical characters in a row
              
                    if (row_count !== 3) {

                        cell[x + 6].children[display_sign_2].classList.add('red'); // highlighting three identical characters in a row in red
            
                        cell[x + 2].children[display_sign_2].classList.add('red');
            
                        cell[x + (-2)].children[display_sign_2].classList.add('red');
            
                        alert(`Победил ${cell[x + 6].children[display_sign_2].innerHTML}`); // announcement of the winning sign

                        showSubstrate();

                        break;
                        
                    }

                    else {

                        cell[x - 2].children[display_sign_2].classList.add('red'); // highlighting three identical characters in a row in red
            
                        cell[x - 4].children[display_sign_2].classList.add('red');

                        cell[x - 6].children[display_sign_2].classList.add('red');

                        alert(`Победил ${cell[x - 2].children[display_sign_2].innerHTML}`); // announcement of the winning sign

                        showSubstrate();

                        break;

                    }

                }

                else {

                    third_three_signs = ''; // resetting a variable that stores the contents of cells in a row to zero

                    third_sign_num = 0; // resetting the cell counter in a row to zero

                }

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

    }

}