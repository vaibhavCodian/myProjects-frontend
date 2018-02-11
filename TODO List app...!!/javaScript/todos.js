// check of specific Todos by clicking

$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});


//Click on X to delete the TODO
$("ul").on("click", "span",function(eve){
    
    $(this).parent().fadeOut(300,function(){
        
       $(this).remove(); 
        console.log("the element was removed!" );
    });
    eve.stopPropagation();
});


$("input[type='text']").keypress(function(event){
   
    if(event.which === 13){
        //getting new todo
        
        var newTodo = $(this).val();
        
        //creating a new li to ul
        
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodo + " </li>");   
    }    
});


$(".fa-plus").click(function(){
   
    $("input[type='text'").fadeToggle();
    
});

