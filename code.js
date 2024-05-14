let secure = false;
let access = false;
let malware = false;
let training = false;
let security = false;
let monitor = false;
let policies = false;
let firewall = false;
let backup = false;
let spoofing = false;
let man = false;
let xss = false;
let sqli = false;
let dos = false;
let social = false;
let physical = false;
let weak = false;
let lack = false;
let insecure = false;
let zero = false;
let phishing = false;

const game = ["start", "spoofing", "man", "xss", "sqli", "dos", "social", "physical", "weak", "lack", "insecure", "zero", "phishing", "end"]
let current = 0;
let money = 1000;
let SEL = 5000;


function roll()
{
    let roll = Math.floor((Math.random() * 5) + 1);
    if (current + roll > 12)
    {
        current = 13;
        //say end game
    }
    else
    {
        current = current + roll;
        land(game[current]);
    }
}

function buy(x)
{
    if (money >= 200 && (eval(x + " == false")))
    {
        money-=200;
        console.log(x);
        eval(x + " = true");
        document.getElementById('money').textContent = "Money: " + money;
    }
}
function land(x)
{
    if(x == "spoofing")
    {
        if (secure == true || monitor == true || firewall == true)
        {
            
        }
        else
        {

        }
    }
    if(x == "man")
    {
        
    }
    if(x == "xss")
    {
        
    }
    if(x == "sqli")
    {
        
    }
    if(x == "dos")
    {
        
    }
    if(x == "social")
    {
        
    }
    if(x == "physical")
    {
        
    }
    if(x == "weak")
    {
        
    }
    if(x == "lack")
    {
        
    }
    if(x == "insecure")
    {
        
    }
    if(x == "zero")
    {
        
    }
    if(x == "phishing")
    {
        
    }
}