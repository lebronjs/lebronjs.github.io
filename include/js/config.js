seajs.config({
    // 映射,添加版本号
    map: [[/^(.*\.(?:css|js))$/i, '$1?v=2.0.0.0']],
    // 别名配置
    alias: {
        'jquery': 'lib/jq/jquery-2.1.4.min.js',
		'commonFun': 'lib/commonFun/main',
		'snowFall': 'lib/snowFall/src/js/snowFall.jquery',
        'bootstrap': 'lib/bootstrap/src/js/bootstrap.min.js'
    },
	// 预加载项
    preload: ["jquery"],
	// 文件编码
    charset: 'utf-8'
});