exports.initialize = function () {
    if (!page_params.search_pills_enabled) {
        return;
    }
    const container = $('#search_arrows');
    exports.widget = search_pill.create_pills(container);

    exports.widget.onPillRemove(() => {
        if (exports.widget.items().length === 0) {
            ui_util.change_tab_to('#home');
            narrow.deactivate();
        }
    });

    exports.widget.createPillonPaste(() => false);
};

window.search_pill_widget = exports;
