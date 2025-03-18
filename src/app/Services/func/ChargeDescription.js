'use client';
import DataCardServices from "../Data/DataCardServices";
import DataFeatureService from "../Data/DataFeatureService";

const ChargeDescription = () => {
     for(let x = 0; x <DataCardServices.length; x++){
            const Container = document.getElementById(`${DataCardServices[x].id_Caracteristicas_Services}`);
            switch(x){
                case 0:
                    for(let i = 0; i < DataFeatureService[0].SimplePage.length; i++){
                        const Span = document.createElement('span');
                        Span.innerText = DataFeatureService[0].SimplePage[i].service;
                        const IconCheck = document.createElement('i');
                        IconCheck.className = 'bx bxs-check-circle';
                        IconCheck.style.fontSize = '20px'
                        IconCheck.style.marginTop = '3px';
                        IconCheck.style.color = 'gray';
                        const SpanG = document.createElement('span');
                        SpanG.style.display = 'flex';
                        // SpanG.style.alignItems = 'start';
                        SpanG.append(IconCheck,Span)
                        Container.append(SpanG);
                    };
                    break;
                case 1:
                    for(let i = 0; i < DataFeatureService[0].MultiPage.length; i++){
                        const Span = document.createElement('span');
                        Span.innerText = DataFeatureService[0].MultiPage[i].service;
                        const IconCheck = document.createElement('i');
                        IconCheck.className = 'bx bxs-check-circle';
                        IconCheck.style.fontSize = '20px'
                        IconCheck.style.marginTop = '3px';
                        IconCheck.style.color = 'gray';
                        const SpanG = document.createElement('span');
                        SpanG.style.display = 'flex';
                        // SpanG.style.alignItems = 'start';
                        SpanG.append(IconCheck,Span)
                        Container.append(SpanG);
                    };
                    break;
                case 2:
                    for(let i = 0; i < DataFeatureService[0].DynamicPage.length; i++){
                        const Span = document.createElement('span');
                        Span.innerText = DataFeatureService[0].MultiPage[i].service;
                        const IconCheck = document.createElement('i');
                        IconCheck.className = 'bx bxs-check-circle';
                        IconCheck.style.fontSize = '20px'
                        IconCheck.style.marginTop = '3px';
                        IconCheck.style.color = 'gray';
                        const SpanG = document.createElement('span');
                        SpanG.style.display = 'flex';
                        // SpanG.style.alignItems = 'start';
                        SpanG.append(IconCheck,Span)
                        Container.append(SpanG);
                    };
                    break
                default:
                    break;
            };
    
        };
};
export default ChargeDescription;