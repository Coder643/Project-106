//https://teachablemachine.withgoogle.com/models/Fgu7p1nO4/model.json 

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Fgu7p1nO4/model.json ", modelReady());
}

function modelReady(){
    classifier.classify(goResults());

}

function goReults(error,results){
console.log("gotResult");
}