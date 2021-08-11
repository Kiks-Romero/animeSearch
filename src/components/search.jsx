import React,{Component} from 'react';
import Preview from './preview'; 
import Tarjeta from './Tarjeta'
import { dataAnime } from './Peticiones';

class Search extends Component{
    constructor(){
        super()
        this.state={
            dAnime:[], //base de datos(todos los datos en array de objetos del fetch)
            aSelected:'',
            card:{}
        }
    }

    _handleClick(props) {
        this.setState({card:props})
      }
    

    render(){
        
        let {dAnime, aSelected,card}= this.state
        if(this.props.search && this.props.search!==this.state.aSelected){
            this.setState({aSelected:this.props.search})
            
            dataAnime(aSelected).then(res=>{
                this.setState({dAnime:res.data.results});
            })
        }

        return(
            // <>
            // <h2>buscador</h2>        
            // {/* {console.log(this.state.animeSelected,"deberia pasar algo")}    */}
            //     <Preview datos={this.state.animeSelected}/>
            // </>
            <>  
                {console.log(card)}
                <Tarjeta infoTarjeta={card}/>  
                {dAnime.map(item=>{
                return(
                    <ul onClick={() => this._handleClick(item)} key={item.mal_id}>
                       <Preview 
                        className="borderCard" 
                        datos={item}  
                        
                    /> 
                    </ul>
                    
                    )})
                    
                }
            </>
        )
    }
}
export default Search