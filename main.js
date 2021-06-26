Webcam.set({
    width : 600,
    height : 650,
    image_format :'png',
    png_quality : 90
})
camera = document.getElementById("Webcam");
Webcam.attach('#Webcam');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "capture_img" src = "'+data_uri+'">'
    })
}
console.log("ml5.version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CIA6-fP83/model.json', modelLoaded);
function modelLoaded(){
    console.log("model is loaded!");
}
function check(){
    img = document.getElementById('capture_img')
    classifier.classify(img , gotResult);
}
function gotResult(error , results){
    if(error){
    console.error(error)
    }
    else{
console.log(results)
document.getElementById("Result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}