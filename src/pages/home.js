import React, { useState } from 'react';

function Home (){
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [url,setURL] =useState("");

    const [nameErr,setNameErr] = useState({});
    const [passwordErr,setPasswordErr] = useState({});
    const [urlErr,setURLErr] = useState({});


    const onSubmit = (e)=>{
        e.preventDefault();
        const isValid = formValidation();
        if(isValid){
            setName("");
            setPassword("");
            setURL("");
        }
    }

    const formValidation = () =>{
        const nameErr = {};
        const passwordErr = {};
        const urlErr = {};
        let isValid = true;

        if(name.trim().length < 5){
            nameErr.NameShort = "Login can't be shorter than 5 characters!!";
            isValid = false;
        }

        if(name.trim().length > 10){
            nameErr.NameLong = "Login can't be longer than 10 characters!!"
            isValid = false;
        }

        if(!password.includes("1234")){
            passwordErr.Numbers = "Placehoolder for testing, needs to include 1234"
            isValid = false;
        }

        if(!url.includes("1234")){
            urlErr.Numbers11 = "Placehoolder for testing, needs to include 1234"
            isValid = false;
        }

        setNameErr(nameErr);
        setPasswordErr(passwordErr);
        setURLErr(urlErr);
        return isValid;
    }

    return(
    <div>
    <div class="main-list">
        <form class="list" onSubmit={onSubmit}>
            <div class="details">
                <div class="login">
                    <span class="info">Login:</span>
                    <input type="text" name="login" placeholder="Enter your login..." onChange={(e)=>{setName(e.target.value)}}/> 
                </div>
                {Object.keys(nameErr).map((key)=>{
                    return <div key={key} style={{color : "red"}}>{nameErr[key]}</div>
                })}
                <div class="login">
                    <span class="info">Password:</span>
                    <input type="password" name="password" placeholder="Enter your password..." onChange={(e)=>{setPassword(e.target.value)}}/> 
                </div>
                {Object.keys(passwordErr).map((key)=>{
                    return <div key={key} style={{color : "red"}}>{passwordErr[key]}</div>
                })}
                <div class="login">
                    <span class="info">Link url:</span>
                    <input type="text" name="url" />
                </div>
                {Object.keys(urlErr).map((key)=>{
                    return <div key={key} style={{color : "red"}}>{urlErr[key]}</div>
                })}
            </div>
            <div></div>
            <div class="description">
                <span class="infod">Link description:</span>
                <textarea name="link-desc"></textarea>                 
            </div>
            <div class="bottom">
                <select name="type">
                    <option value="type1">Image</option>
                    <option value="type2" selected>Youtube link</option>
                    <option value="type3">Other link</option>
                </select>
                <button type="submit" name="submit">Submit</button>
            </div>
        </form>
    </div>            
    </div>
    )
}

export default Home;

