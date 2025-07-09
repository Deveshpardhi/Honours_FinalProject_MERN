function validateform()
{
var name=document.name.name.value;
var password=document.password.password.value;
if (name==null || name=="")
{
alert("Name can't be blank");
return false;
}
else if(password.length<6)
{
alert("Password must be at least 60 characters long.");
return false;
}
}