/**
 * setting module
 * Created by onlyfu on 2018/05/31.
 */
App.module.extend('setting', function() {
    let self = this;
    /**
     * 初始化，系统加载时会调用
     */
    this.init = function() {
    };

    /**
     * 关于
     */
    this.about = function() {
        let version = Version.current_version;
        self.module.common.module('About YuiAPI', self.view.getView('setting', 'about', {
            version: version
        }), '');
    };
});
