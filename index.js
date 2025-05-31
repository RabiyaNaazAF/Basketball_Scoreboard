let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtntwo = document.getElementById("home-score-btn-2")
let homeScoreBtnthree = document.getElementById("home-score-btn-3")

let homeScoreBtnOne1 = document.getElementById("home-score-btn-g1")
let homeScoreBtntwo2 = document.getElementById("home-score-btn-g2")
let homeScoreBtnthree3 = document.getElementById("home-score-btn-g3")

let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoretwo(){
    homeScore +=2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScorethree(){
    homeScore +=3
  homeStoreEl.textContent = homeScore
}

let homeStoreElg =document.getElementById("home-scoreg")
let homeScoreg = 0

function increaseHomeScoreOne1(){
    homeScoreg += 1
    homeStoreElg.textContent = homeScoreg
}
function increaseHomeScoretwo2(){
    homeScoreg +=2
    homeStoreElg.textContent = homeScoreg
}
function increaseHomeScorethree3(){
    homeScoreg +=3
  homeStoreElg.textContent = homeScoreg
}
