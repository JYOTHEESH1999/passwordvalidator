function validate()
{
 var a=document.getElementById("pw1").value;
 var b=document.getElementById("pw2").value;
 if(a===b)
 {
   document.getElementById("lb1").style.visibility="hidden";
  document.getElementById("lb2").style.visibility="hidden";
   alert("Form submitted successfully");
 }
 else
 {
   document.getElementById("pw1").style.border="2px solid red";
   document.getElementById("lb1").style.visibility="visible";
   document.getElementById("pw2").style.border="2px solid red"
  document.getElementById("lb2").style.visibility="visible";
 }
}
