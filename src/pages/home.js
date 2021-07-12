import React ,{ useState } from 'react' ;

function Home (){
    const [login,SetLogin] = useState("");

    const [loginErr,SetLoginErr] = useState({});

    const onSubmit = (e)=>{
        e.preventDefault();
        const isValid = formValidation(); 
    }

    const formValidation = () =>{
        const loginErr = {};
        let isValid = true;

        if(login.trim().lenght < 5){
            loginErr.sad = "ajsdasjda";
            isValid = false;
        }

        SetLoginErr(loginErr);
        return isValid;
    }


    return(
    <div>
    <div class="main-list">
        <form class="list" action="database.php" method="POST" onSubmit={onSubmit}>
            <div class="details">
                <div class="login">
                    <span class="info">Login:</span>
                    <input type="text" name="login" placeholder="Enter your login..." onChange={(e)=>{SetLogin(e.target.value)}}/> 
                </div>
                {Object.keys(loginErr).map((key)=>{
                    return <div style={{color : "red"}}>{loginErr[key]}</div>
                })}
                <div class="login">
                    <span class="info">Password:</span>
                    <input type="text" name="login" placeholder="Enter your password..."/> 
                </div>
                <div class="login">
                    <span class="info">Link url:</span>
                    <input type="password" name="login"/>
                </div>
            </div>
            <div></div>
            <div class="description">
                <span class="infod">Link description:</span>
                <textarea name="link-desc"></textarea>                 
            </div>
            <div class="bottom">
                <select name="type">
                    <option value="type1">Image</option>
                    <option value="type2">Youtube link</option>
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