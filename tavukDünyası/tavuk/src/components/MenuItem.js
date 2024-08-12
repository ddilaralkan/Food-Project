import { purple, red } from "@mui/material/colors";

function MenuItem({image, name, content, price}) {
    return ( 
        <div className="menuItem">
            <div style={{backgroundImage:`url(${image}`}}>
            <div> <h1 style={{marginBottom:'10px' }}>{name}</h1></div>
            <h6 style={{marginTop:'0px' , fontSize:'11px', padding:'5px'}}>{content}</h6>
            <p style={{color: 'red', fontWeight:'bold'}}>
                <i style={{fontWeight:'bold', color:'brown'}}>{price} TL</i>
                <button className="menuButtonSepet">Sepete Ekle</button>
            </p>
            

            </div>
        </div>
      );
}

export default MenuItem;