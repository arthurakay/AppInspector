/*
 * File: app/store/ComponentMethods.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
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

Ext.define('AI.store.ComponentMethods', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.util.Sorter',
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ComponentMethods',
            sorters: {
                property: 'name'
            },
            fields: [
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'value',
                    type: 'auto'
                },
                {
                    defaultValue: null,
                    name: 'isOverride',
                    type: 'boolean',
                    useNull: true
                },
                {
                    defaultValue: null,
                    name: 'isOwn',
                    type: 'boolean',
                    useNull: true
                }
            ]
        }, cfg)]);
    }
});