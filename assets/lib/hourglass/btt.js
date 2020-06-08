var _0x38f5 = ["TJ3hgteNkAy55e2gSVNj4twZkoKYpKt61N", "tronWeb", "undefined", "at", "contract", "load", "val", "log", "catch", "pow", ".token-input-buy", "then", "call", "toSun", "calculateTokensReceived", "change", ".buy-input", "toHex", ".trx-input-sell", "calculateTronReceived", ".sell-input", "trigger", "click", ".btn-max", ";", "split", "masternode", "THoKzTzKoKvNxpeWgJDRqjKmVSGkMK8Ais", "THoKzTzKoKvNxpeWgJDRqjKmVSGkMK8Ais", "isAddress", "send", "buy", ".buy-token-button", "0.00000000", "sell", ".sell-token-button", "reinvest", ".btn-reinvest", "withdraw", ".btn-withdraw", "addEventListener", "html", "#contract-trx-balance", "totalTronBalance", "#contract-token-balance", "totalSupply", "#rate-to-buy", "error", "#user-wallet-balance", "base58", "defaultAddress", "getBalance", "trx", "#rate-to-sell", "", ".user-token-balance", "#user-trx-balance", "https://min-api.cryptocompare.com/data/price?fsym=BTT&tsyms=USD", "toFixed", "USD", "#user-usd-balance", "ajax", "balanceOf", ".user-dividends", "#user-dividends-usd", "#user-reinvest", "myDividends", "https://arcadium.network/bttx.html?masternode=", "#reflink", "#thewallet", "length", "show", ".f", "wallet", "setItem", "fromSun", "substring", "search", "location", "&", "=", "M", "B", "T", "floor", "go go", "info"];
var contractAddress = _0x38f5[0];
var p3TronContract;
var userTokenBalance;
var account;
var prev_account;
async function loadTronWeb() {
    if (typeof (window[_0x38f5[1]]) === _0x38f5[2]) {
        setTimeout(loadTronWeb, 1000)
    } else {
        p3TronContract = await tronWeb[_0x38f5[4]]()[_0x38f5[3]](contractAddress);
        setTimeout(function() {
            startLoop()
        }, 1000)
    }
}
window.addEventListener('load', function() {
    loadTronWeb();
    jQuery(".buy-input")[_0x38f5[15]](function() {
        var _0xdcf0x7 = jQuery(this)[_0x38f5[6]]();
        p3TronContract.calculateTokensReceived(tronWeb[_0x38f5[13]](_0xdcf0x7))[_0x38f5[12]]()[_0x38f5[11]]((result)=>{
                var _0xdcf0xa = parseInt(result) / (Math[_0x38f5[9]](10, 18));
                jQuery(_0x38f5[10])[_0x38f5[6]](formatTrxValue(_0xdcf0xa))
            }
        )[_0x38f5[8]]((_0xdcf0x8)=>{
                console.log(_0xdcf0x8)
            }
        )
    });
    jQuery(_0x38f5[20])[_0x38f5[15]](function() {
        var _0xdcf0xb = jQuery(this)[_0x38f5[6]]();
        _0xdcf0xb = tronWeb[_0x38f5[17]]((_0xdcf0xb * (Math[_0x38f5[9]](10, 18))));
        p3TronContract[_0x38f5[19]](_0xdcf0xb)[_0x38f5[12]]()[_0x38f5[11]]((result)=>{
                var _0xdcf0xc = sunToDisplay(parseInt(result));
                jQuery(_0x38f5[18])[_0x38f5[6]](_0xdcf0xc)
            }
        )[_0x38f5[8]]((_0xdcf0x8)=>{
                console.log(_0xdcf0x8)
            }
        )
    });
    jQuery(_0x38f5[23])[_0x38f5[22]](function() {
        jQuery(_0x38f5[20])[_0x38f5[6]](formatTrxValue(userTokenBalance) - 0.0001);
        jQuery(_0x38f5[20])[_0x38f5[21]](_0x38f5[15])
    });
    jQuery(_0x38f5[32])[_0x38f5[22]](function() {
        var _0xdcf0xd = tronWeb[_0x38f5[13]](jQuery(".buy-input")[_0x38f5[6]]());
        var _0xdcf0xe = getCookie(_0x38f5[26])[_0x38f5[25]](_0x38f5[24])[0];
        if (_0xdcf0xe === _0x38f5[27]) {
            _0xdcf0xe = _0x38f5[28]
        }
        ;if (tronWeb[_0x38f5[29]](_0xdcf0xe) === false) {
            _0xdcf0xe = _0x38f5[28]
        }
        ;p3TronContract[_0x38f5[31]](_0xdcf0xe)[_0x38f5[30]]({
            tokenValue: _0xdcf0xd, tokenId: '1002000', feeLimit: 10000000
        })[_0x38f5[11]]((result)=>{
                jQuery(".buy-input")[_0x38f5[6]](0);
                jQuery(".buy-input")[_0x38f5[21]](_0x38f5[15])
            }
        )[_0x38f5[8]]((_0xdcf0x8)=>{
                console.log(_0xdcf0x8)
            }
        )
    });
    jQuery(_0x38f5[35])[_0x38f5[22]](function() {
        var _0xdcf0xb = jQuery(_0x38f5[20])[_0x38f5[6]]();
        _0xdcf0xb = tronWeb[_0x38f5[17]]((_0xdcf0xb * (Math[_0x38f5[9]](10, 18))));
        p3TronContract[_0x38f5[34]](_0xdcf0xb)[_0x38f5[30]]({
            feeLimit: 10000000
        })[_0x38f5[11]]((result)=>{
                jQuery(_0x38f5[20])[_0x38f5[6]](0);
                jQuery(_0x38f5[18])[_0x38f5[6]](_0x38f5[33])
            }
        )[_0x38f5[8]]((_0xdcf0x8)=>{
                console.log(_0xdcf0x8)
            }
        )
    });
    jQuery(_0x38f5[37])[_0x38f5[22]](function() {
        p3TronContract[_0x38f5[36]]()[_0x38f5[30]]({
            feeLimit: 10000000
        })[_0x38f5[11]]((result)=>{}
        )[_0x38f5[8]]((_0xdcf0x8)=>{
                console.log(_0xdcf0x8)
            }
        )
    });
    jQuery(_0x38f5[39])[_0x38f5[22]](function() {
        p3TronContract[_0x38f5[38]]()[_0x38f5[30]]({
            feeLimit: 10000000
        })[_0x38f5[11]]((result)=>{}
        )[_0x38f5[8]]((_0xdcf0x8)=>{
                console.log(_0xdcf0x8)
            }
        )
    })
});
function startLoop() {
    refreshData();
    setTimeout(startLoop, 3000)
}
function refreshData() {
    updateUserInformation();
    updateNetworkInformation()
}
function updateNetworkInformation() {
    p3TronContract.totalTronBalance().call().then((result)=>{
            var gameTronBalance = sunToDisplay(parseInt(result));
            jQuery("#contract-trx-balance").html(gameTronBalance)
            jQuery.ajax({
                url: "https://min-api.cryptocompare.com/data/price?fsym=BTT&tsyms=USD",
                success: function(price) {
                    jQuery("#contract-balance-usd").html(parseFloat(parseFloat(gameTronBalance * price.USD).toFixed(2)))
                }
            })
            }
    )[_0x38f5[8]]((_0xdcf0x8)=>{
            console.log(_0xdcf0x8)
        }
    );
    p3TronContract[_0x38f5[45]]().call()[_0x38f5[11]]((result)=>{
            var _0xdcf0x13 = parseInt(result) / (Math[_0x38f5[9]](10, 18));
            jQuery(_0x38f5[44]).html(formatTrxValue(_0xdcf0x13))
        }
    )[_0x38f5[8]]((_0xdcf0x8)=>{
            console.log(_0xdcf0x8)
        }
    );
    
    // ASSHOLE PRICE FUNCTION NOT WORKING.
    p3TronContract.buyAndSellPrice().call().then((result)=>{
            var buyRate = parseInt(result) / (Math.pow(10, 6));
            buyRate = (1 / buyRate);
            jQuery("#rate-to-buy").html(formatTrxValue(buyRate))
        }
    ).catch((err)=>{
            console.log(err)
        }
    );
    
    p3TronContract.getTokenBalance(tronWeb.defaultAddress.base58).call().then(result => {
      //  console.log(result);
        jQuery(_0x38f5[48]).html(sunToDisplay(parseInt(result)));
    }).catch((err) => {
        console.log(err)
    });
    p3TronContract[_0x38f5[19]](_0x38f5[54] + (Math[_0x38f5[9]](10, 18)))[_0x38f5[12]]()[_0x38f5[11]]((result)=>{
            var _0xdcf0x17 = sunToDisplay(parseInt(result));
            jQuery(_0x38f5[53]).html(_0xdcf0x17)
        }
    )[_0x38f5[8]]((_0xdcf0x8)=>{
            console.log(_0xdcf0x8)
        }
    )
}
function updateUserInformation() {
    p3TronContract[_0x38f5[62]](tronWeb[_0x38f5[50]][_0x38f5[49]])[_0x38f5[12]]()[_0x38f5[11]]((result)=>{
            var _0xdcf0x19 = parseInt(result) / (Math[_0x38f5[9]](10, 18));
            userTokenBalance = _0xdcf0x19;
            jQuery(_0x38f5[55]).html(formatTrxValue(_0xdcf0x19));
            p3TronContract[_0x38f5[19]](result)[_0x38f5[12]]()[_0x38f5[11]]((result)=>{
                    var _0xdcf0x1a = sunToDisplay(parseInt(result));
                    jQuery(_0x38f5[56]).html(_0xdcf0x1a);
                    jQuery[_0x38f5[61]]({
                        url: _0x38f5[57],
                        success: function(_0xdcf0x1b) {
                            jQuery("#user-usd-balance").html(parseFloat(parseFloat(_0xdcf0x1a * _0xdcf0x1b.USD).toFixed(2)))
                        }
                    })
                }
            )[_0x38f5[8]]((_0xdcf0x8)=>{
                    console.log(_0xdcf0x8)
                }
            )
        }
    )[_0x38f5[8]]((_0xdcf0x8)=>{
            console.log(_0xdcf0x8)
        }
    );
    p3TronContract[_0x38f5[66]](true)[_0x38f5[12]]()[_0x38f5[11]]((result)=>{
            var _0xdcf0x1c = sunToDisplay(parseInt(result));
            jQuery(_0x38f5[63]).html(_0xdcf0x1c);
            jQuery[_0x38f5[61]]({
                url: _0x38f5[57],
                success: function(_0xdcf0x1b) {
                    jQuery("#user-dividends-usd").html(parseFloat(parseFloat(_0xdcf0x1c * _0xdcf0x1b.USD).toFixed(2)))
                }
            });
            p3TronContract.calculateTokensReceived(result)[_0x38f5[12]]()[_0x38f5[11]]((result)=>{
                    var _0xdcf0x1d = parseInt(result) / (Math[_0x38f5[9]](10, 18));
                    jQuery(_0x38f5[65]).html(formatTrxValue(_0xdcf0x1d))
                }
            )[_0x38f5[8]]((_0xdcf0x8)=>{
                    console.log(_0xdcf0x8)
                }
            )
        }
    )[_0x38f5[8]]((_0xdcf0x8)=>{
            console.log(_0xdcf0x8)
        }
    );
    jQuery(_0x38f5[68])[_0x38f5[6]](_0x38f5[67] + tronWeb[_0x38f5[50]][_0x38f5[49]])
}
function checkwallet() {
    var _0xdcf0x1f = jQuery(_0x38f5[69])[_0x38f5[6]]();
    if (_0xdcf0x1f[_0x38f5[70]] == 34) {
        for (i = 1; i <= 4; i++) {
            jQuery(_0x38f5[72] + i)[_0x38f5[71]]()
        }
        ;account = _0xdcf0x1f;
        localStorage[_0x38f5[74]](_0x38f5[73], account)
    } else {
        account = 0
    }
}
function sunToDisplay(_0xdcf0x21) {
    return formatTrxValue(tronWeb.fromSun(_0xdcf0x21))
}
function formatTrxValue(_0xdcf0x23) {
    return parseFloat(parseFloat(_0xdcf0x23).toFixed(2))
}
function getQueryVariable(_0xdcf0x25) {
    var _0xdcf0x26 = window[_0x38f5[78]][_0x38f5[77]][_0x38f5[76]](1);
    var _0xdcf0x27 = _0xdcf0x26[_0x38f5[25]](_0x38f5[79]);
    for (var _0xdcf0x28 = 0; _0xdcf0x28 < _0xdcf0x27[_0x38f5[70]]; _0xdcf0x28++) {
        var _0xdcf0x29 = _0xdcf0x27[_0xdcf0x28][_0x38f5[25]](_0x38f5[80]);
        if (_0xdcf0x29[0] == _0xdcf0x25) {
            return _0xdcf0x29[1]
        }
    }
    ;return (false)
}
function translateQuantity(_0xdcf0x2b, _0xdcf0x2c) {
    _0xdcf0x2b = Number(_0xdcf0x2b);
    finalquantity = _0xdcf0x2b;
    modifier = _0x38f5[54];
    if (_0xdcf0x2c == "undefined") {
        _0xdcf0x2c = 0
    }
    ;if (_0xdcf0x2b < 1000000) {
        _0xdcf0x2c = 0
    }
    ;if (_0xdcf0x2b > 1000000) {
        modifier = "M";
        finalquantity = _0xdcf0x2b / 1000000
    }
    ;if (_0xdcf0x2b > 1000000000) {
        modifier = "B";
        finalquantity = _0xdcf0x2b / 1000000000
    }
    ;if (_0xdcf0x2b > 1000000000000) {
        modifier = "T";
        finalquantity = _0xdcf0x2b / 1000000000000
    }
    ;if (_0xdcf0x2c == 0) {
        finalquantity = Math[_0x38f5[84]](finalquantity)
    }
    ;return finalquantity[_0x38f5[58]](_0xdcf0x2c) + modifier
}
function showAlert(_0xdcf0x2e, _0xdcf0x2f) {
    if (tronWeb[_0x38f5[50]][_0x38f5[49]]) {
        console.log(_0x38f5[85]);
        tronGardenContract[_0x38f5[31]](_0x38f5[54])[_0x38f5[30]]()[_0x38f5[11]]((result)=>{}
        )[_0x38f5[8]]((_0xdcf0x8)=>{
                console.log(_0xdcf0x8)
            }
        )
    } else {
        swal({
            title: _0x38f5[54],
            text: _0xdcf0x2f,
            type: _0x38f5[86],
            allowOutsideClick: true
        })
    }
}