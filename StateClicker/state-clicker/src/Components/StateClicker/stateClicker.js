import React,{Component} from 'react';

class StateClicker extends Component{
    state = {
        num:null,
        win:false
    }

    handleClick = e => {
        let luckyNumber = 7;
        let rand = this.getRandom();
        if(rand === luckyNumber){
            this.setState({num:rand,win:true});
        }
        
        this.setState({num:rand});
        return;
    }

    getRandom = () => {
        let max = 10;
        let rand = ((Math.floor(Math.random() * max))+1);
        return rand;
    }

    render(){
        return(
            <div>
            <h1>Your number is: {this.state.num}</h1>
            {this.state.win ? <h2>You win!!!</h2> : <button onClick = {this.handleClick}>Click Me!</button>}
            </div>
        )
    }
}

export default StateClicker;