let subject = "JavaScript";
console.log("Hello " + subject);

let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");

let content = document.getElementById("content")

colorBtn.addEventListener("click", (e) => {
    console.log("Klick på knapp")

    let chosenColor = chooseColor.value;
    console.log(chosenColor);
    document.body.style.backgroundColor = chosenColor;

    let age = document.getElementById("age");
    let testAge = document.getElementById(testAge);

})

testAge.addEventListener("click", (e) => {
    let getAge = age.value;
    
    console.log("age" + getAge);
    
  
    
    let yearsLeft = 18 - getAge;
    console.log("yearsL", yearsLeft);
    
if (getAge < 18) {
console.log("Mindre än 18");
content.innerText = "Sorry" + yearsLeft + " år!";
} else {
    console.log("Större än 18");
    content.innerText = "Varsågod att ta en öl";
}
})