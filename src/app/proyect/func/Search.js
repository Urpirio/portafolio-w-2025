'use client';
import DataProyects from "../Data/DataProyects";

const Search = () => {
    // alert('h')
    const Search_C = document.getElementById('Search1').value;
    for(let x = 0 ; x < DataProyects.length; x++ ){
        if(Search_C.toUpperCase() == DataProyects[x].NameP.toUpperCase()){
            document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
        }else{
            document.getElementById(`${DataProyects[x].id}`).style.display = 'none';
        };
    };

    let BoleanoSearch;
    const ArraySearch = Search_C.toUpperCase().split('');
    for(let x = 0 ; x < DataProyects.length; x++){
        const ArrayData = DataProyects[x].NameP.toUpperCase().split('');
        const filtro = ArraySearch[0] == ArrayData[0];
        const filtro2 = filtro && ArraySearch[1] == ArrayData[1];
        const filtro3 = filtro2 && ArraySearch[2] == ArrayData[2];
        const filtro4 = filtro3 &&  ArraySearch[3] == ArrayData[3];
        const filtro5 = filtro4 &&  ArraySearch[4] == ArrayData[4];
        const filtro6 = filtro5 &&  ArraySearch[5] == ArrayData[5];
        const filtro7 = filtro6 &&  ArraySearch[6] == ArrayData[6];
        const filtro8 = filtro7 &&  ArraySearch[7] == ArrayData[7];
        const filtro9 = filtro8 &&  ArraySearch[8] == ArrayData[8];




        
        switch(Search_C.length){
            case 1:
                if( filtro == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            case 2:
                if(filtro2 == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            case 3:
                if(filtro3 == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            case 4:
                if(filtro4 == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            case 5:
                if(filtro5 == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            case 6:
                if(filtro6 == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            case 7:
                if(filtro7 == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            case 8:
                if(filtro8 == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            case 9:
                if(filtro9 == true){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                    BoleanoSearch = true;
                }else{
                    if(BoleanoSearch == undefined){
                        document.getElementById('RenderProyects').style.display = 'flex';
                    };
                };
                break;
            default:
                for(let x =0; x < DataProyects.length; x++){
                    document.getElementById(`${DataProyects[x].id}`).style.display = 'flex';
                    document.getElementById('RenderProyects').style.display = 'none';
                };
                break;
        }
    }
};
export default Search;