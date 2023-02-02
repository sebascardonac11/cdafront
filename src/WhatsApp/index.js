import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../Auth/Account";
function WhatsApp() {
    const [isLoggedin, SetIsLoggedin] = useState(false);
    const { getSession } = useContext(AccountContext);
    useEffect(() => {
        getSession().then(session => {
            SetIsLoggedin(true);
        })
    })
    return (
        <div className="WhatsApp">
            {isLoggedin ?
                <h2>WhatsApp</h2>
                :
                <h2>Por favor loguearse.</h2>
            }
        </div>
    )
}

export { WhatsApp };