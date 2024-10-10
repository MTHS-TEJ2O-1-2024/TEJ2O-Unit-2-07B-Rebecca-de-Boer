/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Oct 2024
 * This program is cookie clicker
*/

let cookienumber: number = 0


input.onButtonPressed(Button.A, function(){
    cookienumber = cookienumber + 1
    basic.showNumber (cookienumber)
})
