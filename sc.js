const button = document.querySelector("button")
const ans = document.querySelector("#ans")
const names = document.querySelector("#name")
const amount = document.querySelector("#amount")
const dep = document.querySelector("#deposit");
const wid = document.querySelector("#withdraw");
const bal = document.querySelector("#checkBalance");

let inBalance = 1000;
let balance = 0; 
let custName = "";

dep.addEventListener("click",()=>{
    dep.style.backgroundColor = "lightGreen";
    wid.style.backgroundColor = "white";
    bal.style.backgroundColor = "white";
    dep.classList.add("zoro")
    wid.classList.remove("zoro")
    bal.classList.remove("zoro")
    amount.classList.remove("remove")       
});

wid.addEventListener("click",()=>{
    wid.style.backgroundColor = "lightGreen";
    dep.style.backgroundColor = "white";
    bal.style.backgroundColor = "white";
    dep.classList.remove("zoro")
    wid.classList.add("zoro")
    bal.classList.remove("zoro")
    amount.classList.remove("remove")
});

bal.addEventListener("click",()=>{
    bal.style.backgroundColor = "lightGreen";
    dep.style.backgroundColor = "white";
    wid.style.backgroundColor = "white";
    dep.classList.remove("zoro")
    wid.classList.remove("zoro")
    bal.classList.add("zoro")
    amount.classList.add("remove")
});

button.addEventListener("click",(e)=>{
    e.preventDefault()
    custName = names.value
    balance = parseInt(amount.value);    
    
    if(custName==""){
        alert("Type your Name")
    }else{console.log(custName)
        // console.log(balance)
        final()
    }
});

const final = ()=>{
    if(dep.classList =="zoro"){
        console.log("dep") 
        // console.log(inBalance)       
        deposit(inBalance)      
    }else if(wid.classList =="zoro"){
        console.log("wid")
        withdraw(inBalance)
    }else if(bal.classList =="zoro"){
        console.log("bal")
        checkBalance(inBalance)
    }else{
        console.log("error");
    }
};

const deposit = ()=>{
    console.log(balance)
    inBalance += balance
    document.getElementById("ans").innerText = `${custName} Acc. Balance is ${inBalance}`;
    console.log(inBalance)
};

const withdraw = ()=>{
    console.log(balance)
    if(inBalance>= balance){
    inBalance = inBalance - balance
    ans.innerText = `${custName} Acc. Balance is ${inBalance}`;
    console.log(inBalance)
    }else{
        alert("Insufficient Funds")
    }
};
const checkBalance = ()=>{    
    console.log(balance)
    balance = 0;
    ans.innerText = `${custName} Acc. Balance is ${inBalance}`;
    console.log(inBalance)    
};
