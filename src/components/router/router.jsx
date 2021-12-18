import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../Home/HomePage";
import OrderLogin from "../pages/orderlogin";
import OrderSuccessfull from "../Ordersuccessfull/OrderSuccessfull";

function Router(){
    return(
        <div>
            <BrowserRouter >
                <Switch>
                    <Route path="/Home" component={HomePage}/>
                    <Route exact path="/" component={OrderLogin}/>
                    <Route path = "/ordersuccess" component={OrderSuccessfull}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Router;