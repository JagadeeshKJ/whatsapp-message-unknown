let btn = document.querySelector("#btn")
let ipt = document.querySelector(".ipt")

function reDirect() {
    
    location.replace(`https://wa.me/${ipt.value}`)
    // location.href = `https://wa.me/+91${ipt.value}`;
}

