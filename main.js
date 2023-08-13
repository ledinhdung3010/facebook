
var container_search=document.querySelector('.search');
var input=document.querySelector('.input');
var search=document.querySelector('.fa-magnifying-glass');
document.addEventListener('click',function(event){
    if(event.target==container_search|| event.target==input||event.target==search){
        search.style.display='none';
        var input_search=document.querySelector('.input_search');
        input_search.style.width='92%';
        input.style.width='100%';
        input.style.marginLeft='10px'
        var icon=document.querySelector('.img_icon');
        icon.style.display='none';
        var arrow_left=document.querySelector('.fa-arrow-left-long');
        arrow_left.style.display='block';


    }else{
        search.style.display='block';
        var input_search=document.querySelector('.input_search');
        
        input.style.width='190px';
        input.style.marginTop='2px'
        input.style.marginLeft='0px'
        var icon=document.querySelector('.img_icon');
        icon.style.display='block';
        var arrow_left=document.querySelector('.fa-arrow-left-long');
        arrow_left.style.display='none';
    }

})
    
    
