/*
 * File: app/controller/Components.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AI.controller.Components', {
    extend: 'Ext.app.Controller',

    requires: [
        'AI.util.Component',
        'AI.util.InspectedWindow'
    ],

    init: function(application) {
        this.control({
            '#ComponentTree' : {
                'itemclick'   : this.onSelectComponent
            },
            'button#RefreshComponentTree' : {
                'click' : this.onRefreshComponentsClick
            }
        });
    },

    onRefreshComponentsClick: function(btn) {
        var tree = btn.up('#ComponentTree');

        this.onComponentTreeActivate(tree);
    },

    onComponentTreeActivate: function(tree) {
        var nodes = [],
            root = tree.getRootNode();

        tree.setLoading('Loading components...');
        root.removeAll();

        AI.util.InspectedWindow.eval(
            AI.util.Component.loadComponentTree,
            null,
            function (components, isException) {
                Ext.each(components, function (cmp) {
                    var model = Ext.create('AI.model.Component', cmp);

                    nodes.push(model);
                });

                Ext.each(nodes, function (node) {
                    root.appendChild(node);
                });

                tree.setLoading(false);
            }
        );
    },

    onSelectComponent: function(tree, record, item, index, e, eOpts) {
        var parent = tree.up('components'),
            propsGrid = parent.down('#ComponentProps'),
            methodGrid = parent.down('#ComponentMethods');

        AI.util.InspectedWindow.eval(
            AI.util.InspectedWindow.highlight,
            record.get('cmpId'),
            Ext.emptyFn
        );

        AI.util.InspectedWindow.eval(
            AI.util.Component.getInspectedComponent,
            record.get('cmpId'),
            function(result, isException) {
                if (result) {
                    propsGrid.setSource(result.properties);
                    methodGrid.setSource(result.methods);
                }
                else {
                    propsGrid.setSource({});
                    methodGrid.setSource({});
                }
            }
        );
    }

});