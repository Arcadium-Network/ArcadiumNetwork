 var tronWeb;
var waiting = 0;
var currentAddr;
var time = 0;
var pottime = 0;

var a_godTimer = "";
var godtimer_in_seconds = 0;
var god_numhours = 0;
var god_numminutes = 0;
var god_numseconds = 0;

var god_roundover = false;
var godtimer_lastminute = 300;
var i_godTimer = false;

async function main() {
    if (typeof(window.tronWeb) === 'undefined') {
        console.log('Waiting for tronWeb...');
        waiting += 1;
        if (waiting == 5) {
            $('#check').modal('show');
        }
        setTimeout(main, 1000);
    } else {
        tronWeb = window.tronWeb;
        Decker = await tronWeb.contract().at("TE4nZoGQxtHjDjVexL6ZYNR7SuaJf4V72X");
        BigNumber = tronWeb.BigNumber;
        currentAddr = tronWeb.defaultAddress['base58'];
        setTimeout(function() {
            $('#check').hide();
            load100();
        }, 2000);
        setInterval(function() {mainloop();}, 2000);
    }
}

function nFormatter(num) {
    isNegative = false
    if (num < 0) {isNegative = true}
    num = Math.abs(num)
    if (num >= 1000000000) {
        formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    } else if (num >= 1000000) {
        formattedNumber = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1000) {
        formattedNumber = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        formattedNumber = num;
    }
    if (isNegative) {formattedNumber = '-' + formattedNumber}
    return formattedNumber;
}

function cooldowntimer(data, doc) {
    if (i_godTimer == true) {
        var _blocktime = (new Date()).getTime();
        var _timer = data;

        godtimer_lastminute = 0;
        var _hours = Math.floor(_timer / 3600);
        if (_hours < 10) {_hours = "0" + _hours}
        var _minutes = Math.floor((_timer % 3600) / 60);
        if (_minutes < 10) {_minutes = "0" + _minutes}
        var _seconds = parseFloat((_timer % 3600) % 60).toFixed(0);
        if (_seconds < 10) {_seconds = "0" + _seconds}

        document.getElementById(doc).innerHTML = _hours + "h : " + _minutes + "m : " + _seconds + "s ";
        god_roundover = false;
    }
}

function fastupdateGodTimer(data, doc) {
    if (i_godTimer == true) {
        var _blocktime = (new Date()).getTime();
        var _timer = data - (_blocktime / 1000);

        if (_timer > 0) {
        godtimer_lastminute = 0;
        var _hours = Math.floor(_timer / 3600);
        if (_hours < 10) {
            _hours = "0" + _hours
        }
        var _minutes = Math.floor((_timer % 3600) / 60);
        if (_minutes < 10) {
            _minutes = "0" + _minutes
        }
        var _seconds = parseFloat((_timer % 3600) % 60).toFixed(0);
        if (_seconds < 10) {
            _seconds = "0" + _seconds
        }


        document.getElementById(doc).innerHTML = _hours + 'h : ' + _minutes + 'm : ' + _seconds + 's ';
            god_roundover = false;
        } else {
            document.getElementById(doc).innerHTML =  ""; 
        }
    }
}

function mainloop() {
    if (tronWeb.defaultAddress['base58'] !== currentAddr) {location.reload();}
    var dataRef = window.location.origin + "?ref=" + tronWeb.defaultAddress['base58']
    document.getElementById('referralURL').textContent = dataRef;
    Decker.getBalance().call().then(result => {
        var amount = ((result.toString()));
        document.getElementById("bal").textContent = (amount / 1e6).toFixed(2);
    });

    Decker.currentWinner().call().then(result => {
        var win = ((result.toString()));
        var curr = tronWeb.address.fromHex(win)
        document.getElementById("winner").textContent = curr;

    });
    Decker.hasClaimedFree(currentAddr).call().then(result => {
        console.log("sellPrice", result);
        var data = ((result.toString()));
         if(data == "true"){
                $('#freedata').hide();
               }
            else{
                 $('#freedata').show();
            }
       
    });

    Decker.getPotCost().call().then(result => {
        console.log("sellPrice", result);
        var getPotCost = ((result.toString()));
        document.getElementById("getPotCost").textContent = getPotCost;

    });

    Decker.lastHatch(currentAddr).call().then(result => {
        console.log("sellPrice", result);
        var lastHatch = ((result.toNumber()));
        var timedata = lastHatch + 86400;
        fastupdateGodTimer(timedata, 'lasthatch');
    });


    Decker.hatchCooldown(currentAddr).call().then(result => {
        console.log("hatchCooldown", result);
        var hatchCooldown = ((result.toNumber()));
         cooldowntimer(hatchCooldown, 'hatchCooldown2');
    });

    Decker.getHatchCooldown(getMyEggs).call().then(result => {
        console.log("hatchCooldown", result);
        var hatchCooldown = ((result.toNumber()));
        if (hatchCooldown == 0) {
            cooldowntimer(hatchCooldown, 'hatchCooldown');
        } else {
            fastupdateGodTimer(hatchCooldown, 'hatchCooldown');
        }
    });

    Decker.potDrainTime().call().then(result => {pottime = ((result.toNumber()));});
    Decker.getFreeEggs().call().then(result => {
        var getFreeEggs = ((result.toNumber()));
        document.getElementById("getFreeEggs").textContent = (getFreeEggs / 86400).toFixed(3);
    });

    Decker.getMyEggs().call().then(result => {
        console.log("sellPrice", result);
        var getMyEggs = ((result.toNumber()));
        document.getElementById("getMyEggs").textContent = getMyEggs;
        document.getElementById("getMyEggs2").textContent = getMyEggs;
        document.getElementById("hatchableShrimp").textContent = (getMyEggs / 86400).toFixed(2);


        Decker.calculateEggSell(getMyEggs).call().then(result => {
            console.log("sellPrice", result);
            var tronAmount = ((result.toNumber()));
            document.getElementById("tronAmount").textContent = (tronAmount / 1e6).toFixed(2);

        });

    });
    Decker.getMyShrimp().call().then(result => {
        console.log("sellPrice", result);
        var getMyShrimp = ((result.toNumber()));
        document.getElementById("getMyShrimp").textContent = getMyShrimp;
        document.getElementById("hour").textContent = getMyShrimp * 3600;

    });

    Decker.lastBidTime().call().then(result => {
        console.log("lastbid", result);
        var data = ((result.toNumber()));
        console.log("data", data);
        //    parseInt("10")
        time = pottime + data;
        var datax = time;

        i_godTimer = true;

        fastupdateGodTimer(datax, 'doc');
    });
}

function load100() {
    Decker.calculateEggBuySimple(100000000).call().then(result => {
        console.log("calculateEggBuySimple", result);
        var calculateEggBuySimple = ((result.toNumber()));
        document.getElementById("calculateEggBuySimple").textContent = calculateEggBuySimple;
        Decker.getHatchCooldown(calculateEggBuySimple).call().then(result => {
            console.log("getHatchCooldown", result);
            var getHatchCooldown = ((result.toNumber()));
            cooldowntimer(getHatchCooldown, 'getHatchCooldown');
        });
    });
}

function claimFreeEggs() {
    Decker.claimFreeEggs().send({}).then(result => {
        $("#exampleModal").modal('hide');
        callback();
        $( "#fomo" ).hide();
        $( "#eggs" ).hide();
        $( "#hatch" ).show();
        $( "#acfomo" ).removeClass('active');
        $( "#achatch" ).addClass('active');
        $( "#aceggs" ).removeClass('active');
    }).catch((err) => {
        console.log(err)
    });
}

function hatchEggs() {
    Decker.hatchEggs('TPNgnC2vLWkfZQE1Wjnvurf2HN3a84MoHK').send({}).then(result => {callback();}).catch((err) => {console.log(err)});
}

function sellEggs() {Decker.sellEggs().send({}).then(result => {callback();}).catch((err) => {console.log(err)});}

function buy() {
    var _trxneeded = (document.getElementById('buyEggs').value);
    var _amt = _trxneeded * 1e6;
    Decker.buyEggs().send({
        callValue: _amt
    }).then(result => {
        callback();
        load100();
    }).catch((err) => {
        console.log(err)
    });
}

function stealPot() {Decker.stealPot().send({}).then(result => {callback();}).catch((err) => {console.log(err)});}

$('#buyEggs').on('keyup input', function() {
    var amt = document.getElementById('buyEggs').value;
    var data = amt * 1e6;
    if (data >= 1) {
        Decker.calculateEggBuySimple(data).call().then(result => {
            var calculateEggBuySimple = ((result.toNumber()));
            document.getElementById("calculateEggBuySimple").textContent = calculateEggBuySimple;
            Decker.getHatchCooldown(calculateEggBuySimple).call().then(result => {
                console.log("getHatchCooldown", result);
                var getHatchCooldown = ((result.toNumber()));
                cooldowntimer(getHatchCooldown, 'getHatchCooldown');
            });
        });
    } else {
        document.getElementById("calculateEggBuySimple").textContent = 0;
    }
});

main();
