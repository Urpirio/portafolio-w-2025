const Loading = (Star = true) => {
    if(Star === true){
        let IsLoading;
        const divLoading = document.createElement('div');
        divLoading.id = 'divLoading';
        divLoading.style.width = '100%';
        divLoading.style.display = 'flex';
        divLoading.style.justifyContent = 'center';
        const spanLoading = document.createElement('span');
        spanLoading.style.fontSize = '20px';
        spanLoading.style.fontWeight = '600';
        spanLoading.style.color = '#0d542b';
        divLoading.append(spanLoading);
        
        var AnimeLoading = setInterval(()=>{
            if(IsLoading == undefined){
                spanLoading.innerText = 'Loading.';
                IsLoading = 1;
    
            }else if(IsLoading == 1){
                spanLoading.innerText = 'Loading..';
                IsLoading = 2;
    
            }else{
                spanLoading.innerText = 'Loading...';
                IsLoading = undefined;
            }
        },300);
        document.getElementById('FormHome').append(divLoading);
    }else{
        document.getElementById('divLoading').remove();
        AnimeLoading = null;
        
    };
};
export default Loading;