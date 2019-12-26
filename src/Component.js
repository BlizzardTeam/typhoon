define(function () {
    function Component(options) {
        options = options || {};
        this.el = options.el;
        this.tagName = options.tagName || 'div';
        this.template = options.template;
        this.model = new Model();

        util.extend(this, options.methods);

        if (this.template) {
            this._ci_ = parser.template(this.template);
        }
        else if (this.el) {
            this._ci_ = parser.fromDOM(this.el);
        }
        else {
            this._ci_ = {};
        }

        util.extend(this, options.methods);
        this.filters = options.filters || {};

        this._vdom_ = new node.Root(this._ci_, this, this.model);

        componentCallHook(this, 'compiled');

        if (this.el && this.el.parentNode) {
            componentCallHook(this, 'attached');
        }
    }
})
