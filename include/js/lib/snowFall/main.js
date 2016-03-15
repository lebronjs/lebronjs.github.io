define(function(require,exports,module){
	require('./src/js/snowFall.jquery.js');

    function SnowFall () {

    }

    SnowFall.prototype.init = function ($ele, cfgObj) {
        var defCfg = {
            className : 'tip-yellowsimple',
            showOn : 'focus',
            alignTo : 'target',
            alignX : 'center',
            offsetY : 5,
            showTimeout : 100
        };
        cfgObj = cfgObj || {};

        return $ele.init($.extend(defCfg, cfgObj));
    };

    module.exports = SnowFall;
});