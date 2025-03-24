const Loading = (Star = true) => {
    if(Star === true){
        let ConditionLoading;
        const divLoading = document.createElement('div');
        divLoading.id = 'divLoading';
        divLoading.style.width = '100%';
        divLoading.style.display = 'flex';
        divLoading.style.justifyContent = 'center';
        const Loading = document.createElement('span');
        Loading.style.fontSize = '20px';
        Loading.style.fontWeight = '600';
        Loading.style.color = '#0d542b';
        divLoading.append(Loading);
        
        var LoadingFun = setInterval(()=>{
            if(ConditionLoading == undefined){
                Loading.innerText = 'Loading.';
                ConditionLoading = 1;
    
            }else if(ConditionLoading == 1){
                Loading.innerText = 'Loading..';
                ConditionLoading = 2;
    
            }else{
                Loading.innerText = 'Loading...';
                ConditionLoading = undefined;
            }
        },300);
        document.getElementById('FormHome').append(divLoading);
    }else{
        document.getElementById('divLoading').remove();
        LoadingFun = null;
        
    };
};
export default Loading;