Ext.define('HM.view.catalogs.CatalogViewController', {
	extend: 'HM.view.details.DetailsController',
	
	alias: 'controller.catalogview',
	
	privates: {
		
		refreshList: function()
		{
			var refs = this.getRefs();
			refs['catalogFilesList'].getStore().load();
		},
		
		uploadFileCatalog: function()
		{
			/*this.showToast('Загрузить файл(ы)', [
				{
					xtype: 'panel',
					layout: 'fit',
					items: [
						{
							xtype: 'xuploadpanel',
							url: '/upload',
						}
					]
				}
			]);*/
			
		}
	}
});