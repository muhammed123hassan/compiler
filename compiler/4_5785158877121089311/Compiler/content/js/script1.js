var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    mode:"javascript",
    theme:"dracula",
    lineNumbers:true,
    autoCloseTags:true,
    autoCloseBrackets:true,
    tabSize:2,
    extraKeys:{"Ctrl-Space":"autocomplete"}
});
let scanner = 1;
function myFunction(){
    if(scanner == 0){
        document.getElementById("scanner-error-word").classList.add("scanner-block");
    }else{
        document.getElementById("scanner-correct-word").classList.add("scanner-block");
    }
    
}
let parser = 1;
function myFunction2(){
    if(parser == 0){
        document.getElementById("parser-error-word").classList.add("parser-block");
    }else{
        document.getElementById("parser-correct-word").classList.add("parser-block");
    }
    
}
