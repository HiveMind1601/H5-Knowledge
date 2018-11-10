import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const TabIcon =props=>{
    return(
        <Icon 
            name={props.IconName || 'circle'}
            size={18}
            style={{color:props.focuses?'orange':'#e5e5e5'}}
        />
    )
}

export default TabIcon;