// const input = document.getElementById("inputBox");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((item) => {
//   item.onclick = () => {
//     if (item.id === "clear") {
//       input.value = "";
//     } else if (item.id == "back") {
//       let string = input.innerHTML.toString();
//       input.value = string.substring(string.length, 0);
//     } else if (input.value != "" && item.id == "equal") {
//       input.value = eval(input.value);
//     } else {
//       // console.log(item.innerHTML);
//       input.value += item.innerHTML;
//     }
//   };
// });

























const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
item.onclick = () => {
  if(item.id ==="clear"){
    input.value ="";
  } 
  else if(item.id != "" && item.id =="equal"){
    input.value = eval(input.value);
  }
  else if (item.id =="back"){
    let string = input.innerHTML.toString();
     input.value = string.substring(string,1);

  }
  else{
    input.value +=item.innerHTML;
  }
}
});

