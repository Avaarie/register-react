import React, { useState } from 'react';

function Home (){
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [url,setURL] = useState("");

    const [nameErr,setNameErr] = useState({});
    const [passwordErr,setPasswordErr] = useState({});
    const [urlErr,setURLErr] = useState({});


    const onSubmit = (e)=>{
        e.preventDefault();
        const isValid = formValidation();
        console.log({name, password, url});
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
            passwordErr.Numbers = "Placeholder for testing, needs to include 1234"
            isValid = false;
        }

        // if(password.includes("[A-Z]")){ 
        //     passwordErr.Numbers = "??????????????????"
        //     isValid = false;
        // }


        if(!url.includes("1234")){
            urlErr.Numbersss = "Placeholder for testing, needs to include 1234"
            isValid = false;
        }

        setNameErr(nameErr);
        setPasswordErr(passwordErr);
        setURLErr(urlErr);
        return isValid;
    }

    return(
    <div>
    <div className="main-list">
        <form className="list" onSubmit={onSubmit}>
            <div className="details">
                <div className="login">
                    <span className="info">Login:</span>
                    <input type="text" name="login" value={name} placeholder="Enter your login..." onChange={(e)=>{setName(e.target.value)}}/> 
                </div>
                {Object.keys(nameErr).map((key,index)=>{ 
                    return <div key={index} style={{color : "red"}}>{nameErr[key]}</div>
                })} 
                <div className="login">
                    <span className="info">Password:</span>
                    <input type="password" name="password" value={password} placeholder="Enter your password..." onChange={(e)=>{setPassword(e.target.value)}}/> 
                </div>
                {Object.keys(passwordErr).map((key,index)=>{
                    return <div key={index} style={{color : "red"}}>{passwordErr[key]}</div>
                })} 
                <div className="login">
                    <span className="info">Link url:</span>
                    <input type="text" name="url" value={url} onChange={(e)=>{setURL(e.target.value)}} />
                </div>
                {Object.keys(urlErr).map((key,index)=>{
                    return <div key={index} style={{color : "red"}}>{urlErr[key]}</div>
                })}
            </div>
            <div></div>
            <div className="description">
                <span className="infod">Link description:</span>
                <textarea name="link-desc"></textarea>                 
            </div>
            <div className="bottom">
                <select name="type">
                    <option value="type1">Image</option>
                    <option value="type2" selected>Youtube link</option>
                    <option value="type3">Other link</option>
                </select>
                <button type="button" onClick={onSubmit} name="submit">Submit</button>
            </div>
        </form>
    </div>            
    </div>
    )
}

export default Home;

