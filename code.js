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
const game = ["start", "spoofing", "man", "xss", "sqli", "dos", "social", "physical", "weak", "lack", "insecure", "zero", "phishing", "win"]
let current = 0;
let money = 1000;
let sle = 5000;
let previous  = 0;

function roll()
{
    let roll = Math.floor((Math.random() * 5) + 1);
    if(current == 13)
    {
        return "game over";
    }
    if (current + roll > 12)
    {
        previous = current;
        current = 13;
        document.getElementById('update').textContent = "You got to the end with " + (money + sle) + " dollars. Refresh the page to play again and try to get a better score.";
    }
    else
    {
        previous = current;
        current = current + roll;
        land(game[current]);
    }
    active(current,previous);
}

function active(x, y)
{
        str = 'document.getElementById("' + game[x] + '").src = "' + game[x] + '2' + '.png"';
        eval(str);
        eval("document.getElementById('" + game[y] + "').src = '" + game[y] + ".png'");
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
        if (secure == true || monitor == true || firewall == true || backup == true)
        {
            document.getElementById('update').textContent = "You got hit by a spoofing attack but fortunately your systems had the right protection.";
        }
        else if (dos == true)
        {
            document.getElementById('update').textContent = "The hackers attempted a SQL injection attack but forgot you DDoSed their wifi.";
        }
        else
        {
            sle-=2000;
            document.getElementById('sle').textContent = "SLE: " + sle;
            document.getElementById('update').textContent = "You got hit by a spoofing attack and all your data got stolen. You had to pay $2000 to get it back.";
        }
    }
    if(x == "man")
    {
        if (secure == true || monitor == true || firewall == true || backup == true)
        {
                document.getElementById('update').textContent = "You got hit by a man-in-the-middle attack but fortunately your systems had the right protection.";
        }
        else if (dos == true)
        {
                document.getElementById('update').textContent = "The hackers attempted a SQL injection attack but forgot you DDoSed their wifi.";
        }
        else
        {
                sle-=2000;
                document.getElementById('sle').textContent = "SLE: " + sle;
                document.getElementById('update').textContent = "You got hit by a man-in-the-middle attack and all your data got leaked. You had to pay $2000 to get it back.";
        }
    }
    if(x == "xss")
    {
        if (policies == true || training == true || malware == true)
        {
                document.getElementById('update').textContent = "You got hit by a cross-site scripting attack but fortunately your employees knew to not click on suspicious links and/or you had malware protection.";
        }
        else
        {
                sle-=2000;
                document.getElementById('sle').textContent = "SLE: " + sle;
                document.getElementById('update').textContent = "You got hit by a cross-site scripting attack and all your data got leaked. You had to pay $2000 to get it back.";
        }
    }
    if(x == "sqli")
    {
        if (secure == true || monitor == true || firewall == true || backup == true)
            {
                    document.getElementById('update').textContent = "You got hit by a SQL injection attack but fortunately your systems had the right protection.";
            }
            else if (dos == true)
            {
                    document.getElementById('update').textContent = "The hackers attempted a SQL injection attack but forgot you DDoSed their wifi.";
            }
            else
            {
                    sle-=2000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "You got hit by a SQL injection attack and all your data got leaked. You had to pay $2000 to get it back.";
            }
    }
    if(x == "dos")
    {
        if (firewall == true || backup == true)
            {
                    document.getElementById('update').textContent = "You got hit by a DoS attack but fortunately your systems had the right protection.";
            }
            else if (dos == true)
            {
                    document.getElementById('update').textContent = "The hackers attempted a DoS attack but you DDoSed them first lol";
            }
            else
            {
                    sle-=1000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "Your wifi got hit by a DoS attack so your employees could not work and lost $1000 in profits.";
            }
    }
    if(x == "social")
    {
        if (policies == true || training == true || access == true)
            {
                    document.getElementById('update').textContent = "You got hit by a social engineering attack but fortunately your employees knew better and/or your systems had protection.";
            }
            else
            {
                    sle-=2000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "You got hit by a social engineering scripting attack and all your data got leaked. You had to pay $2000 to get it back.";
            }
    }
    if(x == "physical")
    {
        if (security == true )
            {
                    document.getElementById('update').textContent = "The hackers tried to go through the hole in the company building but fortunately your bodyguards fought them off.";
            }
            else
            {
                    sle-=5000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "The hackers walked through the hole in the company walls and stole the equipment, the data servers, and even the employees. gg unlucky -$5000";
            }
    }
    if(x == "weak")
    {
        if (secure == true || access == true || policies == true)
            {
                    document.getElementById('update').textContent = "The hackers attempted to exploit weak configurations but fortunately your systems had the right protection.";
            }
            else if (dos == true)
            {
                    document.getElementById('update').textContent = "The hackers attempted to exploit weak configurations but forgot you DDoSed their wifi.";
            }
            else
            {
                    sle-=2000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "The hackers exploited your weak configurations and all your data got leaked. You had to pay $2000 to get it back.";
            }
    }
    if(x == "lack")
    {
        if (policies == true || training == true || access == true)
            {
                    document.getElementById('update').textContent = "The hackers attempted to exploit your lack of awareness but fortunately you did not lack awarness.";
            }
            else
            {
                    sle-=2000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "The hackers exploited your lack of awareness and all your data got leaked. You had to pay $2000 to get it back.";
            }
    }
    if(x == "insecure")
    {
        if (secure == true || access == true || policies == true || monitor == true)
            {
                    document.getElementById('update').textContent = "The hackers attempted to exploit insecure wifi but fortunately your systems had the right protection.";
            }
            else if (dos == true)
            {
                    document.getElementById('update').textContent = "The hackers attempted to exploit insecure wifi but forgot you DDoSed their wifi.";
            }
            else
            {
                    sle-=2000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "The hackers exploited your insecure wifi and all your data got leaked. You had to pay $2000 to get it back.";
            }
    }
    if(x == "zero")
    {
        if (backup == true)
            {
                    document.getElementById('update').textContent = "You got hit by a zero day exploit but they did not save the data so your data back up actually worked this time";
            }
            else if (dos == true)
            {
                    document.getElementById('update').textContent = "The hackers attempted to use a zero day exploit but forgot you DDoSed their wifi.";
            }
            else
            {
                    sle-=2000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "The hackers used a new zero day exploit and all your data got leaked. You had to pay $2000 to get it back.";
            }
    }
    if(x == "phishing")
    {
        if (policies == true || training == true)
            {
                    document.getElementById('update').textContent = "You got hit by a phishing attack but fortunately your employees knew to not click on suspicious links.";
            }
            else
            {
                    sle-=2000;
                    document.getElementById('sle').textContent = "SLE: " + sle;
                    document.getElementById('update').textContent = "You got hit by a phishing attack and all your data got leaked. You had to pay $2000 to get it back.";
            }
    }
}