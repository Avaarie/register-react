import React, { useState } from 'react';

function Home (){
    const      [name, setName] = useState('Eva');
        
    function handleChange(e)  {
      e.preventDefault();
        
      setName(e.target.value);
    };

    return(
    <div>
    <div class="main-list">
        <form class="list" action="database.php" method="POST">
            <div class="details">
                <div class="login">
                    <span class="info">Login:</span>
                    <input type="text" name="login" value={name} placeholder="Enter your login..." cd register-reactonChange={handleChange}/> 
                </div>
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

