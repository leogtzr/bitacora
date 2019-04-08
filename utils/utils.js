exports.printParams = function(req, res) {
    const params = req.body;
    console.log('<~~~~~~~~~~~~~~~~~~~~~~~~~~~~ REQUEST PARAMS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(params);
    console.log('<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/>');
}

exports.printSeparators = function() {
    console.warn("__________________________________________________________");
}

exports.printSeparators2 = function() {
    console.warn('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
}

exports.printSeparators3 = function() {
    console.warn('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
}
