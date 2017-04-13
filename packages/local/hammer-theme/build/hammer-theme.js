Ext.define("Ext.theme.neptune.Component",{override:"Ext.Component",initComponent:function(){this.callParent();if(this.dock&&this.border===undefined){this.border=false}},privates:{initStyles:function(){var c=this,b=c.hasOwnProperty("border"),a=c.border;if(c.dock){c.border=null}c.callParent(arguments);if(b){c.border=a}else{delete c.border}}}},function(){Ext.namespace("Ext.theme.is").Neptune=true;Ext.theme.name="Neptune"});Ext.define("Ext.theme.triton.Component",{override:"Ext.Component"},function(){Ext.namespace("Ext.theme.is").Triton=true;Ext.theme.name="Triton"});if(Ext.isIE8){Ext.define("Ext.theme.triton.list.TreeItem",{override:"Ext.list.TreeItem",updateFloated:function(b,a){this.callParent([b,a]);this.toolElement.syncRepaint()}})}Ext.define("Ext.theme.neptune.resizer.Splitter",{override:"Ext.resizer.Splitter",size:8});Ext.define("Ext.theme.triton.resizer.Splitter",{override:"Ext.resizer.Splitter",size:10});Ext.define("Ext.theme.neptune.toolbar.Toolbar",{override:"Ext.toolbar.Toolbar",usePlainButtons:false,border:false});Ext.define("Ext.theme.neptune.layout.component.Dock",{override:"Ext.layout.component.Dock",noBorderClassTable:[0,Ext.baseCSSPrefix+"noborder-l",Ext.baseCSSPrefix+"noborder-b",Ext.baseCSSPrefix+"noborder-bl",Ext.baseCSSPrefix+"noborder-r",Ext.baseCSSPrefix+"noborder-rl",Ext.baseCSSPrefix+"noborder-rb",Ext.baseCSSPrefix+"noborder-rbl",Ext.baseCSSPrefix+"noborder-t",Ext.baseCSSPrefix+"noborder-tl",Ext.baseCSSPrefix+"noborder-tb",Ext.baseCSSPrefix+"noborder-tbl",Ext.baseCSSPrefix+"noborder-tr",Ext.baseCSSPrefix+"noborder-trl",Ext.baseCSSPrefix+"noborder-trb",Ext.baseCSSPrefix+"noborder-trbl"],edgeMasks:{top:8,right:4,bottom:2,left:1},handleItemBorders:function(){var y=this,f=0,z=8,A=4,l=2,e=1,a=y.owner,s=a.bodyBorder,n=a.border,j=y.collapsed,p=y.edgeMasks,k=y.noBorderClassTable,x=a.dockedItems.generation,w,d,v,h,r,m,u,o,g,q,t,c;if(y.initializedBorders===x){return}t=[];c=[];d=y.getBorderCollapseTable();k=y.getBorderClassTable?y.getBorderClassTable():k;y.initializedBorders=x;y.collapsed=false;v=y.getDockedItems("visual");y.collapsed=j;for(r=0,m=v.length;r<m;r++){u=v[r];if(u.ignoreBorderManagement){continue}o=u.dock;q=h=0;t.length=0;c.length=0;if(o!=="bottom"){if(f&z){w=u.border}else{w=n;if(w!==false){h+=z}}if(w===false){q+=z}}if(o!=="left"){if(f&A){w=u.border}else{w=n;if(w!==false){h+=A}}if(w===false){q+=A}}if(o!=="top"){if(f&l){w=u.border}else{w=n;if(w!==false){h+=l}}if(w===false){q+=l}}if(o!=="right"){if(f&e){w=u.border}else{w=n;if(w!==false){h+=e}}if(w===false){q+=e}}if((g=u.lastBorderMask)!==q){u.lastBorderMask=q;if(g){c[0]=k[g]}if(q){t[0]=k[q]}}if((g=u.lastBorderCollapse)!==h){u.lastBorderCollapse=h;if(g){c[c.length]=d[g]}if(h){t[t.length]=d[h]}}if(c.length){u.removeCls(c)}if(t.length){u.addCls(t)}f|=p[o]}q=h=0;t.length=0;c.length=0;if(f&z){w=s}else{w=n;if(w!==false){h+=z}}if(w===false){q+=z}if(f&A){w=s}else{w=n;if(w!==false){h+=A}}if(w===false){q+=A}if(f&l){w=s}else{w=n;if(w!==false){h+=l}}if(w===false){q+=l}if(f&e){w=s}else{w=n;if(w!==false){h+=e}}if(w===false){q+=e}if((g=y.lastBodyBorderMask)!==q){y.lastBodyBorderMask=q;if(g){c[0]=k[g]}if(q){t[0]=k[q]}}if((g=y.lastBodyBorderCollapse)!==h){y.lastBodyBorderCollapse=h;if(g){c[c.length]=d[g]}if(h){t[t.length]=d[h]}}if(c.length){a.removeBodyCls(c)}if(t.length){a.addBodyCls(t)}},onRemove:function(d){var c=this,b=d.lastBorderMask,a=d.lastBorderCollapse;if(!d.destroyed&&!d.ignoreBorderManagement){if(b){d.lastBorderMask=0;d.removeCls(c.noBorderClassTable[b])}if(a){d.lastBorderCollapse=0;d.removeCls(c.getBorderCollapseTable()[a])}}c.callParent([d])}});Ext.define("Ext.theme.neptune.panel.Panel",{override:"Ext.panel.Panel",border:false,bodyBorder:false,initBorderProps:Ext.emptyFn,initBodyBorder:function(){if(this.bodyBorder!==true){this.callParent()}}});Ext.define("Ext.theme.neptune.container.ButtonGroup",{override:"Ext.container.ButtonGroup",usePlainButtons:false});if(Ext.isIE8){Ext.define("Ext.theme.triton.form.field.Checkbox",{override:"Ext.form.field.Checkbox",onFocus:function(b){var a;this.callParent([b]);a=this.getFocusClsEl();if(a){a.syncRepaint()}},onBlur:function(b){var a;this.callParent([b]);a=this.getFocusClsEl();if(a){a.syncRepaint()}}})}Ext.define("Ext.theme.neptune.toolbar.Paging",{override:"Ext.toolbar.Paging",defaultButtonUI:"plain-toolbar",inputItemWidth:40});Ext.define("Ext.theme.triton.toolbar.Paging",{override:"Ext.toolbar.Paging",inputItemWidth:50});Ext.define("Ext.theme.neptune.picker.Month",{override:"Ext.picker.Month",measureMaxHeight:36});Ext.define("Ext.theme.triton.picker.Month",{override:"Ext.picker.Month",footerButtonUI:"default-toolbar",calculateMonthMargin:Ext.emptyFn});Ext.define("Ext.theme.triton.picker.Date",{override:"Ext.picker.Date",footerButtonUI:"default-toolbar"});Ext.define("Ext.theme.neptune.form.field.HtmlEditor",{override:"Ext.form.field.HtmlEditor",defaultButtonUI:"plain-toolbar"});Ext.define("Ext.theme.neptune.panel.Table",{override:"Ext.panel.Table",lockableBodyBorder:true,initComponent:function(){var a=this;a.callParent();if(!a.hasOwnProperty("bodyBorder")&&!a.hideHeaders&&(a.lockableBodyBorder||!a.lockable)){a.bodyBorder=true}}});Ext.define("Ext.theme.neptune.grid.RowEditor",{override:"Ext.grid.RowEditor",buttonUI:"default-toolbar"});if(Ext.isIE8){Ext.define("Ext.theme.triton.grid.column.Column",{override:"Ext.grid.column.Column",onTitleMouseOver:function(){var a=this.triggerEl;this.callParent(arguments);if(a){a.syncRepaint()}}})}Ext.define("Ext.theme.neptune.grid.column.RowNumberer",{override:"Ext.grid.column.RowNumberer",width:25});Ext.define("Ext.theme.triton.grid.column.RowNumberer",{override:"Ext.grid.column.RowNumberer",width:32});if(Ext.isIE8){Ext.define("Ext.theme.triton.menu.Item",{override:"Ext.menu.Item",onFocus:function(a){this.callParent([a]);this.repaintIcons()},onFocusLeave:function(a){this.callParent([a]);this.repaintIcons()},privates:{repaintIcons:function(){var c=this.iconEl,b=this.arrowEl,a=this.checkEl;if(c){c.syncRepaint()}if(b){b.syncRepaint()}if(a){a.syncRepaint()}}}})}Ext.define("Ext.theme.neptune.menu.Separator",{override:"Ext.menu.Separator",border:true});Ext.define("Ext.theme.neptune.menu.Menu",{override:"Ext.menu.Menu",showSeparator:false});if(Ext.isIE8){Ext.define("Ext.theme.triton.menu.Menu",{override:"Ext.menu.Menu",afterShow:function(){var e=this,b,d,c,a;e.callParent(arguments);b=e.items.getRange();for(c=0,a=b.length;c<a;c++){d=b[c];if(d&&d.repaintIcons){d.repaintIcons()}}}})}Ext.define("Ext.theme.triton.grid.plugin.RowExpander",{override:"Ext.grid.plugin.RowExpander",headerWidth:32});Ext.define("Ext.theme.triton.grid.selection.SpreadsheetModel",{override:"Ext.grid.selection.SpreadsheetModel",checkboxHeaderWidth:32});Ext.define("Ext.theme.triton.selection.CheckboxModel",{override:"Ext.selection.CheckboxModel",headerWidth:32});Ext.namespace("Ext.theme.is")["hammer-theme"]=true;Ext.theme.name="hammer-theme";