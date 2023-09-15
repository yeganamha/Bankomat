let pin ="";
let trycount =3;
let userPin=prompt("Add your PIN");
pin = userPin;
let balance =7000;
let salary =2100;
let hasCredit=false;
let transactions =[];

while(trycount>0){
    let loginPin =prompt("Add your PIN for registr");
    if(loginPin===pin){
        console.log("Welcome");
        WithDraw();
        break;
        
    }
    else{
        trycount--;
        console.log(`Try again and count ${trycount}`);
        if(trycount===0){
          console.error("Your card is blocked")  
        }
    }

}

function WithDraw(){

    let amount =Math.abs(Number(prompt("Add your amount")));
        if(amount<=balance){
            balance-=amount;

            let transactionObj ={
                amount:amount,
                date: new Date(),
                deposite: false
            }

            transactions.push(transactionObj);
            console.log(`Your balance: ${balance}`)
        }
        if(balance==0 && !hasCredit){
            const isOfferCredit =confirm("Do you want credit?")
            if(isOfferCredit){
                let result = CheckCredit(salary);
                console.log(`Your maximum amount ${result.maxCreditAmount}, Your monthly amonut: ${result.monthlyPayment}`);
                const hasAcceptedCredit =confirm("Are you agree with offer?");
                if(hasAcceptedCredit){
                    balance+=result.maxCreditAmount;
                    let transactionCreditObj ={
                        amount:amount,
                        date: new Date(),
                        deposite: true
                    }
                    transactions.push(transactionCreditObj);
                    hasCredit=true;
                    console.log("Balance is added. Your Balance:", balance);
                }
                else{
                    console.log("Bax da ozun bilersen");
                    return;
                }
            }
        }
        else{
            console.info("Your balance is not enough. Do you want continue?")
        }
        let isContunue= confirm("Do you want again?");
           if(isContunue){
            WithDraw();
           }
           else{
            console.log("Thank you for visiting")
           }
}

        let operation =prompt("For balance: B, For transactions T");
        switch(operation){
            case "B":
                console.log("Your balance", balance);
                break;
            case "T":
                ShowTransactions();
                break;
                
        }

function CheckCredit(salary){
    let possiblePayment = salary*30/100;
    let possibleCreditAmount =12*possiblePayment;
    let resultCreditAmount =possibleCreditAmount-(possibleCreditAmount*0.1);
    return {
        monthlyPayment:possiblePayment,
        maxCreditAmount:resultCreditAmount
    }
}

function ShowTransactions(){
    transactions.forEach((tr)=>{
        document.write('Amount: ')
    })
}
