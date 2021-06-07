

var numbers = [] 
function validateForm() {
    if (numbers.lenght ==0 && $('#txt_body').val() == '') {
      alert("Name must be filled out");
      return false;
    }
  }