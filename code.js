let access = false;
let malware = false;
let training = false;
let scurity = false;
let monitor = false;
let policies = false;
let firewall = false;
let backup = false;
const game = ["start", "spoofing", "man", "xss", "sqli", "dos", "social", "physical", "weak", "lack", "insecure", "zero", "phishing", "end"]
let current = 0;


function roll()
{
    let roll = Math.floor((Math.random() * 5) + 1);
    if (current + roll > 12)
    {
        //end game
    }
    else
    {
        current=+ roll;
    }
}
