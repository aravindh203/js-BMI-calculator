let button=document.getElementById("btn");
button.addEventListener("click",function(){
  let height=document.getElementById("height").value;  
  let weight=document.getElementById("weight").value;

  let bmi=((parseInt(weight)/parseInt(height))/parseInt(height))*10000;
  console.log("BMI="+bmi);
  
  let result=document.getElementById("result");
  result.innerText=bmi
  let result2=document.getElementById("result2");
  
  if(bmi<18){
    result2.innerText="Underweight"
    result2.style.color="red";
  }
  else if(bmi>=18 && bmi<25){
    result2.innerText="normal weight"
    result2.style.color="green";
  }
  else{
    result2.innerText="Overweight"
    result2.style.color="yellow";
  }
})