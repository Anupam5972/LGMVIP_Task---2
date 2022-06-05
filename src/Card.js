import React from 'react';
import './style.css';

class Detail extends React.Component{
  render(){
    let cards=[];    
    let i;
    for(i=0;i<this.props.data.length;i++){
      cards.push( 
        <div key={this.props.data[i].id} className='userCard'>
          <img src={this.props.data[i].avatar} alt='profile pic'></img>
          <div className='name'>{this.props.data[i].first_name} {this.props.data[i].last_name}</div>
          <div className='email'>{this.props.data[i].email}</div>
        </div>); 
    }
    return(
      <div className='userCardContainer'>
        {cards}
      </div>
    );
  }
}

export default Detail;