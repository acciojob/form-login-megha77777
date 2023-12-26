let submitBtn = document.getElementById("submit")
let firstName = document.getElementById("firstname")
let lastName = document.getElementById("lastname")
	function getFormvalue() {
    //Write your code here
		
	submitBtn.addEventListener("click", ()=>{
		alert(firstName.value+" "+lastName.value);
	})
}
getFormvalue()
