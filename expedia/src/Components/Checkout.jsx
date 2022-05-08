<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #container{
        display: grid;
        grid-template-columns: 70% 30%;
        height: 900px;
    }
    input{
        padding: 5px 10px;
        margin-top: 10px;
        display: block;
        width: 90%;
    }
    #right{
        background-color: #f4f4f4;
    }
    #shipping{
        width: 45%;
        /* border: 1px solid red; */
        margin: auto;
        margin-top: 50px;
    }
    #logo>img{
        width: 150px;
        display: block;
        margin: auto;
    }
    #logo{
        align-items: center;
        margin: auto;
        /* border: 1px solid yellow; */
    }
    #sub{
        margin: auto;
        margin-left: 180px;
    }
    #subtitle{
        display: inline-block;
        /* margin-left: 40px; */
        margin: auto;
        /* align-items: center; */
        /* border: 1px solid red; */
        padding: 10px;
    }
    #name,#zip{
        display: flex;
        gap: 70px;
    }
    
    #form>div{
        margin-bottom: 25px;
    }
    #ship{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        padding-right: 25px;
    }
    button{
        background-color: black;
        color: white;
        padding: 10px 80px;
    }
    #btn{
        /* border: 1px solid red; */
        display: flex;
        padding-right:22px ;
        justify-content: end;
    }
    #form{
        font-weight: bold;
        font-family: sans-serif;
    }
    #right>div{
        /* background-color: white; */
        margin-top: 50px;
    }
    th{
        padding: 25px;
        text-align: left;
        color: black;
        font-weight: 500;
    }
    td{
        padding: 5px 25px;
    }
    table{
        font-family: sans-serif;
        /* border: 1px solid red; */
        margin-left: 20px ;
        background-color: white;
        width: 70%;
        color: rgb(139, 138, 138);
        padding-bottom: 25px;
    }
</style>
<body>
    <div id="container">
        <div id="left">
            <div id="shipping">
                <div id="logo">
                    <img src="https://www.stpaulcollection.com/wp-content/uploads/2018/11/st-paul-collection-amenities-cb2.png" alt="">
                    
                </div>
                <div id="sub">
                    <div id="subtitle">CHECKOUT</div>
                </div>
                <div id="ship">
                    <div >SHIP TO</div>
                    <div style="text-decoration: underline;">ship to multiple addresses</div>
                </div>
                
                <div id="form">
                    <div id="name">
                        <div>
                            <div>First Name</div>
                            <input type="text">
                        </div>
                        <div>
                            <div>Last Name</div>
                            <input type="text">
                        </div>
                    </div>
                    <div id="address">
                        <div>Street Address</div>
                        <input type="text" name="" id="">
                    </div>
                    <div id="zip">
                        <div>
                            <div>Zip Code</div>
                            <input type="text">
                        </div>
                        <div>
                            <div>City</div>
                            <input type="text">
                        </div>
                    </div>
                    <div id="state">
                        <div>State</div>
                        <input type="text">
                    </div>
                    <div id="phone">
                        <div>Phone Number</div>
                        <input type="text">
                    </div>
                </div>
                <div id="btn">
                    <button onclick="window.location.href='payment.html'">NEXT</button>
                </div>
                
            </div>
            
        </div>
        <div id="right">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style="font-size: 20px;">ORDER SUMMARY</th>
                            <th style="text-decoration: underline;">edit cart</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Merchandise:</td>
                            <td id="amount"></td>
                        </tr>
                        <tr>
                            <td>Shipping & handline:</td>
                            <td>$249</td>
                        </tr>
                        <tr>
                            <td>Tax:</td>
                            <td>$890</td>
                        </tr>
                        
                        <tr>
                            <td style="color: black;">Order total:</td>
                            <td style="color: black;" id="total"></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</body>
</html>

<script>

    let amount = JSON.parse(localStorage.getItem("total_value"));
    //console.log(amount)
    document.getElementById("amount").innerHTML="";
    document.getElementById("amount").innerText= `$${amount}`;


    let total = amount+249+890;
    document.getElementById("total").innerHTML="";
    document.getElementById("total").innerText= `$${total}`;


</script>