function projectContain(path){
    console.log("path");
    console.log(path)
    document.getElementById("display-contain")
    .innerHTML=`<object style="width: 100%;height: 85%;" type="text/html" data="${path}"></object>`;
}