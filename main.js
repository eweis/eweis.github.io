
  const myImage = document.querySelector("img");

  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/img2.jpg") {
      myImage.setAttribute("src", "images/IMG_3227.jpg");
    } else {
      myImage.setAttribute("src", "images/img2.jpg");
    }
  };  

  let mybutton = document.querySelector("button");
  let myheading = document.querySelector("h1");

  if(!localStorage.getItem("name")){
    setUserName();
  } else{
    const storedName = localStorage.getItem("name");
    myheading.textContent = `Hi there, ${storedName}`;
  }


  function setUserName(){
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else{
        localStorage.setItem("name", myName);
        myheading.textContent = (`Hello there, ${myName}`);
  }
}
  
  mybutton.onclick = () => {
    setUserName();
  };