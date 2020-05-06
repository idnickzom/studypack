function Redirect(url){
    window.location.href = url;
}

function Play(){
    document.getElementById('video').play();
}

function Pause(){
    document.getElementById('video').pause();
}

function SubmitQuiz(){
    var answers = ['2', '1', '3', '2', '3'];
    var correct = ['0', '0', '0', '0', '0'];
    var no_correct = 0;
    for (var j = 1; j <= 5; j++){
        var is_correct = false
        for (var i = 1; i <= 3; i++){
            var q = document.getElementById('q'+j+'_'+i+'').checked;
            if (q == true){
                if (i == parseInt(answers[(j - 1)])){
                    is_correct = true;
                    break;
                }
            }
        }
        if (is_correct){
            correct[(j - 1)] = '1';
            no_correct++;
        }
    }
    var score = (parseFloat((no_correct / 5) * 100)).toFixed(2);
    var mark = "fa fa-check-circle fa-5x";
    var color = "#008800";
    if (score < 50){
        mark = "fa fa-times-circle fa-5x";
        color = "#d00";
    }
    var response = '<div>'+
        '<i class = "'+mark+'" style = "color: '+color+';"></i>'+
        '<h4>Score: '+score+'%</h4>'+
        '<button class = "tips" onclick = "Redirect(\'quiz.html\')"><i class = "fa fa-history"></i> &nbsp;Try Again</button>'+
        '</div>';

    document.getElementById('showcase').innerHTML = response;
}