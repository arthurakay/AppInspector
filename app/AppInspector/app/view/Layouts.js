/*
 * File: app/view/Layouts.js
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

Ext.define('AI.view.Layouts', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.layouts',

    requires: [
        'AI.view.FilterField',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.tab.Tab',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Spacer',
        'Ext.tree.Panel',
        'Ext.toolbar.Fill',
        'Ext.form.field.Text',
        'Ext.tree.View',
        'Ext.tree.Column'
    ],

    itemId: 'LayoutInspector',
    iconCls: 'icn-layouts',
    title: 'Layouts',
    activeTab: 0,
    tabPosition: 'right',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    initialLoad: false,
                    itemId: 'BoxLayouts1',
                    iconCls: 'icn-box',
                    title: 'Box Layouts',
                    store: 'BoxLayouts',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'cmpId',
                            text: 'Component ID',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'xtype',
                            text: 'XType',
                            flex: 1
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'ProfileBoxLayouts',
                                    iconCls: 'icn-refresh',
                                    text: 'Profile'
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.Msg.alert(
                                        AI.util.i18n.getMessage('Box Layouts'),
                                        AI.util.i18n.getMessage('Utility to find nested box layouts inside the application which may contribute to performance issues.')
                                        );

                                    },
                                    text: '?'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'gridpanel',
                    initialLoad: false,
                    itemId: 'Overnested',
                    iconCls: 'icn-overnested',
                    title: 'Overnesting',
                    store: 'Overnested',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'cmpId',
                            text: 'Component ID',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'xtype',
                            text: 'XType',
                            flex: 1
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'ProfileOvernesting',
                                    iconCls: 'icn-refresh',
                                    text: 'Profile'
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.Msg.alert(
                                        AI.util.i18n.getMessage('Overnesting'),
                                        AI.util.i18n.getMessage('Utility to find components which may be overnested inside the application.')
                                        );

                                    },
                                    text: '?'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'treepanel',
                    itemId: 'LayoutRuns',
                    autoScroll: true,
                    iconCls: 'icn-globe',
                    title: 'Layout Runs',
                    store: 'Layouts',
                    animate: false,
                    rootVisible: false,
                    useArrows: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            ui: 'default-toolbar',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'ClearLayouts',
                                    iconCls: 'icn-clear',
                                    text: 'Clear'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'RecordLayouts',
                                    iconCls: 'icn-record',
                                    text: 'Record'
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'StopRecording',
                                    iconCls: 'icn-stop',
                                    text: 'Stop Recording'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'filterfield',
                                    itemId: 'FilterComponentsTree'
                                }
                            ]
                        }
                    ],
                    viewConfig: {

                    },
                    columns: [
                        {
                            xtype: 'treecolumn',
                            dataIndex: 'text',
                            text: 'Component ID',
                            flex: 2
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'xtype',
                            text: 'XType',
                            flex: 1
                        }
                    ]
                }
            ],
            listeners: {
                beforeadd: {
                    fn: me.onLayoutInspectorBeforeAdd,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onLayoutInspectorBeforeAdd: function(container, component, index, eOpts) {
        this.setTitle(AI.util.i18n.getMessage(this.title));

    }

});