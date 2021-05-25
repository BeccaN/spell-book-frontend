import React, { Component } from 'react'
import './spell.css'
import SpellDetails from './SpellDetails';

class CollapsibleDesc extends Component {
  
  constructor(props){
    super(props);
    this.state = {
    open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
    }
  
    togglePanel(e){
    this.setState({open: !this.state.open})
    }
  
    render() {
      return (
        <div>
          <div onClick={(e)=>this.togglePanel(e)} className='spell-header'>

            <SpellDetails spell={this.props.spell}/>

            {!(this.state.open) ? (
              <div className="center mt-1 direction">
                <strong>view spell description</strong>
              </div>
            )
            : (
              <div className="center mt-1 direction">
                <strong>hide spell description</strong>
              </div>
            )}
          </div>

          {this.state.open ? (
            <div className='content'>
              <div dangerouslySetInnerHTML={{__html: this.props.spell.desc}} />
              <div dangerouslySetInnerHTML={{__html: this.props.spell.higher_lvl}} />
              <small>Book Page: {this.props.spell.page}</small>
            </div>
          ) : null}

          
        </div>
      )
    }
}


export default CollapsibleDesc