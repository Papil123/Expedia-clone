<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
		Payment Page</title>
        <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAY1BMVEX///9WVlpRUVXPzs75+fl3d3ri4uN9fYBDQ0hMTFCJiYvJycpQUFRwcHOSkpRHR0y5ubpcXGDc3N3U1NWampxiYmZra27u7u6hoaKysrSDg4asrK7x8fJ5eXu8vL7n5+c4OD7xJQtnAAADZUlEQVR4nO3dYV+iMACA8TGhWg6IUkg89b7/pzyzuws2kIF1t63n/1YFn1/pBkwVq8gJAAAAAAAAAAAAAAAAAAAAAAAAAAC+sbR+iMnPvRWYySQiakdg2AgM3XcMzLWMSGkHFllM8qM90sfF6gMAAAAAAAAAAAAAwBf79nG+YrNfN7Ouh8+4gr5Z8ITeta8DmyvUgtUaWqtS5fsfzn2n/HCWDT0BS714YYu6HwrUSxfdSKWtVSlj7h4uT+DR5b754qVJ8nMDz8rWNbC8PIHgAhO1iTwwUevIA+Uh8sBEP0ceaC9g9DrwPMJNMPfu9qRvCJwzPE8GysfNhKLdqv7+s68NrOcspiymAvXd9P7TYz+w/tJAvbp1NWU/0OkdY6f/YeCLy0OuWRDYbCMPFN2F7FEGHmIPvCfQRGAHgfMQOIBAS2CBsQ/0aZ3EHfgS8GTb4XDpPNeWswNPiwOPdyNOLtsS5gHvbj1l36reAanMP7aVjj5qdzlKlofRO3T+dfoHvFoNK50OtM3A0c11GOcsZOfcb5OMPej3TuTY7Q+d86tu52QGz79MB86nO9cbmuoztuJZoOq8C8QYKOvOJaYYA3sfe44wUGfdE1nxvcnobdPdVnp8GrG/7EXmY7c/dV7J/gRK1bpe41080P+3QKlVkrldOnvz+dcmBk/TTwf2B3prT39vrvLi6DKtuz2w2g6rXC8uX5mLpplxGeKw+IsGlk+23Q7grrh2NJG2RmG1dHfeHE0YAWlhFCb2l2E48TVQpJt+YW9EnsHbQCHMQtUueSF6HChezb9h3dh3muJzoNgZhVKuZu/F60BxNAoT9yVcf/gdKNbmbEcPXQy/xvNAsTILVea+0vCN74HiJTGmbXo7Z6bmf6B4NguldJ9qhxAoTltz6l3OGPMDCBRNbb0Q3cf8EAJFk1tvprXr6eUgAt++JtAolJXj/sMIFOnBKtRPTnsJJFCI1pzUJKXTouZgAsWmNAtV7vBWE06geLUKZTU95gcUKPZ2YTI55vsSqFzOueztVb/K+nprw3ugnh+obg9Mqg+J23rRyiKL6y/EO33ZvNNBSNbdcHJzIAAAAAAAAAAAAAAA+DdOYx/jDpO1EDnNl3yBqrcGfoc3+l9SJjAoBIbuOwbG/3Pt9zHJFn5CFQCAqPwC1B6EAfvTPPcAAAAASUVORK5CYII="
        type="image/x-icon">
</head>

<style>
    
body { 
 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  background-size: cover;
  
}
#atm_card{
    position: absolute;
     top: 50%;
     left: 50%;
     margin-right: -50%;
transform: translate(-50%,-50%);
        width: 400px;
        height: 200px;
        padding: 20px;
        border-radius: 15px;
        background-image: url('data:image/jpeg;base64,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');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size:cover;
        opacity: 0.8;
        
}
</style>
<body>
    
    <div id = 'justCreatedThisDiv' style = 'margin: 0 auto;'>
        <div id="atm_card">
            <h4 style="margin-top: -2%;text-align: center;">Enter Card Details</h4>
            <form>
                <label for="card_number"><b>Card Number:</b></label>
                <input class="card_number" type="number" placeholder="Enter Card Number">
                <br>
                <p>  </p>
                
                <label for="card_holder_name"><b>Card Holder Name:</b></label>
                <input class="card_holder_name" type="text" placeholder="Enter Card Holder Name">

                <p> </p>
                <label for="expiry"><b>Date of Expiry</b></label>
                <input class="expiry" type="text" placeholder="MM/YY" maxlength="5" size="5">
                <p>

                </p>

                <label for="cvv"><b>CVV</b></label>
                <input class="cvv" type="password" placeholder="Enter CVV"maxlength="5" size="5">

                <p>

                </p>
                <input type="submit" value="Generate OTP" onclick="gototp()" >
            </form>

        </div>
       

    </div>
   
</body>
</html>
<script>

    
    


    document.querySelector("form").addEventListener("submit",formsubmit);
  var userstack = JSON.parse(localStorage.getItem("userdatabase"))||[];
    function formsubmit(event){
        event.preventDefault();
        var card_number = document.querySelector(".card_number").value;
        var card_holder_name = document.querySelector(".card_holder_name").value;
        var expiry = document.querySelector(".expiry").value;
        var cvv = document.querySelector(".cvv").value;

    
        var userData = {
            cardnumber: card_number,
            cardname : card_holder_name,
            expirydate : expiry,
            cvvnumber : cvv,
        };
        userstack.push(userData);
    

        localStorage.setItem("userdatabase",JSON.stringify(userstack));
    }

    function gototp(){
       alert("OTP Generated");
       window.location.href='otp.html';
    }
</script>