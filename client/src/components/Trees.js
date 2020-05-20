import React, { Component } from 'react';

class Trees extends Component{
    render(){
        console.log('routes:',this.props.routes)
        let treesToPlant = this.props.routes
      .reduce((acc, route) => {
        console.log(parseInt(route.co2emission));
        return acc + parseInt(route.co2emission) / 23.2;
      }, 0)
      .toFixed(2);
  
    let splitted = treesToPlant.split(".");
    let fullTrees=[];
    for (var i = 1; i <= parseInt(splitted[0]); i++) {
fullTrees.push(i);
    };

   const fullTreesImages=fullTrees.map(tree=>{
       return <img
            src={require('./tree.jpg')}
            alt=''
            width='10%'
            key={tree}
        />
    });

    
    console.log(splitted);
    console.log(fullTrees)
    console.log("trees:", treesToPlant);

        return(
<div>

    {fullTreesImages}
    {splitted[1]>=5? <img src={require('./treetwo.jpg')} alt='' width='5%'key='halftree'/> : <> </>}

</div>
        )
    }
}



export default Trees; 