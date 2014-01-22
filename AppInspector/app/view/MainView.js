/*
 * File: app/view/MainView.js
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

Ext.define('AI.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'AI.view.About',
        'AI.view.ComponentInspector',
        'AI.view.StoreInspector',
        'AI.view.AppProfiles',
        'AI.view.Events',
        'Ext.button.Button',
        'Ext.tab.Panel',
        'Ext.grid.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 250,
                    bodyStyle: 'background-color: #333;',
                    collapsed: true,
                    collapsible: true,
                    title: 'Menu',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'AboutNav',
                            icon: 'resources/images/home.png',
                            scale: 'large',
                            text: 'About'
                        },
                        {
                            xtype: 'button',
                            itemId: 'ComponentsNav',
                            icon: 'resources/images/connected.png',
                            scale: 'large',
                            text: 'Components'
                        },
                        {
                            xtype: 'button',
                            itemId: 'StoresNav',
                            icon: 'resources/images/database.png',
                            scale: 'large',
                            text: 'Stores'
                        },
                        {
                            xtype: 'button',
                            itemId: 'ProfilesNav',
                            icon: 'resources/images/screen.png',
                            scale: 'large',
                            text: 'Layouts'
                        },
                        {
                            xtype: 'button',
                            itemId: 'EventsNav',
                            icon: 'resources/images/light.png',
                            scale: 'large',
                            text: 'Events'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'ContentPanel',
                    layout: 'card',
                    items: [
                        {
                            xtype: 'mypanel2'
                        },
                        {
                            xtype: 'componentinspector'
                        },
                        {
                            xtype: 'storeinspector'
                        },
                        {
                            xtype: 'appprofiles'
                        },
                        {
                            xtype: 'eventgrid'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});