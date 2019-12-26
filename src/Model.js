define(function () {
    function Model(parent) {
        this.parent = parent;
        this.changeListeners = [];
        this.data = {};
    }
});
