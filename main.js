
const body=document.querySelector("body");

const container=document.createElement("div");
container.style.width="300px";
container.style.margin="100px auto";
container.style.padding="20px";
container.style.border="2px solid gray";
container.style.textAlign="center";
container.style.borderRadius="10px";

const title=document.createElement("h2");
title.innerText="Login Page";

const username=document.createElement("input");
username.placeholder="Enter Username";
username.style.display="block";
username.style.margin="10px auto";
username.style.padding="5px";

const password=document.createElement("input");
password.type="password";
password.placeholder="Enter Password";
password.style.display="block";
password.style.margin="10px auto";
password.style.padding="5px";

const button=document.createElement("button");
button.innerText="Login";
button.style.padding="10px";
button.style.backgroundColor="green";
button.style.color="white";
button.style.border="none";
button.style.cursor="pointer";

const message=document.createElement("p");

container.append(title);
container.append(username);
container.append(password);
container.append(button);
container.append(message);

body.append(container);

button.addEventListener("click",()=>{
    if(username.value==="maram" && password.value==="152"){
        message.innerText="Login Successful";
        message.style.color="green";
    }else{
        message.innerText="Wrong Username or Password";
        message.style.color="red";
    }
});